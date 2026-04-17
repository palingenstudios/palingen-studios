export type NodeCategory = 'celestial' | 'creature' | 'place' | 'concept' | 'palingen';

export type ResourceType = 'book' | 'site' | 'video' | 'article';

export interface NodeResource {
  label: string;
  url: string;
  type: ResourceType;
  author?: string;
}

export interface CosmicNode {
  id: string;
  label: string;
  category: NodeCategory;
  scripture: string;
  description: string;
  radius: number;
  depth?: number;
  parentId?: string;
  image?: string;
  resources?: NodeResource[];
}

export interface CosmicLink {
  source: string;
  target: string;
}

export const NODES: CosmicNode[] = [
  // ── Palingen ────────────────────────────────────────────────────────
  {
    id: 'palingen',
    image: process.env.PUBLIC_URL + '/images/nodes/palingen.png',
    label: 'Palingen Studios',
    category: 'palingen',
    radius: 32,
    scripture: 'Colossians 1:16 — For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities.',
    description:
      'Art and exhibit studio at the intersection of the seen and unseen — creating interactive experiences that illuminate divine council cosmology, ancient mysteries, and the war behind the world. The name "Palingen" draws from palingenesis — rebirth, renewal, restoration. We believe the cosmos is not a closed system, that the text means what it says, and that every corner of creation reflects the conflict and redemption playing out across the unseen realm.',
    resources: [
      { label: "The Unseen Realm", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Reversing Hermon", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "Giants: Sons of the Gods", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20", author: "Douglas Van Dorn" },
    ]
  },
  {
    id: 'about',
    label: 'About',
    category: 'palingen',
    radius: 14,
    scripture: 'Job 38:7 — When the morning stars sang together and all the sons of God shouted for joy?',
    description:
      'Palingen Studios is a family-run creative studio producing interactive art, exhibits, and digital experiences rooted in biblical cosmology and supernatural inquiry. We take the text seriously — not as metaphor, but as a precise account of a cosmos populated by divine beings, contested territories, and a war older than human memory. Our work spans visual art, educational exhibits, and digital interactive experiences.',
  },
  {
    id: 'contact',
    label: 'Commission',
    category: 'palingen',
    radius: 14,
    scripture: 'Isaiah 6:8 — And I heard the voice of the Lord saying, "Whom shall I send, and who will go for us?" Then I said, "Here I am! Send me."',
    description:
      'Interested in a custom piece, exhibit installation, or immersive digital experience? We work with churches, research ministries, and private collectors to create art that takes the supernatural seriously. From interpretive panels on divine council cosmology to full immersive installations, we create work that moves people from spectators to participants in understanding the war behind the world.',
  },

  // ── Celestial ────────────────────────────────────────────────────────
  {
    id: 'watchers',
    image: process.env.PUBLIC_URL + '/images/nodes/watchers.png',
    label: 'The Watchers',
    category: 'celestial',
    radius: 21,
    scripture: 'Genesis 6:2 — The sons of God saw that the daughters of man were attractive. And they took as their wives any they chose.',
    description:
      'Benei Elohim — divine sons assigned to watch over humanity who transgressed their cosmic domain. In 1 Enoch 6, two hundred of them descended onto Mt. Hermon under the leadership of Semyaza and Azazel, swearing a mutual oath so none could be held individually responsible. Their offspring, the Nephilim, corrupted humanity and filled the earth with violence — triggering the Flood as a divine reset. Van Dorn\'s Giants: Sons of the Gods reconstructs the Watcher narrative from Genesis, Enoch, Jude, and 2 Peter, demonstrating this was not mythology but literal supernatural transgression. Jude 6 and 2 Peter 2:4 confirm their imprisonment in Tartarus, awaiting final judgment.',
    resources: [
      { label: "Reversing Hermon", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Giants: Sons of the Gods", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20", author: "Douglas Van Dorn" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "Book of Enoch (R.H. Charles translation)", type: "book", url: "https://www.amazon.com/dp/1585092827?tag=palingen-20" },
      { label: "SkyWatch TV – Watcher series", type: "video", url: "https://www.skywatchtv.com" },
    ]
  },
  {
    id: 'elohim',
    image: process.env.PUBLIC_URL + '/images/nodes/elohim.png',
    label: 'Divine Council',
    category: 'celestial',
    radius: 23,
    scripture: 'Psalm 82:1 — God has taken his place in the divine council; in the midst of the gods he holds judgment.',
    description:
      'The assembly of divine beings throughout the Hebrew Bible — sons of God who govern the nations, appear before YHWH, and war across cosmic geography. Deuteronomy 32:8-9 (Dead Sea Scrolls reading) shows YHWH dividing the nations among the sons of God at Babel, retaining Israel for himself. Psalm 82 shows the council being judged for corrupt governance of those nations. Van Dorn, Heiser, and the broader divine council worldview recover what centuries of Greek philosophical influence removed from Protestant reading: the Bible\'s world is populated by a stratified supernatural hierarchy. The entire story of redemption is simultaneously the story of reclaiming territory from rebellious elohim.',
    resources: [
      { label: "The Unseen Realm", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Supernatural (popular edition)", type: "book", url: "https://www.amazon.com/dp/1683591070?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Dr. Michael Heiser – Divine Council", type: "site", url: "https://drmsh.com/divine-council/" },
      { label: "Naked Bible Podcast", type: "video", url: "https://nakedbiblepodcast.com", author: "Michael Heiser" },
    ]
  },
  {
    id: 'sons-of-god',
    label: 'Sons of God',
    category: 'celestial',
    radius: 18,
    scripture: 'Job 38:7 — When the morning stars sang together and all the sons of God shouted for joy?',
    description:
      'Benei ha-Elohim — divine beings who stood before YHWH from before creation itself. Job 38:7 places them at the moment of creation; Job 1-2 shows them presenting themselves regularly before God. Genesis 6:2 identifies the subset who crossed into human domain and took wives. Deuteronomy 32:8 assigns the nations to them after Babel. Some remained loyal, serving as YHWH\'s council (Psalm 103:20-21); others rebelled at key moments — the Watchers at Mt. Hermon, the territorial administrators who abandoned their post (Psalm 82). The entire biblical drama turns on this supernatural reality that most modern readers have been trained not to see.',
  },
  {
    id: 'seraphim',
    label: 'Seraphim',
    category: 'celestial',
    radius: 16,
    scripture: 'Isaiah 6:2 — Above him stood the seraphim. Each had six wings: with two he covered his face, and with two he covered his feet, and with two he flew.',
    description:
      'The burning ones — serpentine divine beings surrounding the throne of YHWH in Isaiah 6. The Hebrew saraph means both "burning" and "serpent," directly connecting them to the fiery flying serpents of Numbers 21 and Isaiah 14:29. Van Dorn\'s work in their ancient Near Eastern context reveals they are not the chubby-winged Renaissance angels of tradition but something ancient, serpentine, and fearsome — the same class of being as the nachash of Eden, but remaining loyal members of the divine council. Their cry of "Holy, holy, holy" marks the highest register of created worship directed to YHWH.',
  },
  {
    id: 'adversary',
    label: 'The Adversary',
    category: 'celestial',
    radius: 19,
    scripture: 'Ezekiel 28:14-15 — You were an anointed guardian cherub. I placed you; you were on the holy mountain of God... You were blameless in your ways from the day you were created, till unrighteousness was found in you.',
    description:
      'The nachash of Genesis 3 — not a snake but a shining, divine being of the council who chose rebellion. Isaiah 14:12-15 and Ezekiel 28:12-19 describe his original state: anointed guardian on the cosmic mountain, walking among the stones of fire. His fall predates human history. In Job 1-2 he appears as an active member of the divine council with access to YHWH. His campaign against humanity is not random malice but a targeted war against the divine image-bearers who displaced him. Revelation 12:9 identifies him as "that ancient serpent" — linking the nachash of Eden to the dragon of the end. Van Dorn traces this trajectory as the single thread running through all of Scripture\'s supernatural conflict.',
  },

  // ── Creatures / Entities ─────────────────────────────────────────────
  {
    id: 'nephilim',
    image: process.env.PUBLIC_URL + '/images/nodes/nephilim.png',
    label: 'Nephilim',
    category: 'creature',
    radius: 21,
    scripture: 'Genesis 6:4 — The Nephilim were on the earth in those days, and also afterward, when the sons of God came in to the daughters of man and they bore children to them. These were the mighty men who were of old, the men of renown.',
    description:
      'The offspring of the Watchers and human women — physically enormous, supernaturally capable, and inclined toward violence. 1 Enoch 7 records their stature and their consumption of human populations when the food supply could not sustain them. Numbers 13:33 confirms their survival into the post-flood era through the Anakim bloodline. Van Dorn\'s Giants: Sons of the Gods traces their full genealogy across the OT giant clans — Anakim, Rephaim, Emim, Zamzummim, and the Philistine warriors of Gath. 1 Enoch 15:8-12 identifies their disembodied spirits after the Flood as the origin of what the New Testament calls demons: evil spirits that belong neither to heaven nor earth, that wander, oppress, and seek embodiment.',
    resources: [
      { label: "Giants: Sons of the Gods", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20", author: "Douglas Van Dorn" },
      { label: "Genesis 6 Giants", type: "book", url: "https://www.amazon.com/dp/0967984920?tag=palingen-20", author: "Steve Quayle" },
      { label: "Reversing Hermon", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "SteveQuayle.com", type: "site", url: "https://www.stevequayle.com" },
    ]
  },
  {
    id: 'bigfoot',
    label: 'Bigfoot',
    category: 'creature',
    radius: 17,
    scripture: 'Numbers 13:33 — There we saw the Nephilim (the sons of Anak, who come from the Nephilim), and we seemed to ourselves like grasshoppers, and so we seemed to them.',
    description:
      'Sasquatch encounters cluster around portal phenomena, UAP sightings, electromagnetic anomalies, and ancient sacred sites in patterns too consistent to be coincidental. Physical evidence — footprints exceeding eighteen inches, tree structures, infrasound, and genetic hair samples that return anomalous DNA — is documented and unexplained by any known species. Some researchers in the biblical framework connect Bigfoot to surviving Nephilim or Rephaim bloodlines who found refuge in wilderness regions after the conquest and conquest-era exterminations. Others point to their frequent appearance alongside orb phenomena and vanishing as evidence of dimensional crossing. Whatever they are, they are not nothing — and their geographic clustering around mound-builder sites, megalithic markers, and declared portal zones is not random.',
  },
  {
    id: 'dogman',
    label: 'Dogman',
    category: 'creature',
    radius: 16,
    scripture: 'Deuteronomy 32:24 — Wasting hunger, and burning plague, and bitter destruction; and the teeth of beasts I will send against them.',
    description:
      'Bipedal canine entities — typically seven to nine feet tall, with dog or wolf heads on humanoid bodies, amber or self-luminous eyes, and apparent intelligence — reported across North America, the British Isles, and Europe for centuries. Unlike Bigfoot encounters, Dogman reports are almost universally characterized by paralyzing terror and perceived malice. They frequently appear in connection with known portal locations, Native American sacred ground, and areas of persistent UAP activity. The biblical framework places them in the category of territorial entities — something deployed or unleashed rather than simply wandering. Their concentration in areas tied to ancient battle sites and mound-builder culture suggests a connection to whatever spiritual jurisdictions were established in those locations.',
  },
  {
    id: 'mothman',
    label: 'Mothman',
    category: 'creature',
    radius: 16,
    scripture: 'Ezekiel 1:13-14 — In the midst of the living creatures there was something that looked like burning coals of fire... and the living creatures darted to and fro, like the appearance of a flash of lightning.',
    description:
      'A winged entity with glowing red eyes concentrated in Point Pleasant, WV in 1966-67, preceding the Silver Bridge collapse that killed 46 people on December 15, 1967. The cluster of sightings, poltergeist activity, Men in Black encounters, and precognitive experiences was documented by journalist John Keel. Similar winged entities have been reported before the Chernobyl disaster, the I-35W bridge collapse, and at other catastrophe sites globally. The Hebrew mal\'akh — messenger — was sometimes terrifying in appearance; the question is whether what appears before disasters is a warning, a cause, or a territorial marker. The biblical framework accommodates all three possibilities. Whatever manifested over the Ohio River in 1966 has never been adequately explained.',
  },
  {
    id: 'uap',
    label: 'UAPs & Orbs',
    category: 'creature',
    radius: 19,
    scripture: 'Ezekiel 1:4 — As I looked, behold, a stormy wind came out of the north, and a great cloud, with brightness around it, and fire flashing forth continually, and in the midst of the fire, as it were gleaming metal.',
    description:
      'Non-human craft and luminous orb phenomena documented by military pilots and now confirmed by Congress and the Pentagon as real, unexplained, and non-human in origin. Ezekiel 1 may be the most precise ancient description of structured craft behavior ever recorded: wheel-within-wheel omnidirectional movement, living fire, glowing metal, intelligent response. The secular "extraterrestrial" framework assumes a materialist cosmos with biological beings from other star systems — the biblical framework points to interdimensional beings operating across the membrane between cosmic layers. Their documented concentration around nuclear facilities, ancient megalithic sites, and underwater geography fits the portal and territorial framework far better than the astrophysical one. They have always been here. The question is what they are doing.',
    resources: [
      { label: "The Invisible College", type: "book", url: "https://www.amazon.com/dp/1938398270?tag=palingen-20", author: "Jacques Vallee" },
      { label: "Cherubim Chariots", type: "book", url: "https://www.amazon.com/dp/0692421793?tag=palingen-20", author: "Josh Peck" },
      { label: "Messengers of Deception", type: "book", url: "https://www.amazon.com/dp/1938398289?tag=palingen-20", author: "Jacques Vallee" },
      { label: "Pentagon UAP Report (official PDF)", type: "article", url: "https://www.dni.gov/files/ODNI/documents/assessments/Prelimary-Assessment-UAP-20210625.pdf" },
    ]
  },
  {
    id: 'black-eyed',
    label: 'Black-Eyed Kids',
    category: 'creature',
    radius: 15,
    scripture: 'Jude 1:6 — And the angels who did not stay within their own position of authority, but left their proper dwelling, he has kept in eternal chains under gloomy darkness until the judgment of the great day.',
    description:
      'Humanoid entities appearing as children — typically pairs — with entirely black eyes: no iris, no white. They appear at doorways, car windows, and remote locations, requesting entry with an insistence that produces overwhelming, instinctive dread in witnesses. Encounters produce physiological responses — nausea, paralysis, time-loss, subsequent illness — inconsistent with any natural human interaction. The demand for invitation resonates with biblical frameworks around demonic entities requiring permission to cross thresholds. Whether a distinct hybrid class, a demonic manifestation cycling through familiar forms, or entities connected to the disembodied Nephilim spirits of 1 Enoch 15, they represent one of the most consistent and physically documented modern encounter categories. Their appearance is always unwanted. It is never accidental.',
  },

  // ── Sacred Sites ─────────────────────────────────────────────────────
  {
    id: 'mt-hermon',
    image: process.env.PUBLIC_URL + '/images/nodes/mt-hermon.png',
    label: 'Mt. Hermon',
    category: 'place',
    radius: 19,
    scripture: '1 Enoch 6:6 — They descended in the days of Jared onto the peak of Mount Hermon and called it Hermon because they had sworn and bound themselves by mutual imprecations upon it.',
    description:
      'Descent point of the two hundred Watchers per 1 Enoch — at 33.33°N at the triple border of Lebanon, Syria, and Israel, directly adjacent to Bashan. The Transfiguration almost certainly occurred here rather than Tabor: Jesus deliberately bringing Moses and Elijah to the precise mountain where the Watchers swore their oath, declaring his lordship over it. Van Dorn shows Hermon as both the entry point of the Watcher rebellion and the site of its reversal by Christ. Psalm 133:3 uses Hermon\'s dew as a covenantal blessing image. The mountain remains a site of persistent supernatural encounter and geopolitical contest to this day.',
    resources: [
      { label: "Giants: Sons of the Gods", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20", author: "Douglas Van Dorn" },
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
      { label: "Reversing Hermon", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20", author: "Michael S. Heiser" },
    ]
  },
  {
    id: 'gobekli',
    image: process.env.PUBLIC_URL + '/images/nodes/gobekli.png',
    label: 'Göbekli Tepe',
    category: 'place',
    radius: 17,
    scripture: 'Genesis 10:8-9 — Nimrod began to be a mighty man on the earth... He was a mighty hunter before the LORD.',
    description:
      'Massive T-shaped carved pillars in southeastern Turkey near ancient Harran. Secular dating assigns ~11,600 years, but within the young earth timeline (Flood ~5,200 years ago), Göbekli Tepe fits as an early post-flood construction during the dispersal period when the post-flood ice age kept sea levels ~400 feet lower. Judd Burton\'s Decoding Göbekli Tepe identifies it as a Watcher cult site — built by post-Babel peoples who preserved antediluvian Watcher religion and sought to re-establish contact with the imprisoned divine powers. The deliberate burial of the site under tons of fill circa 8,000 BC (secular) matches the Babel-era dispersal on the YEC timeline.',
    resources: [
      { label: "Decoding Gobekli Tepe", type: "book", url: "https://www.amazon.com/dp/B08JDTG9Q5?tag=palingen-20", author: "Judd Burton" },
      { label: "Gobekli Tepe: Genesis of the Gods", type: "book", url: "https://www.amazon.com/dp/159143142X?tag=palingen-20", author: "Andrew Collins" },
      { label: "Ancient Origins – Gobekli Tepe", type: "site", url: "https://www.ancient-origins.net/tag/gobekli-tepe" },
      { label: "America Before", type: "book", url: "https://www.amazon.com/dp/1250132800?tag=palingen-20", author: "Graham Hancock" },
    ]
  },
  {
    id: 'babel',
    image: process.env.PUBLIC_URL + '/images/nodes/babel.png',
    label: 'Tower of Babel',
    category: 'place',
    radius: 16,
    scripture: 'Genesis 11:4 — Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves, lest we be dispersed over the face of the whole earth.',
    description:
      'Not merely ambitious construction — a deliberate attempt to storm the divine realm and re-unify humanity under occult authority. Deuteronomy 32:8-9 (Dead Sea Scrolls) reveals the cosmic aftermath: YHWH distributing the seventy nations among the sons of God as territorial allotments, retaining Israel as his personal inheritance. Van Dorn and Heiser both argue Babel is the pivotal post-flood supernatural event: every OT conflict from Abraham through the conquest has Babel\'s assignment as its cosmic backdrop. The entire Abrahamic mission is YHWH\'s campaign to reclaim what was conceded at Babel — one nation, then all nations.',
    resources: [
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "The Unseen Realm", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Gilbert House Fellowship", type: "video", url: "https://gilberthousefellowship.com" },
    ]
  },
  {
    id: 'eden',
    label: 'Garden of Eden',
    category: 'place',
    radius: 17,
    scripture: 'Ezekiel 28:13-14 — You were in Eden, the garden of God... You were an anointed guardian cherub. I placed you; you were on the holy mountain of God; you walked in the midst of the stones of fire.',
    description:
      'Not merely a pleasant garden but the cosmic mountain — the dwelling of God on earth and prototype of every subsequent temple in Scripture. Ezekiel 28 identifies Eden as the holy mountain where the Adversary once walked as YHWH\'s anointed guardian among the stones of fire. Van Dorn\'s Stranger Theology connects Eden to the entire cosmic mountain motif: the same sacred archetype as Sinai, Zion, Hermon, and Zaphon. Humanity\'s exile was exile from the divine presence and cosmic center. Revelation 21-22 closes with the tree of life restored and the river of Eden running through the New Jerusalem — the garden becomes the city, the cosmic mountain the eternal dwelling.',
  },
  {
    id: 'abyss',
    label: 'The Abyss',
    category: 'place',
    radius: 16,
    scripture: '2 Peter 2:4 — God did not spare angels when they sinned, but cast them into Tartarus and committed them to chains of gloomy darkness to be kept until the judgment.',
    description:
      'Tartarus — the holding place of the imprisoned Watchers, distinct from Sheol (realm of the dead) and Gehenna (final judgment). 2 Peter 2:4 uses the Greek tartaroo — the only NT occurrence — specifying the Watchers\' destination. Jude 6 adds: "kept in eternal chains under gloomy darkness until the judgment of the great day." Revelation 9:1-2 describes the Abyss being unlocked in the end times and its contents released upon the earth. 1 Enoch 10 already recorded the verdict and sentence. The Abyss is not metaphor — it is a dimensional chamber within the cosmic structure, currently populated by bound supernatural entities whose release is one of Revelation\'s key eschatological triggers.',
  },

  // ── Concepts / Doctrines ──────────────────────────────────────────────
  {
    id: 'enoch',
    image: process.env.PUBLIC_URL + '/images/nodes/enoch.png',
    label: 'Book of Enoch',
    category: 'concept',
    radius: 20,
    scripture: 'Jude 1:14-15 — Enoch, the seventh from Adam, prophesied: "Behold, the Lord comes with ten thousands of his holy ones, to execute judgment on all."',
    description:
      'Preserved in the Ethiopian Orthodox canon and confirmed by Dead Sea Scrolls fragments. Cited as authoritative prophecy by Jude 14-15 and referenced by 2 Peter 2:4. 1 Enoch provides the detailed backstory Genesis 6 compresses into four verses: the Watcher conspiracy, the names of their leaders (Semyaza and Azazel), the Nephilim\'s violence, antediluvian civilization\'s corruption, Enoch\'s heavenly journeys through multiple cosmic layers, and the binding of the Watchers pending judgment. Without 1 Enoch, Genesis 6 is a cryptic fragment; with it, the entire supernatural architecture of both Testaments coheres. Van Dorn, Heiser, and Wayne all treat it as an essential interpretive companion to the canonical text.',
    resources: [
      { label: "Book of Enoch (R.H. Charles translation)", type: "book", url: "https://www.amazon.com/dp/1585092827?tag=palingen-20" },
      { label: "Reversing Hermon", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "1 Enoch: A New Translation", type: "book", url: "https://www.amazon.com/dp/0800660749?tag=palingen-20", author: "George W.E. Nickelsburg" },
    ]
  },
  {
    id: 'genesis6',
    image: process.env.PUBLIC_URL + '/images/nodes/genesis6.png',
    label: 'Genesis 6',
    category: 'concept',
    radius: 19,
    scripture: 'Genesis 6:4 — The Nephilim were on the earth in those days, and also afterward, when the sons of God came in to the daughters of man and they bore children to them.',
    description:
      'The four most contested verses in the Hebrew Bible. The Sethite interpretation — "sons of God" as pious men from Seth\'s line — first appeared in Julius Africanus (~220 AD). The original reading: benei ha-elohim are divine beings (Job 1-2, Job 38:7, Psalm 89:6), and Genesis 6:1-4 records literal supernatural transgression. Van Dorn makes the textual case exhaustively in Giants: Sons of the Gods. This reading is confirmed by 2 Peter 2:4, Jude 6, every Second Temple Jewish writer, the Dead Sea Scrolls, and the NT\'s own citation of 1 Enoch. The Flood\'s stated cause — total corruption of humanity — only coheres if the corruption was genetic and supernatural, not merely moral.',
    resources: [
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "Giants: Sons of the Gods", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20", author: "Douglas Van Dorn" },
      { label: "The Unseen Realm", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Genesis6conspiracy.com", type: "site", url: "https://genesis6conspiracy.com" },
    ]
  },
  {
    id: 'stargates',
    image: process.env.PUBLIC_URL + '/images/nodes/stargates.png',
    label: 'Portals & Stargates',
    category: 'concept',
    radius: 21,
    scripture: 'Genesis 28:17 — How awesome is this place! This is none other than the house of God, and this is the gate of heaven.',
    description:
      'Dimensional thresholds where the boundary between cosmic layers becomes permeable. Jacob\'s vision at Bethel is not dream symbolism — it is a vision of actual cosmic architecture: a stairway between heaven and earth with divine beings ascending and descending, prompting Jacob to recognize "the gate of heaven" (sha\'ar ha-shamayim). Enoch traverses multiple gates in his heavenly journeys. Within the young earth framework, megalithic sites like Göbekli Tepe and Karahan Tepe may mark portal locations known from the antediluvian world and reconstructed after the Flood. Modern encounter reports — UAPs, Bigfoot, Dogman, and dimensional entities — cluster with statistical anomaly around these same geographic coordinates. Portal geography is not myth. It is map.',
    resources: [
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
      { label: "SkyWatch TV", type: "site", url: "https://www.skywatchtv.com" },
    ]
  },
  {
    id: 'cosmic-geo',
    image: process.env.PUBLIC_URL + '/images/nodes/cosmic-geo.png',
    label: 'Cosmic Geography',
    category: 'concept',
    radius: 20,
    scripture: 'Deuteronomy 32:8 — When the Most High gave to the nations their inheritance... he fixed the borders of the peoples according to the number of the sons of God.',
    description:
      'The biblical world is not a flat geography of human nations but a spiritually contested map of divine territories, sacred high places, and supernatural jurisdictions. Deuteronomy 32:8-9 (DSS) is the foundational text: at Babel, YHWH distributed the nations among the divine sons, retaining Israel for himself. Daniel 10:13-20 confirms territorial princes over Persia and Greece who resist angelic messengers. Van Dorn\'s Stranger Theology shows Jesus\'s ministry deliberately targeted the strongest geographic holds of the rebel powers: the Decapolis (Bashan), Caesarea Philippi (Hermon/Gates of Hades), and the coastlands of Tyre and Sidon. Geography is never neutral. Every place is someone\'s spiritual territory.',
    resources: [
      { label: "The Sacred Web of Ancient Sites", type: "book", url: "https://www.amazon.com/dp/0500271488?tag=palingen-20", author: "John Michell" },
      { label: "Fingerprints of the Gods", type: "book", url: "https://www.amazon.com/dp/0517153750?tag=palingen-20", author: "Graham Hancock" },
      { label: "Decoding Gobekli Tepe", type: "book", url: "https://www.amazon.com/dp/B08JDTG9Q5?tag=palingen-20", author: "Judd Burton" },
    ]
  },
  {
    id: 'transhumanism',
    image: process.env.PUBLIC_URL + '/images/nodes/transhumanism.png',
    label: 'Transhumanism',
    category: 'concept',
    radius: 17,
    scripture: 'Daniel 2:43 — As you saw the iron mixed with soft clay, so they will mix with one another in marriage, but they will not hold together, just as iron does not mix with clay.',
    description:
      'The 21st-century program to alter the human genome, merge biological consciousness with machines, and transcend biological mortality. Many researchers identify this as a direct recapitulation of Genesis 6 — the corruption of the divine image through technological means rather than Watcher interbreeding. Daniel 2:43\'s "mixing with human seed" may anticipate exactly this. CRISPR gene editing, mRNA technology, neural lace, and synthetic biology advance faster than public discourse tracks. Gary Wayne\'s Genesis 6 Conspiracy connects the transhumanist agenda to the continuation of the mystery religion and its goal of producing a post-human hybrid class to rule with claimed divine authority. The Adversary\'s oldest strategy is corrupting the image of God. The mechanism changes; the goal does not.',
    resources: [
      { label: "Forbidden Gates", type: "book", url: "https://www.amazon.com/dp/0984061452?tag=palingen-20", author: "Tom & Nita Horn" },
      { label: "Pandemonium's Engine", type: "book", url: "https://www.amazon.com/dp/0984061460?tag=palingen-20", author: "Thomas Horn (ed.)" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
    ]
  },
  {
    id: 'the-flood',
    image: process.env.PUBLIC_URL + '/images/nodes/the-flood.png',
    label: 'The Flood',
    category: 'concept',
    radius: 17,
    scripture: 'Genesis 7:11 — All the fountains of the great deep burst forth, and the windows of the heavens were opened.',
    description:
      'A global divine reset approximately 5,200 years ago targeting the corruption of the human genome by Nephilim bloodlines and the pervasive violence they generated. Over 300 independent flood narratives across cultures with no known contact preserve its memory. The Flood produced a post-flood ice age as elevated ocean temperatures increased evaporation and snowfall, dropping sea levels ~400 feet. This explains why documented underwater megalithic sites appear in secular chronology at "10,000-12,000 BC" — these are early post-flood ice-age civilizations building during lowered sea levels, within a ~7,500-year-old earth. Graham Hancock asks the right questions. The Bible provides the correct timeline. You do not need 12,000 years. You need Genesis 7.',
    resources: [
      { label: "The Genesis Flood", type: "book", url: "https://www.amazon.com/dp/0875523374?tag=palingen-20", author: "Whitcomb & Morris" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "Answers in Genesis – The Flood", type: "site", url: "https://answersingenesis.org/the-flood/" },
    ]
  },

  // ── Van Dorn: Angel of the LORD ─────────────────────────────────────────
  {
    id: 'angel-lord',
    image: process.env.PUBLIC_URL + '/images/nodes/angel-lord.png',
    label: 'Angel of the LORD',
    category: 'celestial',
    radius: 19,
    scripture: 'Exodus 3:6 — "I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob." And Moses hid his face, for he was afraid to look at God.',
    description:
      'The central thesis of Doug Van Dorn and Matt Foreman\'s The Angel of the LORD: every appearance of the "Angel of the LORD" in the Old Testament is a Christophany — the pre-incarnate Second Person of the Trinity acting visibly in human history. The Angel calls himself YHWH, receives worship, forgives sin, and is identified as God by those who encounter him (Genesis 16:13; Judges 6:22-23; Zechariah 3). This is not a created angel delivering messages but God himself walking among his people centuries before Bethlehem. Understanding this rewrites Old Testament Christology entirely and provides the divine council with a redemptive center — YHWH the Son was always the one walking among the nations, contesting the rebel elohim from within their own territory.',
  },

  // ── Van Dorn / Enoch / Genesis 6 Conspiracy: Azazel ─────────────────────
  {
    id: 'azazel',
    image: process.env.PUBLIC_URL + '/images/nodes/azazel.png',
    label: 'Azazel',
    category: 'celestial',
    radius: 17,
    scripture: 'Leviticus 16:8 — And Aaron shall cast lots over the two goats, one lot for the LORD and the other lot for Azazel.',
    description:
      'The co-leader of the Watchers in 1 Enoch — Semyaza organized the conspiracy but Azazel bears the greater guilt for teaching humanity forbidden arts: weapons-craft, sorcery, cosmetics used for seduction, and the cutting of roots (pharmaceia). Leviticus 16 embeds his name directly into the Day of Atonement: one goat sacrificed to YHWH, one sent "for Azazel" into the wilderness — a ritual binding that symbolically replays 1 Enoch 10:4-6, where Michael casts Azazel into a pit of sharp stones in the desert of Dudael. Gary Wayne\'s Genesis 6 Conspiracy devotes Chapter 12 to Azazel\'s identity and the preservation of his forbidden arts through occult traditions that kept his name and methods alive across the millennia.',
    resources: [
      { label: "Reversing Hermon", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
    ]
  },

  // ── Van Dorn: Giants / Rephaim ───────────────────────────────────────────
  {
    id: 'rephaim',
    image: process.env.PUBLIC_URL + '/images/nodes/rephaim.png',
    label: 'Rephaim',
    category: 'creature',
    radius: 18,
    scripture: 'Isaiah 26:14 — The dead do not live; the departed spirits do not rise; you have visited them with destruction and wiped out all remembrance of them.',
    description:
      'Post-flood giant clans who survived as remnants after the Flood — the Anakim, Emim, Zamzummim, and the royal line of Og. In Ugaritic texts the Rephaim are also the divine warriors of the underworld, shades who dwell in Bashan. Van Dorn\'s Giants: Sons of the Gods unpacks the double meaning: in life they were Nephilim-descended giants; in death their spirits became the Rephaim of Sheol, the same beings Isaiah says will not rise and that Job 26:5 places trembling beneath the waters. Their territory centered on Bashan — the biblical land associated with death, serpents, and the underworld — where their last king Og ruled until Moses destroyed him at Edrei (Deuteronomy 3:1-11).',
    resources: [
      { label: "Giants: Sons of the Gods", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20", author: "Douglas Van Dorn" },
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
    ]
  },
  {
    id: 'og-bashan',
    label: 'Og & Bashan',
    category: 'place',
    radius: 19,
    scripture: 'Deuteronomy 3:11 — For only Og the king of Bashan was left of the remnant of the Rephaim. Behold, his bed was a bed of iron... nine cubits was its length, and four cubits its breadth.',
    description:
      'Og was the last of the Rephaim giants — his iron bed measured over thirteen feet. Bashan, his kingdom, translates as "the place of the serpent" and sits adjacent to Mt. Hermon at 33.33°N — the same latitude as the Watcher descent point. Van Dorn identifies Bashan as the biblical geographic gateway to the underworld: sixty fortified cities (Deuteronomy 3:4), ancient standing stone circles, and a name that signals serpentine power. Jesus\'s deliberate ministry in the Decapolis — the Gadarene demoniac, the feeding of the four thousand — was a frontal assault on Bashan\'s territorial hold. Caesarea Philippi, where Peter confessed Christ and Jesus spoke of building his church on "this rock," sits directly at the base of Mt. Hermon at the rock face believed to be the entrance to Hades. Christ was making a territorial declaration on the enemy\'s home ground.',
  },
  {
    id: 'anakim',
    label: 'Anakim',
    category: 'creature',
    radius: 16,
    scripture: 'Deuteronomy 9:2 — A people great and tall, the sons of the Anakim, whom you know, and of whom you have heard it said, "Who can stand before the sons of Anak?"',
    description:
      'The giant clans of Canaan descended from Anak and ultimately from the Nephilim — the beings that made Israel\'s twelve spies feel like grasshoppers (Numbers 13:33). Their territory spanned Hebron, Gaza, and the Judean hill country. Van Dorn traces their full genealogy through Numbers, Joshua, and Samuel: Joshua 11:21-22 records their near-total eradication in Judah and Israel, with survivors retreating to Gaza, Gath, and Ashdod. From Gath came Goliath, his brother Lahmi, the six-fingered giant, and the others listed in 2 Samuel 21:15-22 — the final Anakim encounters in Scripture. David\'s targeted campaign against these warriors was not merely military victory but the completion of a divine mandate to eliminate the remaining Nephilim genetic lineage from the promised land.',
  },

  // ── Van Dorn: Cosmic Mountain ────────────────────────────────────────────
  {
    id: 'cosmic-mountain',
    image: process.env.PUBLIC_URL + '/images/nodes/cosmic-mountain.png',
    label: 'Cosmic Mountain',
    category: 'concept',
    radius: 20,
    scripture: 'Isaiah 14:13 — You said in your heart, "I will ascend to heaven; above the stars of God I will set my throne on high; I will sit on the mount of assembly in the far reaches of the north."',
    description:
      'The central unifying motif of Van Dorn\'s Stranger Theology: every sacred mountain in Scripture — Eden, Sinai, Zion, Hermon, and Zaphon — functions as the same cosmic archetype, a dimensional threshold where heaven and earth meet, where divine beings dwell, and where YHWH\'s authority is asserted or contested. The "mount of assembly" (har mo\'ed) in Isaiah 14:13 is the mountain the Adversary coveted. Jesus stages his most significant confrontations on mountains: Sermon on the Mount, Transfiguration on Hermon, Great Commission, Ascension from Olivet. The cosmic mountain is not a metaphor — it is the theater of divine action, and every major act of redemption is staged there.',
    resources: [
      { label: "The Unseen Realm", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Stranger Theology", type: "book", url: "https://www.amazon.com/dp/0991304543?tag=palingen-20", author: "Douglas Van Dorn" },
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
    ]
  },

  // ── Van Dorn: Leviathan ──────────────────────────────────────────────────
  {
    id: 'leviathan',
    label: 'Leviathan',
    category: 'creature',
    radius: 17,
    scripture: 'Isaiah 27:1 — In that day the LORD with his hard and great and strong sword will punish Leviathan the fleeing serpent, Leviathan the twisting serpent, and he will slay the dragon that is in the sea.',
    description:
      'The chaos sea dragon — Lotan in the Ugaritic Baal Cycle, Rahab in the Psalms and Job, the multi-headed serpent of creation conflict cosmology. Job 41 is YHWH\'s sustained rhetorical challenge: "Can you draw out Leviathan with a fishhook?" — not a lesson about a large crocodile but a declaration of exclusive divine authority over the greatest cosmic threat. Van Dorn tracks Leviathan across Job 3, 26, 41; Psalm 74:14; Isaiah 27:1; and Revelation 12-13, demonstrating that the serpent of Eden, the chaos dragon of the primordial deep, and the beast of Revelation are aspects of the same cosmic enemy. The "fleeing serpent" and "twisting serpent" of Isaiah 27 correspond to the two Leviathan heads in Ugaritic myth. His final destruction is eschatological — not yet accomplished, and not symbolic.',
  },

  // ── Van Dorn / Heiser: Psalm 82 ──────────────────────────────────────────
  {
    id: 'psalm82',
    image: process.env.PUBLIC_URL + '/images/nodes/psalm82.png',
    label: 'Psalm 82',
    category: 'concept',
    radius: 20,
    scripture: 'Psalm 82:6-7 — "I said, You are gods, sons of the Most High, all of you; nevertheless, like men you shall die, and fall like any prince."',
    description:
      'Eight verses containing the entire cosmic political structure of the Bible. YHWH stands in the divine assembly (v.1), charges the elohim with corrupt governance of the nations (vv.2-4), pronounces their mortality as sentence (vv.6-7), and claims all nations as his inheritance (v.8). Jesus quotes verse 6 in John 10:34-36 — not to teach that humans are gods, but to confirm the divine council reading and establish his superiority over the elohim. Van Dorn argues Psalm 82 is a literal courtroom scene: the divine administrators appointed at Babel standing trial for their corruption. Their decreed "death like men" begins at the Cross, is announced through the Church\'s proclamation, and is consummated at final judgment.',
    resources: [
      { label: "The Unseen Realm", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Dr. Michael Heiser – Psalm 82", type: "site", url: "https://drmsh.com/psalm-82/" },
      { label: "Naked Bible Podcast", type: "video", url: "https://nakedbiblepodcast.com" },
    ]
  },

  // ── Genesis 6 Conspiracy: Nimrod ─────────────────────────────────────────
  {
    id: 'nimrod',
    label: 'Nimrod',
    category: 'creature',
    radius: 17,
    scripture: 'Genesis 10:9 — He was a mighty hunter before the LORD. Therefore it is said, "Like Nimrod a mighty hunter before the LORD."',
    description:
      'Post-flood rebel, founder of Babel, Erech, Accad, and the Assyrian city-states. The Hebrew gibbor — "mighty man" — used of Nimrod in Genesis 10:8 is the same root applied to the Nephilim of Genesis 6:4, suggesting either literal giant descent or demonic empowerment. Gary Wayne\'s Genesis 6 Conspiracy devotes Chapter 27 and surrounding material to Nimrod as the prototype post-flood Antichrist: a man who reassembled the nations under unified occult authority, re-opened the portal that the Flood had disrupted, and founded the mystery religion that persists to the present. Micah 5:6 calls Assyria "the land of Nimrod," indicating his shadow extended across centuries of near-eastern history.',
  },

  // ── Genesis 6 Conspiracy: Mystery Babylon ────────────────────────────────
  {
    id: 'mystery-babylon',
    image: process.env.PUBLIC_URL + '/images/nodes/mystery-babylon.png',
    label: 'Mystery Babylon',
    category: 'concept',
    radius: 18,
    scripture: 'Revelation 17:5 — On her forehead was written a name of mystery: "Babylon the great, mother of prostitutes and of earth\'s abominations."',
    description:
      'The religious-political-economic system of Revelation 17-18 — not a future creation but an ancient one wearing modern clothes. Gary Wayne\'s thesis in Genesis 6 Conspiracy: the mystery religion of Babel, founded by Nimrod from corrupted antediluvian Watcher-knowledge, has never ended. It survived the Flood in cultural memory, was reconstituted at Babel, spread through the ancient Near East as the great goddess cult (Isis, Ishtar, Inanna), was preserved through Phoenician and Greek mystery schools, and continues today in Freemasonry, the New Age, and globalist ideology. Revelation names it "mystery" because it operates in secrecy and denial — the same gnosis, countless masks, one continuous thread from Azazel\'s forbidden arts to the coming one-world system.',
    resources: [
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
      { label: "A Woman Rides the Beast", type: "book", url: "https://www.amazon.com/dp/1565071913?tag=palingen-20", author: "Dave Hunt" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
    ]
  },

  // ── Genesis 6 Conspiracy: Secret Societies ───────────────────────────────
  {
    id: 'secret-societies',
    image: process.env.PUBLIC_URL + '/images/nodes/secret-societies.png',
    label: 'Secret Societies',
    category: 'concept',
    radius: 17,
    scripture: 'Ephesians 5:11-12 — Take no part in the unfruitful works of darkness, but instead expose them. For it is shameful even to speak of the things that they do in secret.',
    description:
      'Freemasonry, Rosicrucianism, the Hermetic Order of the Golden Dawn, and their predecessor mystery schools. Gary Wayne\'s Genesis 6 Conspiracy traces their lineage not to Enlightenment founders but to antediluvian transmission of Watcher forbidden knowledge. Chapter 9 details "Antediluvian Masonry and the Seven Sacred Sciences" — the arts the Watchers taught (weapons-craft, astrology, enchantments, sorcery, and root-cutting) systematized into initiatory mystery guilds. The Gnostic "evil Enoch" — distinct from the biblical patriarch — becomes the patron saint of occult transmission. The outer lodge degrees are social organizations; the upper degrees preserve the old gnosis in ritual form. The thread runs unbroken from Babel through Egypt, Greece, Rome, and into modernity.',
    resources: [
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "Zenith 2016", type: "book", url: "https://www.amazon.com/dp/0984061428?tag=palingen-20", author: "Thomas Horn" },
      { label: "Behold a Pale Horse", type: "book", url: "https://www.amazon.com/dp/0929385225?tag=palingen-20", author: "William Cooper" },
    ]
  },

  // ── Genesis 6 Conspiracy: Dragon Bloodlines ──────────────────────────────
  {
    id: 'dragon-bloodlines',
    image: process.env.PUBLIC_URL + '/images/nodes/dragon-bloodlines.png',
    label: 'Dragon Bloodlines',
    category: 'concept',
    radius: 16,
    scripture: 'Genesis 3:15 — I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.',
    description:
      'Royal and elite genealogies secretly traced to Nephilim and Rephaim descent as the basis for claimed divine right to rule. Section VII of Gary Wayne\'s Genesis 6 Conspiracy — "The House of Dragon" — documents how ruling dynasties from Sumer through Egypt, Canaan, Persia, Rome, and medieval Europe claimed descent from divine-human unions. Genesis 3:15 establishes two permanent seed lines in cosmic enmity: the seed of the woman leading to Christ, and the seed of the serpent. The conspiracy thesis: certain bloodlines have deliberately preserved and curated Nephilim genetics as the qualification for global rulership, building toward the Antichrist figure who will claim both divine descent and universal kingship — fulfilling the Adversary\'s original ambition through a human proxy.',
    resources: [
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "Bloodline of the Holy Grail", type: "book", url: "https://www.amazon.com/dp/1862042306?tag=palingen-20", author: "Laurence Gardner" },
    ]
  },

  // ── Genesis 6 Conspiracy: Atlantis ───────────────────────────────────────
  {
    id: 'atlantis',
    image: process.env.PUBLIC_URL + '/images/nodes/atlantis.png',
    label: 'Atlantis',
    category: 'concept',
    radius: 17,
    scripture: 'Genesis 7:19 — And the waters prevailed so mightily on the earth that all the high mountains under the whole heaven were covered.',
    description:
      'Plato\'s Atlantis — an advanced maritime civilization destroyed in a single cataclysmic day by flood and earthquake — is best understood as cultural memory of the antediluvian world. The Flood ~5,200 years ago submerged vast continental shelves as rising post-flood sea levels consumed the ice-age landmass. Underwater megalithic sites documented across the Indian Ocean, Persian Gulf, Mediterranean, and Atlantic shelf fit within the young earth framework: these are post-flood ice-age civilizations (or pre-flood remnants) preserved underwater by rising sea levels — not mysterious structures requiring a 12,000-year chronology. Hancock asks the right questions. The Bible provides the correct timeline. You do not need 12,000 years. You need Genesis 7.',
    resources: [
      { label: "Fingerprints of the Gods", type: "book", url: "https://www.amazon.com/dp/0517153750?tag=palingen-20", author: "Graham Hancock" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "The Atlantis Blueprint", type: "book", url: "https://www.amazon.com/dp/0440509017?tag=palingen-20", author: "Wilson & Flem-Ath" },
    ]
  },

  // ── DEPTH 1: Children of Watchers ───────────────────────────────────────
  {
    id: 'semyaza',
    image: process.env.PUBLIC_URL + '/images/nodes/semyaza.png',
    label: 'Semyaza',
    category: 'celestial',
    depth: 1,
    parentId: 'watchers',
    radius: 13,
    scripture: '1 Enoch 6:3 — And Semyaza, who was their leader, said unto them: "I fear ye will not indeed agree to do this deed, and I alone shall have to pay the penalty of a great sin."',
    description:
      'The leader of the two hundred Watchers who descended on Mt. Hermon. His name means "notorious name" or "he sees the name." Semyaza organized the collective oath — each Watcher swearing together so that none could be held individually liable — making the transgression a coordinated act of corporate rebellion rather than individual failure. 1 Enoch 10:11-12 records his sentence: bound under the hills of the earth for seventy generations, until the judgment of the great day. He represents the organized, conspiratorial dimension of the Watcher rebellion — the creation of a mutual accountability structure designed to circumvent divine justice.',
  },
  {
    id: 'azazel-watcher',
    image: process.env.PUBLIC_URL + '/images/nodes/azazel-watcher.png',
    label: 'Azazel',
    category: 'celestial',
    depth: 1,
    parentId: 'watchers',
    radius: 13,
    scripture: 'Leviticus 16:8 — Aaron shall cast lots over the two goats, one lot for the LORD and the other lot for Azazel.',
    description:
      'The Watcher who taught humanity weapons manufacture, armor-making, cosmetics, enchantments, and root-cutting — the "forbidden arts" that 1 Enoch 8 identifies as the primary source of human corruption before the Flood. His name appears in Leviticus 16 as the recipient of the scapegoat on Yom Kippur: the goat bearing the sins of Israel is sent into the wilderness "for Azazel" — a ritual acknowledgment of his role as the corrupting agent. 1 Enoch 10:4-8 records his specific punishment: bound hand and foot, thrown into the darkness of Dudael, face covered, to remain until the day of judgment when he is cast into the fire. His teaching is the prototype for the mystery religion\'s transmission of forbidden knowledge.',
  },

  // ── DEPTH 1: Children of Nephilim ───────────────────────────────────────
  {
    id: 'og-king',
    image: process.env.PUBLIC_URL + '/images/nodes/og-king.png',
    label: 'Og of Bashan',
    category: 'creature',
    depth: 1,
    parentId: 'nephilim',
    radius: 13,
    scripture: 'Deuteronomy 3:11 — For only Og the king of Bashan was left of the remnant of the Rephaim. Behold, his bed was a bed of iron... nine cubits was its length.',
    description:
      'The last of the Rephaim giant kings — ruling Bashan, the sixty fortified cities, and the region directly adjacent to Mt. Hermon. His iron bed was nine cubits long (approximately 13-14 feet), preserved in Rabbah of Ammon as a monument. Van Dorn\'s work on Og identifies Bashan as the most cosmically significant territory in the entire conquest narrative: Og\'s defeat by Moses (Deuteronomy 3) is the pivotal moment where YHWH demonstrates that even the last giant king on the most supernaturally charged ground in the ancient world falls before his people. Numbers 21:33-35 frames his defeat as YHWH\'s directive — not merely military strategy. Psalm 136:20 commemorates it alongside the Exodus: Og\'s territory belonged to the divine realm. Its defeat was a cosmic reclamation.',
  },
  {
    id: 'goliath-gath',
    image: process.env.PUBLIC_URL + '/images/nodes/goliath-gath.png',
    label: 'Goliath of Gath',
    category: 'creature',
    depth: 1,
    parentId: 'nephilim',
    radius: 13,
    scripture: '1 Samuel 17:4 — And there came out from the camp of the Philistines a champion named Goliath of Gath, whose height was six cubits and a span.',
    description:
      'Six cubits and a span (approximately 9.5 feet) — the Philistine champion from Gath who represented the last organized military deployment of Nephilim giant-class warriors against Israel. His armor weighed 125 lbs; his spear head alone was 15 lbs of iron. Van Dorn\'s genealogical tracing shows Goliath and his four brothers listed in 2 Samuel 21:15-22 as the remnant Anakim who fled Joshua\'s eradication campaign and settled in Gaza, Gath, and Ashdod. David\'s defeat of Goliath is not merely a shepherd-boy underdog story — it is a young king-elect completing the covenant mandate that Saul had abandoned: the elimination of the remaining Nephilim lineage from the land. 1 Chronicles 20:5 preserves the precise genealogical record of these final giant encounters.',
  },

  // ── DEPTH 1: Children of Divine Council ──────────────────────────────────
  {
    id: 'baal',
    image: process.env.PUBLIC_URL + '/images/nodes/baal.png',
    label: 'Baal',
    category: 'celestial',
    depth: 1,
    parentId: 'elohim',
    radius: 13,
    scripture: '1 Kings 18:21 — How long will you go limping between two different opinions? If the LORD is God, follow him; but if Baal, then follow him.',
    description:
      'The storm god of Canaan — the principal rival to YHWH in the territorial assignment of Deuteronomy 32. His name means "lord" or "owner," and his cult was centered on Mt. Zaphon (Jebel Aqra, northern Syria) — the same "mount of assembly in the far north" that Isaiah 14:13 uses for the Adversary\'s ambition. Van Dorn\'s cosmic mountain analysis shows that the Baal-YHWH conflict is not merely religious rivalry but territorial: Baal claimed the cosmic mountain while YHWH asserted Zion as its true counterpart. Elijah\'s Mt. Carmel confrontation (1 Kings 18) is a formal divine council challenge — YHWH demonstrating supremacy over Baal on open ground. The 450 prophets of Baal represent the full institutional weight of a territorial power\'s religious apparatus. Their failure is its collapse.',
    resources: [
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
      { label: "The Unseen Realm", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20", author: "Michael S. Heiser" },
      { label: "Bad Moon Rising", type: "book", url: "https://www.amazon.com/dp/0999189603?tag=palingen-20", author: "Derek P. Gilbert" },
    ]
  },
  {
    id: 'asherah',
    image: process.env.PUBLIC_URL + '/images/nodes/asherah.png',
    label: 'Asherah',
    category: 'celestial',
    depth: 1,
    parentId: 'elohim',
    radius: 12,
    scripture: 'Deuteronomy 7:5 — But thus shall you deal with them: you shall break down their altars and dash in pieces their pillars and chop down their Asherim and burn their carved idols with fire.',
    description:
      'The mother goddess of the Canaanite pantheon — consort of El in the Ugaritic texts, co-opted and syncretized with YHWH worship by apostate Israel throughout the monarchic period. 2 Kings 21:7 records Manasseh placing an Asherah pole in the Jerusalem Temple itself. The Kuntillet Ajrud inscriptions from the 9th century BC reference "YHWH and his Asherah" — physical evidence of syncretism in popular Israelite religion. Her symbol was a carved wooden pole (asherah) — a stylized sacred tree connecting earth to the divine. The repeated prophetic condemnation of Asherah worship (Deuteronomy 7, 2 Kings 23, Isaiah 17:8) tracks an ongoing battle for YHWH\'s exclusive covenantal claim against the pervasive mother-goddess framework the nations brought with them from antediluvian Watcher religion.',
  },
  {
    id: 'dagon',
    image: process.env.PUBLIC_URL + '/images/nodes/dagon.png',
    label: 'Dagon',
    category: 'celestial',
    depth: 1,
    parentId: 'elohim',
    radius: 12,
    scripture: '1 Samuel 5:4 — But when they rose early on the next morning, behold, Dagon had fallen face downward on the ground before the ark of the LORD, and the head of Dagon and both his hands were lying cut off on the threshold.',
    description:
      'The grain-and-fish deity of the Philistines, whose temple in Ashdod housed the captured Ark of the Covenant after the battle of Aphek. The narrative of 1 Samuel 5 is a formal divine council confrontation: YHWH\'s presence (the Ark) causes Dagon to prostrate before it two mornings running, and on the second morning Dagon\'s head and hands are severed — the posture and mutilation of a defeated, decapitated vassal. The Philistine leadership reads the signs correctly and returns the Ark. Samson\'s final act (Judges 16:23-30) takes place in Dagon\'s temple at Gaza — thousands of Philistines assembled for worship of the deity that "delivered Samson" into their hands. His death brings down the temple and its congregation: a direct assault on Dagon\'s territorial claim.',
  },

  // ── DEPTH 1: Children of Mt. Hermon ─────────────────────────────────────
  {
    id: 'caesarea-philippi',
    image: process.env.PUBLIC_URL + '/images/nodes/caesarea-philippi.png',
    label: 'Gates of Hades',
    category: 'place',
    depth: 1,
    parentId: 'mt-hermon',
    radius: 13,
    scripture: 'Matthew 16:18 — And I tell you, you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it.',
    description:
      'Caesarea Philippi — built at the base of Mt. Hermon directly over the cave of Pan and the grotto considered the literal entrance to the underworld, called "the Gates of Hades" in the ancient world. Pan\'s grotto was a natural cave into which rivers disappeared underground — the site was actively understood as a portal to the realm of the dead. Jesus chose this specific location — the most explicitly pagan, supernatural, portal-adjacent site in the region — to declare the founding of the Church and its authority over precisely the powers that operated there. Van Dorn\'s Stranger Theology treats this as one of the most deliberately chosen geographic confrontations in the Gospels: the Church built in the shadow of the Gates of Hades, declared to prevail against them. It is not a metaphor. It is a territorial declaration at a known spiritual coordinate.',
  },
  {
    id: 'bashan',
    image: process.env.PUBLIC_URL + '/images/nodes/bashan.png',
    label: 'Land of Bashan',
    category: 'place',
    depth: 1,
    parentId: 'mt-hermon',
    radius: 12,
    scripture: 'Psalm 68:15 — O mountain of God, mountain of Bashan; O many-peaked mountain, mountain of Bashan! Why do you look with hatred, O many-peaked mountain, at the mount that God desired for his abode?',
    description:
      'The territory east of the Jordan, north of the Yarmuk River, directly below Mt. Hermon — the land of Og and the Rephaim, identified in Ugaritic texts as the realm of the rapi\'uma (shades of the dead, the divine assembly of the underworld). Van Dorn identifies Bashan as the single most supernaturally charged geography in the OT: it was both the territory of the last giant king and the location understood in Canaanite cosmology as the entry point to the underworld. Psalm 68:15 shows the mountains of Bashan staring with envy at Zion — the cosmic mountain rivalry encoded in the landscape. Jesus\'s ministry in the Decapolis — feeding the four thousand, the Gerasene demoniac, the healing of the deaf-mute — deliberately invades this territory, reclaiming what the rebel powers occupied.',
  },

  // ── DEPTH 1: Children of Tower of Babel ─────────────────────────────────
  {
    id: 'table-of-nations',
    image: process.env.PUBLIC_URL + '/images/nodes/table-of-nations.png',
    label: 'Table of Nations',
    category: 'concept',
    depth: 1,
    parentId: 'babel',
    radius: 12,
    scripture: 'Genesis 10:32 — These are the clans of the sons of Noah, according to their genealogies, in their nations, and from these the nations spread abroad on the earth after the flood.',
    description:
      'Genesis 10 — the 70 nations descending from Noah\'s three sons that map directly to the divine council allotment of Deuteronomy 32:8. The number 70 is not incidental: it matches the 70 sons of El in the Ugaritic divine council, the 70 elders of Israel, the 70 disciples Jesus sends out in Luke 10, and the 70 nations listed in the Table. Van Dorn and Heiser both treat Genesis 10 as the structural map that Deuteronomy 32 then reveals the spiritual dimension of: each of these 70 nations received a divine son as its appointed administrator at Babel. The entire OT and NT mission is YHWH\'s campaign to reclaim all 70 from the rebellious sons who failed them — beginning with Abraham\'s family (the 71st line, retained directly by YHWH), culminating in the Great Commission to all nations.',
  },
  {
    id: 'ziggurat',
    image: process.env.PUBLIC_URL + '/images/nodes/ziggurat.png',
    label: 'Ziggurat',
    category: 'place',
    depth: 1,
    parentId: 'babel',
    radius: 12,
    scripture: 'Genesis 11:4 — Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves.',
    description:
      'The Mesopotamian stepped temple-mountain — a man-made cosmic mountain constructed to function as an interface between the human and divine realms. Each ziggurat was built as an earthly dwelling for the deity who owned the city, with the shrine at the apex serving as a landing platform for divine presence. The Tower of Babel was not merely tall — it was architecturally designed as a portal, built with "its top in the heavens" (rosh ba-shamayim) — language that describes divine accessibility, not height. Ziggurats at Ur, Uruk, Nippur, and Babylon preserve the architectural memory of Babel\'s original function. Gary Wayne\'s Genesis 6 Conspiracy shows how the ziggurat becomes the prototype for the pyramid, the stepped temple, and every subsequent sacred mountain architecture across global antediluvian-derived cultures — all serving the same function: reaching the divine realm through human engineering.',
    resources: [
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
    ]
  },

  // ── DEPTH 1: Children of Cosmic Mountain ─────────────────────────────────
  {
    id: 'mount-sinai',
    image: process.env.PUBLIC_URL + '/images/nodes/mount-sinai.png',
    label: 'Mount Sinai',
    category: 'place',
    depth: 1,
    parentId: 'cosmic-mountain',
    radius: 13,
    scripture: 'Exodus 19:18 — Now Mount Sinai was wrapped in smoke because the LORD had descended on it in fire. The smoke of it went up like the smoke of a kiln, and the whole mountain trembled greatly.',
    description:
      'The theophany mountain — where YHWH descended in fire, smoke, and earthquake to give the Law to Moses and formally establish Israel as his covenant nation. Exodus 19-20 describes a graded access mountain where approach was restricted by holiness level: the people at the base, elders part-way, Moses alone at the summit. Van Dorn shows Sinai as a full cosmic mountain event: the cloud, fire, thunder, and trumpet blast are the standard elements of the divine warrior\'s descent — the same phenomena as Psalm 18, Habakkuk 3, and Revelation\'s throne room. The seventy elders who see God and eat and drink on the mountain (Exodus 24:9-11) are the human counterpart to the divine council: Israel\'s leadership ratifying the covenant in the presence of YHWH on the mountain where heaven and earth meet.',
  },
  {
    id: 'mount-zion',
    image: process.env.PUBLIC_URL + '/images/nodes/mount-zion.png',
    label: 'Mount Zion',
    category: 'place',
    depth: 1,
    parentId: 'cosmic-mountain',
    radius: 13,
    scripture: 'Psalm 48:1-2 — Great is the LORD and greatly to be praised in the city of our God! His holy mountain... Mount Zion, in the far north, the city of the great King.',
    description:
      'The earthly residence of YHWH\'s kingship — the cosmic mountain of the New Covenant, where the Temple housed the divine Presence and every Israelite pilgrimage festival reenacted approach to the divine dwelling. Psalm 48:2 describes Zion as "in the far north" (yark\'tei tzafon) — using the same term as the Canaanite cosmic mountain Zaphon, deliberately claiming that the true Mount of Assembly is not Baal\'s Zaphon but YHWH\'s Zion. Hebrews 12:22 declares that New Covenant believers have "come to Mount Zion" — the heavenly city — through Christ. Revelation 14:1 places the Lamb and the 144,000 on Mount Zion. The entire arc of cosmic mountain theology culminates here: the mountain of God\'s choice, now accessible through the one who ascended it as both priest and king.',
  },

  // ── DEPTH 1: Children of Secret Societies ───────────────────────────────
  {
    id: 'freemasonry',
    image: process.env.PUBLIC_URL + '/images/nodes/freemasonry.png',
    label: 'Freemasonry',
    category: 'concept',
    depth: 1,
    parentId: 'secret-societies',
    radius: 12,
    scripture: 'Isaiah 29:15 — Woe to those who hide deep from the LORD their counsel, whose deeds are in the dark, and who say, "Who sees us? Who knows us?"',
    description:
      'The most widely distributed modern vehicle of the antediluvian mystery religion — its outer degrees functioning as fraternal organization, its inner degrees preserving initiatory gnosis traced to the Watcher-derived arts. Albert Pike\'s Morals and Dogma (1871) — the most authoritative internal Masonic text — identifies Lucifer explicitly as the deity of Freemasonry\'s highest degrees. The Royal Arch degree focuses on recovering the "Lost Word" (the divine name) — a direct parallel to the Watcher transmission of forbidden divine knowledge. Gary Wayne\'s Genesis 6 Conspiracy maps the Masonic degree structure against the antediluvian "Seven Sacred Sciences" the Watchers taught: the outer lodge preserves the social structure, the inner sanctum preserves the gnosis. Hiram Abiff — the Masonic "savior" killed and raised — is a mythologized Nimrod figure, the post-flood heir of the antediluvian mystery tradition.',
    resources: [
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "The Secret Teachings of All Ages", type: "book", url: "https://www.amazon.com/dp/1585422509?tag=palingen-20", author: "Manly P. Hall" },
      { label: "Zenith 2016", type: "book", url: "https://www.amazon.com/dp/0984061428?tag=palingen-20", author: "Thomas Horn" },
    ]
  },
  {
    id: 'rosicrucians',
    image: process.env.PUBLIC_URL + '/images/nodes/rosicrucians.png',
    label: 'Rosicrucians',
    category: 'concept',
    depth: 1,
    parentId: 'secret-societies',
    radius: 12,
    scripture: 'Colossians 2:8 — See to it that no one takes you captive by philosophy and empty deceit, according to human tradition, according to the elemental spirits of the world.',
    description:
      'The Brotherhood of the Rosy Cross — surfacing in Europe in the early 17th century through the Fama Fraternitatis (1614) and Confessio Fraternitatis (1615) manifestos, claiming lineage from the medieval mystic Christian Rosenkreuz and his journey to learn secret wisdom in Arabia and Egypt. Their core doctrine: Hermeticism, alchemy, Kabbalah, and astrology united into a universal reformation of knowledge. Gary Wayne traces Rosicrucian doctrine directly to the Hermetic transmission of Watcher-knowledge through the Egyptian mystery schools — the same antediluvian gnosis preserved through Thoth-Hermes, passed through Pythagoras and Plato into the Neoplatonist tradition and then into the Renaissance occult synthesis. Their symbol — the rose on the cross — deliberately parasitizes the Christian redemption framework while inverting its content: the cross becomes the axis mundi of alchemical transformation, not the instrument of substitutionary atonement.',
  },

  // ── DEPTH 1: Children of Mystery Babylon ─────────────────────────────────
  {
    id: 'great-goddess',
    image: process.env.PUBLIC_URL + '/images/nodes/great-goddess.png',
    label: 'Great Goddess Cult',
    category: 'concept',
    depth: 1,
    parentId: 'mystery-babylon',
    radius: 12,
    scripture: 'Jeremiah 44:17 — We will do everything that we have vowed, make offerings to the queen of heaven and pour out drink offerings to her.',
    description:
      'The universal mother-goddess archetype — Inanna in Sumer, Ishtar in Akkad, Isis in Egypt, Asherah in Canaan, Astarte in Phoenicia, Cybele in Anatolia, Aphrodite in Greece, Venus in Rome, Diana in Ephesus. Gary Wayne\'s Genesis 6 Conspiracy demonstrates these are not independent developments but a single religious tradition transmitted from antediluvian Watcher culture, fragmenting through the Table of Nations dispersal and re-localizing under different names. The common core: a dying-and-rising male consort (Tammuz, Osiris, Adonis, Attis), a heavenly queen figure, and a fertility-mystery initiation cycle encoding the Watcher gnosis. Jeremiah 44 shows Israelite women in Egypt explicitly defending the Queen of Heaven cult against prophetic condemnation. Revelation 17\'s "great harlot" is the final manifestation of this unbroken transmission, now global.',
  },
  {
    id: 'nimrod-kingdom',
    image: process.env.PUBLIC_URL + '/images/nodes/nimrod-kingdom.png',
    label: "Nimrod's Kingdom",
    category: 'place',
    depth: 1,
    parentId: 'mystery-babylon',
    radius: 12,
    scripture: 'Genesis 10:10 — The beginning of his kingdom was Babel, Erech, Accad, and Calneh, in the land of Shinar.',
    description:
      'The first post-flood empire — Nimrod\'s unified kingdom across Shinar and Assyria encompassing Babel, Erech (Uruk), Accad, Calneh, Nineveh, Rehoboth-Ir, Calah, and Resen. This was not incremental political development but deliberate reconstitution of the pre-flood centralized power structure under occult authority. Gary Wayne\'s Genesis 6 Conspiracy identifies Nimrod as the prototype Antichrist: a man who concentrated political, military, and religious power in one figure — the pattern every subsequent empire from Egypt to Rome has replicated. His deification after death (as Marduk in Babylon, Osiris in Egypt, Tammuz in Sumer) launched the mystery religion\'s "dead king who will return" messianic counterfeit — the false resurrection narrative that the mystery schools preserved as their central salvific myth. The Antichrist\'s claim will follow the same template: political unifier, military conqueror, divine pretender.',
    resources: [
      { label: "The Great Inception", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20", author: "Derek P. Gilbert" },
      { label: "The Genesis 6 Conspiracy", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20", author: "Gary Wayne" },
      { label: "Bad Moon Rising", type: "book", url: "https://www.amazon.com/dp/0999189603?tag=palingen-20", author: "Derek P. Gilbert" },
    ]
  },

  // ── DEPTH 1: Children of Dragon Bloodlines ──────────────────────────────
  {
    id: 'cain-line',
    image: process.env.PUBLIC_URL + '/images/nodes/cain-line.png',
    label: "Cain's Lineage",
    category: 'concept',
    depth: 1,
    parentId: 'dragon-bloodlines',
    radius: 12,
    scripture: 'Genesis 4:17 — Cain knew his wife, and she conceived and bore Enoch. When he built a city, he called the name of the city after the name of his son, Enoch.',
    description:
      'The antediluvian city-builders, metallurgists, and musicians — all descending from Cain through the line ending in Lamech (Genesis 4:17-24). Gary Wayne identifies the Cainite line as the primary transmitters of antediluvian forbidden knowledge: Jubal invented musical instruments, Jabal organized pastoral nomadism, Tubal-Cain was master of bronze and iron — the same arts that Azazel taught the Watchers\' human partners. The Cainite "evil Enoch" (distinct from the godly Seth-line Enoch of Genesis 5) founded the first city — a counterfeit paradise, a human-built sacred space without divine authorization. Wayne\'s thesis: the Cainite line carried the Adversary\'s original occult program through the antediluvian world and seeded it into the post-flood world through the mystery tradition. Their "mark" is spiritual as much as physical — a lineage marked for the Adversary\'s purposes.',
  },
  {
    id: 'merovingians',
    image: process.env.PUBLIC_URL + '/images/nodes/merovingians.png',
    label: 'Merovingians',
    category: 'concept',
    depth: 1,
    parentId: 'dragon-bloodlines',
    radius: 12,
    scripture: 'Revelation 13:2 — The dragon gave him his power and his throne and great authority.',
    description:
      'The Frankish dynasty that ruled Western Europe from ~450-751 AD, claiming descent from a sea-creature union — the Quinotaur (a bull-horned sea-beast) — who fathered the dynasty\'s founder Merovech through Clodio\'s queen. The "divine blood" (sang real) claim attached to the Merovingians was later syncretized with the Holy Grail legend in medieval literature. Gary Wayne\'s Genesis 6 Conspiracy identifies the Merovingian origin myth as a Nephilim bloodline claim preserved in dynastic mythology: the sea-beast origin mirrors ancient Near Eastern accounts of the Apkallu (antediluvian sages who emerged from the sea to bring civilization) — the same class of beings as the Watchers. Their long-haired "divine kings" were believed to hold supernatural power in their hair (a Samson parallel). The Priory of Sion mythology built around their "bloodline" descending to modern elites is the contemporary form of this ancient power-through-lineage claim.',
  },

  // ── Judd Burton: Karahan Tepe ─────────────────────────────────────────────
  {
    id: 'karahan-tepe',
    image: process.env.PUBLIC_URL + '/images/nodes/karahan-tepe.png',
    label: 'Karahan Tepe',
    category: 'place',
    radius: 15,
    scripture: 'Genesis 3:1 — Now the serpent was more crafty than any other beast of the field that the LORD God had made.',
    description:
      'A megalithic complex in Turkey\'s Taş Tepeler region featuring explicit serpent carvings, phallic pillars, and a chamber with disembodied human heads emerging from a wall — iconography more disturbing than its sister site at Göbekli Tepe. Within the young earth timeline, Karahan Tepe and its eleven companion Taş Tepeler sites represent early post-flood cultures building during the ice age when sea levels were ~400 feet lower. Judd Burton identifies its dense serpent symbolism as direct evidence of Watcher-cult worship continuing from the antediluvian world, not abstract astronomical symbolism. Its builders were not primitive hunter-gatherers discovering religion — they were post-flood peoples deliberately reconstructing contact with the serpentine powers their ancestors had known before the Flood.',
    resources: [
      { label: "Gobekli Tepe: Genesis of the Gods", type: "book", url: "https://www.amazon.com/dp/159143142X?tag=palingen-20", author: "Andrew Collins" },
      { label: "Decoding Gobekli Tepe", type: "book", url: "https://www.amazon.com/dp/B08JDTG9Q5?tag=palingen-20", author: "Judd Burton" },
      { label: "Ancient Origins – Karahan Tepe", type: "site", url: "https://www.ancient-origins.net/tag/karahan-tepe" },
    ]
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

  // ── DEPTH 1: Watchers children ───────────────────────────────────────────
  { source: 'watchers',         target: 'semyaza'          },
  { source: 'watchers',         target: 'azazel-watcher'   },

  // ── DEPTH 1: Nephilim children ───────────────────────────────────────────
  { source: 'nephilim',         target: 'og-king'          },
  { source: 'nephilim',         target: 'goliath-gath'     },

  // ── DEPTH 1: Divine Council children ────────────────────────────────────
  { source: 'elohim',           target: 'baal'             },
  { source: 'elohim',           target: 'asherah'          },
  { source: 'elohim',           target: 'dagon'            },

  // ── DEPTH 1: Mt. Hermon children ────────────────────────────────────────
  { source: 'mt-hermon',        target: 'caesarea-philippi'},
  { source: 'mt-hermon',        target: 'bashan'           },

  // ── DEPTH 1: Babel children ──────────────────────────────────────────────
  { source: 'babel',            target: 'table-of-nations' },
  { source: 'babel',            target: 'ziggurat'         },

  // ── DEPTH 1: Cosmic Mountain children ───────────────────────────────────
  { source: 'cosmic-mountain',  target: 'mount-sinai'      },
  { source: 'cosmic-mountain',  target: 'mount-zion'       },

  // ── DEPTH 1: Secret Societies children ──────────────────────────────────
  { source: 'secret-societies', target: 'freemasonry'      },
  { source: 'secret-societies', target: 'rosicrucians'     },

  // ── DEPTH 1: Mystery Babylon children ───────────────────────────────────
  { source: 'mystery-babylon',  target: 'great-goddess'    },
  { source: 'mystery-babylon',  target: 'nimrod-kingdom'   },

  // ── DEPTH 1: Dragon Bloodlines children ─────────────────────────────────
  { source: 'dragon-bloodlines',target: 'cain-line'        },
  { source: 'dragon-bloodlines',target: 'merovingians'     },
];
