import { Link } from "react-router";
import { MenuItem } from "@headlessui/react";
import { setEditProfile, useAppDispatch, useAppSelector } from "@/store";
import { startSignOut } from "@/store/slices/auth/thuks";

export const AvatarMenuItems = () => {
  const dispatch = useAppDispatch();
  const { provider } = useAppSelector((state) => state.auth);

  return (
    <>
      <MenuItem>
        <Link
          to="/favorite-articles"
          className="block px-4 py-2 text-sm data-[focus]:bg-gray-200 dark:text-white dark:data-[focus]:bg-gray-800 data-[focus]:outline-none"
        >
          Favorite Articles
        </Link>
      </MenuItem>

      {provider !== "google" && (
        <MenuItem>
          <div
            className="block px-4 py-2 text-sm data-[focus]:bg-gray-200 dark:text-white dark:data-[focus]:bg-gray-800 data-[focus]:outline-none"
            onClick={() => dispatch(setEditProfile(true))}
          >
            Edit Profile
          </div>
        </MenuItem>
      )}

      <MenuItem>
        <Link
          to="/"
          className="block px-4 py-2 text-sm data-[focus]:bg-gray-200 text-destructive dark:data-[focus]:bg-gray-800 data-[focus]:outline-none"
          onClick={() => {
            dispatch(startSignOut());
          }}
        >
          Sign out
        </Link>
      </MenuItem>
    </>
  );
};
