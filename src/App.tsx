import { I18nextProvider } from "react-i18next";
import Header from "./components/header";
import i18n from "./ultils/i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </I18nextProvider>
    </BrowserRouter>
  );
}
