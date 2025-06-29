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
// import iconExpress from "../../public/icons/icon_express.svg";
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

// const FrontEnd = () => {
//   return (
//     <div className={styles.serviceContainer}>
//       <p className="h4">Frontend Developement</p>

//       <div className={styles.innerContainer}>
//         <p>
//           Everything that you see on the browser is called the frontend or
//           client. It comprises of two main constituents as follows:
//         </p>

//         <ul>
//           <li>UI/UX Design</li>
//           <li>Frontend/Client Software</li>
//         </ul>

//         <p className={`h5 ${styles.smallScreen}`}>What is UI/UX</p>

//         <div className={styles.mediaContainer}>
//           <div className={styles.infographicContainer}>
//             <Image
//               src={uiInfographic}
//               alt="ui infographic"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </div>

//           <div className={styles.textContainer}>
//             <p className={`h5 ${styles.bigScreen}`}>What is UI/UX</p>

//             <p>
//               UI/UX more commonly known as UI/UX design is pictorial
//               representation of how the frontend is going to look like. Its done
//               in three phases:
//             </p>

//             <ul>
//               <li>
//                 Wireframing : Designing a very crude mock up of the final ui{" "}
//               </li>
//               <li>
//                 Design System : This phase comprises of creating fundamental
//                 building blocks of your ui
//               </li>
//               <li>
//                 System : This phase comprises of creating fundamental building
//                 blocks of your ui UI : This phase comprises of making the final
//                 design
//               </li>
//             </ul>
//           </div>
//         </div>

//         <p className={`h5 ${styles.smallScreen}`}>What is Frontend/Client ?</p>

//         <div className={styles.mediaContainer}>
//           <div className={styles.infographicContainer}>
//             <Image
//               src={frontendInfographic}
//               alt="frontend infographic"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </div>

//           <div className={styles.textContainer}>
//             <p className={`h5 ${styles.bigScreen}`}>
//               What is Frontend/Client ?
//             </p>

//             <p>
//               Once UI is designed, it needs to to be implemented using
//               JavaScript. To implement this design JavaScript Frameworks and
//               libraries are used. At Leondevs we use react.js or next.js for
//               developing the client side application. Client side applications
//               or frontend applications cab be bifurcated into three parts:
//             </p>

//             <ul>
//               <li>
//                 Components : These are the fundamental building blocks of the
//                 client application{" "}
//               </li>

//               <li>
//                 Layouts : Layouts area collection of components which can be
//                 re-used in different parts of the client application
//               </li>

//               <li>
//                 Pages : Pages are a collection of layouts, they are biggest unit
//                 in a client application.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <a href={internalLinks.contactus} className="pinterOnHover">
//         <CTAButton buttonText="Get a Quote" addedStyle={styles.ctaButton} />
//       </a>
//     </div>
//   );
// };

// const BackEnd = () => {
//   return (
//     <div className={styles.serviceContainer}>
//       <h2 className="h4">Backend Developement</h2>

//       <p>
//         Backend refers to the part of the application which is responsible for
//         implementing the business logic. There are a lot of programming
//         languages at Leondevs we specialise in JavaScript, all the backend
//         applications made by use are made using node.js and express.js
//       </p>

//       <a href={internalLinks.contactus} className="pinterOnHover">
//         <CTAButton buttonText="Get a Quote" addedStyle={styles.ctaButton} />
//       </a>
//     </div>
//   );
// };

// const Ecommerce = () => {
//   return (
//     <div className={styles.serviceContainer}>
//       <h2 className="h4">E-Commerce Store</h2>

//       <p>
//         We specialise in building custom E-commerce stores including payment
//         gateway integrations and product management system. The solution can be
//         extended to integrate third party solutions like book keeping software
//         and fulfilment services.
//       </p>

//       <a href={internalLinks.contactus} className="pinterOnHover">
//         <CTAButton buttonText="Get a Quote" addedStyle={styles.ctaButton} />
//       </a>
//     </div>
//   );
// };

// const OurServices = () => {
//   return (
//     <div className={styles.servicesContainer}>
//       <h2 className="h4">Our Services</h2>
//       <FrontEnd />
//       <BackEnd />
//       <Ecommerce />
//     </div>
//   );
// };

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
        At leondevs we offer complete Backend/Server side solutions for our
        clients ranging from simple API servers to implementation of complex
        business logic. Our language of choice is JavaScript which makes node.js
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
