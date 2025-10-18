import NavbarLinksSwitcher from "./NavbarLinksSwitcher";

export default function DesktopNavbar({ role }) {
  return (
    <nav className="w-full hidden md:flex gap-7 items-center justify-end">
      <NavbarLinksSwitcher role={role} isMobile={false} />
    </nav>
  );
}