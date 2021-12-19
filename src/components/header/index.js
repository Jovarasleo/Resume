import "./index.css";
import data from "../../data"

function Header({language, setLanguage, theme, setTheme}) {
  return (
    <header className={`header header--${theme}`}>
      <div className={`header__info ${theme}`}>
        <h1 className="header__info-name">{data[language].header.name}</h1>
        <h2 className="header__info-title">{data[language].header.title}</h2>
      </div>
      <label className="switch">
        <input type="checkbox" value={theme} onChange={setTheme}></input>
        <span className="slider round"></span>
      </label>
      <select className = {`languageInput ${theme}`} value={language} onChange={setLanguage}>
          <option value="en">EN</option>
          <option value="lt">LT</option>
      </select>
    </header>
  );
}

export default Header;
