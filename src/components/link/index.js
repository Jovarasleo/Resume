import cx from "classnames";
import "./index.css";

function Link({ href, children, className, target }) {
  return (
    <a className={cx("link", className)} href={href} rel="noreferrer" target={target}>
      {children}
    </a>
  );
}

export default Link;
