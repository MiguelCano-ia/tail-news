import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router";
import {
  setCategory,
  setEditProfile,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import {
  EditProfileDialog,
  NavbarMiddleSection,
  NavbarMobile,
  NavbarRightSection,
} from "./";
import { useEffect, useMemo } from "react";

export interface NavigationRoutesProps {
  navigationRoutes: {
    name: string;
    to: string;
  }[];
}

export const Navbar = ({ navigationRoutes }: NavigationRoutesProps) => {
  const { isOpen } = useAppSelector((state) => state.articles);
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

  return (
    <Disclosure
      as="nav"
      className="bg-gray-200 dark:bg-gray-800 min-w-screen sticky top-0"
    >
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
                <NavbarMiddleSection navigationRoutes={navigationRoutes} />
              </div>
              <NavbarRightSection />
            </div>
          </div>

          <NavbarMobile navigationRoutes={navigationRoutes} />

          <EditProfileDialog
            open={isOpen}
            onOpenChange={(open) => dispatch(setEditProfile(open))}
          />
        </>
      )}
    </Disclosure>
  );
};
