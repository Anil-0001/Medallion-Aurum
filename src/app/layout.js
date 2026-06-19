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
      className="h-full antialiased"
    >
      <head>
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
