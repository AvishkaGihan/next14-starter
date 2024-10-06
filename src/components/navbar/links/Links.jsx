import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/blog", title: "Blog" },
  ];

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.path} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ path: "/login", title: "Login" }} />
      )}
    </div>
  );
};

export default Links;
