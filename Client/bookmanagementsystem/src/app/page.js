import Image from "next/image";
import NavBar from "./components/NavBar";
import { redirect } from "next/navigation";
import MainBanner from "./components/Home/MainBanner";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={`min-h-screen ${styles.HomeMainDiv}`}>
      <div className={`${styles.HomeFirstMainDiv}`}>
        <NavBar />
        <MainBanner />
      </div>
    </div>
  );
}
