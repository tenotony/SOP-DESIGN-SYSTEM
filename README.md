# SOP Design System

A living design system built with **Next.js 16**, **shadcn/ui** (New York style), and **Tailwind CSS v4**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component showcase.

## What's Included

### Design Tokens
- **Colors** — Background, foreground, primary, secondary, muted, accent, destructive, chart palette
- **Typography** — Display through caption sizes, monospace variant
- **Spacing** — Scale from `px` to `16` (64px)
- **Border Radius** — `sm` through `full`
- **Dark Mode** — Full dark theme via CSS variables, toggle in header

### Components (`components/ui/`)

| Component | File | Description |
|-----------|------|-------------|
| Button | `button.tsx` | 6 variants, 4 sizes, icon support |
| Card | `card.tsx` | Header, title, description, content, footer |
| Badge | `badge.tsx` | Default, secondary, destructive, outline, success, warning |
| Input | `input.tsx` | Text input with icon support |
| Textarea | `textarea.tsx` | Multi-line text input |
| Select | `select.tsx` | Dropdown selection (Radix) |
| Checkbox | `checkbox.tsx` | Checkable control (Radix) |
| Switch | `switch.tsx` | Toggle switch (Radix) |
| Slider | `slider.tsx` | Single/range slider (Radix) |
| Toggle | `toggle.tsx` | Toggle button, default/outline variants |
| Label | `label.tsx` | Form label with accessibility |
| Avatar | `avatar.tsx` | Image + fallback, multiple sizes |
| Progress | `progress.tsx` | Progress bar with custom indicator colors |
| Tabs | `tabs.tsx` | Tabbed navigation (Radix) |
| Accordion | `accordion.tsx` | Collapsible sections (Radix) |
| Alert | `alert.tsx` | Info, destructive, success variants |
| Table | `table.tsx` | Full table with header/body/footer/caption |
| Separator | `separator.tsx` | Horizontal/vertical divider |
| Tooltip | `tooltip.tsx` | Hover tooltip (Radix) |

### Utilities
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Project Structure

```
├── app/
│   ├── globals.css      # Tailwind + CSS variables (light/dark)
│   ├── layout.tsx       # Root layout with TooltipProvider
│   └── page.tsx         # Design system showcase page
├── components/
│   └── ui/              # All shadcn/ui components
├── lib/
│   └── utils.ts         # cn() utility
├── components.json      # shadcn/ui config (new-york style)
├── tailwind via CSS     # Tailwind v4 with @theme
└── next.config.mjs      # Next.js config
```

## Customization

### Colors
Edit `app/globals.css` — change the `oklch()` values under `@theme` (light) and `.dark` (dark).

### Components
Each component in `components/ui/` is standalone. Edit variants, sizes, or styles directly.

### Adding New Components
```bash
npx shadcn@latest add dialog
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Radix UI primitives
- Lucide icons
- TypeScript
