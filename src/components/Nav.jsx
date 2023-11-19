//importing icons and images
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

//importing nav links
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={100} height={15} />
        </a>
        <p className="font-montserrat leading-normal text-2xl font-bold text-gray-700">
          Will To Step
        </p>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-motserrat leading-normal text-lg font-semibold text-slate-gray hover:text-baby-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
