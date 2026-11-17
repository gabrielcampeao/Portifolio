# Portfolio

Personal site where I keep the projects I have been building, a bit of my path so far and the technologies I work with every day.

Live at [gabrielcampeao.xyz](https://gabrielcampeao.xyz).

## About

I started programming in technical high school and have kept going through college, courses and, above all, my own projects. This portfolio exists to show that: real applications with authentication, a database and a deploy behind them.

I prefer to learn by building. Most of the projects here came from a real need or from a technical question I wanted to answer, and almost none came from a tutorial followed start to finish.

Today I work as a developer at Engaged. The personal projects continue here in the time that is left.

## Stack used on this site

- React 18 + Vite
- React Router DOM
- Tailwind CSS
- Framer Motion, for animations
- Lucide Icons

## What is here

- Light and dark theme that persists between visits
- Responsive layout, tested on mobile
- Navigation and transitions without reloading the page
- Project and blog data kept apart from the UI, to make maintenance easier
- Study notes on Node.js, Docker, CI/CD, Grafana, Kubernetes, AWS and AI agents

## Structure

```
src/
├── components/
│   ├── layout/     # Navbar and footer
│   ├── sections/   # Home page sections
│   ├── ui/         # Reusable components
│   └── utils/      # Scroll helpers
├── pages/          # Application pages
├── data/           # Content (projects, blog, timeline)
├── hooks/          # Custom hooks
├── lib/            # Shared helpers
└── assets/         # Project screenshots
public/
├── diagramas/      # Diagrams used in the notes
└── imagens/        # Images used in the notes
```

## Running locally

```bash
npm install
npm run dev
```

## Next steps

There is still work to do here:

- [ ] Connect the contact form and the blog to a backend of my own
- [ ] Improve image loading performance
- [ ] Add new projects as I finish them
- [ ] Replace static screenshots with short demo videos

## A note

I built this site as part of learning web development in practice. If you made it this far, feel free to look at the projects or get in touch. The contacts are on the site.
