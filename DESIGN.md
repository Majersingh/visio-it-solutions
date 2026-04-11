# Design Brief — Premium Apple-Style Aesthetic

---

## 1. Core Aesthetic

**Vibe:** Apple.com / visionOS / Linear / Vercel / Arc Browser
**Keywords:** glassmorphism, spatial depth, restraint, precision, generous whitespace, cinematic motion, editorial typography.

**Golden rule:** *Less, but better.* Every pixel must earn its place. If it doesn't serve clarity or delight, remove it.

---

## 2. Typography

- **Primary font:** `SF Pro Display` → fallback `Inter`, then `-apple-system, BlinkMacSystemFont, sans-serif`
- **Body font:** `SF Pro Text` → fallback `Inter`
- **Mono (if needed):** `JetBrains Mono` or `SF Mono`
- **Load via:** `next/font` or `@fontsource` — never system-ui alone.

**Type scale (1.25 ratio / Major Third):**
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `display` | 72–96px | 600 | Hero headlines |
| `h1` | 56px | 600 | Section titles |
| `h2` | 40px | 600 | Subsections |
| `h3` | 28px | 500 | Card titles |
| `body-lg` | 19px | 400 | Lead paragraphs |
| `body` | 17px | 400 | Default |
| `caption` | 13px | 500 | Labels, meta |

- **Tracking:** headlines `-0.03em` to `-0.04em` (tight, Apple-style). Body: `-0.01em`.
- **Line height:** headlines `1.05–1.1`, body `1.5–1.6`.
- **Weights used:** 400, 500, 600 only. Never 700+ (too heavy for premium).

---

## 3. Color System

