import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
// import { CaretDownIcon } from "@radix-ui/react-icons";
import * as Avatar from "@radix-ui/react-avatar";
import classNames from "classnames";
import { auth } from "../../../auth";
import Logout from "../LogOut";

const getInitials = (name) => {
  if (!name) return ""; // Handle case where name is undefined or null
  const nameParts = name.split(" ");
  const initials = nameParts.map((part) => part[0]).join("");
  return initials.toUpperCase(); // Convert to uppercase
};

const NavBar = async () => {
  const session = await auth();
  const userInitials = getInitials(session?.user?.name);
  return (
    <div>
      <div className={`NavbarMain flex`}>
        <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center ml-10">
          <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="/"
              >
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="/dashboard"
              >
                Dashboard
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="/sharebooks"
              >
                Share Books
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>
          <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
            <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
        <Avatar.Root className="bg-blackA1 inline-flex h-[38px] w-[38px] select-none items-center justify-center overflow-hidden rounded-full align-middle mt-1 mr-1">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={session?.user?.image}
            alt={session?.user?.name}
          />
          <Avatar.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium pt-2 pr-2"
            delayMs={600}
          >
            {userInitials}
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </div>
  );
};
export default NavBar;
