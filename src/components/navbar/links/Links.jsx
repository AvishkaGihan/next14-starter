"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/blog", title: "Blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
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
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
