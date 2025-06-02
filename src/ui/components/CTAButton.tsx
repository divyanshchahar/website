import { StaticImageData } from "next/image";
import styles from "./CTAButton.module.css";
import Image from "next/image";

export type CTAButtonProps = {
  buttonText: string;
  addedStyle?: string;
  buttonIcon?: StaticImageData;
  buttonIconName?: string;
};

function CTAButton({
  buttonText,
  addedStyle,
  buttonIcon,
  buttonIconName,
}: CTAButtonProps) {
  const isIconPresent =
    buttonIcon !== undefined && buttonIconName !== undefined;

  return (
    <button className={`${styles.button} ${addedStyle}`}>
      {
        <>
          {isIconPresent && (
            <Image
              src={buttonIcon}
              alt={buttonIconName}
              style={{ height: "1rem", width: "auto", marginRight: "1rem" }}
            />
          )}
          {buttonText}
        </>
      }
    </button>
  );
}

export default CTAButton;

// TODOS
// 1. Better check for buttonIcon snd iconName
