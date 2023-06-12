import Link from "next/link";
import navBarStyles from "../styles/navBar.module.css";

export default function NavBar(): JSX.Element {
  return (
    <div className={navBarStyles.navBar}>
      <Link href={encodeURI("/")} className={navBarStyles.navLink}>
        Home
      </Link>
      <Link href={encodeURI("/일기")} className={navBarStyles.navLink}>
        일기
      </Link>
      <Link href={encodeURI("/food")} className={navBarStyles.navLink}>
        Food
      </Link>
    </div>
  );
}
