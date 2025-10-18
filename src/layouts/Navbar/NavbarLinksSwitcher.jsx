// NavbarLinksSwitcher.jsx
import GuestLinks from "./NavbarLinks/GuestLinks";
import UserLinks from "./NavbarLinks/UserLinks";

export default function NavbarLinksSwitcher({ role, isMobile, onLinkClick }) {
  switch (role) {
    case "user":
      return <UserLinks isMobile={isMobile} onLinkClick={onLinkClick} />;
    default:
      return <GuestLinks isMobile={isMobile} onLinkClick={onLinkClick} />;
  }
}
