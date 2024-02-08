import "./globals.css";

export const metadata = {
  title: "Aleksandra Cislowski Städfirma",
  description: "Cleaning services in Stockholm",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
