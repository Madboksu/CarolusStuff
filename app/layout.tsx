import localFont from "next/font/local";
import "./globals.css";

const newRodin = localFont({
  src: "./fonts/FOT-NewRodin Pro EB.otf",
  display: "swap",
  variable: "--font-rodin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${newRodin.variable} antialiased`}>{children}</body>
    </html>
  );
}