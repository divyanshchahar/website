import Image from "next/image";
import companyLogo from "../../../public/icons/leondevs_logo.svg";
import NavLink from "../components/NavLink";
import contactInfo from "../../consts/contactInfo";
import internalLinks from "../../consts/internalLinks";
import externalLinks from "../../consts/externalLinks";
import styles from "./Footer.module.css";

const linksGroup1 = {
  groupName: "Services",
  links: [
    {
      linkText: "Complete Frontend Solutions",
      linkAddress: internalLinks.services,
    },
    {
      linkText: "Complete Backend Solutions",
      linkAddress: internalLinks.services,
    },
  ],
};

const linksGroup2 = {
  groupName: "Technologies",
  links: [
    { linkText: "Node.js", linkAddress: externalLinks.nodejs },
    { linkText: "Express.js", linkAddress: externalLinks.expressjs },
    { linkText: "React.js", linkAddress: externalLinks.reactjs },
    { linkText: "Next.js", linkAddress: externalLinks.nextjs },
  ],
};

export type LinkContainerPorps = {
  groupName: string;
  links: {
    linkText: string;
    linkAddress: string;
  }[];
};

const LinkContainer = ({ groupName, links }: LinkContainerPorps) => {
  return (
    <div>
      <h4 className="h6">{groupName}</h4>
      {links.map((link) => {
        return (
          <>
            <NavLink linkText={link.linkText} linkAddress={link.linkAddress} />
            <br />
          </>
        );
      })}
    </div>
  );
};

const BrandingContainer = () => {
  return (
    <div className={styles.brandingContainer}>
      <div>
        <a href={"/"}>
          <Image src={companyLogo} alt="leondevs logo" width={64} />
        </a>
      </div>
      <div>
        <p>{contactInfo.emailAddress}</p>
        <p>{contactInfo.mobileno}</p>
      </div>
    </div>
  );
};

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <LinkContainer
          groupName={linksGroup1.groupName}
          links={linksGroup1.links}
        />

        <LinkContainer
          groupName={linksGroup2.groupName}
          links={linksGroup2.links}
        />

        <BrandingContainer />
      </div>
    </footer>
  );
}

export default Footer;
