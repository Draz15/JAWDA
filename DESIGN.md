---
name: Quiet Heritage
colors:
  surface: '#fdf9f0'
  surface-dim: '#dddad1'
  surface-bright: '#fdf9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ea'
  surface-container: '#f1eee5'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e6e2d9'
  on-surface: '#1c1c16'
  on-surface-variant: '#414845'
  inverse-surface: '#31302b'
  inverse-on-surface: '#f4f0e7'
  outline: '#727974'
  outline-variant: '#c1c8c3'
  surface-tint: '#466558'
  primary: '#012016'
  on-primary: '#ffffff'
  primary-container: '#17352a'
  on-primary-container: '#7e9e90'
  inverse-primary: '#adcebe'
  secondary: '#7c5801'
  on-secondary: '#ffffff'
  secondary-container: '#ffcd72'
  on-secondary-container: '#795500'
  tertiary: '#0d1f13'
  on-tertiary: '#ffffff'
  tertiary-container: '#223426'
  on-tertiary-container: '#889d8b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8eada'
  primary-fixed-dim: '#adcebe'
  on-primary-fixed: '#012017'
  on-primary-fixed-variant: '#2f4d41'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#f0bf66'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#d3e8d4'
  tertiary-fixed-dim: '#b7ccb9'
  on-tertiary-fixed: '#0e1f13'
  on-tertiary-fixed-variant: '#394b3c'
  background: '#fdf9f0'
  on-background: '#1c1c16'
  surface-variant: '#e6e2d9'
  charcoal-ink: '#1E1E1E'
  paper-white: '#FFFFFF'
  antique-gold: '#8F6B22'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  arabic-brand:
    fontFamily: Noto Naskh Arabic
    fontSize: 46px
    fontWeight: '400'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 6px
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap-lg: 120px
  section-gap-md: 80px
---

## Brand & Style

The design system embodies "Quiet Luxury"—a philosophy of restraint, exceptional materiality, and cultural depth. It is tailored for **JAWDA**, a modern Arabic accessories brand that bridges artisanal heritage with contemporary minimalism. The aesthetic targets a discerning audience that values quality over logos and subtle craftsmanship over loud branding.

The visual style is **Modern Editorial Minimalism**, characterized by:
- **Generous Whitespace:** Utilizing negative space as a luxury asset to give content room to breathe.
- **Architectural Symmetry:** A centered layout philosophy that evokes stability and classical proportions.
- **Organic Accents:** The use of botanical motifs (leaves) and celestial markers (sparkles) to soften the geometric precision.
- **Refined Materiality:** Translating the tactile feel of leather, gold, and fine paper into a digital environment through subtle textures and lighting.

## Colors

The palette is anchored in **Deep Forest Green** and **Warm Gold**, a combination that signals prestige and organic roots. 

- **Primary Deep Forest Green (#17352A):** Used for primary actions, navigation, and core brand identifiers. It provides the "weight" in the design.
- **Accent Warm Gold (#C79A45):** Reserved for decorative elements, thin dividers, and subtle highlights. It should never overwhelm the layout.
- **Background Cream (#F7F3EA):** The primary canvas color, chosen to reduce eye strain and feel more "artisanal" than pure white.
- **Muted Sage (#AEC3B0):** Used for secondary backgrounds, chip elements, and supporting illustrations.
- **Text Charcoal Ink (#1E1E1E):** Used for all body copy to maintain high legibility while appearing softer than pure black.
- **Surface White (#FFFFFF):** Exclusively for card containers and image backgrounds to create a crisp, "gallery" effect against the cream backdrop.

## Typography

The typography system is a trilingual harmony of styles. 

1.  **Playfair Display (Serif):** Used for high-level headings and brand storytelling. It communicates elegance and editorial authority.
2.  **Inter (Sans-Serif):** The functional workhorse for all UI elements, body text, and button labels. It ensures the brand remains modern and accessible.
3.  **Noto Naskh Arabic:** Specifically for RTL content, providing a calligraphic, traditional feel that aligns with the brand’s heritage.

**Styling Rules:**
- **Taglines:** Always use `label-caps` with 6px tracking to create an airy, premium look.
- **Arabic Integration:** When Latin and Arabic appear together, ensure the Arabic text is scaled to visually match the x-height of the serif headings.
- **Rhythm:** Maintain generous line heights (1.6+) for body copy to enhance readability and the feeling of "leisure."

## Layout & Spacing

This design system uses a **Fixed-Fluid Hybrid Grid**. Content is contained within a 1280px max-width container, centered on the screen. 

- **The 8px Rhythm:** All spacing (padding, margins, gaps) must be multiples of 4px, with 8px being the base increment for UI components.
- **Section Breathing Room:** Use `section-gap-lg` (120px) between major homepage sections to reinforce the luxury positioning.
- **Layout Model:** 12-column grid for desktop, 6-column for tablet, and 2-column for mobile. 
- **Dividers:** Use thin, 1px "Gold Hairline" dividers (#C79A45) with 0.4 opacity to separate content without creating visual clutter.

## Elevation & Depth

To maintain the "Quiet Luxury" aesthetic, avoid heavy shadows or aggressive 3D effects. Depth is achieved through **Tonal Layering** and **Editorial Lighting**.

- **Tonal Layers:** Use the transition from Cream (#F7F3EA) to White (#FFFFFF) to indicate interactive surfaces. Cards should sit on the cream background with a subtle "Paper-thin" border.
- **Low-Contrast Outlines:** Use 1px borders in Muted Sage (#AEC3B0) at 30% opacity instead of shadows for most containers.
- **Ambient Glow:** If a shadow is required (e.g., a floating navigation bar), use a very large blur (32px+) with a very low opacity (0.05) tinted with the Primary Green to simulate soft, natural lighting.
- **Glassmorphism:** Apply a light backdrop blur (8px) with a semi-transparent White surface for overlay menus and sticky headers.

## Shapes

The shape language is "Softly Geometric." Elements are primarily rectangular to reflect architectural stability, but softened with a subtle radius to feel approachable.

- **Base Radius:** 4px for buttons, input fields, and small UI components.
- **Large Radius:** 8px (rounded-lg) for product cards and image containers.
- **Iconography:** Use a mix of geometric "Sparkles" and organic "Leaf" shapes as custom brand assets. These should be treated as illustrative marks rather than standard functional icons.
- **Dividers:** Horizontal rules flanking Arabic text should use a 2px stroke width with square caps.

## Components

- **Buttons:** Primary buttons use a solid Deep Forest Green fill with White Inter Medium text. Secondary buttons use a transparent background with a 1px Gold border. All buttons use 4px rounded corners and 12px horizontal padding.
- **Inputs:** Use a minimal "Bottom-Border Only" style for a more boutique feel, or a light White-filled box with a subtle Sage border. Labels should use the `label-caps` typography style.
- **Product Cards:** Featured on a White background with 8px corner radius. No shadows; use a 1px antique-gold stroke at 10% opacity.
- **Chips/Tags:** Small, pill-shaped elements using the Muted Sage background and Forest Green text.
- **Dividers:** Thin horizontal lines in Gold (#C79A45). For section breaks, include the custom "Sparkle" or "Leaf" icon in the center of the line.
- **Transitions:** All hover states and page transitions must be slow and ease-in-out (e.g., 400ms) to mimic a deliberate, luxurious experience.