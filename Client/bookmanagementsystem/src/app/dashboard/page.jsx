import Image from "next/image";
import Logout from "../components/LogOut";
import BookShowCase from "../components/DashBoard/BookShowCase";
import { auth } from "../../auth";

import { redirect } from "next/navigation";
import NavBar from "../components/DashBoard/NavBar.jsx";

const DashBoardPage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/login");

  return (
    <div className={`DashBoardPagePrimary`}>
      <NavBar />
      <div className="flex flex-col items-center m-4">
        <h1 className="text-violet11 text-3xl my-2">
          Welcome, {session?.user?.name.split(" ")[0]}
        </h1>
        {/* <Image
          src={session?.user?.image}
          alt={session?.user?.name}
          width={72}
          height={72}
          className="rounded-full"
        /> */}
        {/* <Logout /> */}
        <BookShowCase />
      </div>
    </div>
  );
};

export default DashBoardPage;
