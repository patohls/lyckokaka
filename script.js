let fortunes = [];

const fallbackFortunes = [
  {
    text: "Gör det lite enklare för någon idag.",
    reflection: "För en kund, en kollega eller en leverantör. Små förenklingar blir stora över tid."
  },
  {
    text: "Det är den lilla skillnaden som gör skillnaden.",
    reflection: "No1 i kundens mind set byggs i många små möten, inte i ett enda stort ögonblick."
  }
];

function parseFortuneFile(text) {
  return text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0 && !line.startsWith("#"))
    .map(line => {
      const parts = line.split("|").map(part => part.trim());
      return {
        text: parts[0],
        reflection: parts[1] || "Ta med dig tanken in i dagen och gör den konkret i nästa möte."
      };
    })
    .filter(item => item.text.length > 0);
}

async function loadFortunes() {
  try {
    const response = await fetch("lyckokakor.txt", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Kunde inte läsa lyckokakor.txt");
    }

    const text = await response.text();
    const parsed = parseFortuneFile(text);

    fortunes = parsed.length > 0 ? parsed : fallbackFortunes;
  } catch (error) {
    console.warn(error);
    fortunes = fallbackFortunes;
  }
}

function getDailyIndex() {
  const today = new Date();
  const key = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) % 1000000;
  }

  return hash % fortunes.length;
}

function showFortune(random = false) {
  if (!fortunes.length) {
    fortunes = fallbackFortunes;
  }

  const item = random
    ? fortunes[Math.floor(Math.random() * fortunes.length)]
    : fortunes[getDailyIndex()];

  document.getElementById("fortune").textContent = item.text;
  document.getElementById("reflection").textContent = item.reflection;
}

document.getElementById("newFortune").addEventListener("click", () => {
  showFortune(true);
});

loadFortunes().then(() => {
  showFortune(false);
});
