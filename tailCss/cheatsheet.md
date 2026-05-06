# Tailwind CSS Cheat Sheet

A quick reference for Tailwind CSS utility classes, organized by category. Includes responsive variants, state modifiers, and common usage patterns.

---

## 1. Setup

- Install via npm: `npm install -D tailwindcss postcss autoprefixer`
- Init config: `npx tailwindcss init -p`
- Import in CSS:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Configure content paths in `tailwind.config.js`.

---

## 2. Responsive & State Prefixes

- Responsive: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Hover/focus/active: `hover:`, `focus:`, `active:`, `visited:`, `focus-visible:`, `focus-within:`
- Dark mode: `dark:`
- Motion and print: `motion-safe:`, `motion-reduce:`, `print:`
- Group variants: `group-hover:`, `group-focus:`
- Arbitrary values: `w-[34px]`, `bg-[#1c1c1e]`, `text-[1.35rem]`

Example:

```html
<div
  class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-slate-50"
></div>
```

---

## 3. Layout

### Container

- `container`
- `mx-auto`
- `max-w-0`, `max-w-xs`, `max-w-sm`, `max-w-md`, `max-w-lg`, `max-w-xl`, `max-w-2xl`, `max-w-3xl`, `max-w-4xl`, `max-w-5xl`, `max-w-6xl`, `max-w-7xl`

### Box Model

- `box-border`, `box-content`
- `block`, `inline-block`, `inline`, `inline-flex`, `flex`, `table`, `table-row`, `table-cell`, `grid`, `inline-grid`
- `flow-root`, `contents`, `hidden`

### Display

- `flex`, `inline-flex`, `grid`, `inline-grid`
- `hidden`, `block`, `inline`, `table`, `table-row`, `table-cell`

### Overflow

- `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`
- `overflow-x-auto`, `overflow-y-hidden`
- `overscroll-auto`, `overscroll-contain`, `overscroll-none`

### Positioning

- `static`, `relative`, `absolute`, `fixed`, `sticky`
- `inset-0`, `inset-x-0`, `inset-y-0`, `top-0`, `right-0`, `bottom-0`, `left-0`
- `top-1`, `right-2`, `bottom-4`, `left-8`
- `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`

### Float & Clear

- `float-right`, `float-left`, `float-none`
- `clear-left`, `clear-right`, `clear-both`, `clear-none`

---

## 4. Flexbox

- `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`
- `flex-wrap`, `flex-wrap-reverse`, `flex-nowrap`
- `items-start`, `items-center`, `items-end`, `items-baseline`, `items-stretch`
- `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`
- `content-start`, `content-center`, `content-end`, `content-between`, `content-around`, `content-evenly`
- `flex-1`, `flex-auto`, `flex-initial`, `flex-none`
- `grow`, `grow-0`, `shrink`, `shrink-0`
- `order-1`, `order-2`, ..., `order-last`

---

## 5. Grid

- `grid`, `inline-grid`
- `grid-cols-1` ... `grid-cols-12`
- `grid-rows-1` ... `grid-rows-6`
- `gap-0`, `gap-1`, `gap-2`, ..., `gap-12`, `gap-x-4`, `gap-y-6`
- `col-span-1`, `col-span-2`, ..., `col-span-full`
- `row-span-1`, `row-span-2`, ..., `row-span-full`
- `auto-cols-auto`, `auto-cols-min`, `auto-cols-max`, `auto-cols-fr`
- `auto-rows-auto`, `auto-rows-min`, `auto-rows-max`, `auto-rows-fr`
- `grid-flow-row`, `grid-flow-col`, `grid-flow-row-dense`, `grid-flow-col-dense`

---

## 6. Spacing

### Padding

- `p-0`, `p-1`, `p-2`, ..., `p-12`, `p-14`, `p-16`, `p-20`, `p-24`, `p-28`, `p-32`
- `px-4`, `py-3`, `pt-1`, `pr-2`, `pb-6`, `pl-8`
- `p-px`, `m-px`

### Margin

- `m-0`, `m-1`, `m-2`, ..., `m-12`, `m-14`, `m-16`, `m-20`, `m-24`
- `mx-auto`, `my-6`, `mt-4`, `mr-3`, `mb-2`, `ml-1`
- `-m-1`, `-mt-2`, `-mx-4`

