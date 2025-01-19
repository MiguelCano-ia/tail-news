import { NavLink } from "react-router";
import { NavigationRoutesProps } from "../Navbar";

export const NavbarMiddleSection = ({
  navigationRoutes,
}: NavigationRoutesProps) => {
  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "border-b-2 border-primary dark:bg-gray-900 dark:text-white dark:border-none dark:rounded-md px-3 py-2 text-md font-medium"
      : "dark:text-gray-300 dark:border-none dark:hover:bg-gray-700 dark:hover:text-white dark:rounded-md px-3 py-2 text-md font-medium";

  return (
    <>
      <div className="flex shrink-0 items-center">
        <div className="text-primary font-semibold text-lg max-lg:mr-10">
          Tail News
        </div>
      </div>
      <div className="hidden lg:ml-6 lg:block ">
        <div className="flex space-x-4 text-sm">
          {navigationRoutes.map((item) => (
            <NavLink key={item.name} to={item.to} className={getLinkStyles}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
