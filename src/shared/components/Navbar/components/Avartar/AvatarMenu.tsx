import { AvatarDemo, AvatarMenuItems } from "./";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

export const AvatarMenu = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full text-sm text-primary">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <AvatarDemo />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-background py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <AvatarMenuItems />
      </MenuItems>
    </Menu>
  );
};
