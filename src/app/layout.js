import "./globals.css";

export const metadata = {
  title: "The Medallion Aurum | Luxury Residences",
  description:
    "A premium single-page landing experience for The Medallion Aurum luxury residences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="h-full antialiased"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
