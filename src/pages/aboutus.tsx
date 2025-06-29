import internalLinks from "@/consts/internalLinks";
import CTAButton from "@/ui/components/CTAButton";
import AccordionPrimitive from "@/ui/primitives/Accordian";
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";
import iconTransparency from "../../public/icons/icon_agreement.svg";
import iconCommitment from "../../public/icons/icon_commitment.svg";
import iconMeeting from "../../public/icons/icon_meeting.svg";
import iconQuality from "../../public/icons/icon_quality.svg";
import iconDelight from "../../public/icons/icon_satisfaction.svg";
import directorPhoto from "../../public/pictures/directorPhoto.jpeg";
import styles from "./aboutus.module.css";

export interface ReasonCardProps {
  reasonImage: StaticImageData;
  reasonHeading: string;
  reasonBody: ReactElement;
}

const ourValuesProps = [
  {
    triggerText: "Strive to be the best",
    itemValue: "value 1",
    contentBody: (
      <p>
        We posses an endless drive to be the best. We do the maximum we can to
        achieve successful results and try to exceed expectations. We are over
        achievers striving to go above and betyond
      </p>
    ),
  },
  {
    triggerText: "Focus on outcome over outputs",
    itemValue: "value 2",
    contentBody: (
      <p>
        We always keep the boarder vision in sight and focus on initiatives with
        highest impact. Our strategic, analytical and business mindset allows us
        to priritize our focus on what truly matters
      </p>
    ),
  },
  {
    triggerText: "Just be honest",
    itemValue: "value 3",
    contentBody: (
      <p>
        We are honest with all our interactions, weather with ourselves, our
        teammates, our clients, or our partners. We are open to improvements and
        view constructive feedback as an opportunity for mutual growth.
      </p>
    ),
  },
  {
    triggerText: "Be kind and compassionate",
    itemValue: "value 4",
    contentBody: (
      <p>
        We are grounded in humility, caring about well-being and success of
        others. We actively engaged in supporting our peers, helping them
        overcome challenges both professionally and personally
      </p>
    ),
  },
  {
    triggerText: "Overcome adversity with positivity",
    itemValue: "value 5",
    contentBody: (
      <p>
        Our experiance gives us perspective, nad we understand that its the
        journey not the destination. We are confident in our capabilities and
        maintian positivity during tough times
      </p>
    ),
  },
];

const OurValues = () => {
  return (
    <div className={styles.valuesContainer}>
      <p className={`${styles.sectionHeading} h4`}>Our Core Values</p>
      <AccordionPrimitive items={ourValuesProps} />
    </div>
  );
};

const DirectorsInfo = () => {
  return (
    <div className={styles.directorInfoContainer}>
      <h1 className="h4">
        Meet our <span className={styles.strikeThroughText}>Director</span>{" "}
        <span className={styles.highlightedText}>Rocket Scientist</span>
      </h1>

      <div className={styles.flexContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={directorPhoto}
            alt="director's photo"
            className={styles.directorsImage}
          />
        </div>

        <div className={styles.textContainer}>
          <p className="h5">Why I write Code</p>

          <br />

          <p>
            I am a creative person, not the kind of person who would create the
            next Mona Lisa, I create solutions with technology. Writing code is
            a creative outlet for me. I enjoy creating new things.
          </p>

          <br />

          <p className="h5">What are my qualifications</p>

          <br />

          <p>
            I hold a bachelors and masters in Aerospace Engineering. I was
            working on rockets, planes and formulae one cars. I am pretty sure I
            will be able to write code as well.
          </p>

          <br />

          <a href={internalLinks.contactus} target="blank">
            <CTAButton
              buttonText="Book a meeting"
              buttonIcon={iconMeeting}
              buttonIconName="calendar"
              addedStyle={styles.ctaButton}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const reasons = [
  {
    reasonImage: iconTransparency,
    reasonHeading: "Transparency",
    reasonBody: (
      <p>
        We operate with{" "}
        <span className={styles.highlightedText}>100% transparency</span>. To
        avoid any confusions we make an agreement listing all the requirements
        and the expected time line of delivery
      </p>
    ),
  },
  {
    reasonImage: iconCommitment,
    reasonHeading: "Commitment",
    reasonBody: (
      <p>
        At Leondevs{" "}
        <span className={styles.highlightedText}>
          a promise made is a promise kept
        </span>
        . We deliver on all the points mentioned in the agreement.
      </p>
    ),
  },
  {
    reasonImage: iconDelight,
    reasonHeading: "Customer Delight",
    reasonBody: (
      <p>
        <span className={styles.highlightedText}>Customer is king</span>, in
        matters of choice. A motto we live by, we strive to deliver the best
        customer experiance humanly possible
      </p>
    ),
  },
  {
    reasonImage: iconQuality,
    reasonHeading: "Quality",
    reasonBody: (
      <p>
        Over the years we have learnt a lot form our mistakes and have set up
        very{" "}
        <span className={styles.highlightedText}>
          rigorous and elaborate standard operating procedures
        </span>{" "}
        to ensure the{" "}
        <span className={styles.highlightedText}>
          highest standards of quality
        </span>
      </p>
    ),
  },
];

function AboutUs() {
  return (
    <>
      <OurValues />
      <DirectorsInfo />
    </>
  );
}

export default AboutUs;
