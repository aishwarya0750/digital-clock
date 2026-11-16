
import "./globals.css";

export const metadata = {
  title: "Digital Clock",
  description: "A beautiful live digital clock built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