**Base — Dark mode first (Apple's default for premium):**
```
--bg-base:      #000000   /* pure black */
--bg-elevated:  #0a0a0a   /* cards, modals */
--bg-glass:     rgba(255,255,255,0.06)
--border-glass: rgba(255,255,255,0.1)
--text-primary: #f5f5f7   /* Apple's off-white */
--text-secondary: rgba(245,245,247,0.7)
--text-tertiary:  rgba(245,245,247,0.5)
```

**Accent — pick ONE per project:**
- Electric blue: `#0071e3` (Apple blue)
- Violet: `#7c3aed`
- Mint: `#30d158`
- Coral: `#ff375f`

**Gradients (use sparingly, for hero/accents):**
```
background: radial-gradient(circle at 20% 0%, #7c3aed33, transparent 50%),
            radial-gradient(circle at 80% 100%, #0071e333, transparent 50%);
```

**NO:** pure white backgrounds, saturated primary colors, more than 1 accent hue.

---

## 4. Glassmorphism Rules

The look that defines this brief. Apply to: nav bars, cards, modals, tooltips, floating panels.

```css
.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
```

**Critical:** glass MUST sit on a busy/gradient background or it looks flat. Always place glass over:
- A gradient mesh
- A blurred image
- A colorful element behind it

**Blur strength:** 20–32px. Less = weak, more = muddy.
**Saturation:** always boost to `150–200%` — this is the Apple secret.

---

## 5. Spacing & Layout

**Scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160px.
Use ONLY these values. Never `37px` or `13px`.

- **Section padding:** 96–160px vertical on desktop.
- **Container max-width:** 1200px (content) / 1440px (hero).
- **Card radius:** 20–28px (Apple uses generous radii).
- **Button radius:** 980px (pill) or 12px.
- **Grid gap:** 24–32px minimum.

**Whitespace is the product.** When in doubt, double the padding.

---

## 6. Motion & Animation

**Library:** Framer Motion (React) or GSAP.
**Philosophy:** motion should feel *physical* — things have weight, inertia, and settle.

**Easing — use these, nothing else:**
```js
const apple = [0.16, 1, 0.3, 1];        // primary — "easeOutExpo"-ish
const appleIn = [0.7, 0, 0.84, 0];       // exits
const spring = { type: "spring", stiffness: 120, damping: 20, mass: 0.8 };
```

**Durations:**
- Micro (hover, tap): 150–250ms
- Standard (enter/exit): 400–600ms
- Cinematic (hero reveal): 800–1200ms

**Required interactions:**
1. **Scroll-triggered reveals** — fade + slide-up 24px, staggered 80ms.
2. **Hover lift** — `translateY(-2px)` + shadow grow, 200ms.
3. **Parallax** on hero imagery (subtle, 10–20% offset).
4. **Magnetic buttons** — cursor pulls button slightly on approach.
5. **Page transitions** — fade + scale(0.98) → 1.
6. **Number counters** that animate on scroll into view.

**Forbidden:** bounce easings, linear eases, anything > 1500ms, flashing, spinning loaders (use skeleton shimmer instead).

---

## 7. Imagery & Icons

- **Photos:** high-res, cinematic, dark-mode friendly. Source: Unsplash / product renders. Never stock-looking.
- **Icons:** `lucide-react` or `@phosphor-icons/react` (thin weight, 1.5px stroke). Never mixed icon sets.
- **Product mockups:** use real device frames (iPhone, MacBook) — Apple always shows product in context.
- **SVG over PNG** everywhere possible.

---

## 8. Component Defaults

**Stack:** Next.js + Tailwind + shadcn/ui + Framer Motion + Lucide.

**Buttons:**
- Primary: solid accent, white text, pill radius, subtle inner highlight.
- Secondary: glass effect, 1px border.
- Always have hover + active states with motion.

**Cards:** glass by default, 24px radius, 32px padding, hover lifts 2px.

**Nav:** sticky glass bar, 64px tall, backdrop-blur 24px, border-bottom hairline.

**Inputs:** dark glass, 1px border, focus ring in accent color with glow.

---

## 9. The "Premium" Checklist

Before shipping, every screen must pass:

- [ ] Custom font loaded (not system-ui)
- [ ] Dark mode is the default
- [ ] At least one glass surface over a gradient
- [ ] Generous whitespace (when in doubt, 2x it)
- [ ] Scroll-triggered motion on main sections
- [ ] Hover states on every interactive element
- [ ] Tight letter-spacing on all headlines
- [ ] No pure black text on pure white
- [ ] No more than 1 accent color
- [ ] All radii from the scale, no one-offs
- [ ] Loading = skeleton shimmer, not spinner
- [ ] Hairline borders (1px, 10% opacity) not heavy lines
- [ ] Real content, not "Lorem ipsum", not placeholder boxes

---

## 10. References to Study

When I need to match a specific feel, point me at these and say "like X":

- **apple.com** — the gold standard; hero reveals, product scroll
- **linear.app** — glassmorphism + motion
- **vercel.com** — dark mode typography
- **arc.net** — cinematic scroll storytelling
- **framer.com** — motion showcases
- **stripe.com** — gradient meshes, section transitions
- **rauno.me** — micro-interactions
- **visionOS HIG** — spatial glass

---

## 11. Responsive & Mobile

**Golden rule:** *Design mobile-first, then layer up.* If a layout breaks at 360px wide, it isn't shipped — premium means premium on every device.

### Breakpoints

| Token | Width | Use |
|-------|-------|-----|
| `xs` | < 480px | Phones (iPhone SE, small Android) |
| `sm` | 480–639px | Large phones |
| `md` | 640–767px | Phablets / small tablets portrait |
| `lg` | 768–1023px | Tablets, small laptops |
| `xl` | 1024–1279px | Laptops |
| `2xl` | ≥ 1280px | Desktops |

Test at: **360px**, **390px** (iPhone), **768px** (iPad portrait), **1024px**, **1440px**.

### Type scale (mobile)

Always scale headlines down on mobile. Use `clamp()` so it's smooth, not stepped:

```css
.display { font-size: clamp(1.875rem, 8vw, 5.5rem); }
.h1      { font-size: clamp(1.5rem,  6.5vw, 3.25rem); }
.h2      { font-size: clamp(1.35rem, 5.5vw, 2.25rem); }
.lead    { font-size: clamp(1rem,    1.25vw, 1.1875rem); }
```

- Tighten line-height on mobile headlines (`1.08–1.12`).
- Body text: minimum 15px on mobile, 16px on desktop. **Never** drop below 14px for body.

### Spacing (mobile)

Section padding shrinks on small screens — generous whitespace shouldn't mean half a screen of empty space on a phone:

```css
.section {
  padding: clamp(96px, 12vw, 160px) clamp(20px, 4vw, 32px);
}

@media (max-width: 768px) {
  .section { padding: 72px 18px; }
}

@media (max-width: 480px) {
  .section { padding: 64px 16px; }
}
```

- **Container side-padding:** 16–18px on phones, 20–32px on tablets+.
- **Stack gaps:** 12–16px on mobile (was 24–32 on desktop).

### Layout rules

- **Default to one column on mobile.** Multi-column grids should reflow with `grid-template-columns: 1fr` under 480px.
- **Use `repeat(auto-fit, minmax(N, 1fr))`** for card grids — never fixed column counts at the top level. Pick `N` based on the smallest comfortable card width (240–320px).
- **Footers:** 4-col → 2-col under 960px → 1-col under 480px. The brand block usually deserves a full row in the 2-col layout.
- **Sticky / floating elements** (e.g. floating stat strips overlapping a hero image): float on tablet+, drop into the normal flow on mobile. Don't try to absolute-position over a tiny phone viewport.
- **Long words / school names** in nav bars: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` with a sensible `max-width`.

### Overflow guards

Add these once at the landing scope so a single rogue element can't horizontally scroll the page:

```css
.landing { overflow-x: hidden; }
.landing img,
.landing svg { max-width: 100%; }
```

Set `min-width: 0` on flex children that contain text — flex items default to `min-width: auto` which prevents shrinking.

### Decorative blobs / SVGs

- Use `clamp()` for sizes: `width: clamp(64px, 12vw, 120px);`
- Always set `pointer-events: none;` so they never block taps.
- Keep them inside an `overflow: hidden` parent so they don't push the page wider than the viewport.

### Touch targets

- **Minimum 44×44px** for any tappable element (Apple HIG, WCAG AAA).
- Icon buttons in navs: pad them so the *target* is 44px even if the visual is 22px.
- Don't put two interactive elements within 8px of each other.

### Mobile menu

- Full-screen blurred overlay, not a dropdown.
- Lock body scroll when open (`document.body.style.overflow = "hidden"`).
- Animate items in with a 40–60ms stagger.
- Big tap targets (16–20px font, 20px vertical padding).
- One primary CTA at the bottom (Sign in / Contact).

### The mobile checklist

Before shipping, every screen at **360px** must pass:

- [ ] No horizontal scroll
- [ ] No text touching the screen edges (min 16px side padding)
- [ ] Headlines fit on 1–2 lines, never break a word awkwardly
- [ ] All taps land on 44×44 targets
- [ ] Glass cards use the smaller mobile radius (18–20px)
- [ ] Floating overlays drop into normal flow
- [ ] Mobile menu locks scroll and has a clear close affordance
- [ ] Decorative blobs scale down with `clamp()` and don't overflow
- [ ] Section padding ~64–72px (not 96–160px)
- [ ] Body text ≥ 15px

---

## 12. This is for human not for agent like claude etc. How to Invoke This Brief

At the start of a task, say:
> *"Build [X]. Follow DESIGN_BRIEF.md strictly. Reference [apple.com/linear.app/etc] for the specific feel. Use Next.js + Tailwind + shadcn/ui + Framer Motion. Design system tokens first, then components, then page."*

And after the first render:
> *"Here's a screenshot. Make it feel more [premium / spatial / cinematic]."*
