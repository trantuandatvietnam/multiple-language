import Toolbar from "@mui/material/Toolbar";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Toolbar />
      <span>{t("home:header.title")}</span>
    </div>
  );
}

export default Home;
