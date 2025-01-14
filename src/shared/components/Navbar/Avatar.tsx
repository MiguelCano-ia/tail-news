import { Link } from "react-router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { startSignOut } from "@/store/slices/auth/thuks";
import { useAppDispatch, useAppSelector } from "@/store";
import { CircleUserRound } from "lucide-react";

export const Avatar = () => {
  const dispatch = useAppDispatch();
  const { photoURL } = useAppSelector((state) => state.auth);

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full text-sm text-primary">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          {photoURL ? (
            <img alt="" src={photoURL} className="size-8 rounded-full" />
          ) : (
            <CircleUserRound className="size-8 stoke" />
          )}
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-background py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm data-[focus]:bg-gray-200 dark:text-white dark:data-[focus]:bg-gray-800 data-[focus]:outline-none"
          >
            Your Profile
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm data-[focus]:bg-gray-200 dark:text-white dark:data-[focus]:bg-gray-800 data-[focus]:outline-none"
          >
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <Link
            to="/auth/sign-in"
            className="block px-4 py-2 text-sm data-[focus]:bg-gray-200 text-destructive dark:data-[focus]:bg-gray-800 data-[focus]:outline-none"
            onClick={() => {
              dispatch(startSignOut());
            }}
          >
            Sign out
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