### Space Between

- `space-x-0`, `space-x-2`, `space-x-4`, `space-x-6`
- `space-y-2`, `space-y-4`, `space-y-8`
- `space-x-reverse`, `space-y-reverse`

---

## 7. Sizing

- Width: `w-0`, `w-1`, `w-2`, ..., `w-64`, `w-72`, `w-80`, `w-96`, `w-auto`, `w-full`, `w-screen`, `w-min`, `w-max`, `w-fit`
- Height: `h-0`, `h-1`, ..., `h-64`, `h-72`, `h-80`, `h-96`, `h-auto`, `h-full`, `h-screen`, `h-min`, `h-max`, `h-fit`
- Min/Max: `min-w-0`, `min-w-full`, `min-h-0`, `min-h-screen`, `max-w-xs`, `max-w-full`, `max-h-0`, `max-h-screen`
- Aspect ratio: `aspect-square`, `aspect-video`, `aspect-[4/3]`, `aspect-[16/9]`

---

## 8. Typography

- Font size: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`, `text-8xl`, `text-9xl`
- Font weight: `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`
- Letter spacing: `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`
- Line height: `leading-3`, `leading-4`, `leading-5`, `leading-6`, `leading-7`, `leading-8`, `leading-9`, `leading-10`, `leading-none`, `leading-tight`, `leading-snug`, `leading-relaxed`, `leading-loose`
- Text alignment: `text-left`, `text-center`, `text-right`, `text-justify`
- Text color: `text-slate-900`, `text-gray-600`, `text-red-500`, `text-green-600`, `text-blue-500`, `text-white`, etc.
- Text decoration: `underline`, `line-through`, `no-underline`
- Text transform: `uppercase`, `lowercase`, `capitalize`, `normal-case`
- Font style: `italic`, `not-italic`
- Text overflow: `truncate`, `overflow-ellipsis`, `whitespace-nowrap`, `break-words`, `break-all`
- List style: `list-none`, `list-disc`, `list-decimal`, `list-inside`, `list-outside`
- Font family: `font-sans`, `font-serif`, `font-mono`

---

## 9. Backgrounds

- Background color: `bg-white`, `bg-slate-100`, `bg-gray-200`, `bg-red-500`, `bg-blue-600`, `bg-transparent`
- Background opacity: `bg-opacity-0`, `bg-opacity-25`, `bg-opacity-50`, `bg-opacity-75`, `bg-opacity-100`
- Background position: `bg-bottom`, `bg-center`, `bg-left`, `bg-right`, `bg-top`
- Background size: `bg-auto`, `bg-cover`, `bg-contain`
- Background repeat: `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y`, `bg-repeat-round`, `bg-repeat-space`
- Background attachment: `bg-fixed`, `bg-local`, `bg-scroll`
- Background gradient: `bg-gradient-to-r`, `bg-gradient-to-l`, `bg-gradient-to-t`, `bg-gradient-to-b`, `from-blue-500`, `via-cyan-500`, `to-slate-500`

---

## 10. Borders

- Border width: `border`, `border-0`, `border-2`, `border-4`, `border-8`
- Border color: `border-slate-200`, `border-gray-400`, `border-red-500`, `border-transparent`
- Border opacity: `border-opacity-25`, `border-opacity-50`, `border-opacity-75`, `border-opacity-100`
- Border style: `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`
- Border radius: `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Corner radius: `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`
- Divide: `divide-x`, `divide-y`, `divide-gray-200`, `divide-opacity-50`, `divide-solid`
- Ring: `ring`, `ring-1`, `ring-2`, `ring-offset-2`, `ring-white`, `ring-blue-500`

---

## 11. Effects

