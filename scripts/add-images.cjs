const fs = require("fs");
const file = "src/data/cosmicNodes.ts";
let src = fs.readFileSync(file, "utf8");

const ids = [
  "palingen","angel-lord","watchers","nephilim","rephaim","azazel","elohim",
  "gobekli","mt-hermon","babel","enoch","genesis6","stargates","cosmic-geo",
  "transhumanism","the-flood","cosmic-mountain","psalm82","mystery-babylon",
  "secret-societies","dragon-bloodlines","atlantis","karahan-tepe","semyaza",
  "azazel-watcher","og-king","goliath-gath","baal","asherah","dagon",
  "caesarea-philippi","bashan","table-of-nations","ziggurat","mount-sinai",
  "mount-zion","freemasonry","rosicrucians","great-goddess","nimrod-kingdom",
  "cain-line","merovingians"
];

let count = 0;
for (const id of ids) {
  const marker = "id: '" + id + "',";
  const imgLine = "\n    image: process.env.PUBLIC_URL + '/images/nodes/" + id + ".png',";
  if (src.includes(marker) && !src.includes("'/images/nodes/" + id + ".png'")) {
    src = src.replace(marker, marker + imgLine);
    count++;
  }
}

fs.writeFileSync(file, src);
console.log("Updated " + count + " nodes with image paths.");
