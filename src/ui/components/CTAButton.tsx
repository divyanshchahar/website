import { StaticImageData } from "next/image";
import styles from "./CTAButton.module.css";
import Image from "next/image";

export type CTAButtonProps = {
  buttonText: string;
  addedStyle?: string;
  buttonIcon?: StaticImageData;
  buttonIconName?: string;
  version?: "solid" | "outline";
  clickHandler: () => {};
};

function CTAButton({
  buttonText,
  addedStyle,
  buttonIcon,
  buttonIconName,
  version = "solid",
  clickHandler,
}: CTAButtonProps) {
  const isIconPresent =
    buttonIcon !== undefined && buttonIconName !== undefined;

  return (
    <>
      {version === "solid" ? (
        <button
          className={`${styles.button} ${styles.solid} ${addedStyle}`}
          onClick={() => clickHandler()}
        >
          {isIconPresent && (
            <Image
              src={buttonIcon}
              alt={buttonIconName}
              style={{ height: "1rem", width: "auto", marginRight: "1rem" }}
            />
          )}
          {buttonText}
        </button>
      ) : (
        <button className={`${styles.button} ${styles.outline} ${addedStyle}`}>
          {isIconPresent && (
            <Image
              src={buttonIcon}
              alt={buttonIconName}
              style={{ height: "1rem", width: "auto", marginRight: "1rem" }}
            />
          )}
          {buttonText}
        </button>
      )}
    </>
  );
}

export default CTAButton;

// TODOS
// 1. Better check for buttonIcon snd iconName
