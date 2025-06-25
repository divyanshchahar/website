import internalLinks from "@/consts/internalLinks";
import CTAButton from "@/ui/components/CTAButton";
import Image from "next/image";
import { ReactElement } from "react";
import heroSectionImage from "../../public/pictures/heroImage.png";
import iconNode from ".././../public/icons/icon_node.svg";
import iconApi from "./../../public/icons/icon_api.svg";
import iconExpress from "./../../public/icons/icon_express.svg";
import iconNext from "./../../public/icons/icon_nextjs.svg";
import iconReact from "./../../public/icons/icon_react.svg";
import styles from "./Index.module.css";
import SdlcLayout from "@/ui/layouts/SdlcLayout";
import ContactUsLayout from "@/ui/layouts/ContactUsLayout";

const HeroSection = () => {
  return (
    <div className={styles.herosectionContainer}>
      <div>
        <p className="h1">One Web App for all screens</p>
      </div>
      <div className={styles.heroSectionImageContainer}>
        <Image
          src={heroSectionImage}
          alt="hero section"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

interface TechCardProps {
  titleText: string;
  descriptionText: ReactElement;
}

type ServiceSectionProps = TechCardProps[];

const accordianProps = [
  {
    triggerText: "Quality",
    itemValue: "Quality",
    contentBody: (
      <div>
        Over the years we have learnt a lot form our mistakes and have set up
        very{" "}
        <span className={styles.higlightedText}>
          rigorous and elaborate standard operating procedures
        </span>{" "}
        to ensure the{" "}
        <span className={styles.higlightedText}>
          highest standards of quality
        </span>
      </div>
    ),
  },
  {
    triggerText: "Commitment",
    itemValue: "Commitment",
    contentBody: (
      <div>
        At Leondevs{" "}
        <span className={styles.higlightedText}>
          a promise made is a promise kept
        </span>
        . We deliver on all the points mentioned in the agreement.
      </div>
    ),
  },
  {
    triggerText: "Transparency",
    itemValue: "Transparency",
    contentBody: (
      <div>
        We operate with{" "}
        <span className={styles.higlightedText}>100% transparency</span>. To
        avoid any confusions we make an agreement listing all the requirements
        and the expected time line of delivery
      </div>
    ),
  },
];

const TechCard = ({ titleText, descriptionText }: TechCardProps) => {
  return (
    <div className={`${styles.techCardContainer} greyShadow`}>
      <p className="h4">{titleText}</p>

      {descriptionText}

      <a href={internalLinks.contactus} className="pointerOnHover">
        <CTAButton
          buttonText="Get a Quote"
          addedStyle={styles.techCardCtaButton}
          clickHandler={() => {}}
        />
      </a>
    </div>
  );
};

const ServiceSection = ({ techCards }: { techCards: ServiceSectionProps }) => {
  return (
    <div className={styles.serviceSectionContainer}>
      <h1 className="h4">Our Services</h1>

      <div className={styles.serviceSectionCardContainer}>
        {techCards.map((techCardItem, i) => {
          return (
            <TechCard
              key={i}
              titleText={techCardItem.titleText}
              descriptionText={techCardItem.descriptionText}
            />
          );
        })}
      </div>
    </div>
  );
};

const techCards: ServiceSectionProps = [
  {
    titleText: "Frontend Solution",
    descriptionText: (
      <p>
        At Leondevs we believe in making frontend/client apps with focus on
        functionality, simplicity and consistent styling. JavaScript is our
        language of choice for all frontend/client applications. Depending on
        the requirements the frontend/client application will be built with
        either React.js or with Next.js.
      </p>
    ),
    imageArrary: [
      { techImage: iconReact, techName: "React" },
      { techImage: iconNext, techName: "React" },
    ],
  },
  {
    titleText: "Backend Solution",
    descriptionText: (
      <p>
        At leondevs we offer complete Backend/Server side solutions for our
        clients ranging from simple API servers to implementation of complex
        business logic. Our language of choice is JavaScript which makes node.js
        our defacto runtime. We build our backends in express.js.
      </p>
    ),
    imageArrary: [
      { techImage: iconNode, techName: "node js" },
      { techImage: iconExpress, techName: "express js" },
      { techImage: iconNext, techName: "next js" },
      { techImage: iconApi, techName: "api" },
    ],
  },
  {
    titleText: "E-Commerce Solution",
    descriptionText: (
      <p>
        At leondevs we offer complete Backend/Server side solutions for our
        clients ranging from simple API servers to implementation of complex
        business logic. Our language of choice is JavaScript which makes node.js
        our defacto runtime. We build our backends in express.js.
      </p>
    ),
    imageArrary: [
      { techImage: iconNode, techName: "node js" },
      { techImage: iconExpress, techName: "express js" },
      { techImage: iconNext, techName: "next js" },
      { techImage: iconApi, techName: "api" },
      { techImage: iconReact, techName: "react js" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection techCards={techCards} />
      <SdlcLayout />
      <ContactUsLayout />
    </>
  );
}
