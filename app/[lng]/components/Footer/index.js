import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import { useTranslation } from "../../../i18n";

export const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <footer>
      <Trans i18nKey='languageSwitcher' t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l === "en" ? "🇺🇸" : "🇸🇪"}</Link>
            </span>
          );
        })}
    </footer>
  );
};
