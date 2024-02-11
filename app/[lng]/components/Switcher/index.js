import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import { useTranslation } from "../../../i18n";
import classes from "./index.module.css";
import SwitchLink from "./switchingLink";

export const Switcher = async ({ lng }) => {
  const { t } = await useTranslation(lng, "switcher");

  return (
    <div className={classes.switcher}>
      <Trans i18nKey='languageSwitcher' t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <SwitchLink newLng={l === "en" ? "en" : "sv"} />
            </span>
          );
        })}
    </div>
  );
};
