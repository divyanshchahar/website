import Button from "@/ui/components/Button";
import styles from "./contactus.module.css";
import CTAButton from "@/ui/components/CTAButton";
import iconSchedule from "./../../public/icons/icon_meeting.svg";
import externalLinks from "@/consts/externalLinks";
import NavLink from "@/ui/components/NavLink";

const DetailsOrSchedule = () => {
  return (
    <form>
      <p>Book a meeting or fill out the form below and we will get in touch</p>

      <br />

      <hr />

      <a
        href={externalLinks.bookingUrl}
        target="blank"
        className="pointerOnHover"
      >
        <CTAButton
          buttonText="Book a Meeting"
          buttonIcon={iconSchedule}
          buttonIconName="Calendar"
        />
      </a>
      <br />
      <hr />

      <br />

      <label>Name</label>
      <br />
      <input type="text" placeholder="John Doe" />

      <br />
      <br />

      <label>email</label>
      <br />
      <input type="text" placeholder="email@website.com" />

      <br />
      <br />

      <label>contact number</label>
      <br />
      <input type="text" placeholder="+91-0123456789" />

      <br />
      <br />

      <label>Tell us about your project</label>
      <br />
      <textarea placeholder="Describe your project" />

      <Button buttonText="Send Enquire" />
    </form>
  );
};

function Contactus() {
  return (
    <div className={styles.container}>
      <DetailsOrSchedule />
    </div>
  );
}

export default Contactus;
