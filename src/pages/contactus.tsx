import ContactUsLayout from "@/ui/layouts/ContactUsLayout";
import PostBookingLayout from "@/ui/layouts/PostBookingLayout";
import styles from "./contactus.module.css";

function ContactUs() {
  return (
    <div className={styles.pageContainer}>
      <ContactUsLayout />
      <PostBookingLayout />
    </div>
  );
}

export default ContactUs;
