import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
