import Image, { StaticImageData } from "next/image";
import iconAws from "../../../public/icons/icon_aws.svg";
import iconDocker from "../../../public/icons/icon_docker.svg";
import iconExpress from "../../../public/icons/icon_express.svg";
import iconFigma from "../../../public/icons/icon_figma.svg";
import iconGithub from "../../../public/icons/icon_github.svg";
import iconGoogleAnalytics from "../../../public/icons/icon_google_analytics.svg";
import iconGoogleSheets from "../../../public/icons/icon_google_sheets.svg";
import iconGoogleDocs from "../../../public/icons/icon_goole_docs.svg";
import iconNext from "../../../public/icons/icon_nextjs.svg";
import iconNode from "../../../public/icons/icon_nodejs_small.svg";
import iconPostgreSql from "../../../public/icons/icon_postgres.svg";
import iconPostman from "../../../public/icons/icon_postman.svg";
import iconPrisma from "../../../public/icons/icon_prisma.svg";
import iconReact from "../../../public/icons/icon_react.svg";
import iconRelume from "../../../public/icons/icon_relume.svg";
import iconTurboRepo from "../../../public/icons/icon_turborepo.svg";
import iconTypeScript from "../../../public/icons/icon_typescript.svg";
import styles from "./TechStackLayout.module.css";

// #########
// # TYPES #
// #########

export type TechTypes = {
  techName: string;
  techIcon: StaticImageData;
  altString: string;
};

export type TechCardTypes = {
  heading: string;
  techArray: TechTypes[];
};

export type FieldGroupTypes = {
  heading: string;
  techCards: TechCardTypes[];
};

// ###########
// # LAYOUTS #
// ###########

const Tech = ({ techName, techIcon, altString }: TechTypes) => {
  return (
    <div className={styles.techContainer}>
      <Image src={techIcon} alt={altString} /> <p>{techName}</p>
    </div>
  );
};

const TechCard = ({ heading, techArray }: TechCardTypes) => {
  return (
    <div className={styles.techCardContainer}>
      <p className={styles.subHeading}>{heading}</p>
      {techArray.map((tech, index) => (
        <Tech
          techName={tech.techName}
          techIcon={tech.techIcon}
          altString={tech.altString}
          key={index}
        />
      ))}
    </div>
  );
};

const FiledGroup = ({ heading, techCards }: FieldGroupTypes) => {
  return (
    <div className={styles.fieldContainer}>
      <div>
        <p className="h5">{heading}</p>
      </div>

      <div className={styles.fieldFlexContainer}>
        {techCards.map((techCard, index) => {
          return (
            <TechCard
              key={index}
              heading={techCard.heading}
              techArray={techCard.techArray}
            />
          );
        })}
      </div>
    </div>
  );
};

// #########
// # PROPS #
// #########

const googleDocs: TechTypes = {
  techName: "Google Sheets",
  techIcon: iconGoogleSheets,
  altString: "google docs icon",
};

const googleSheets: TechTypes = {
  techName: "Google Docs",
  techIcon: iconGoogleDocs,
  altString: "google docs icon",
};

const googleAnalytics: TechTypes = {
  techName: "Google Analyticcs",
  techIcon: iconGoogleAnalytics,
  altString: "Google Analytics icon",
};

const figma: TechTypes = {
  techName: "Figma",
  techIcon: iconFigma,
  altString: "figma icon",
};

const relume: TechTypes = {
  techIcon: iconRelume,
  techName: "Relume",
  altString: "relume icon",
};

const typeScript: TechTypes = {
  techName: "TypeScript",
  techIcon: iconTypeScript,
  altString: "typescript icon",
};

const nextTech: TechTypes = {
  techName: "Next.js",
  techIcon: iconNext,
  altString: "next icon",
};

const react: TechTypes = {
  techName: "React",
  techIcon: iconReact,
  altString: "react icon",
};

const nodeTech: TechTypes = {
  techName: "Node.js",
  techIcon: iconNode,
  altString: "node icon",
};

const prisma: TechTypes = {
  techName: "Prisma",
  techIcon: iconPrisma,
  altString: "prisma icon",
};

const postgres: TechTypes = {
  techName: "PostgreSql",
  techIcon: iconPostgreSql,
  altString: "PostgreSql icon",
};

const express: TechTypes = {
  techName: "express",
  techIcon: iconExpress,
  altString: "express icon",
};

const aws: TechTypes = {
  techName: "AWS",
  techIcon: iconAws,
  altString: "AWS icon",
};

const docker: TechTypes = {
  techName: "Docker",
  techIcon: iconDocker,
  altString: "Docker icon",
};

const truboRepo: TechTypes = {
  techName: "turborepo",
  techIcon: iconTurboRepo,
  altString: "turborepo icon",
};

const gitHub: TechTypes = {
  techName: "Github CI/CD",
  techIcon: iconGithub,
  altString: "gitghub ci/cd cion",
};

const postMan: TechTypes = {
  techName: "Postman",
  techIcon: iconPostman,
  altString: "postman icon",
};

// ##################################################################

const management: TechCardTypes = {
  heading: "Management & Documentation",
  techArray: [googleDocs, googleSheets],
};

const analytics: TechCardTypes = {
  heading: "Analytics",
  techArray: [googleAnalytics],
};

const ideation: TechCardTypes = {
  heading: "Ideation",
  techArray: [figma, relume],
};

const implementation: TechCardTypes = {
  heading: "Implementation",
  techArray: [figma],
};

const frontEnd: TechCardTypes = {
  heading: "Frontend",
  techArray: [typeScript, nextTech, react],
};

const backEnd: TechCardTypes = {
  heading: "Backend",
  techArray: [typeScript, nodeTech, prisma, postgres, express],
};

const devOps: TechCardTypes = {
  heading: "DevOps",
  techArray: [aws, docker, truboRepo, gitHub],
};

const testing: TechCardTypes = {
  heading: "Testing",
  techArray: [postMan],
};
// ##################################################################

const productManagement: FieldGroupTypes = {
  heading: "Product Management",
  techCards: [management, analytics],
};

const productDesign: FieldGroupTypes = {
  heading: "Product Design",
  techCards: [ideation, implementation],
};

const softwareEngineering: FieldGroupTypes = {
  heading: "Software Engineering",
  techCards: [frontEnd, backEnd, devOps],
};

const qualityAssurance: FieldGroupTypes = {
  heading: "Quality Assuranmce",
  techCards: [testing],
};

function TechstackLayout() {
  return (
    <div className={styles.layoutContainer}>
      <FiledGroup
        heading={productManagement.heading}
        techCards={productManagement.techCards}
      />

      <FiledGroup
        heading={productDesign.heading}
        techCards={productDesign.techCards}
      />
      <FiledGroup
        heading={softwareEngineering.heading}
        techCards={softwareEngineering.techCards}
      />

      <FiledGroup
        heading={qualityAssurance.heading}
        techCards={qualityAssurance.techCards}
      />
    </div>
  );
}

export default TechstackLayout;
