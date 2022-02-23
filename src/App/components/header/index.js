import "./index.css";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import data from "../../data";

function Header({ language, setLanguage }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="header__info">
        <h1 className="header__info-name">{data[language].header.name}</h1>
        <h2 className="header__info-title">{data[language].header.title}</h2>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "light" ? false : true}
          onChange={() => toggleTheme()}
        ></input>
        <span className="slider round"></span>
      </label>
      <select
        className={`languageInput`}
        value={language}
        onChange={setLanguage}
      >
        <option value="en">EN</option>
        <option value="lt">LT</option>
      </select>
    </header>
  );
}

export default Header;
