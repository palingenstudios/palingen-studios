export type NodeCategory = 'celestial' | 'creature' | 'place' | 'concept' | 'palingen';

export interface CosmicNode {
  id: string;
  label: string;
  category: NodeCategory;
  description: string;
  radius: number;
}

export interface CosmicLink {
  source: string;
  target: string;
}

export const NODES: CosmicNode[] = [
  // ── Palingen ────────────────────────────────────────────────────────
  {
    id: 'palingen',
    label: 'Palingen Studios',
    category: 'palingen',
    radius: 32,
    description:
      'Art & exhibit studio at the intersection of the seen and unseen — creating interactive experiences that illuminate divine council cosmology, ancient mysteries, and the war behind the world.',
  },
  {
    id: 'about',
    label: 'About',
    category: 'palingen',
    radius: 14,
    description:
      'Palingen Studios is a family-run creative studio producing interactive art, exhibits, and digital experiences rooted in biblical cosmology and supernatural inquiry. We take the text seriously.',
  },
  {
    id: 'contact',
    label: 'Commission',
    category: 'palingen',
    radius: 14,
    description:
      'Interested in a custom piece, exhibit installation, or immersive digital experience? We work with churches, researchers, and private collectors. Reach out to begin the conversation.',
  },

  // ── Celestial ────────────────────────────────────────────────────────
  {
    id: 'watchers',
    label: 'The Watchers',
    category: 'celestial',
    radius: 21,
    description:
      'Benei Elohim assigned to watch over humanity who transgressed their domain. They descended onto Mt. Hermon, took human wives, and produced the Nephilim bloodline — corrupting the ancient world and triggering the Flood.',
  },
  {
    id: 'elohim',
    label: 'Divine Council',
    category: 'celestial',
    radius: 23,
    description:
      'The assembly of divine beings throughout the Hebrew Bible — sons of God who rule the nations, report to YHWH, and war across cosmic geography. Recovered for mainstream scholarship through the work of Dr. Michael Heiser.',
  },
  {
    id: 'sons-of-god',
    label: 'Sons of God',
    category: 'celestial',
    radius: 18,
    description:
      'Benei ha-Elohim — divine sons described in Genesis 6, Job 1–2, and Deuteronomy 32. Some faithful members of the council, some rebellious. The backbone of the divine council worldview.',
  },
  {
    id: 'seraphim',
    label: 'Seraphim',
    category: 'celestial',
    radius: 16,
    description:
      'The burning ones. Serpentine divine beings surrounding the throne of YHWH. Their form bridges ancient Near Eastern iconography and the fiery serpents of Sinai — not winged humans, but something far older.',
  },
  {
    id: 'adversary',
    label: 'The Adversary',
    category: 'celestial',
    radius: 19,
    description:
      'The nachash — the shining one of Eden. Not a fallen human but a divine being of the council who rebelled. His story spans from the garden to the Abyss to the final judgment at the end of the age.',
  },

  // ── Creatures / Entities ─────────────────────────────────────────────
  {
    id: 'nephilim',
    label: 'Nephilim',
    category: 'creature',
    radius: 21,
    description:
      'Offspring of the Watchers and human women — the giants of renown. Their disembodied spirits may be the origin of what the Bible calls demons. Possible remnant bloodlines persist into the post-flood world.',
  },
  {
    id: 'bigfoot',
    label: 'Bigfoot',
    category: 'creature',
    radius: 17,
    description:
      'Sasquatch encounters cluster around portals, orb phenomena, and UAP activity. Some researchers link them to Nephilim bloodlines or interdimensional entities. The gateway drug into the deeper rabbit hole.',
  },
  {
    id: 'dogman',
    label: 'Dogman',
    category: 'creature',
    radius: 16,
    description:
      'Bipedal canine entities reported across North America. Unlike Bigfoot, encounters are universally terrifying and often include apparent intelligence and malice. Physical, spiritual, or something else — contested.',
  },
  {
    id: 'mothman',
    label: 'Mothman',
    category: 'creature',
    radius: 16,
    description:
      'Winged entity with glowing red eyes, appearing before disasters. Possibly a divine messenger, possibly something darker. The Point Pleasant events of 1966–67 remain unexplained by any naturalistic framework.',
  },
  {
    id: 'uap',
    label: 'UAPs & Orbs',
    category: 'creature',
    radius: 19,
    description:
      'Non-human craft and luminous orbs confirmed by Congress and the Pentagon. Whether interdimensional, demonic, or non-human biological — they interact with military assets, sacred sites, and ley lines globally.',
  },
  {
    id: 'black-eyed',
    label: 'Black-Eyed Kids',
    category: 'creature',
    radius: 15,
    description:
      'Humanoid entities appearing as children with entirely black eyes who demand entry. Encounters produce dread and physiological responses unlike any natural stimulus. Their origin and agenda remain unknown.',
  },

  // ── Sacred Sites ─────────────────────────────────────────────────────
  {
    id: 'mt-hermon',
    label: 'Mt. Hermon',
    category: 'place',
    radius: 19,
    description:
      'Descent point of the Watchers in the Book of Enoch. Located at 33.33°N latitude, at the triple border of Lebanon, Syria, and Israel. Site of ancient worship, ongoing supernatural reports, and modern geopolitical conflict.',
  },
  {
    id: 'gobekli',
    label: 'Göbekli Tepe',
    category: 'place',
    radius: 17,
    description:
      'A 12,000-year-old megalithic ritual complex in Turkey, built before agriculture and before civilization as understood. Its construction implies advanced organization from an unknown pre-flood culture — possibly tied to the Watchers.',
  },
  {
    id: 'babel',
    label: 'Tower of Babel',
    category: 'place',
    radius: 16,
    description:
      'Not merely a tall building — an attempt to pierce the divine realm. The Babel event fractured humanity and distributed nations under the authority of divine sons. Deuteronomy 32:8 encodes the entire geopolitical aftermath.',
  },
  {
    id: 'eden',
    label: 'Garden of Eden',
    category: 'place',
    radius: 17,
    description:
      'The cosmic mountain. The dwelling place of God on earth — prototype temple, sacred garden, and the site of the first rebellion. Humanity was exiled. The great arc of Scripture is about being invited back.',
  },
  {
    id: 'abyss',
    label: 'The Abyss',
    category: 'place',
    radius: 16,
    description:
      'Tartarus. The prison of the rebellious Watchers referenced in 2 Peter and Jude. Not metaphorical — a dimensional holding place in the structure of the cosmos, distinct from Sheol and from Hell as final judgment.',
  },

  // ── Concepts / Doctrines ──────────────────────────────────────────────
  {
    id: 'enoch',
    label: 'Book of Enoch',
    category: 'concept',
    radius: 20,
    description:
      'Preserved in the Ethiopian canon. Cited by Jude and referenced by Peter. It recounts the Watchers, the Nephilim, and the cosmic war from before the Flood. One of the most consequential texts for this entire worldview.',
  },
  {
    id: 'genesis6',
    label: 'Genesis 6',
    category: 'concept',
    radius: 19,
    description:
      'The Sethite interpretation misses the point. Benei Elohim are divine beings, not pious men. Their union with human women produced the Nephilim. This event is the hinge point of all biblical supernatural history.',
  },
  {
    id: 'stargates',
    label: 'Portals & Stargates',
    category: 'concept',
    radius: 21,
    description:
      'Dimensional thresholds described in ancient texts and modern encounter reports. Mt. Hermon, CERN, and megalithic sites may function as portals between cosmic layers. Enoch walked through one. So did Jacob at Bethel.',
  },
  {
    id: 'cosmic-geo',
    label: 'Cosmic Geography',
    category: 'concept',
    radius: 20,
    description:
      'The biblical world is organized by divine territories, sacred mountains, and cosmic boundaries. Each nation was allotted to a divine being. Geography is spiritual warfare made visible. Place is never neutral.',
  },
  {
    id: 'transhumanism',
    label: 'Transhumanism',
    category: 'concept',
    radius: 17,
    description:
      'The modern attempt to alter the human genome, merge with machines, and transcend biological limits. Many scholars see this as a recapitulation of Genesis 6 — the corruption of the image of God in a new age.',
  },
  {
    id: 'the-flood',
    label: 'The Flood',
    category: 'concept',
    radius: 17,
    description:
      'A divine reset targeting the corruption of the human genome and the Nephilim bloodlines. Over 300 flood narratives across unconnected cultures confirm a global cataclysmic event. Noah was "perfect in his generations."',
  },
];

