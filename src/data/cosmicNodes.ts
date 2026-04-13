export type NodeCategory = 'celestial' | 'creature' | 'place' | 'concept' | 'palingen';

export interface CosmicNode {
  id: string;
  label: string;
  category: NodeCategory;
  scripture: string;
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
    scripture: 'Colossians 1:16 — For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities.',
    description:
      'Art and exhibit studio at the intersection of the seen and unseen — creating interactive experiences that illuminate divine council cosmology, ancient mysteries, and the war behind the world. The name "Palingen" draws from palingenesis — rebirth, renewal, restoration. We believe the cosmos is not a closed system, that the text means what it says, and that every corner of creation reflects the conflict and redemption playing out across the unseen realm.',
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
    label: 'The Watchers',
    category: 'celestial',
    radius: 21,
    scripture: 'Genesis 6:2 — The sons of God saw that the daughters of man were attractive. And they took as their wives any they chose.',
    description:
      'Benei Elohim — divine sons assigned to watch over humanity who transgressed their cosmic domain. In 1 Enoch 6, two hundred of them descended onto Mt. Hermon under the leadership of Semyaza and Azazel, swearing a mutual oath so none could be held individually responsible. Their offspring, the Nephilim, corrupted humanity and filled the earth with violence — triggering the Flood as a divine reset. Van Dorn\'s Giants: Sons of the Gods reconstructs the Watcher narrative from Genesis, Enoch, Jude, and 2 Peter, demonstrating this was not mythology but literal supernatural transgression. Jude 6 and 2 Peter 2:4 confirm their imprisonment in Tartarus, awaiting final judgment.',
  },
  {
    id: 'elohim',
    label: 'Divine Council',
    category: 'celestial',
    radius: 23,
    scripture: 'Psalm 82:1 — God has taken his place in the divine council; in the midst of the gods he holds judgment.',
    description:
      'The assembly of divine beings throughout the Hebrew Bible — sons of God who govern the nations, appear before YHWH, and war across cosmic geography. Deuteronomy 32:8-9 (Dead Sea Scrolls reading) shows YHWH dividing the nations among the sons of God at Babel, retaining Israel for himself. Psalm 82 shows the council being judged for corrupt governance of those nations. Van Dorn, Heiser, and the broader divine council worldview recover what centuries of Greek philosophical influence removed from Protestant reading: the Bible\'s world is populated by a stratified supernatural hierarchy. The entire story of redemption is simultaneously the story of reclaiming territory from rebellious elohim.',
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
    label: 'Nephilim',
    category: 'creature',
    radius: 21,
    scripture: 'Genesis 6:4 — The Nephilim were on the earth in those days, and also afterward, when the sons of God came in to the daughters of man and they bore children to them. These were the mighty men who were of old, the men of renown.',
    description:
      'The offspring of the Watchers and human women — physically enormous, supernaturally capable, and inclined toward violence. 1 Enoch 7 records their stature and their consumption of human populations when the food supply could not sustain them. Numbers 13:33 confirms their survival into the post-flood era through the Anakim bloodline. Van Dorn\'s Giants: Sons of the Gods traces their full genealogy across the OT giant clans — Anakim, Rephaim, Emim, Zamzummim, and the Philistine warriors of Gath. 1 Enoch 15:8-12 identifies their disembodied spirits after the Flood as the origin of what the New Testament calls demons: evil spirits that belong neither to heaven nor earth, that wander, oppress, and seek embodiment.',
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
    label: 'Mt. Hermon',
    category: 'place',
    radius: 19,
    scripture: '1 Enoch 6:6 — They descended in the days of Jared onto the peak of Mount Hermon and called it Hermon because they had sworn and bound themselves by mutual imprecations upon it.',
    description:
      'Descent point of the two hundred Watchers per 1 Enoch — at 33.33°N at the triple border of Lebanon, Syria, and Israel, directly adjacent to Bashan. The Transfiguration almost certainly occurred here rather than Tabor: Jesus deliberately bringing Moses and Elijah to the precise mountain where the Watchers swore their oath, declaring his lordship over it. Van Dorn shows Hermon as both the entry point of the Watcher rebellion and the site of its reversal by Christ. Psalm 133:3 uses Hermon\'s dew as a covenantal blessing image. The mountain remains a site of persistent supernatural encounter and geopolitical contest to this day.',
  },
  {
    id: 'gobekli',
    label: 'Göbekli Tepe',
    category: 'place',
    radius: 17,
    scripture: 'Genesis 10:8-9 — Nimrod began to be a mighty man on the earth... He was a mighty hunter before the LORD.',
    description:
      'Massive T-shaped carved pillars in southeastern Turkey near ancient Harran. Secular dating assigns ~11,600 years, but within the young earth timeline (Flood ~5,200 years ago), Göbekli Tepe fits as an early post-flood construction during the dispersal period when the post-flood ice age kept sea levels ~400 feet lower. Judd Burton\'s Decoding Göbekli Tepe identifies it as a Watcher cult site — built by post-Babel peoples who preserved antediluvian Watcher religion and sought to re-establish contact with the imprisoned divine powers. The deliberate burial of the site under tons of fill circa 8,000 BC (secular) matches the Babel-era dispersal on the YEC timeline.',
  },
  {
    id: 'babel',
    label: 'Tower of Babel',
    category: 'place',
    radius: 16,
    scripture: 'Genesis 11:4 — Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves, lest we be dispersed over the face of the whole earth.',
    description:
      'Not merely ambitious construction — a deliberate attempt to storm the divine realm and re-unify humanity under occult authority. Deuteronomy 32:8-9 (Dead Sea Scrolls) reveals the cosmic aftermath: YHWH distributing the seventy nations among the sons of God as territorial allotments, retaining Israel as his personal inheritance. Van Dorn and Heiser both argue Babel is the pivotal post-flood supernatural event: every OT conflict from Abraham through the conquest has Babel\'s assignment as its cosmic backdrop. The entire Abrahamic mission is YHWH\'s campaign to reclaim what was conceded at Babel — one nation, then all nations.',
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
    label: 'Book of Enoch',
    category: 'concept',
    radius: 20,
    scripture: 'Jude 1:14-15 — Enoch, the seventh from Adam, prophesied: "Behold, the Lord comes with ten thousands of his holy ones, to execute judgment on all."',
    description:
      'Preserved in the Ethiopian Orthodox canon and confirmed by Dead Sea Scrolls fragments. Cited as authoritative prophecy by Jude 14-15 and referenced by 2 Peter 2:4. 1 Enoch provides the detailed backstory Genesis 6 compresses into four verses: the Watcher conspiracy, the names of their leaders (Semyaza and Azazel), the Nephilim\'s violence, antediluvian civilization\'s corruption, Enoch\'s heavenly journeys through multiple cosmic layers, and the binding of the Watchers pending judgment. Without 1 Enoch, Genesis 6 is a cryptic fragment; with it, the entire supernatural architecture of both Testaments coheres. Van Dorn, Heiser, and Wayne all treat it as an essential interpretive companion to the canonical text.',
  },
  {
    id: 'genesis6',
    label: 'Genesis 6',
    category: 'concept',
    radius: 19,
    scripture: 'Genesis 6:4 — The Nephilim were on the earth in those days, and also afterward, when the sons of God came in to the daughters of man and they bore children to them.',
    description:
      'The four most contested verses in the Hebrew Bible. The Sethite interpretation — "sons of God" as pious men from Seth\'s line — first appeared in Julius Africanus (~220 AD). The original reading: benei ha-elohim are divine beings (Job 1-2, Job 38:7, Psalm 89:6), and Genesis 6:1-4 records literal supernatural transgression. Van Dorn makes the textual case exhaustively in Giants: Sons of the Gods. This reading is confirmed by 2 Peter 2:4, Jude 6, every Second Temple Jewish writer, the Dead Sea Scrolls, and the NT\'s own citation of 1 Enoch. The Flood\'s stated cause — total corruption of humanity — only coheres if the corruption was genetic and supernatural, not merely moral.',
  },
  {
    id: 'stargates',
    label: 'Portals & Stargates',
    category: 'concept',
    radius: 21,
    scripture: 'Genesis 28:17 — How awesome is this place! This is none other than the house of God, and this is the gate of heaven.',
    description:
      'Dimensional thresholds where the boundary between cosmic layers becomes permeable. Jacob\'s vision at Bethel is not dream symbolism — it is a vision of actual cosmic architecture: a stairway between heaven and earth with divine beings ascending and descending, prompting Jacob to recognize "the gate of heaven" (sha\'ar ha-shamayim). Enoch traverses multiple gates in his heavenly journeys. Within the young earth framework, megalithic sites like Göbekli Tepe and Karahan Tepe may mark portal locations known from the antediluvian world and reconstructed after the Flood. Modern encounter reports — UAPs, Bigfoot, Dogman, and dimensional entities — cluster with statistical anomaly around these same geographic coordinates. Portal geography is not myth. It is map.',
  },
  {
    id: 'cosmic-geo',
    label: 'Cosmic Geography',
    category: 'concept',
    radius: 20,
    scripture: 'Deuteronomy 32:8 — When the Most High gave to the nations their inheritance... he fixed the borders of the peoples according to the number of the sons of God.',
    description:
      'The biblical world is not a flat geography of human nations but a spiritually contested map of divine territories, sacred high places, and supernatural jurisdictions. Deuteronomy 32:8-9 (DSS) is the foundational text: at Babel, YHWH distributed the nations among the divine sons, retaining Israel for himself. Daniel 10:13-20 confirms territorial princes over Persia and Greece who resist angelic messengers. Van Dorn\'s Stranger Theology shows Jesus\'s ministry deliberately targeted the strongest geographic holds of the rebel powers: the Decapolis (Bashan), Caesarea Philippi (Hermon/Gates of Hades), and the coastlands of Tyre and Sidon. Geography is never neutral. Every place is someone\'s spiritual territory.',
  },
  {
    id: 'transhumanism',
    label: 'Transhumanism',
    category: 'concept',
    radius: 17,
    scripture: 'Daniel 2:43 — As you saw the iron mixed with soft clay, so they will mix with one another in marriage, but they will not hold together, just as iron does not mix with clay.',
    description:
      'The 21st-century program to alter the human genome, merge biological consciousness with machines, and transcend biological mortality. Many researchers identify this as a direct recapitulation of Genesis 6 — the corruption of the divine image through technological means rather than Watcher interbreeding. Daniel 2:43\'s "mixing with human seed" may anticipate exactly this. CRISPR gene editing, mRNA technology, neural lace, and synthetic biology advance faster than public discourse tracks. Gary Wayne\'s Genesis 6 Conspiracy connects the transhumanist agenda to the continuation of the mystery religion and its goal of producing a post-human hybrid class to rule with claimed divine authority. The Adversary\'s oldest strategy is corrupting the image of God. The mechanism changes; the goal does not.',
  },
  {
    id: 'the-flood',
    label: 'The Flood',
    category: 'concept',
    radius: 17,
    scripture: 'Genesis 7:11 — All the fountains of the great deep burst forth, and the windows of the heavens were opened.',
    description:
      'A global divine reset approximately 5,200 years ago targeting the corruption of the human genome by Nephilim bloodlines and the pervasive violence they generated. Over 300 independent flood narratives across cultures with no known contact preserve its memory. The Flood produced a post-flood ice age as elevated ocean temperatures increased evaporation and snowfall, dropping sea levels ~400 feet. This explains why documented underwater megalithic sites appear in secular chronology at "10,000-12,000 BC" — these are early post-flood ice-age civilizations building during lowered sea levels, within a ~7,500-year-old earth. Graham Hancock asks the right questions. The Bible provides the correct timeline. You do not need 12,000 years. You need Genesis 7.',
  },

  // ── Van Dorn: Angel of the LORD ─────────────────────────────────────────
  {
    id: 'angel-lord',
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
    label: 'Azazel',
    category: 'celestial',
    radius: 17,
    scripture: 'Leviticus 16:8 — And Aaron shall cast lots over the two goats, one lot for the LORD and the other lot for Azazel.',
    description:
      'The co-leader of the Watchers in 1 Enoch — Semyaza organized the conspiracy but Azazel bears the greater guilt for teaching humanity forbidden arts: weapons-craft, sorcery, cosmetics used for seduction, and the cutting of roots (pharmaceia). Leviticus 16 embeds his name directly into the Day of Atonement: one goat sacrificed to YHWH, one sent "for Azazel" into the wilderness — a ritual binding that symbolically replays 1 Enoch 10:4-6, where Michael casts Azazel into a pit of sharp stones in the desert of Dudael. Gary Wayne\'s Genesis 6 Conspiracy devotes Chapter 12 to Azazel\'s identity and the preservation of his forbidden arts through occult traditions that kept his name and methods alive across the millennia.',
  },

  // ── Van Dorn: Giants / Rephaim ───────────────────────────────────────────
  {
    id: 'rephaim',
    label: 'Rephaim',
    category: 'creature',
    radius: 18,
    scripture: 'Isaiah 26:14 — The dead do not live; the departed spirits do not rise; you have visited them with destruction and wiped out all remembrance of them.',
    description:
      'Post-flood giant clans who survived as remnants after the Flood — the Anakim, Emim, Zamzummim, and the royal line of Og. In Ugaritic texts the Rephaim are also the divine warriors of the underworld, shades who dwell in Bashan. Van Dorn\'s Giants: Sons of the Gods unpacks the double meaning: in life they were Nephilim-descended giants; in death their spirits became the Rephaim of Sheol, the same beings Isaiah says will not rise and that Job 26:5 places trembling beneath the waters. Their territory centered on Bashan — the biblical land associated with death, serpents, and the underworld — where their last king Og ruled until Moses destroyed him at Edrei (Deuteronomy 3:1-11).',
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
    label: 'Cosmic Mountain',
    category: 'concept',
    radius: 20,
    scripture: 'Isaiah 14:13 — You said in your heart, "I will ascend to heaven; above the stars of God I will set my throne on high; I will sit on the mount of assembly in the far reaches of the north."',
    description:
      'The central unifying motif of Van Dorn\'s Stranger Theology: every sacred mountain in Scripture — Eden, Sinai, Zion, Hermon, and Zaphon — functions as the same cosmic archetype, a dimensional threshold where heaven and earth meet, where divine beings dwell, and where YHWH\'s authority is asserted or contested. The "mount of assembly" (har mo\'ed) in Isaiah 14:13 is the mountain the Adversary coveted. Jesus stages his most significant confrontations on mountains: Sermon on the Mount, Transfiguration on Hermon, Great Commission, Ascension from Olivet. The cosmic mountain is not a metaphor — it is the theater of divine action, and every major act of redemption is staged there.',
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
    label: 'Psalm 82',
    category: 'concept',
    radius: 20,
    scripture: 'Psalm 82:6-7 — "I said, You are gods, sons of the Most High, all of you; nevertheless, like men you shall die, and fall like any prince."',
    description:
      'Eight verses containing the entire cosmic political structure of the Bible. YHWH stands in the divine assembly (v.1), charges the elohim with corrupt governance of the nations (vv.2-4), pronounces their mortality as sentence (vv.6-7), and claims all nations as his inheritance (v.8). Jesus quotes verse 6 in John 10:34-36 — not to teach that humans are gods, but to confirm the divine council reading and establish his superiority over the elohim. Van Dorn argues Psalm 82 is a literal courtroom scene: the divine administrators appointed at Babel standing trial for their corruption. Their decreed "death like men" begins at the Cross, is announced through the Church\'s proclamation, and is consummated at final judgment.',
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
    label: 'Mystery Babylon',
    category: 'concept',
    radius: 18,
    scripture: 'Revelation 17:5 — On her forehead was written a name of mystery: "Babylon the great, mother of prostitutes and of earth\'s abominations."',
    description:
      'The religious-political-economic system of Revelation 17-18 — not a future creation but an ancient one wearing modern clothes. Gary Wayne\'s thesis in Genesis 6 Conspiracy: the mystery religion of Babel, founded by Nimrod from corrupted antediluvian Watcher-knowledge, has never ended. It survived the Flood in cultural memory, was reconstituted at Babel, spread through the ancient Near East as the great goddess cult (Isis, Ishtar, Inanna), was preserved through Phoenician and Greek mystery schools, and continues today in Freemasonry, the New Age, and globalist ideology. Revelation names it "mystery" because it operates in secrecy and denial — the same gnosis, countless masks, one continuous thread from Azazel\'s forbidden arts to the coming one-world system.',
  },

  // ── Genesis 6 Conspiracy: Secret Societies ───────────────────────────────
  {
    id: 'secret-societies',
    label: 'Secret Societies',
    category: 'concept',
    radius: 17,
    scripture: 'Ephesians 5:11-12 — Take no part in the unfruitful works of darkness, but instead expose them. For it is shameful even to speak of the things that they do in secret.',
    description:
      'Freemasonry, Rosicrucianism, the Hermetic Order of the Golden Dawn, and their predecessor mystery schools. Gary Wayne\'s Genesis 6 Conspiracy traces their lineage not to Enlightenment founders but to antediluvian transmission of Watcher forbidden knowledge. Chapter 9 details "Antediluvian Masonry and the Seven Sacred Sciences" — the arts the Watchers taught (weapons-craft, astrology, enchantments, sorcery, and root-cutting) systematized into initiatory mystery guilds. The Gnostic "evil Enoch" — distinct from the biblical patriarch — becomes the patron saint of occult transmission. The outer lodge degrees are social organizations; the upper degrees preserve the old gnosis in ritual form. The thread runs unbroken from Babel through Egypt, Greece, Rome, and into modernity.',
  },

  // ── Genesis 6 Conspiracy: Dragon Bloodlines ──────────────────────────────
  {
    id: 'dragon-bloodlines',
    label: 'Dragon Bloodlines',
    category: 'concept',
    radius: 16,
    scripture: 'Genesis 3:15 — I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.',
    description:
      'Royal and elite genealogies secretly traced to Nephilim and Rephaim descent as the basis for claimed divine right to rule. Section VII of Gary Wayne\'s Genesis 6 Conspiracy — "The House of Dragon" — documents how ruling dynasties from Sumer through Egypt, Canaan, Persia, Rome, and medieval Europe claimed descent from divine-human unions. Genesis 3:15 establishes two permanent seed lines in cosmic enmity: the seed of the woman leading to Christ, and the seed of the serpent. The conspiracy thesis: certain bloodlines have deliberately preserved and curated Nephilim genetics as the qualification for global rulership, building toward the Antichrist figure who will claim both divine descent and universal kingship — fulfilling the Adversary\'s original ambition through a human proxy.',
  },

  // ── Genesis 6 Conspiracy: Atlantis ───────────────────────────────────────
  {
    id: 'atlantis',
    label: 'Atlantis',
    category: 'concept',
    radius: 17,
    scripture: 'Genesis 7:19 — And the waters prevailed so mightily on the earth that all the high mountains under the whole heaven were covered.',
    description:
      'Plato\'s Atlantis — an advanced maritime civilization destroyed in a single cataclysmic day by flood and earthquake — is best understood as cultural memory of the antediluvian world. The Flood ~5,200 years ago submerged vast continental shelves as rising post-flood sea levels consumed the ice-age landmass. Underwater megalithic sites documented across the Indian Ocean, Persian Gulf, Mediterranean, and Atlantic shelf fit within the young earth framework: these are post-flood ice-age civilizations (or pre-flood remnants) preserved underwater by rising sea levels — not mysterious structures requiring a 12,000-year chronology. Hancock asks the right questions. The Bible provides the correct timeline. You do not need 12,000 years. You need Genesis 7.',
  },

  // ── Judd Burton: Karahan Tepe ─────────────────────────────────────────────
  {
    id: 'karahan-tepe',
    label: 'Karahan Tepe',
    category: 'place',
    radius: 15,
    scripture: 'Genesis 3:1 — Now the serpent was more crafty than any other beast of the field that the LORD God had made.',
    description:
      'A megalithic complex in Turkey\'s Taş Tepeler region featuring explicit serpent carvings, phallic pillars, and a chamber with disembodied human heads emerging from a wall — iconography more disturbing than its sister site at Göbekli Tepe. Within the young earth timeline, Karahan Tepe and its eleven companion Taş Tepeler sites represent early post-flood cultures building during the ice age when sea levels were ~400 feet lower. Judd Burton identifies its dense serpent symbolism as direct evidence of Watcher-cult worship continuing from the antediluvian world, not abstract astronomical symbolism. Its builders were not primitive hunter-gatherers discovering religion — they were post-flood peoples deliberately reconstructing contact with the serpentine powers their ancestors had known before the Flood.',
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
