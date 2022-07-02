import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import CategoryIcon from "@mui/icons-material/Category";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const PAGES = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Cart",
    link: "/cart",
  },
  {
    title: "Sign in",
    link: "/login",
  },
  {
    title: "Sign up",
    link: "/signup",
  },
  {
    title: "Contact",
    link: "/Contact",
  },
];

export const ADMINMENU = [
  {
    title: "Create Categories",
    link: "/admin/create/category",
    icon: <CategoryIcon />,
  },
  {
    title: "Manage Categories",
    link: "/admin/categories",
    icon: <CategoryIcon />,
  },
  {
    title: "Create Product",
    link: "/admin/create/product",
    icon: <AddBoxIcon />,
  },
  {
    title: "Manage Products",
    link: "/admin/products",
    icon: <InboxIcon />,
  },
  {
    title: "Manage Orders",
    link: "/admin/orders",
    icon: <InboxIcon />,
  },
];

export const USERMENU = [
  {
    title: "Update Profile",
    link: "/admin/orders",
    icon: <UpgradeIcon />,
  },
  {
    title: "Address",
    link: "/user/create/category",
    icon: <HomeIcon />,
  },
  {
    title: "Order History",
    link: "/user/categories",
    icon: <InboxIcon />,
  },
  {
    title: "Manage Orders",
    link: "/user/products",
    icon: <InboxIcon />,
  },
];

export const CUSTOMERPAGES = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Cart",
    link: "/cart",
  },
  {
    title: "Contact",
    link: "/Contact",
  },
  {
    title: "Customer Dashboard",
    link: "/user/dashboard",
  },
];
export const ADMINPAGES = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Cart",
    link: "/cart",
  },
  {
    title: "Contact",
    link: "/Contact",
  },
  {
    title: "Admin Dashboard",
    link: "/admin/dashboard",
  },
];

export const SETTINGS = [
  {
    title: "Profile",
    link: "/user/dashboard",
  },
  {
    title: "Account",
    link: "/user/dashboard",
  },
  {
    title: "Change Password",
    link: "/user/dashboard",
  },
];
