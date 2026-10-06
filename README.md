# 📖 3D Interactive Notebook Resume

A responsive, realistic 3D Flipbook Resume and Portfolio web application built with **React (Vite)**, **react-pageflip**, **framer-motion**, and **lucide-react**.

---

## 🚀 Features

- **Realistic 3D FlipBook:** Realistic page turn physics, page shadows, hardcovers, and Web Audio synthesized page flip sounds.
- **Interactive Profile Pop-up:** Hover or tap on the user's name to reveal an animated floating profile card powered by `framer-motion`.
- **Skills Matrix & Timeline:** Organized skill badges with experience and education history.
- **Certificates Lightbox:** Interactive gallery of certificate previews with verification badges, credential copy, and full-screen view.
- **Responsive Layout:** Automatically adapts between desktop 2-page spread and mobile single-page flipbook mode.
- **Instant Actions:** Direct `mailto:`, `tel:`, LinkedIn, GitHub, PDF save, and confetti celebration.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🖼️ How to Add Your Own Photos & Certificates

Drop your local images directly into the `public/images/` folder:

| File Name | Purpose | Recommended Size |
| :--- | :--- | :--- |
| `public/images/profile.svg` (or `.jpg`/`.png`) | Profile / Avatar Photo | `400 x 400 px` (Square) |
| `public/images/cert-1.svg` (or `.png`/`.jpg`) | Certificate 1 Preview | `600 x 400 px` (Landscape) |
| `public/images/cert-2.svg` (or `.png`/`.jpg`) | Certificate 2 Preview | `600 x 400 px` (Landscape) |
| `public/images/cert-3.svg` (or `.png`/`.jpg`) | Certificate 3 Preview | `600 x 400 px` (Landscape) |
| `public/images/cert-4.svg` (or `.png`/`.jpg`) | Certificate 4 Preview | `600 x 400 px` (Landscape) |

> 💡 **Tip:** Edit your personal information, skills, experience, and links in [`src/data/resumeData.js`](file:///c:/Users/DHANUNJAY/OneDrive/Desktop/3d%20resume/src/data/resumeData.js).
