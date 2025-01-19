import { DisclosurePanel } from "@headlessui/react";
import { NavigationRoutesProps } from "../Navbar";
import { NavLink } from "react-router";

export const NavbarMobile = ({ navigationRoutes }: NavigationRoutesProps) => {
  const getMobileLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `block rounded-md px-3 py-2 text-base font-medium ${
      isActive
        ? "bg-white text-black text-black dark:bg-gray-700 dark:text-white"
        : "text-black hover:bg-white dark:text-white dark:hover:bg-gray-700"
    }`;

  return (
    <DisclosurePanel className="lg:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigationRoutes.map((item) => (
          <NavLink key={item.name} to={item.to} className={getMobileLinkStyles}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </DisclosurePanel>
  );
};
