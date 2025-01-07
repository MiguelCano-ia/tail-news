import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { DarkModeToggle } from "./DarkModeToggle";
import { NavLink, useNavigate, useParams } from "react-router";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/store";
import { setCategory } from "@/store/slices/articleSlice";

interface NavigationRoutesProps {
  navigationRoutes: {
    name: string;
    to: string;
  }[];
}

export const Navbar = ({ navigationRoutes }: NavigationRoutesProps) => {
  const { category = "Home" } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const capitalizeFirst = useMemo(() => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }, [category]);

  useEffect(() => {
    const navigationNames = navigationRoutes.map((name) =>
      name.name.toLowerCase()
    );
    if (!navigationNames.includes(category.toLowerCase())) navigate("/");
    dispatch(setCategory(capitalizeFirst));
  }, [category]);

  const getLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "border-b-2 border-black dark:bg-gray-900 dark:text-white dark:border-none dark:rounded-md px-3 py-2 text-sm font-medium"
      : "dark:text-gray-300 dark:border-none dark:hover:bg-gray-700 dark:hover:text-white dark:rounded-md px-3 py-2 text-sm font-medium";

  const getMobileLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `block rounded-md px-3 py-2 text-base font-medium ${
      isActive
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <Disclosure as="nav" className="bg-gray-200 dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block size-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block size-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigationRoutes.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={getLinkStyles}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DarkModeToggle />
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationRoutes.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={getMobileLinkStyles}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
