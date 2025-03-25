import { useTranslation } from "react-i18next";
import LocaleSwitcher from "../locale-switcher/LocaleSwitcher";


function GreenBigButton() {
  const { t } = useTranslation();

  return (
    <div>
      <LocaleSwitcher />
      <h2>{t("welcome")}</h2>
    </div>
  );
}

export default GreenBigButton;
