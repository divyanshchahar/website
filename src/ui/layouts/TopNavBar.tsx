import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { DropdownMenu } from "radix-ui";
import hamburgerMenu from "../../../public/icons/icon_hamburger_menu.svg";
import companyLogo from "../../../public/icons/leondevs_logo.svg";
import internalLinks from "../../consts/internalLinks";
import CTAButton from "../components/CTAButton";
import NavLink from "../components/NavLink";
import styles from "./TopNavBar.module.css";

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
  const { data, status } = useSession();

  const router = useRouter();

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.dropDownMenuContainer}>
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

        <div className={styles.buttonContainer}>
          {/* {status === "authenticated" ? (
            <CTAButton
              buttonText="Dashboard"
              clickHandler={() => router.push("/dashboard")}
            />
          ) : (
            <CTAButton
              buttonText="Join Referral Program"
              version="outline"
              clickHandler={() => signIn("google")}
            />
          )} */}

          <a href={internalLinks.contactus} target="blank">
            <CTAButton buttonText="Get a Quote" clickHandler={() => {}} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default TopNavBar;
