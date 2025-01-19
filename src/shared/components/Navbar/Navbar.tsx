import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate, useParams } from "react-router";
import {
  setCategory,
  setEditProfile,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { AvatarMenu, EditProfileDialog } from "./";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "../DarkModeToggle";
import { useCheckingAuth } from "@/features";
import { useEffect, useMemo } from "react";

interface NavigationRoutesProps {
  navigationRoutes: {
    name: string;
    to: string;
  }[];
}

export const Navbar = ({ navigationRoutes }: NavigationRoutesProps) => {
  const { isOpen } = useAppSelector((state) => state.articles);
  const { category = "Home" } = useParams();
  const { status } = useCheckingAuth();
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
      ? "border-b-2 border-primary dark:bg-gray-900 dark:text-white dark:border-none dark:rounded-md px-3 py-2 text-md font-medium"
      : "dark:text-gray-300 dark:border-none dark:hover:bg-gray-700 dark:hover:text-white dark:rounded-md px-3 py-2 text-md font-medium";

  const getMobileLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `block rounded-md px-3 py-2 text-base font-medium ${
      isActive
        ? "bg-white text-white text-black dark:bg-gray-700 dark:text-white"
        : "text-black hover:bg-white dark:text-white dark:hover:bg-gray-700"
    }`;

  return (
    <Disclosure as="nav" className="bg-gray-200 dark:bg-gray-800 min-w-screen">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block size-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block size-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex shrink-0 items-center">
                  <div className="text-primary font-semibold text-lg max-lg:mr-10">
                    Tail News
                  </div>
                </div>
                <div className="hidden lg:ml-6 lg:block ">
                  <div className="flex space-x-4 text-sm">
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <DarkModeToggle />
                {status === "authenticated" ? (
                  <AvatarMenu />
                ) : (
                  <Link to="/auth/sign-in">
                    <Button variant="link">Sign in</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
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

          <EditProfileDialog
            open={isOpen}
            onOpenChange={(open) => dispatch(setEditProfile(open))}
          />
        </>
      )}
    </Disclosure>
  );
};
