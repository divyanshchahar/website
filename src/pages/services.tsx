import ContactUsLayout from "@/ui/layouts/ContactUsLayout";
import TechstackLayout from "@/ui/layouts/TechStackLayout";
import Image from "next/image";
import iconApi from "../../public/icons/icon_api.svg";
import iconExpress from "../../public/icons/icon_express.svg";
import iconGithub from "../../public/icons/icon_github.svg";
import iconNext from "../../public/icons/icon_nextjs.svg";
import iconNode from "../../public/icons/icon_nodejs_small.svg";
import iconReact from "../../public/icons/icon_react.svg";
import iconTypescript from "../../public/icons/icon_typescript.svg";
import TechCard from "../ui/layouts/TechCard";
import styles from "./services.module.css";
import iconTypeScript from "../../public/icons/icon_typescript.svg";
import iconPrisma from "../../public/icons/icon_prisma.svg";
import iconPostgres from "../../public/icons/icon_postgres.svg";
import iconFigma from "../../public/icons/icon_figma.svg";
import iconRelume from "../../public/icons/icon_relume.svg";

const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <p className="h1">
        We specialise in building{" "}
        <span className={styles.highlightedText}>Web app based solutions</span>{" "}
        using the best of technology
      </p>

      <div className={styles.imageContainer}>
        <Image
          src={iconNode}
          alt="nodejs"
          style={{ height: "32px", width: "auto" }}
        />

        <Image
          src={iconExpress}
          alt="nodejs"
          style={{ height: "32px", width: "auto" }}
        />

        <Image
          src={iconTypescript}
          alt="nodejs"
          style={{ height: "32px", width: "auto" }}
        />

        <Image
          src={iconReact}
          alt="nodejs"
          style={{ height: "32px", width: "auto" }}
        />

        <Image
          src={iconGithub}
          alt="nodejs"
          style={{ height: "32px", width: "auto" }}
        />

        <Image
          src={iconApi}
          alt="nodejs"
          style={{ height: "32px", width: "auto" }}
        />

        <Image
          src={iconNext}
          alt="nodejs"
          style={{ height: "32px", width: "auto" }}
        />
      </div>
    </div>
  );
};

const ourServicesProps = [
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
    techImages: [
      { techImage: iconReact, altString: "reactjs icon" },
      { techImage: iconNext, altString: "nextjs icon" },
      { techImage: iconFigma, altString: "figma icon" },
      { techImage: iconRelume, altString: "relume icon" },
    ],
  },
  {
    titleText: "Backend Solution",
    descriptionText: (
      <p>
        At Leondevs we offer complete Backend/Server side solutions for our
        clients ranging from simple API servers to implementation of complex
        business logic. Our language of choice is TypeScript which makes node.js
        our defacto runtime. We build our backends in express.js.
      </p>
    ),
    techImages: [
      { techImage: iconNode, altString: "nodejs icon" },
      { techImage: iconApi, altString: "api icon" },
      { techImage: iconNext, altString: "nextjs icon" },
      { techImage: iconExpress, altString: "expressjs icon" },
      { techImage: iconTypeScript, altString: "typescript icon" },
      { techImage: iconPrisma, altString: "prisma icon" },
      { techImage: iconPostgres, altString: "postgres icon" },
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
    techImages: [
      { techImage: iconNode, altString: "node js" },
      { techImage: iconNext, altString: "next js" },
      { techImage: iconReact, altString: "react js" },
      { techImage: iconExpress, altString: "expressjs icon" },
      { techImage: iconApi, altString: "api icon" },
      { techImage: iconPrisma, altString: "prisma icon" },
      { techImage: iconFigma, altString: "figma icon" },
      { techImage: iconRelume, altString: "relume icon" },
    ],
  },
];

const OurServices = () => {
  return (
    <div className={styles.ourServicesContainer}>
      <p className="h4">Our Services</p>

      <div className={styles.ourServicesFlexContainer}>
        {ourServicesProps.map((item, index) => {
          return (
            <TechCard
              key={index}
              titleText={item.titleText}
              descriptionText={item.descriptionText}
              version="image"
              techImages={item.techImages}
            />
          );
        })}
      </div>
    </div>
  );
};

const OurTechStack = () => {
  return (
    <div className={styles.pagePadding}>
      <p className={`${styles.pageHeading} h4`}>Our Tech Stack</p>
      <TechstackLayout />
    </div>
  );
};

function Services() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <OurTechStack />
      <ContactUsLayout />
    </div>
  );
}

export default Services;
