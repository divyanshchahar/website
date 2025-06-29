import ContactUsLayout from "@/ui/layouts/ContactUsLayout";
import SdlcLayout from "@/ui/layouts/SdlcLayout";
import Image from "next/image";
import { ReactElement } from "react";
import heroSectionImage from "../../public/pictures/heroImage.png";
import iconNode from ".././../public/icons/icon_node.svg";
import iconApi from "./../../public/icons/icon_api.svg";
import iconExpress from "./../../public/icons/icon_express.svg";
import iconNext from "./../../public/icons/icon_nextjs.svg";
import iconReact from "./../../public/icons/icon_react.svg";
import styles from "./Index.module.css";
import TechCard from "../ui/layouts/TechCard";

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

type ServiceSectionProps = { techCards: TechCardProps[] };

const serviceSectionProps = [
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

const ServiceSection = ({ techCards }: ServiceSectionProps) => {
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
              version="text"
              techImages={undefined}
            />
          );
        })}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection techCards={serviceSectionProps} />
      <SdlcLayout />
      <ContactUsLayout />
    </>
  );
}
