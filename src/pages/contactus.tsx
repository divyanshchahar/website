import ContactUsLayout from "@/ui/layouts/ContactUsLayout";
import styles from "./contactus.module.css";
import PostBookingLayout from "@/ui/layouts/PostBookingLAyout";

function ContactUs() {
  return (
    <div className={styles.pageContainer}>
      <ContactUsLayout />
      <PostBookingLayout />
    </div>
  );
}

export default ContactUs;
