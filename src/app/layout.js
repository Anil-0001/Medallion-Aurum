import "./globals.css";

export const metadata = {
  title: "The Medallion Aurum | Luxury Residences",
  description:
    "A premium single-page landing experience for The Medallion Aurum luxury residences.",
  icons: {
    icon: "/favicon/The Medallion_Aurum_Favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var themeKey = "medallion-aurum-theme";
                  var sourceKey = "medallion-aurum-theme-source";
                  var source = window.localStorage.getItem(sourceKey);
                  var storedTheme = window.localStorage.getItem(themeKey);
                  var now = new Date();
                  var ist = new Date(now.getTime() + 330 * 60 * 1000);
                  var hour = ist.getUTCHours();
                  var scheduledTheme = hour >= 7 && hour < 19 ? "light" : "dark";
                  var nextTheme = source === "manual" && (storedTheme === "light" || storedTheme === "dark")
                    ? storedTheme
                    : scheduledTheme;
                  document.documentElement.dataset.theme = nextTheme;
                } catch (error) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (window.location.hash) return;
                try {
                  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
                  window.scrollTo(0, 0);
                  var forceTop = function () {
                    if (!window.location.hash) window.scrollTo(0, 0);
                  };
                  requestAnimationFrame(forceTop);
                  [50, 150, 350, 750, 1500, 2600, 4200].forEach(function (delay) {
                    setTimeout(forceTop, delay);
                  });
                  window.addEventListener("pageshow", forceTop);
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
