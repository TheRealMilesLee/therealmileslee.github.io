# therealmileslee.github.io

🚗 **Personal Portfolio** of Miles Lee — a blend of system engineering, aesthetics, and intentional design.
📸 Photography, 📂 Projects, 🛠️ Tech Stack, and more.

> "Some roads are drawn on maps. Others are drawn in will."

---

## 🧰 Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Static Export (`output: export`)**
- **GitHub Pages Deployment via GitHub Actions**

---

## 📂 Project Structure

```bash
.
├── public/              # Static assets
│   └── images/
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── page.tsx     # Home page
│   │   └── photography/ # Photo gallery
│   └── components/      # Reusable React components
├── next.config.ts       # Static export config for GitHub Pages
├── tsconfig.json
└── .github/workflows/   # GitHub Actions for deployment
```
# 🚀 Deployment (GitHub Pages)

项目会在每次 master 分支的 push 自动构建并部署：

Static export is enabled via:
```js
output: 'export'
```
Custom basePath and assetPrefix for GitHub Pages:
```js
    basePath: '/therealmileslee.github.io'
    assetPrefix: '/therealmileslee.github.io/'
```
    Deployment via GitHub Actions:
        GitHub Actions workflow in .github/workflows/deploy.yml
        Uses actions/deploy-pages@v4 to publish

# 🧪 Local Development

## Install dependencies
npm install

## Run dev server
npm run dev

## Build & export
npm run build

Build artifacts will be output to out/.
📷 Photography Credits

All photography is original work by Miles Lee.
Please do not reproduce without permission.
📝 License

MIT License

🛰️ Designed to be minimal, intentional, and fast. A portfolio that reflects a system's soul.
