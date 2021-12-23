import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
