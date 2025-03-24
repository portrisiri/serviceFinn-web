import { LayoutDashboard, User2Icon } from "lucide-react";

export const userSidebarLink = [
    { label: "Profile", link: "/user/profile", icon: <LayoutDashboard /> },
    { label: "Booking Management", link: "/user/booking-management", icon: <User2Icon /> },
    { label: "Review Shop", link: "/user/review-shop", icon: <User2Icon /> },
];

export const adminSidebarLink = [
    { label: "Dashboard", link: "/admin", icon: <LayoutDashboard /> },
    { label: "Users Management", link: "/admin/users", icon: <LayoutDashboard /> },
    { label: "Providers Management", link: "/admin/providers", icon: <User2Icon /> },
    // { label: "Orders Management", link: "/admin/orders", icon: <User2Icon /> },
    // { label: "Services History", link: "/admin/history", icon: <User2Icon /> },
];

export const providerSidebarLink = [
    { label: "Dashboard", link: "/provider", icon: <LayoutDashboard /> },
    { label: "Profile", link: "/provider/profile", icon: <LayoutDashboard /> },
    { label: "Shop Management", link: "/provider/shop-management", icon: <LayoutDashboard /> },
    { label: "Orders Management", link: "/provider/booking-management", icon: <User2Icon /> },
    { label: "Reviews", link: "/provider/review-shop", icon: <User2Icon /> },
];
