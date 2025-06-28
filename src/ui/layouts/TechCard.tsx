import { ReactElement } from "react";
import CTAButton from "@/ui/components/CTAButton";
import internalLinks from "@/consts/internalLinks";
import styles from "./TechCard.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface CommonPropTypes {
  titleText: string;
  descriptionText: ReactElement;
}

type ConditionalPropTypes =
  | {
      version: "text";
      techImages: undefined;
    }
  | {
      version: "image";
      techImages: { techImage: StaticImageData; altString: string }[];
    };

type TechCardPropTypes = CommonPropTypes & ConditionalPropTypes;

function TechCard({
  titleText,
  descriptionText,
  version,
  techImages,
}: TechCardPropTypes) {
  const showImages =
    Array.isArray(techImages) && techImages?.length > 0 && version === "image";

  return (
    <div className={`${styles.techCardContainer} greyShadow`}>
      <p className="h4">{titleText}</p>

      {descriptionText}

      {showImages && (
        <>
          <hr />

          <div className={styles.techImageContainer}>
            {techImages.map((techImage) => {
              return (
                <Image
                  src={techImage.techImage}
                  alt={techImage.altString}
                  className={styles.techImage}
                />
              );
            })}
          </div>
        </>
      )}

      <a href={internalLinks.contactus} className="pointerOnHover">
        <CTAButton
          buttonText="Get a Quote"
          addedStyle={styles.techCardCtaButton}
          clickHandler={() => {}}
        />
      </a>
    </div>
  );
}

export default TechCard;
