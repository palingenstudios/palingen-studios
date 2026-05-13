import React, { useState, useCallback } from 'react';
import { CosmicNode, NodeCategory, NodeResource, NODES } from '../data/cosmicNodes';

// ── Helpers ──────────────────────────────────────────────────────────────────
const SERIF = "'Palatino Linotype','Book Antiqua',Georgia,serif";
const GOLD  = 'rgba(216,200,144,0.9)';
const CATS: NodeCategory[] = ['celestial', 'creature', 'place', 'concept', 'palingen'];

function storageGet(): CosmicNode[] {
  try {
    const raw = localStorage.getItem('palingen_nodes_draft');
    if (raw) return JSON.parse(raw) as CosmicNode[];
  } catch { /* ignore */ }
  return [...NODES];
}

function storageSave(nodes: CosmicNode[]): void {
  localStorage.setItem('palingen_nodes_draft', JSON.stringify(nodes));
}

function btn(bg: string, extra?: React.CSSProperties): React.CSSProperties {
  return {
    background:    bg,
    border:        '1px solid rgba(216,200,144,0.22)',
    color:         GOLD,
    fontFamily:    SERIF,
    fontSize:      12,
    padding:       '6px 14px',
    borderRadius:  4,
    cursor:        'pointer',
    ...extra,
  };
}

const BLANK: CosmicNode = {
  id: '', label: '', category: 'concept', scripture: '', description: '', radius: 16,
};

// ── Sub-components ───────────────────────────────────────────────────────────

interface NodeListProps {
  nodes: CosmicNode[];
  search: string;
  onSearch: (s: string) => void;
  onEdit: (n: CosmicNode) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}

const NodeList: React.FC<NodeListProps> = ({ nodes, search, onSearch, onEdit, onDelete, onAdd }) => (
  <div>
    <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
      <input
        value={search}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search nodes…"
        style={{
          flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(216,200,144,0.2)',
          color: GOLD, fontFamily: SERIF, fontSize: 13, padding: '6px 10px', borderRadius: 4,
        }}
      />
      <button onClick={onAdd} style={btn('rgba(201,162,39,0.18)')}>+ Add Node</button>
    </div>
    <div style={{ fontSize: 11, color: 'rgba(180,160,100,0.5)', marginBottom: 10 }}>
      {nodes.length} nodes
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {nodes.map(n => (
        <div key={n.id} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '8px 12px', background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(216,200,144,0.08)', borderRadius: 4,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0, background: catColor(n.category) }} />
          <span style={{ flex: 1, fontFamily: SERIF, fontSize: 13, color: GOLD }}>{n.label}</span>
          <span style={{ fontSize: 10, color: 'rgba(180,160,100,0.45)', width: 80 }}>{n.id}</span>
          <span style={{ fontSize: 10, color: 'rgba(180,160,100,0.4)', width: 48 }}>
            {n.depth != null ? `d${n.depth}` : 'root'}
          </span>
          <button onClick={() => onEdit(n)} style={btn('rgba(255,255,255,0.06)', { fontSize: 11, padding: '3px 10px' })}>Edit</button>
          <button onClick={() => onDelete(n.id)} style={btn('rgba(191,59,48,0.18)', { fontSize: 11, padding: '3px 10px' })}>Del</button>
        </div>
      ))}
    </div>
  </div>
);

function catColor(cat: NodeCategory): string {
  const m: Record<NodeCategory, string> = {
    celestial: '#c9a227', creature: '#bf3b30', place: '#22a882', concept: '#7a56a8', palingen: '#d8c890',
  };
  return m[cat] ?? '#888';
}

// ── Edit form ────────────────────────────────────────────────────────────────