- Shadow: `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-none`
- Opacity: `opacity-0`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`
- Mix blend modes: `mix-blend-normal`, `mix-blend-multiply`, `mix-blend-screen`, `mix-blend-overlay`, `mix-blend-darken`, `mix-blend-lighten`
- Background blend modes: `bg-blend-normal`, `bg-blend-multiply`, `bg-blend-screen`, `bg-blend-overlay`
- Filter utilities: `filter`, `blur-sm`, `blur`, `blur-lg`, `brightness-90`, `contrast-125`, `grayscale`, `invert`, `sepia`, `saturate-150`

---

## 12. Interactivity & Accessibility

- Cursor: `cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-wait`, `cursor-not-allowed`, `cursor-move`, `cursor-text`
- Outline: `outline-none`, `outline-white`, `outline-black`
- Pointer events: `pointer-events-none`, `pointer-events-auto`
- Selection: `selection:bg-blue-500`, `selection:text-white`
- Screen reader: `sr-only`, `not-sr-only`

---

## 13. Transitions & Animations

- Transition: `transition`, `transition-colors`, `transition-opacity`, `transition-shadow`, `transition-transform`, `transition-all`
- Duration: `duration-75`, `duration-100`, `duration-150`, `duration-200`, `duration-300`, `duration-500`, `duration-700`, `duration-1000`
- Easing: `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`
- Delay: `delay-75`, `delay-100`, `delay-150`, `delay-200`
- Animate: `animate-none`, `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`
- Motion: `motion-safe:animate-spin`, `motion-reduce:transition-none`

---

## 14. Tables

- Table display: `table`, `table-auto`, `table-fixed`
- Border collapse: `border-collapse`, `border-separate`
- Table layout: `table-fixed`
- Captions & layout: `caption-top`
- Table cell spacing: use `border-separate` with `border-spacing-x-4`, `border-spacing-y-2`

---

## 15. SVG & Stroke

- `fill-current`
- `stroke-current`
- `stroke-0`, `stroke-1`, `stroke-2`
- `stroke-dasharray`, `stroke-dashoffset` via arbitrary values
- `text-slate-500` / `text-white` to color icons and SVGs

---

## 16. Forms

- Input: `appearance-none`, `bg-white`, `border`, `border-gray-300`, `rounded-md`, `py-2`, `px-3`, `shadow-sm`, `focus:outline-none`, `focus:ring-2`, `focus:ring-indigo-500`, `focus:border-indigo-500`
- Select: `form-select`, `form-multiselect`
- Checkbox/radio: `form-checkbox`, `form-radio`
- Range: `form-range`
- File: `form-file`
- Label/text: `placeholder-gray-400`, `read-only`

---

## 17. Effects & Utilities

- `object-contain`, `object-cover`, `object-fill`, `object-none`, `object-scale-down`
- `overflow-hidden`, `overflow-ellipsis`, `text-ellipsis`
- `resize-none`, `resize`, `resize-x`, `resize-y`
- `select-none`, `select-text`, `select-all`, `select-auto`
- `whitespace-normal`, `whitespace-no-wrap`, `whitespace-pre`, `whitespace-pre-line`, `whitespace-pre-wrap`
- `break-words`, `break-normal`, `truncate`

---

## 18. Useful Patterns

### Centering

- Horizontal centering: `mx-auto`
- Vertical centering using flex:
  ```html
  <div class="flex items-center justify-center h-screen"></div>
  ```

### Full-screen hero

- `h-screen`, `min-h-screen`, `w-full`

### Button

- `inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`

### Card

- `bg-white dark:bg-slate-800 shadow-md rounded-2xl p-6 space-y-4`

### Responsive text

- `text-base sm:text-lg md:text-xl lg:text-2xl`

### Grid layout

- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

---

## 19. Notes

- Tailwind is configurable: you can extend spacing, colors, fonts, and breakpoints in `tailwind.config.js`.
- Utility classes are composable. Prefer small, reusable classes in markup rather than custom CSS.
- Use arbitrary values for one-off needs: `mt-[18px]`, `bg-[#0f172a]`, `text-[clamp(1rem,2vw,2rem)]`.
- For production, enable `purge`/`content` scanning to remove unused CSS.

---

## 20. Quick Reference Example

```html
<div class="container mx-auto px-4 py-8">
  <header class="flex flex-col md:flex-row items-center justify-between gap-4">
    <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">
      Tailwind Cheat Sheet
    </h1>
    <button
      class="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Get Started
    </button>
  </header>
  <section class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
    <article
      class="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm"
    >
      <h2 class="text-xl font-semibold mb-4">Layout</h2>
      <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
        Use `flex`, `grid`, `space-x-*`, and responsive prefixes to build modern
        layouts quickly.
      </p>
    </article>
  </section>
</div>
```
