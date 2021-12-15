import cx from "classnames";
import "./index.css";

function Pill({ children, color, theme }) {
  const className = cx("pill", ["green", "yellow", "red"].includes(color) && `pill--${color}--${theme}`);

  return <span className={`${className} pill--${theme}`}>{children}</span>;
}

export default Pill;
