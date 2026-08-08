import { useState } from "react";
import { NavLink } from "react-router-dom";
import MasterIcon from "../../assets/master-icon.png";
import { Menu, X, ChevronDown } from "lucide-react";

const SERVICE_LINKS = [
  {
    name: "Hydrogeological Surveys",
    path: "/services/hydrogeological-surveys",
  },
  { name: "Borehole Drilling", path: "/services/borehole-drilling" },
  { name: "Borehole Equipping", path: "/services/borehole-equipping" },
  { name: "Borehole Solarisation", path: "/services/borehole-solarisation" },
  { name: "Borehole Inspection", path: "/services/borehole-inspection" },
  {
    name: "Borehole Rehabilitation",
    path: "/services/borehole-rehabilitation",
  },
];

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", children: SERVICE_LINKS },
  { name: "Projects", path: "/projects" },
  { name: "Resource Centre", path: "/resource-centre" },
  { name: "Contact", path: "/contact" },
];

const linkBase =
  "text-sm font-medium tracking-wide transition-colors duration-200";
const linkActive = "text-[#1B1F5C] border-b-2 border-[#1B1F5C]";
const linkInactive =
  "text-[#0F9E9E] hover:text-[#1B1F5C] border-b-2 border-transparent";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2"
        >
          <img
            src={MasterIcon}
            alt="Masterpiece Hydro-Solutions"
            className="h-10 w-auto"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-[#1B1F5C]">
              Masterpiece
            </span>
            <span className="block text-xs font-semibold text-[#0F9E9E]">
              Hydro-Solutions
            </span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`${linkBase} ${linkInactive} flex items-center gap-1`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  {link.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <ul className="absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.name}>
                        <NavLink
                          to={child.path}
                          className="block px-4 py-2 text-sm text-[#1B1F5C] hover:bg-[#5DD9D9]/15 hover:text-[#0F9E9E]"
                        >
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : linkInactive} pb-1`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        {/* CTA button (desktop) — scrolls to the contact methods section */}
        <NavLink
          to="/contact#contact-methods"
          className="hidden rounded-md bg-[#1B1F5C] px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#141748] lg:inline-block"
        >
          Contact Us Today
        </NavLink>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className="text-[#1B1F5C] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-150" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-gray-100 px-4 py-3">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li key={link.name}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-sm font-medium text-[#1B1F5C]"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                >
                  {link.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  className={`overflow-hidden pl-4 transition-[max-height] duration-300 ease-in-out ${
                    mobileServicesOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <li key={child.name}>
                      <NavLink
                        to={child.path}
                        onClick={closeMobileMenu}
                        className="block py-2 text-sm text-[#0F9E9E]"
                      >
                        {child.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-medium ${
                      isActive ? "text-[#1B1F5C]" : "text-[#0F9E9E]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ),
          )}
          <li className="mt-2">
            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className="block rounded-md bg-[#1B1F5C] px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Call Us Today
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