export const LINKS: CosmicLink[] = [
  { source: 'watchers',    target: 'mt-hermon'   },
  { source: 'watchers',    target: 'sons-of-god'  },
  { source: 'watchers',    target: 'enoch'        },
  { source: 'watchers',    target: 'gobekli'      },
  { source: 'watchers',    target: 'nephilim'     },
  { source: 'sons-of-god', target: 'genesis6'     },
  { source: 'sons-of-god', target: 'elohim'       },
  { source: 'sons-of-god', target: 'enoch'        },
  { source: 'elohim',      target: 'cosmic-geo'   },
  { source: 'elohim',      target: 'adversary'    },
  { source: 'elohim',      target: 'stargates'    },
  { source: 'elohim',      target: 'babel'        },
  { source: 'seraphim',    target: 'elohim'       },
  { source: 'seraphim',    target: 'abyss'        },
  { source: 'seraphim',    target: 'enoch'        },
  { source: 'adversary',   target: 'eden'         },
  { source: 'adversary',   target: 'abyss'        },
  { source: 'nephilim',    target: 'the-flood'    },
  { source: 'nephilim',    target: 'transhumanism'},
  { source: 'nephilim',    target: 'bigfoot'      },
  { source: 'bigfoot',     target: 'uap'          },
  { source: 'bigfoot',     target: 'cosmic-geo'   },
  { source: 'dogman',      target: 'bigfoot'      },
  { source: 'mothman',     target: 'uap'          },
  { source: 'mothman',     target: 'stargates'    },
  { source: 'uap',         target: 'stargates'    },
  { source: 'uap',         target: 'transhumanism'},
  { source: 'black-eyed',  target: 'uap'          },
  { source: 'stargates',   target: 'mt-hermon'    },
  { source: 'stargates',   target: 'gobekli'      },
  { source: 'eden',        target: 'cosmic-geo'   },
  { source: 'abyss',       target: 'genesis6'     },
  { source: 'babel',       target: 'cosmic-geo'   },
  { source: 'the-flood',   target: 'genesis6'     },
  { source: 'the-flood',   target: 'babel'        },
  { source: 'mt-hermon',   target: 'eden'         },
  { source: 'gobekli',     target: 'cosmic-geo'   },
  { source: 'palingen',    target: 'elohim'       },
  { source: 'palingen',    target: 'cosmic-geo'   },
  { source: 'palingen',    target: 'watchers'     },
  { source: 'about',       target: 'palingen'     },
  { source: 'contact',     target: 'palingen'     },
];
