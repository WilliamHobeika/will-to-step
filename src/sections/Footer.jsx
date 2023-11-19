import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="flex flex-row items-center justify-center">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={15}
              className="-translate-x-9"
            />
            <p className="font-montserrat leading-normal text-2xl font-bold text-white">
              Will To Step
            </p>
          </a>
          <p className="text-base leading-7 font-montserrat text-white-400 max-w-sm">
            Get shoes ready for the new term at our main "will to step" store. Find your
            perfect size in store and get rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-baby-blue cursor-pointer">
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-5">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-baby-blue cursor-pointer"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-normal items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="roundedfull m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
