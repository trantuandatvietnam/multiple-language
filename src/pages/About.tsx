import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <Toolbar />
      <span>
        <span>{t("about:header.title")}</span>
      </span>
    </div>
  );
}

export default About;
