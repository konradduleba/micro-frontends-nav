import { navigateToUrl } from "single-spa";

import "./colors.scss";
import styles from "./navigation.module.scss";

interface MenuItem {
  path: string;
  name: string;
}

const MENU_LIST: MenuItem[] = [
  {
    path: "/",
    name: "Welcome",
  },
  {
    path: "/bimbows-3-1",
    name: "Bimbows 3.1",
  },
];

const Navigation = () => {
  return (
    <ul className={styles.menu}>
      {MENU_LIST.map(({ path, name }: MenuItem) => (
        <li key={path}>
          <a href={path} onClick={navigateToUrl} className={styles.item}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
