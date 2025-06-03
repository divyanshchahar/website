import CTAButton from "../components/CTAButton";
import NavLink from "../components/NavLink";
import Image from "next/image";
import internalLinks from "../../consts/internalLinks";
import companyLogo from "../../../public/icons/leondevs_logo.svg";
import hamburgerMenu from "../../../public/icons/icon_hamburger_menu.svg";
import styles from "./TopNavBar.module.css";
import { DropdownMenu } from "radix-ui";
import { useRouter } from "next/router";

function MyDropDownMenu() {
  const router = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Image
          src={hamburgerMenu}
          alt="hamborger menu"
          className={styles.iconButton}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropDownMenuContent}>
          <DropdownMenu.Item
            onSelect={() => {
              router.push("/services");
            }}
          >
            Our Services
          </DropdownMenu.Item>

          <DropdownMenu.Separator className={styles.seprator} />

          <DropdownMenu.Item
            onSelect={() => {
              router.push("/aboutus");
            }}
          >
            About Us
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function TopNavBar() {
  return (
    <header>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <MyDropDownMenu />
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
        </div>

        <a href={internalLinks.contactus} target="blank">
          <CTAButton buttonText="Get a Quote" />
        </a>
      </div>
    </header>
  );
}

export default TopNavBar;
