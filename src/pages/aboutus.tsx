import Image from "next/image";
import styles from "./aboutus.module.css";
import iconTransparency from "../../public/icons/icon_agreement.svg";
import iconCommitment from "../../public/icons/icon_commitment.svg";
import iconDelight from "../../public/icons/icon_satisfaction.svg";
import iconQuality from "../../public/icons/icon_quality.svg";
import directorPhoto from "../../public/pictures/directorPhoto.jpeg";
import CTAButton from "@/ui/components/CTAButton";
import iconApi from "../../public/icons/icon_api.svg";
import iconMeeting from "../../public/icons/icon_meeting.svg";

const ReasonCard = ({ reasonImage, reasonHeading, reasonBody }) => {
  return (
    <div className={styles.reasonContainer}>
      <div style={{ width: "100%" }}>
        <Image
          src={reasonImage}
          alt={reasonHeading}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <h2 className={`h4 ${styles.reasonHeading}`}>{reasonHeading}</h2>

      {reasonBody}
    </div>
  );
};

const OurValues = ({ reasons }) => {
  return (
    <div className={styles.valuesContainer}>
      <h1 className="h4">Our Values</h1>
      <br />
      <div className={styles.reasons}>
        {reasons.map((reason) => {
          return (
            <ReasonCard
              reasonImage={reason.reasonImage}
              reasonHeading={reason.reasonHeading}
              reasonBody={reason.reasonBody}
            />
          );
        })}
      </div>
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

          <CTAButton
            buttonText="Book a meeting"
            buttonIcon={iconMeeting}
            buttonIconName="calendar"
            addedStyle={styles.ctaButton}
          />
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
      <OurValues reasons={reasons} />
      <DirectorsInfo />
    </>
  );
}

export default AboutUs;
