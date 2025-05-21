import Image from "next/image";
import styles from "./aboutus.module.css";
import iconTransparency from "../../public/icons/icon_agreement.svg";
import iconCommitment from "../../public/icons/icon_commitment.svg";
import iconDelight from "../../public/icons/icon_satisfaction.svg";
import iconQuality from "../../public/icons/icon_quality.svg";

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

const reasons = [
  {
    reasonImage: iconTransparency,
    reasonHeading: "Transparency",
    reasonBody: (
      <p>
        We operate with 100% transparency. To avoid any confusions we make an
        agreement listing all the requirements and the expected time line of
        delivery
      </p>
    ),
  },
  {
    reasonImage: iconCommitment,
    reasonHeading: "Commitment",
    reasonBody: (
      <p>
        At Leondevs a promise made is a promise kept. We deliver on all the
        points mentioned in the agreement.
      </p>
    ),
  },
  {
    reasonImage: iconDelight,
    reasonHeading: "Customer Delight",
    reasonBody: (
      <p>
        Customer is king, in matters of choice. A motto we live by, we strive to
        deliver the best customer experiance humanly possible
      </p>
    ),
  },
  {
    reasonImage: iconQuality,
    reasonHeading: "Quality",
    reasonBody: (
      <p>
        Over the years we have learnt a lot form our mistakes and have set up
        very rigorous and elaborate standard operating procedures to ensure the
        highest standards of quality
      </p>
    ),
  },
];

function AboutUs() {
  return (
    <>
      <OurValues reasons={reasons} />
    </>
  );
}

export default AboutUs;
