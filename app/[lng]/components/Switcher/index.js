import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import { useTranslation } from "../../../i18n";
import classes from "./index.module.css";

export const Switcher = async ({ lng }) => {
  const { t } = await useTranslation(lng, "switcher");
  return (
    <footer className={classes.footer}>
      <Trans i18nKey='languageSwitcher' t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`} style={{ textDecoration: "none" }}>
                {l === "en" ? "🇺🇸" : "🇸🇪"}
              </Link>
            </span>
          );
        })}
    </footer>
  );
};
