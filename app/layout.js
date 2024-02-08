import Navigation from "./components/navigation/navigation";
import "./globals.css";

export const metadata = {
  title: "Aleksandra Cislowski Städfirma",
  description: "Cleaning services in Stockholm",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