interface EditFormProps {
  node: CosmicNode;
  allNodes: CosmicNode[];
  isNew: boolean;
  onSave: (n: CosmicNode) => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ node, allNodes, isNew, onSave, onCancel }) => {
  const [form, setForm] = useState<CosmicNode>({ ...node });
  const [resources, setResources] = useState<NodeResource[]>(node.resources ?? []);

  const field = (key: keyof CosmicNode, label: string, type: 'text' | 'textarea' | 'number' = 'text') => (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: 'block', fontSize: 11, color: 'rgba(180,160,100,0.6)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          rows={4}
          value={(form[key] as string) ?? ''}
          onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
          style={inputStyle}
        />
      ) : (
        <input
          type={type}
          value={(form[key] as string | number) ?? ''}
          readOnly={key === 'id' && !isNew}
          onChange={e => setForm(f => ({ ...f, [key]: type === 'number' ? Number(e.target.value) : e.target.value }))}
          style={{ ...inputStyle, opacity: key === 'id' && !isNew ? 0.5 : 1 }}
        />
      )}
    </div>
  );

  const depthOptions = [
    { value: '', label: 'Root (no parent)' },
    { value: '1', label: 'Depth 1 (child)' },
    { value: '2', label: 'Depth 2 (grandchild)' },
  ];

  const parentCandidates = allNodes.filter(n => n.id !== form.id && (
    (form.depth === 2 && n.depth === 1) || (form.depth === 1 && !n.depth)
  ));

  const handleSave = () => {
    const out = { ...form, resources: resources.length ? resources : undefined };
    if (!out.depth) { delete out.depth; delete out.parentId; }
    onSave(out);
  };

  const addResource = () => setResources(r => [...r, { label: '', type: 'book', url: '' }]);
  const removeResource = (i: number) => setResources(r => r.filter((_, idx) => idx !== i));
  const updateResource = (i: number, patch: Partial<NodeResource>) =>
    setResources(r => r.map((x, idx) => idx === i ? { ...x, ...patch } : x));

  return (
    <div style={{ maxWidth: 680 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <span style={{ fontFamily: SERIF, fontSize: 16, color: GOLD }}>{isNew ? 'Add Node' : `Edit: ${form.label}`}</span>
        <span style={{ flex: 1 }} />
        <button onClick={handleSave} style={btn('rgba(201,162,39,0.25)')}>Save</button>
        <button onClick={onCancel} style={btn('rgba(255,255,255,0.06)')}>Cancel</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <div>{field('id', 'ID')}</div>
        <div>{field('label', 'Label')}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 24px', marginBottom: 12 }}>
        {/* Category */}
        <div>
          <label style={labelStyle}>Category</label>
          <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as NodeCategory }))} style={inputStyle}>
            {CATS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {/* Depth */}
        <div>
          <label style={labelStyle}>Depth</label>
          <select
            value={form.depth != null ? String(form.depth) : ''}
            onChange={e => {
              const v = e.target.value;
              setForm(f => ({ ...f, depth: v ? Number(v) : undefined, parentId: v ? f.parentId : undefined }));
            }}
            style={inputStyle}
          >
            {depthOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        {/* Radius */}
        <div>{field('radius', 'Radius', 'number')}</div>
      </div>

      {/* Parent ID */}
      {form.depth != null && (
        <div style={{ marginBottom: 12 }}>
          <label style={labelStyle}>Parent Node</label>
          <select value={form.parentId ?? ''} onChange={e => setForm(f => ({ ...f, parentId: e.target.value || undefined }))} style={inputStyle}>
            <option value="">— select parent —</option>
            {parentCandidates.map(n => <option key={n.id} value={n.id}>{n.label} ({n.id})</option>)}
          </select>
        </div>
      )}

      {field('image', 'Image URL (optional)')}
      {field('scripture', 'Scripture', 'textarea')}
      {field('description', 'Description', 'textarea')}

      {/* Resources */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <label style={labelStyle}>Resources</label>
          <button onClick={addResource} style={{ ...btn('rgba(201,162,39,0.12)', { padding: '2px 10px', fontSize: 11 }), marginLeft: 10 }}>+ Add</button>
        </div>
        {resources.map((res, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 90px 1fr 60px auto', gap: 8, marginBottom: 8, alignItems: 'start' }}>
            <input value={res.label} onChange={e => updateResource(i, { label: e.target.value })} placeholder="Label" style={inputStyle} />
            <select value={res.type} onChange={e => updateResource(i, { type: e.target.value as any })} style={inputStyle}>
              {['book','site','video','article'].map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <input value={res.url} onChange={e => updateResource(i, { url: e.target.value })} placeholder="URL" style={inputStyle} />
            <input value={res.author ?? ''} onChange={e => updateResource(i, { author: e.target.value })} placeholder="Author" style={inputStyle} />
            <button onClick={() => removeResource(i)} style={btn('rgba(191,59,48,0.15)', { padding: '4px 8px' })}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(216,200,144,0.18)',
  color: GOLD, fontFamily: SERIF, fontSize: 13, padding: '6px 10px', borderRadius: 4,
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 11, color: 'rgba(180,160,100,0.6)',
  marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em',
};

// ── AI Generate view ─────────────────────────────────────────────────────────

interface AIViewProps {
  apiKey: string;
  onApiKeyChange: (k: string) => void;
  topic: string;
  onTopicChange: (t: string) => void;
  category: NodeCategory;
  onCategoryChange: (c: NodeCategory) => void;
  loading: boolean;
  error: string;
  onGenerate: () => void;
}

const AIView: React.FC<AIViewProps> = ({
  apiKey, onApiKeyChange, topic, onTopicChange,
  category, onCategoryChange, loading, error, onGenerate,
}) => (
  <div style={{ maxWidth: 560 }}>
    <p style={{ fontFamily: SERIF, fontSize: 13, color: 'rgba(180,160,100,0.7)', marginBottom: 20, lineHeight: 1.6 }}>
      Enter a Gemini API key and a topic name. The AI will generate a draft node definition (label, scripture, description, resources) using divine council cosmology context. Review and save the result from the Node List tab.
    </p>

    <div style={{ marginBottom: 12 }}>
      <label style={labelStyle}>Gemini API Key</label>
      <input
        type="password"
        value={apiKey}
        onChange={e => onApiKeyChange(e.target.value)}
        placeholder="AIza…"
        style={inputStyle}
      />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, marginBottom: 16 }}>
      <div>
        <label style={labelStyle}>Topic Name</label>
        <input value={topic} onChange={e => onTopicChange(e.target.value)} placeholder="e.g. Molech" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Category</label>
        <select value={category} onChange={e => onCategoryChange(e.target.value as NodeCategory)} style={inputStyle}>
          {CATS.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>

    <button
      onClick={onGenerate}
      disabled={!apiKey || !topic || loading}
      style={btn(loading ? 'rgba(180,160,100,0.08)' : 'rgba(201,162,39,0.22)', { opacity: (!apiKey || !topic) ? 0.4 : 1, fontSize: 13 })}
    >
      {loading ? 'Generating…' : 'Generate with AI →'}
    </button>

    {error && (
      <p style={{ marginTop: 14, fontFamily: SERIF, fontSize: 12, color: '#e05040', lineHeight: 1.5 }}>
        Error: {error}
      </p>
    )}
  </div>
);

// ── Main AdminPanel ───────────────────────────────────────────────────────────

interface AdminPanelProps {
  onClose: () => void;
}

type Tab = 'list' | 'ai';

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [nodes, setNodes] = useState<CosmicNode[]>(() => storageGet());
  const [tab, setTab]     = useState<Tab>('list');
  const [search, setSearch] = useState('');
  const [editNode, setEditNode] = useState<CosmicNode | null>(null);
  const [isNew, setIsNew]   = useState(false);

  const [apiKey,      setApiKey]      = useState(() => localStorage.getItem('palingen_gemini_key') ?? '');
  const [aiTopic,     setAiTopic]     = useState('');
  const [aiCategory,  setAiCategory]  = useState<NodeCategory>('concept');
  const [aiLoading,   setAiLoading]   = useState(false);
  const [aiError,     setAiError]     = useState('');

  const filtered = nodes.filter(n =>
    n.label.toLowerCase().includes(search.toLowerCase()) ||
    n.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = useCallback((updated: CosmicNode) => {
    setNodes(prev => {
      const next = isNew
        ? [...prev, updated]
        : prev.map(n => n.id === updated.id ? updated : n);
      storageSave(next);
      return next;
    });
    setEditNode(null);
    setIsNew(false);
  }, [isNew]);

  const handleDelete = useCallback((id: string) => {
    if (!window.confirm(`Delete node "${id}"?`)) return;
    setNodes(prev => { const next = prev.filter(n => n.id !== id); storageSave(next); return next; });
  }, []);

  const handleReset = () => {
    if (!window.confirm('Reset to default published nodes? Your draft will be cleared.')) return;
    localStorage.removeItem('palingen_nodes_draft');
    setNodes([...NODES]);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(nodes, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'palingen_nodes_export.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleGenerate = async () => {
    if (!apiKey || !aiTopic) return;
    localStorage.setItem('palingen_gemini_key', apiKey);
    setAiLoading(true);
    setAiError('');
    try {
      // Dynamic import so the bundle only loads the SDK when the admin is used
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const prompt = `You are a content generator for an interactive exhibit about divine council cosmology and biblical supernatural inquiry.

Generate a JSON object for a knowledge-graph node about: "${aiTopic}" (category: ${aiCategory}).

Return ONLY valid JSON with these fields:
- label: short display name (string)
- scripture: one key verse, format "Book chapter:verse — quote" (string)
- description: 2-4 scholarly sentences citing specific authors (Heiser, Van Dorn, Wayne, etc.) or primary texts (1 Enoch, DSS, Ugaritic). Treat Scripture literally. (string)
- resources: array of {label, type ("book"|"site"|"video"|"article"), url, author?}

Do not include id, category, radius, depth, or parentId.`;
      const result = await model.generateContent(prompt);
      let text = result.response.text().trim();
      // Strip markdown code fences if present
      text = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
      const parsed = JSON.parse(text);
      const slug = aiTopic.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      setTab('list');
      setIsNew(true);
      setEditNode({
        id:          slug,
        label:       parsed.label  ?? aiTopic,
        category:    aiCategory,
        scripture:   parsed.scripture   ?? '',
        description: parsed.description ?? '',
        radius:      16,
        resources:   parsed.resources   ?? undefined,
      });
    } catch (e: any) {
      setAiError(e.message ?? 'Generation failed. Check your API key.');
    } finally {
      setAiLoading(false);
    }
  };

  const TAB_STYLE = (active: boolean): React.CSSProperties => ({
    background:    active ? 'rgba(216,200,144,0.10)' : 'transparent',
    border:        'none',
    borderBottom:  active ? '2px solid rgba(216,200,144,0.7)' : '2px solid transparent',
    color:         GOLD,
    fontFamily:    SERIF,
    fontSize:      13,
    padding:       '10px 22px',
    cursor:        'pointer',
    letterSpacing: '0.06em',
  });

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#03040e', color: GOLD, fontFamily: SERIF, display: 'flex', flexDirection: 'column', zIndex: 1000 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px', borderBottom: '1px solid rgba(216,200,144,0.12)', flexShrink: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Cosmic Map Admin
        </span>
        <span style={{ flex: 1 }} />
        <button onClick={handleReset}  style={btn('rgba(191,59,48,0.15)')}>Reset to Default</button>
        <button onClick={handleExport} style={btn('rgba(216,200,144,0.12)')}>Export JSON</button>
        <button onClick={onClose}      style={btn('rgba(255,255,255,0.06)')}>✕ Close</button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(216,200,144,0.08)', flexShrink: 0 }}>
        <button style={TAB_STYLE(tab === 'list')} onClick={() => { setTab('list'); setEditNode(null); }}>Node List</button>
        <button style={TAB_STYLE(tab === 'ai')}   onClick={() => setTab('ai')}>AI Generate</button>
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflow: 'auto', padding: 24 }}>
        {tab === 'list' && !editNode && (
          <NodeList
            nodes={filtered}
            search={search}
            onSearch={setSearch}
            onEdit={n => { setEditNode(n); setIsNew(false); }}
            onDelete={handleDelete}
            onAdd={() => { setEditNode({ ...BLANK }); setIsNew(true); }}
          />
        )}
        {tab === 'list' && editNode && (
          <EditForm
            node={editNode}
            allNodes={nodes}
            isNew={isNew}
            onSave={handleSave}
            onCancel={() => { setEditNode(null); setIsNew(false); }}
          />
        )}
        {tab === 'ai' && (
          <AIView
            apiKey={apiKey}        onApiKeyChange={setApiKey}
            topic={aiTopic}        onTopicChange={setAiTopic}
            category={aiCategory}  onCategoryChange={setAiCategory}
            loading={aiLoading}    error={aiError}
            onGenerate={handleGenerate}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
