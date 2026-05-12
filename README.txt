CyberPhoto · Dagens lyckokaka med texter i TXT-fil

Filer:
index.html
style.css
script.js
lyckokakor.txt

Så ändrar du texter:
1. Öppna lyckokakor.txt.
2. Lägg till en ny rad.
3. Skriv enligt formatet:

Huvudtext | Förklarande text

Exempel:
Gör det lite enklare för någon idag. | Små förenklingar blir stora när många gör dem varje dag.

Viktigt:
Sidan behöver ligga på en webbserver för att JavaScript ska kunna läsa lyckokakor.txt.
Om du bara dubbelklickar på index.html lokalt kan vissa webbläsare blockera inläsningen av txt-filen.

Enkelt test lokalt:
Om du har Python installerat kan du öppna terminalen i mappen och köra:

python -m http.server 8000

Öppna sedan:
http://localhost:8000

På intern server fungerar det normalt direkt.
