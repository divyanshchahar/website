import styles from "./CTAButton.module.css";

export type CTAButtonProps = { buttonText: string; addedStyle?: string };

function CTAButton({ buttonText, addedStyle }: CTAButtonProps) {
  return (
    <button className={`${styles.button} ${addedStyle} h6`}>
      {buttonText}
    </button>
  );
}

export default CTAButton;
