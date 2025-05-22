import Button from "@/ui/components/Button";
import styles from "./contactus.module.css";
import CTAButton from "@/ui/components/CTAButton";
import iconSchedule from "./../../public/icons/icon_meeting.svg";

const DetailsOrSchedule = () => {
  return (
    <form>
      <p>Book a meeting or fill out the form below and we will get in touch</p>

      <br />

      <hr />
      <CTAButton
        buttonText="Book a Meeting"
        buttonIcon={iconSchedule}
        buttonIconName="Calendar"
      />
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
