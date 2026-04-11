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

  // ── Van Dorn: Angel of the LORD ─────────────────────────────────────────
  {
    id: 'angel-lord',
    label: 'Angel of the LORD',
    category: 'celestial',
    radius: 19,
    description:
      'The pre-incarnate Christ appearing throughout the Old Testament — not a created angel but YHWH himself in human form. Doug Van Dorn\'s landmark study demonstrates that every major encounter with the "Angel of the LORD" is a Christophany, the Second Person of the Trinity acting in history before the Incarnation.',
  },

  // ── Van Dorn / Enoch / Genesis 6 Conspiracy: Azazel ─────────────────────
  {
    id: 'azazel',
    label: 'Azazel',
    category: 'celestial',
    radius: 17,
    description:
      'Leader of the Watchers in the Book of Enoch. Taught humanity metallurgy, weapons, and forbidden arts. The Leviticus scapegoat ritual is a direct reference — one goat for YHWH, one for Azazel — binding the guilty party in the wilderness until judgment. Gary Wayne\'s Genesis 6 Conspiracy devotes a full chapter to his role.',
  },

  // ── Van Dorn: Giants / Rephaim ───────────────────────────────────────────
  {
    id: 'rephaim',
    label: 'Rephaim',
    category: 'creature',
    radius: 18,
    description:
      'Post-flood giant clans inhabiting Canaan, Bashan, and Moab — the Anakim, Emim, Zamzummim, and Og\'s line. In death, the Rephaim become shades in the underworld. Van Dorn\'s Giants: Sons of the Gods traces their full genealogy from the Watchers through the post-flood world and into the conquest narratives.',
  },
  {
    id: 'og-bashan',
    label: 'Og & Bashan',
    category: 'place',
    radius: 19,
    description:
      'Og was the last of the Rephaim giants — his iron bed measured over 13 feet. Bashan, his kingdom, means "land of the serpent" and sits at 33.33°N adjacent to Mt. Hermon. Van Dorn identifies Bashan as a geographic portal to the underworld and the stage for Christ\'s deliberate confrontation of supernatural powers at Caesarea Philippi.',
  },
  {
    id: 'anakim',
    label: 'Anakim',
    category: 'creature',
    radius: 16,
    description:
      'Sons of Anak — the giant clans that terrified Israel\'s twelve spies ("We were like grasshoppers in our own eyes"). Descended from Nephilim bloodlines. Remnants survived the conquest in Gaza, Gath, and Ashdod — from Gath came Goliath and his brothers. Their eradication was a targeted spiritual military campaign.',
  },

  // ── Van Dorn: Cosmic Mountain ────────────────────────────────────────────
  {
    id: 'cosmic-mountain',
    label: 'Cosmic Mountain',
    category: 'concept',
    radius: 20,
    description:
      'The central motif of Doug Van Dorn\'s Stranger Theology: Eden, Sinai, Zion, Hermon, and Zaphon all function as the same cosmic archetype — a sacred high place where heaven and earth intersect, where divine beings dwell, and where portals between realms open. Every biblical mountain encounter is a cosmic mountain encounter.',
  },

  // ── Van Dorn: Leviathan ──────────────────────────────────────────────────
  {
    id: 'leviathan',
    label: 'Leviathan',
    category: 'creature',
    radius: 17,
    description:
      'The chaos sea dragon of ancient Near Eastern cosmology — Lotan in Ugaritic, the serpent of the deep. Not merely metaphor: Leviathan is a real cosmic adversarial entity, the multi-headed sea monster that YHWH defeated at creation and will finally destroy at the end of the age. Van Dorn traces its role across Job, Isaiah, and Revelation.',
  },

  // ── Van Dorn / Heiser: Psalm 82 ──────────────────────────────────────────
  {
    id: 'psalm82',
    label: 'Psalm 82',
    category: 'concept',
    radius: 20,
    description:
      'The single most important text for the divine council worldview. YHWH stands in the divine assembly and judges the elohim for corrupt governance of the nations. "You are gods, sons of the Most High — but you will die like men." Jesus quotes this psalm in John 10, confirming the divine council reading. The whole story turns on this scene.',
  },

  // ── Genesis 6 Conspiracy: Nimrod ─────────────────────────────────────────
  {
    id: 'nimrod',
    label: 'Nimrod',
    category: 'creature',
    radius: 17,
    description:
      'Post-flood rebel, founder of Babel, and possibly a Nephilim giant or one corrupted by their bloodline. Gary Wayne\'s Genesis 6 Conspiracy dedicates a full chapter to Nimrod as the archetype of all post-flood occult power — builder of the first city-states, founder of mystery religion, prototype of the Antichrist system.',
  },

  // ── Genesis 6 Conspiracy: Mystery Babylon ────────────────────────────────
  {
    id: 'mystery-babylon',
    label: 'Mystery Babylon',
    category: 'concept',
    radius: 18,
    description:
      'The religious, political, and economic system described in Revelation 17–18. Gary Wayne\'s thesis: Mystery Babylon is not a future creation but the ancient Nephilim religion of Babel, preserved unbroken through secret societies, mystery schools, and occult bloodlines into the present age — awaiting its final manifestation.',
  },

  // ── Genesis 6 Conspiracy: Secret Societies ───────────────────────────────
  {
    id: 'secret-societies',
    label: 'Secret Societies',
    category: 'concept',
    radius: 17,
    description:
      'Freemasonry, Rosicrucians, the Illuminati, and other mystery schools as repositories of antediluvian Nephilim gnosis. Wayne argues in Genesis 6 Conspiracy that these orders trace their sacred sciences back to the Watchers\' forbidden knowledge transmitted through Enoch (evil), preserved through Babel, and encoded in their rituals.',
  },

  // ── Genesis 6 Conspiracy: Dragon Bloodlines ──────────────────────────────
  {
    id: 'dragon-bloodlines',
    label: 'Dragon Bloodlines',
    category: 'concept',
    radius: 16,
    description:
      'Royal and elite genealogies secretly traced back to the Nephilim and Rephaim. Section VII of Gary Wayne\'s Genesis 6 Conspiracy: "The House of Dragon" — the claim that ruling families across history have deliberately preserved and intermarried to maintain Nephilim genetic heritage as the basis for their claimed divine right to rule.',
  },

  // ── Genesis 6 Conspiracy: Atlantis ───────────────────────────────────────
  {
    id: 'atlantis',
    label: 'Atlantis',
    category: 'concept',
    radius: 17,
    description:
      'Plato\'s Atlantis as an echo of the antediluvian world — the advanced pre-flood civilization built by the Nephilim and their descendants. Gary Wayne and Tim Alberino both argue that what survived in legend as Atlantis is actually the biblical world before the Flood, scattered through myths as the "seven sages" who brought civilization after the waters receded.',
  },

  // ── Judd Burton: Karahan Tepe ─────────────────────────────────────────────
  {
    id: 'karahan-tepe',
    label: 'Karahan Tepe',
    category: 'place',
    radius: 15,
    description:
      'A megalithic complex in Turkey potentially older than Göbekli Tepe, featuring explicit phallic pillars and serpent iconography far more graphic than its sister site. Judd Burton and other researchers see Karahan Tepe as evidence of the Watchers\' influence on pre-flood ritual culture — a temple to the serpentine powers, not a mere astronomical observatory.',
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

  // ── Angel of the LORD (Van Dorn) ─────────────────────────────────────────
  { source: 'angel-lord',       target: 'elohim'           },
  { source: 'angel-lord',       target: 'sons-of-god'      },
  { source: 'angel-lord',       target: 'cosmic-mountain'  },
  { source: 'angel-lord',       target: 'eden'             },

  // ── Azazel (Enoch / Genesis 6 Conspiracy) ────────────────────────────────
  { source: 'azazel',           target: 'watchers'         },
  { source: 'azazel',           target: 'enoch'            },
  { source: 'azazel',           target: 'abyss'            },

  // ── Rephaim (Van Dorn Giants) ────────────────────────────────────────────
  { source: 'rephaim',          target: 'nephilim'         },
  { source: 'rephaim',          target: 'og-bashan'        },
  { source: 'rephaim',          target: 'abyss'            },
  { source: 'rephaim',          target: 'the-flood'        },

  // ── Og & Bashan (Van Dorn) ───────────────────────────────────────────────
  { source: 'og-bashan',        target: 'mt-hermon'        },
  { source: 'og-bashan',        target: 'cosmic-mountain'  },
  { source: 'og-bashan',        target: 'stargates'        },

  // ── Anakim (Van Dorn Giants) ─────────────────────────────────────────────
  { source: 'anakim',           target: 'nephilim'         },
  { source: 'anakim',           target: 'rephaim'          },
  { source: 'anakim',           target: 'cosmic-geo'       },

  // ── Nimrod (Genesis 6 Conspiracy) ───────────────────────────────────────
  { source: 'nimrod',           target: 'babel'            },
  { source: 'nimrod',           target: 'mystery-babylon'  },
  { source: 'nimrod',           target: 'secret-societies' },
  { source: 'nimrod',           target: 'atlantis'         },

  // ── Leviathan (Van Dorn) ─────────────────────────────────────────────────
  { source: 'leviathan',        target: 'adversary'        },
  { source: 'leviathan',        target: 'abyss'            },
  { source: 'leviathan',        target: 'cosmic-mountain'  },

  // ── Karahan Tepe (Burton) ────────────────────────────────────────────────
  { source: 'karahan-tepe',     target: 'gobekli'          },
  { source: 'karahan-tepe',     target: 'watchers'         },
  { source: 'karahan-tepe',     target: 'cosmic-mountain'  },

  // ── Psalm 82 (Van Dorn / Heiser) ─────────────────────────────────────────
  { source: 'psalm82',          target: 'elohim'           },
  { source: 'psalm82',          target: 'sons-of-god'      },
  { source: 'psalm82',          target: 'cosmic-geo'       },

  // ── Cosmic Mountain (Van Dorn Stranger Theology) ─────────────────────────
  { source: 'cosmic-mountain',  target: 'eden'             },
  { source: 'cosmic-mountain',  target: 'mt-hermon'        },
  { source: 'cosmic-mountain',  target: 'stargates'        },
  { source: 'cosmic-mountain',  target: 'babel'            },

  // ── Mystery Babylon (Genesis 6 Conspiracy) ───────────────────────────────
  { source: 'mystery-babylon',  target: 'dragon-bloodlines'},
  { source: 'mystery-babylon',  target: 'transhumanism'    },

  // ── Secret Societies (Genesis 6 Conspiracy) ──────────────────────────────
  { source: 'secret-societies', target: 'dragon-bloodlines'},
  { source: 'secret-societies', target: 'transhumanism'    },

  // ── Dragon Bloodlines (Genesis 6 Conspiracy) ─────────────────────────────
  { source: 'dragon-bloodlines',target: 'nephilim'         },
  { source: 'dragon-bloodlines',target: 'rephaim'          },

  // ── Atlantis (Genesis 6 Conspiracy / antediluvian) ───────────────────────
  { source: 'atlantis',         target: 'the-flood'        },
  { source: 'atlantis',         target: 'nephilim'         },
  { source: 'atlantis',         target: 'gobekli'          },
];
