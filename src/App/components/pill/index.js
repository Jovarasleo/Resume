import "./index.css";

function Pill({ children, theme }) {
  return <span className={`pill pill--${theme}`}>{children}</span>;
}

export default Pill;
