const fs = require("fs");
const file = "src/data/cosmicNodes.ts";
// Read and normalise to LF so all \n searches work on Windows
let src = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");

const RESOURCES = {
  "palingen": [
    { label: "The Unseen Realm", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20" },
    { label: "Reversing Hermon", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "Giants: Sons of the Gods", author: "Douglas Van Dorn", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20" },
  ],
  "watchers": [
    { label: "Reversing Hermon", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20" },
    { label: "Giants: Sons of the Gods", author: "Douglas Van Dorn", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "Book of Enoch (R.H. Charles translation)", type: "book", url: "https://www.amazon.com/dp/1585092827?tag=palingen-20" },
    { label: "SkyWatch TV – Watcher series", type: "video", url: "https://www.skywatchtv.com" },
  ],
  "elohim": [
    { label: "The Unseen Realm", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20" },
    { label: "Supernatural (popular edition)", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1683591070?tag=palingen-20" },
    { label: "Dr. Michael Heiser – Divine Council", type: "site", url: "https://drmsh.com/divine-council/" },
    { label: "Naked Bible Podcast", author: "Michael Heiser", type: "video", url: "https://nakedbiblepodcast.com" },
  ],
  "nephilim": [
    { label: "Giants: Sons of the Gods", author: "Douglas Van Dorn", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20" },
    { label: "Genesis 6 Giants", author: "Steve Quayle", type: "book", url: "https://www.amazon.com/dp/0967984920?tag=palingen-20" },
    { label: "Reversing Hermon", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20" },
    { label: "SteveQuayle.com", type: "site", url: "https://www.stevequayle.com" },
  ],
  "enoch": [
    { label: "Book of Enoch (R.H. Charles translation)", type: "book", url: "https://www.amazon.com/dp/1585092827?tag=palingen-20" },
    { label: "Reversing Hermon", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "1 Enoch: A New Translation", author: "George W.E. Nickelsburg", type: "book", url: "https://www.amazon.com/dp/0800660749?tag=palingen-20" },
  ],
  "genesis6": [
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "Giants: Sons of the Gods", author: "Douglas Van Dorn", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20" },
    { label: "The Unseen Realm", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20" },
    { label: "Genesis6conspiracy.com", type: "site", url: "https://genesis6conspiracy.com" },
  ],
  "babel": [
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "The Unseen Realm", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20" },
    { label: "Gilbert House Fellowship", type: "video", url: "https://gilberthousefellowship.com" },
  ],
  "gobekli": [
    { label: "Decoding Gobekli Tepe", author: "Judd Burton", type: "book", url: "https://www.amazon.com/dp/B08JDTG9Q5?tag=palingen-20" },
    { label: "Gobekli Tepe: Genesis of the Gods", author: "Andrew Collins", type: "book", url: "https://www.amazon.com/dp/159143142X?tag=palingen-20" },
    { label: "Ancient Origins – Gobekli Tepe", type: "site", url: "https://www.ancient-origins.net/tag/gobekli-tepe" },
    { label: "America Before", author: "Graham Hancock", type: "book", url: "https://www.amazon.com/dp/1250132800?tag=palingen-20" },
  ],
  "mt-hermon": [
    { label: "Giants: Sons of the Gods", author: "Douglas Van Dorn", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20" },
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
    { label: "Reversing Hermon", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20" },
  ],
  "rephaim": [
    { label: "Giants: Sons of the Gods", author: "Douglas Van Dorn", type: "book", url: "https://www.amazon.com/dp/0991304535?tag=palingen-20" },
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
  ],
  "azazel": [
    { label: "Reversing Hermon", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1948014394?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
  ],
  "stargates": [
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
    { label: "SkyWatch TV", type: "site", url: "https://www.skywatchtv.com" },
  ],
  "cosmic-geo": [
    { label: "The Sacred Web of Ancient Sites", author: "John Michell", type: "book", url: "https://www.amazon.com/dp/0500271488?tag=palingen-20" },
    { label: "Fingerprints of the Gods", author: "Graham Hancock", type: "book", url: "https://www.amazon.com/dp/0517153750?tag=palingen-20" },
    { label: "Decoding Gobekli Tepe", author: "Judd Burton", type: "book", url: "https://www.amazon.com/dp/B08JDTG9Q5?tag=palingen-20" },
  ],
  "the-flood": [
    { label: "The Genesis Flood", author: "Whitcomb & Morris", type: "book", url: "https://www.amazon.com/dp/0875523374?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "Answers in Genesis – The Flood", type: "site", url: "https://answersingenesis.org/the-flood/" },
  ],
  "cosmic-mountain": [
    { label: "The Unseen Realm", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20" },
    { label: "Stranger Theology", author: "Douglas Van Dorn", type: "book", url: "https://www.amazon.com/dp/0991304543?tag=palingen-20" },
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
  ],
  "psalm82": [
    { label: "The Unseen Realm", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20" },
    { label: "Dr. Michael Heiser – Psalm 82", type: "site", url: "https://drmsh.com/psalm-82/" },
    { label: "Naked Bible Podcast", type: "video", url: "https://nakedbiblepodcast.com" },
  ],
  "mystery-babylon": [
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
    { label: "A Woman Rides the Beast", author: "Dave Hunt", type: "book", url: "https://www.amazon.com/dp/1565071913?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
  ],
  "secret-societies": [
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "Zenith 2016", author: "Thomas Horn", type: "book", url: "https://www.amazon.com/dp/0984061428?tag=palingen-20" },
    { label: "Behold a Pale Horse", author: "William Cooper", type: "book", url: "https://www.amazon.com/dp/0929385225?tag=palingen-20" },
  ],
  "dragon-bloodlines": [
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "Bloodline of the Holy Grail", author: "Laurence Gardner", type: "book", url: "https://www.amazon.com/dp/1862042306?tag=palingen-20" },
  ],
  "atlantis": [
    { label: "Fingerprints of the Gods", author: "Graham Hancock", type: "book", url: "https://www.amazon.com/dp/0517153750?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "The Atlantis Blueprint", author: "Wilson & Flem-Ath", type: "book", url: "https://www.amazon.com/dp/0440509017?tag=palingen-20" },
  ],
  "karahan-tepe": [
    { label: "Gobekli Tepe: Genesis of the Gods", author: "Andrew Collins", type: "book", url: "https://www.amazon.com/dp/159143142X?tag=palingen-20" },
    { label: "Decoding Gobekli Tepe", author: "Judd Burton", type: "book", url: "https://www.amazon.com/dp/B08JDTG9Q5?tag=palingen-20" },
    { label: "Ancient Origins – Karahan Tepe", type: "site", url: "https://www.ancient-origins.net/tag/karahan-tepe" },
  ],
  "transhumanism": [
    { label: "Forbidden Gates", author: "Tom & Nita Horn", type: "book", url: "https://www.amazon.com/dp/0984061452?tag=palingen-20" },
    { label: "Pandemonium's Engine", author: "Thomas Horn (ed.)", type: "book", url: "https://www.amazon.com/dp/0984061460?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
  ],
  "freemasonry": [
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "The Secret Teachings of All Ages", author: "Manly P. Hall", type: "book", url: "https://www.amazon.com/dp/1585422509?tag=palingen-20" },
    { label: "Zenith 2016", author: "Thomas Horn", type: "book", url: "https://www.amazon.com/dp/0984061428?tag=palingen-20" },
  ],
  "baal": [
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
    { label: "The Unseen Realm", author: "Michael S. Heiser", type: "book", url: "https://www.amazon.com/dp/1577995562?tag=palingen-20" },
    { label: "Bad Moon Rising", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0999189603?tag=palingen-20" },
  ],
  "uap": [
    { label: "The Invisible College", author: "Jacques Vallee", type: "book", url: "https://www.amazon.com/dp/1938398270?tag=palingen-20" },
    { label: "Cherubim Chariots", author: "Josh Peck", type: "book", url: "https://www.amazon.com/dp/0692421793?tag=palingen-20" },
    { label: "Messengers of Deception", author: "Jacques Vallee", type: "book", url: "https://www.amazon.com/dp/1938398289?tag=palingen-20" },
    { label: "Pentagon UAP Report (official PDF)", type: "article", url: "https://www.dni.gov/files/ODNI/documents/assessments/Prelimary-Assessment-UAP-20210625.pdf" },
  ],
  "nimrod-kingdom": [
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
    { label: "Bad Moon Rising", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0999189603?tag=palingen-20" },
  ],
  "ziggurat": [
    { label: "The Great Inception", author: "Derek P. Gilbert", type: "book", url: "https://www.amazon.com/dp/0990497976?tag=palingen-20" },
    { label: "The Genesis 6 Conspiracy", author: "Gary Wayne", type: "book", url: "https://www.amazon.com/dp/1632693658?tag=palingen-20" },
  ],
};

let count = 0;
for (const [id, resources] of Object.entries(RESOURCES)) {
  const marker = "id: '" + id + "',";
  const idIdx = src.indexOf(marker);
  if (idIdx === -1) { console.log("[skip] " + id + " (not found)"); continue; }

  // Find the closing of this node object: next "\n  }," at same indentation level
  const nodeEnd = src.indexOf("\n  },", idIdx);
  if (nodeEnd === -1) { console.log("[skip] " + id + " (no end)"); continue; }

  const nodeSlice = src.slice(idIdx, nodeEnd);
  if (nodeSlice.includes("resources:")) { console.log("[skip] " + id + " (already done)"); continue; }

  const resourceLines = resources.map(r => {
    let line = "      { label: " + JSON.stringify(r.label) + ", type: " + JSON.stringify(r.type) + ", url: " + JSON.stringify(r.url);
    if (r.author) line += ", author: " + JSON.stringify(r.author);
    line += " }";
    return line;
  }).join(",\n");

  const injection = "\n    resources: [\n" + resourceLines + ",\n    ]";
  src = src.slice(0, nodeEnd) + injection + src.slice(nodeEnd);
  count++;
  console.log("[ok]   " + id);
}

fs.writeFileSync(file, src);
console.log("\nDone. Resources injected into " + count + " nodes.");

