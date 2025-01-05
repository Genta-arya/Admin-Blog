import {
  FaHome,
  FaServicestack,
  FaNewspaper,
  FaTag,
  FaComment,
  FaUser,
} from "react-icons/fa";

export const menuItems = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Blog", path: "/blog", icon: FaNewspaper },
  { name: "Comments", path: "/comments", icon: FaComment },
  { name: "Category", path: "/category", icon: FaServicestack },
  { name: "Tags", path: "/tags", icon: FaTag },
  { name: "Profile", path: "/profile", icon: FaUser },
];

export const modalTypes = {
  edit: "Edit",
  delete: "Delete",
  create: "Create",
};

export const Text = "text-xs md:text-sm lg:text-sm";
