RAFY TECH PORTFOLIO — ANDROID SETUP
====================================

PROJECT FILES
-------------
index.html   Main website structure and text
style.css    Responsive dark neon styling
script.js    Mobile menu, scroll animation, progress bar and contact form

IMPORTANT BEFORE PUBLISHING
---------------------------
1. Open script.js.
2. Find: whatsappNumber: "923000000000"
3. Replace it with your own WhatsApp number in international format.
   Example format for Pakistan: 923001234567
   Do not include +, spaces, or dashes.
4. Update your bio and project descriptions in index.html.
5. The three project cards are DEMO CONCEPTS, not real client work.
6. Add your own social profile links and original project screenshots when ready.
7. Do not publish private phone numbers or personal details unless you want them public.

OPTION A — ACODE (EDIT FILES)
-----------------------------
1. Install/open Acode.
2. Extract this ZIP into a folder named rafy-tech-portfolio.
3. In Acode, open that folder.
4. Tap index.html and use Preview (or open it in your browser).
5. Edit index.html, style.css and script.js as needed.

OPTION B — TERMUX LOCAL PREVIEW
-------------------------------
1. Install Termux from its official source.
2. Open Termux and run:

   pkg update && pkg upgrade -y
   pkg install nodejs-lts -y

3. Move/extract the project folder somewhere Termux can access, or use Android shared storage:

   termux-setup-storage

4. If the ZIP is in Downloads:

   cd ~/storage/downloads
   unzip rafy-tech-portfolio.zip
   cd rafy-tech-portfolio

5. Start a local preview server:

   npx --yes http-server . -p 8080

6. Open this address in your phone browser:

   http://127.0.0.1:8080

Keep Termux running while previewing. Stop the server with CTRL+C.

DEPLOY WITH VERCEL (STATIC SITE)
--------------------------------
1. Create/sign in to a Vercel account.
2. Create a GitHub repository and upload the three site files
   (index.html, style.css, script.js) from your phone.
3. In Vercel, choose Add New → Project.
4. Import that GitHub repository.
5. Framework Preset: Other.
6. Build Command: leave blank.
7. Output Directory: leave blank or use the project root if requested.
8. Deploy.
9. Vercel will provide a public URL.

ALTERNATIVE
-----------
If you prefer not to use GitHub, use Vercel's supported CLI from Termux:
   npm install -g vercel
   cd /path/to/rafy-tech-portfolio
   vercel

Follow the CLI prompts and sign in when asked. For a public production deployment:
   vercel --prod

Never share account passwords or verification codes. Use the official Vercel sign-in flow.

TROUBLESHOOTING
---------------
- If npx is not found, check Node.js installation: node -v and npm -v.
- If the browser cannot open the preview, confirm the server is still running.
- If WhatsApp does not open, check the number in script.js.
- If CSS is missing after upload, confirm style.css is in the same folder as index.html.
- Google Fonts need an internet connection; system fallback fonts still work offline.
