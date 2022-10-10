import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LANGUAGE_OPTION } from "../../common/constants";

const navItems = [
  {
    path: "/",
    visible: "common:header.home",
  },
  {
    path: "/about",
    visible: "common:header.about",
  },
];

export default function Header() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = (lang: string) => {
    const currentLang = localStorage.getItem("language");
    if (!currentLang || currentLang !== lang) {
      localStorage.setItem("language", lang);
      window.location.reload();
    }
    handleClose();
  };

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          {t("common:logo")}
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item: { visible: string; path: string }) => (
            <Link
              style={{ textDecoration: "none" }}
              to={item.path}
              key={item.path}
            >
              <Button sx={{ color: "#fff" }}>{t(item.visible)}</Button>
            </Link>
          ))}
          <Button onClick={handleClick} sx={{ color: "#fff" }}>
            {t("common:languageVisible")}
          </Button>
          <Menu
            id="language"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleChangeLang(LANGUAGE_OPTION.VI)}>
              Vietnamese
            </MenuItem>
            <MenuItem onClick={() => handleChangeLang(LANGUAGE_OPTION.EN)}>
              English
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
