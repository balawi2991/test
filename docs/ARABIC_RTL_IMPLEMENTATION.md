# Arabic RTL Support and Tajawal Font Integration

This document explains how Right-to-Left (RTL) layout and the Tajawal Arabic font are configured in GlowChat.

## HTML Root Configuration

In `frontend/src/app/layout.tsx`:

```tsx
<html lang="ar" dir="rtl" suppressHydrationWarning>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    className="font-sans bg-[#F8F9FA] text-[#343A40] antialiased overflow-x-hidden"
    style={{ fontFamily: "'Tajawal', sans-serif" }}
  >
    {children}
  </body>
</html>
```

- **`lang="ar"`**: Sets document language to Arabic.
- **`dir="rtl"`**: Enables right-to-left text direction.
- **Google Fonts Link**: Loads `Tajawal` font weights 400, 500, 700.

## Global CSS Styles

In `frontend/src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

html[dir="rtl"] {
  direction: rtl;
  unicode-bidi: embed;
}

body, html {
  font-family: 'Tajawal', sans-serif;
  background-color: #F8F9FA;
  color: #343A40;
}
```

- **`@import`**: Ensures Tajawal is available as fallback.
- **`html[dir="rtl"]`**: Enforces RTL layout for all elements.
- **`font-family`**: Applies Tajawal globally.
