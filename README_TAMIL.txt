UNIVERSAL REPAIR AI – iPhone PWA Prototype 1.0

இந்த ZIP ஒரு ஆரம்ப Prototype. இது iPhone Safari-ல் இயங்கும் responsive web app.

iPhone-ல் பயன்படுத்த:
1. ZIP-ஐ Files app-ல் திறந்து Extract செய்யவும்.
2. உள்ள index.html-ஐ பார்க்கலாம்; ஆனால் PWA install மற்றும் offline cache-க்கு HTTPS hosting தேவை.
3. GitHub Pages / Netlify போன்ற HTTPS hosting-ல் இந்த folder-ஐ publish செய்யவும்.
4. Safari-ல் அந்த HTTPS link திறக்கவும்.
5. Share > Add to Home Screen தேர்வு செய்யவும்.

தற்போதைய வசதிகள்:
- Device தேர்வு
- USB / Wi-Fi / Bluetooth connection வகை தேர்வு
- பிரச்சினை அடிப்படையிலான ஆரம்ப rule-based diagnosis
- Repair checklist
- Manual verification checklist
- iOS connection limitations விளக்கம்

முக்கிய வரம்புகள்:
- இது உண்மையான AI cloud API-ஐ இன்னும் இணைக்கவில்லை.
- இது இணைக்கப்பட்ட device-ஐ scan செய்யவோ repair command இயக்கவோ செய்யாது.
- iOS Safari-ல் universal USB/ADB/fastboot அல்லது general Web Bluetooth access இல்லை.
- உண்மையான automatic repair-க்கு compatible Android/Windows/Linux device-side agent, secure pairing, authenticated API மற்றும் தனித்தனி device adapters உருவாக்க வேண்டும்.
- Firmware flash, reset, partition changes, data deletion போன்றவற்றை backup மற்றும் explicit confirmation இல்லாமல் செய்யக்கூடாது.

அடுத்த development கட்டம்:
1. Secure local-network agent
2. Android ADB adapter (USB debugging முன்கூட்டியே அனுமதிக்கப்பட்ட சாதனங்களுக்கு)
3. Windows diagnostic agent
4. Linux diagnostic agent
5. AI API integration with strict tool allowlist
6. Audit log, backup checks, repair verification

இந்த Prototype எந்த device-க்கும் தானாக மாற்றம் செய்யாது.
