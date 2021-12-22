import React from "react";
import styles from "./Header.module.scss";

export const Header = ({ ...props }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading} {...props}>
        Domain Hack
      </h1>
    </header>
  );
};
