import Footer from "@/ui/layouts/Footer";
import TopNavBar from "@/ui/layouts/TopNavBar";
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

      <p className="h1">We make web app empower business with technology</p>
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

const TechCard = ({
  titleText,
  descriptionText,
  imageArrary,
}: TechCardProps) => {
  return (
    <div className={styles.techCardContainer}>
      <p className="h4">{titleText}</p>

      <p>{descriptionText}</p>

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

      <CTAButton
        buttonText="Get a Quote"
        addedStyle={styles.techCardCtaButton}
      />
    </div>
  );
};

const ServiceSection = ({ techCards }: ServiceSectionProps) => {
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

const techCards = [
  {
    titleText: "Frontend Solution",
    descriptionText:
      "At Leondevs we believe in making frontend/client apps with focus on functionality, simplicity and consistent styling. JavaScript is our language of choice for all frontend/client applications. Depending on the requirements the frontend/client application will be built with either React.js or with Next.js. ",
    imageArrary: [
      { techImage: iconReact, techName: "React" },
      { techImage: iconNext, techName: "React" },
    ],
  },
  {
    titleText: "Backend Solution",
    descriptionText:
      "At leondevs we offer complete Backend/Server side solutions for our clients ranging from simple API servers to implementation of complex business logic.  Our language of choice is JavaScript which makes node.js our defacto runtime. We build our backends in express.js.",
    imageArrary: [
      { techImage: iconNode, techName: "node js" },
      { techImage: iconExpress, techName: "express js" },
      { techImage: iconNext, techName: "next js" },
      { techImage: iconApi, techName: "api" },
    ],
  },
  {
    titleText: "Ecommerce Solution",
    descriptionText:
      "At leondevs we offer complete Backend/Server side solutions for our clients ranging from simple API servers to implementation of complex business logic.  Our language of choice is JavaScript which makes node.js our defacto runtime. We build our backends in express.js.   ",
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
      <TopNavBar />
      <HeroSection />
      <ServiceSection techCards={techCards} />
      <Footer />
    </>
  );
}
