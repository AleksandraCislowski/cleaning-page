import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Navigation from "./components/navigation/Navigation";
import "../globals.css";

export const metadata = {
  title: "Aleksandra Cislowski Städfirma",
  description: "Cleaning services in Stockholm",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Navigation lng={lng} />
        {children}
      </body>
    </html>
  );
}
