import "./index.css";

function Link({ href, children, className, target }) {
  const newClass = "link".concat(" ", className);
  return (
    <a className={newClass} href={href} rel="noreferrer" target={target}>
      {children}
    </a>
  );
}

export default Link;
