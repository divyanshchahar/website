import Image, { StaticImageData } from "next/image";
import heroSectionImage from "../../public/pictures/heroImage.png";
import styles from "./Index.module.css";
import { ReactElement } from "react";
import iconApi from "./../../public/icons/icon_api.svg";
import iconNext from "./../../public/icons/icon_nextjs.svg";
import iconReact from "./../../public/icons/icon_react.svg";
import iconExpress from "./../../public/icons/icon_express.svg";
import iconNode from ".././../public/icons/icon_node.svg";
import CTAButton from "@/ui/components/CTAButton";
import AccordionPrimitive from "@/ui/primitives/Accordian";
import iconPeace from "../../public/icons/icon_peace.svg";
import internalLinks from "@/consts/internalLinks";

const HeroSection = () => {
  return (
    <div className={styles.herosectionContainer}>
      <div
        style={{
          maxWidth: "1024px",
          margin: "auto",
        }}
      >
        <Image
          src={heroSectionImage}
          alt="hero section"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <p className="h1">
        We <span className={styles.strikeThrough}>make web apps</span> empower
        business with technology
      </p>
    </div>
  );
};

interface TechCardProps {
  titleText: string;
  descriptionText: ReactElement;
  imageArrary: {
    techImage: StaticImageData;
    techName: string;
  }[];
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

const TechCard = ({
  titleText,
  descriptionText,
  imageArrary,
}: TechCardProps) => {
  return (
    <div className={styles.techCardContainer}>
      <p className="h4">{titleText}</p>

      {descriptionText}

      <div className={styles.techCardImageContainer}>
        {imageArrary.map((item) => {
          return (
            <div>
              <Image
                src={item.techImage}
                alt={item.techName}
                className={styles.techCardIcon}
              />
            </div>
          );
        })}
      </div>

      <a href={internalLinks.contactus} className="pointerOnHover">
        <CTAButton
          buttonText="Get a Quote"
          addedStyle={styles.techCardCtaButton}
        />
      </a>
    </div>
  );
};

const ServiceSection = ({ techCards }: { techCards: ServiceSectionProps }) => {
  return (
    <div className={styles.serviceSectionContainer}>
      <h1 className="h1">Our Services</h1>

      <div className={styles.serviceSectionCardContainer}>
        {techCards.map((techCardItem) => {
          return (
            <TechCard
              titleText={techCardItem.titleText}
              descriptionText={techCardItem.descriptionText}
              imageArrary={techCardItem.imageArrary}
            />
          );
        })}
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <div className={styles.whatWeOfferContainer}>
      <h1 className="h3">What we Offer</h1>

      <div className={styles.whatWeOfferMediaContainer}>
        <div>
          <div className={styles.whatWeOfferInnerContainer}>
            <Image
              src={iconPeace}
              alt="api"
              style={{ width: "100%", height: "auto" }}
            />
            <h2 className={`h5 ${styles.higlightedText}`}>Peace of Mind</h2>
          </div>
        </div>

        <AccordionPrimitive items={accordianProps} />
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
    titleText: "Ecommerce Solution",
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
      <WhatWeOffer />
    </>
  );
}
