import Image from "next/image";
import NavBar from "./components/NavBar";
import { redirect } from "next/navigation";
export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
    </div>
  );
}
