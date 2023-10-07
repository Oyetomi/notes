import styles from "./Sidenote.module.css";

function SideNote({ type, title, children }) {
  const className = `${styles.wrapper} ${styles[type]}`;
  return (
    <aside className={className}>
      <h3 className={title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default SideNote;
