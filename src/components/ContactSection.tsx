import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const safeSubject = subject?.trim() ? subject.trim() : 'Website inquiry';
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ];

    const mailto = `mailto:palingenstudios@gmail.com?subject=${encodeURIComponent(
      safeSubject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(10,20,12,0.8)',
    border: '1px solid rgba(78,205,196,0.2)',
    borderRadius: '2px',
    padding: '0.85rem 1rem',
    color: '#e8e0d0',
    fontFamily: '"Lato", sans-serif',
    fontSize: '0.88rem',
    outline: 'none',
    transition: 'border-color 0.25s',
  };

  return (
    <section
      id="contact"
      style={{
        background: '#000000',
        padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(78,205,196,0.08)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              fontFamily: '"Lato", sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#4ecdc4',
              marginBottom: '0.75rem',
              opacity: 0.85,
            }}
          >
            Reach Out
          </p>
          <h2
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: '#e8e0d0',
              letterSpacing: '0.06em',
              marginBottom: '0.8rem',
            }}
          >
            Connect With Us
          </h2>
          <p
            style={{
              fontFamily: '"Lato", sans-serif',
              fontSize: '0.9rem',
              color: '#90b898',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              fontWeight: 300,
            }}
          >
            Interested in commissioning a piece, booking an exhibit,
            or just want to talk about the liminal? We'd love to hear from you.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              border: '1px solid rgba(78,205,196,0.3)',
              borderRadius: '4px',
              padding: '2rem',
              color: '#4ecdc4',
              fontFamily: '"Cinzel", serif',
              fontSize: '1rem',
              letterSpacing: '0.08em',
            }}
          >
            ✦ Message received. We'll be in touch. ✦
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Name"
                required
                style={inputStyle}
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = 'rgba(78,205,196,0.5)')}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = 'rgba(78,205,196,0.2)')}
              />
              <input
                type="email"
                placeholder="Email"
                required
                style={inputStyle}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = 'rgba(78,205,196,0.5)')}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = 'rgba(78,205,196,0.2)')}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              style={inputStyle}
              value={subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = 'rgba(78,205,196,0.5)')}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = 'rgba(78,205,196,0.2)')}
            />
            <textarea
              placeholder="Your message..."
              rows={5}
              required
              style={{ ...inputStyle, resize: 'vertical' }}
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => (e.target.style.borderColor = 'rgba(78,205,196,0.5)')}
              onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => (e.target.style.borderColor = 'rgba(78,205,196,0.2)')}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, background: '#3dbdb4' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: '#4ecdc4',
                color: '#000',
                border: 'none',
                borderRadius: '2px',
                padding: '0.9rem',
                fontFamily: '"Lato", sans-serif',
                fontSize: '0.8rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: 'center',
          marginTop: 'clamp(3rem, 6vh, 5rem)',
          borderTop: '1px solid rgba(78,205,196,0.08)',
          paddingTop: '2rem',
        }}
      >
        <p
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.9rem',
            color: '#4ecdc4',
            letterSpacing: '0.18em',
            marginBottom: '0.5rem',
          }}
        >
          PALINGEN STUDIOS
        </p>
        <p
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: '0.72rem',
            color: '#507060',
            letterSpacing: '0.12em',
          }}
        >
          © {new Date().getFullYear()} Palingen Studios · Art at the Threshold
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
