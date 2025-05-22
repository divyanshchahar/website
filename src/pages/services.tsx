import iconNode from "../../public/icons/icon_node.svg";
import iconExpress from "../../public/icons/icon_express.svg";
import iconTypescript from "../../public/icons/icon_typescript.svg";
import iconReact from "../../public/icons/icon_react.svg";
import iconGithub from "../../public/icons/icon_github.svg";
import iconApi from "../../public/icons/icon_api.svg";
import iconNext from "../../public/icons/icon_nextjs.svg";
import Image from "next/image";
import styles from "./services.module.css";
import TopNavBar from "@/ui/layouts/TopNavBar";
import uiInfographic from "../../public/infographics/infographic_ui.svg";
import frontendInfographic from "../../public/infographics/infographic_frontend.svg";
import CTAButton from "@/ui/components/CTAButton";

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

const FrontEnd = () => {
  return (
    <div className={styles.serviceContainer}>
      <p className="h4">Frontend Developement</p>

      <div className={styles.innerContainer}>
        <p>
          Everything that you see on the browser is called the frontend or
          client. It comprises of two main constituents as follows:
        </p>

        <ul>
          <li>UI/UX Design</li>
          <li>Frontend/Client Software</li>
        </ul>

        <p className={`h5 ${styles.smallScreen}`}>What is UI/UX</p>

        <div className={styles.mediaContainer}>
          <div className={styles.infographicContainer}>
            <Image
              src={uiInfographic}
              alt="ui infographic"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className={styles.textContainer}>
            <p className={`h5 ${styles.bigScreen}`}>What is UI/UX</p>

            <p>
              UI/UX more commonly known as UI/UX design is pictorial
              representation of how the frontend is going to look like. Its done
              in three phases:
            </p>

            <ul>
              <li>
                Wireframing : Designing a very crude mock up of the final ui{" "}
              </li>
              <li>
                Design System : This phase comprises of creating fundamental
                building blocks of your ui
              </li>
              <li>
                System : This phase comprises of creating fundamental building
                blocks of your ui UI : This phase comprises of making the final
                design
              </li>
            </ul>
          </div>
        </div>

        <p className={`h5 ${styles.smallScreen}`}>What is Frontend/Client ?</p>

        <div className={styles.mediaContainer}>
          <div className={styles.infographicContainer}>
            <Image
              src={frontendInfographic}
              alt="frontend infographic"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className={styles.textContainer}>
            <p className={`h5 ${styles.bigScreen}`}>
              What is Frontend/Client ?
            </p>

            <p>
              Once UI is designed, it needs to to be implemented using
              JavaScript. To implement this design JavaScript Frameworks and
              libraries are used. At Leondevs we use react.js or next.js for
              developing the client side application. Client side applications
              or frontend applications cab be bifurcated into three parts:
            </p>

            <ul>
              <li>
                Components : These are the fundamental building blocks of the
                client application{" "}
              </li>

              <li>
                Layouts : Layouts area collection of components which can be
                re-used in different parts of the client application
              </li>

              <li>
                Pages : Pages are a collection of layouts, they are biggest unit
                in a client application.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CTAButton buttonText="Get a Quote" addedStyle={styles.ctaButton} />
    </div>
  );
};

const BackEnd = () => {
  return (
    <div className={styles.serviceContainer}>
      <h2 className="h4">Backend Developement</h2>

      <p>
        Backend refers to the part of the application which is responsible for
        implementing the business logic. There are a lot of programming
        languages at Leondevs we specialise in JavaScript, all the backend
        applications made by use are made using node.js and express.js
      </p>

      <CTAButton buttonText="Get a Quote" addedStyle={styles.ctaButton} />
    </div>
  );
};

const Ecommerce = () => {
  return (
    <div className={styles.serviceContainer}>
      <h2 className="h4">Ecommerce Store</h2>

      <p>
        We specialise in building custom E-commerce stores including payment
        gateway integrations and product management system. The solution can be
        extended to integrate third party solutions like book keeping software
        and fulfilment services.
      </p>

      <CTAButton buttonText="Get a Quote" addedStyle={styles.ctaButton} />
    </div>
  );
};

const OurServices = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2 className="h4">Our Services</h2>
      <FrontEnd />
      <BackEnd />
      <Ecommerce />
    </div>
  );
};

function Services() {
  return (
    <div>
      <TopNavBar />
      <HeroSection />
      {/* <FrontEnd /> */}
      <OurServices />
    </div>
  );
}

export default Services;
