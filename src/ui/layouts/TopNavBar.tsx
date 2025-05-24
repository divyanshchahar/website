import CTAButton from "../components/CTAButton";
import NavLink from "../components/NavLink";
import Image from "next/image";
import IconButton from "../components/IconButton";
import internalLinks from "../../consts/internalLinks";
import externalLinks from "../../consts/externalLinks";
import companyLogo from "../../../public/icons/leondevs_logo.svg";
import hamburgerMenu from "../../../public/icons/icon_hamburger_menu.svg";
import styles from "./TopNavBar.module.css";

function TopNavBar() {
  return (
    <header>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <IconButton
            iconImage={hamburgerMenu}
            iconName="menu"
            addedStyle={styles.iconButton}
          />

          <a href={"/"}>
            <Image src={companyLogo} height={32} alt="company logo" />
          </a>
        </div>

        <div className={styles.links}>
          <NavLink linkAddress={internalLinks.aboutUs} linkText="About Us" />
          <NavLink
            linkAddress={internalLinks.services}
            linkText="Our Services"
          />
          <NavLink linkAddress="" linkText="Technologies" />
          <NavLink linkAddress="" linkText="Portfolio" />
        </div>

        <a href={internalLinks.contactus} target="blank">
          <CTAButton buttonText="Get a Quote" />
        </a>
      </div>
    </header>
  );
}

export default TopNavBar;
