import externalLinks from "@/consts/externalLinks";
import Button from "@/ui/components/Button";
import CTAButton from "@/ui/components/CTAButton";
import { SubmitHandler, useForm } from "react-hook-form";
import iconSchedule from "./../../public/icons/icon_meeting.svg";
import styles from "./contactus.module.css";

export type DetailsOrScheduleInputs = {
  name: string;
  email: string;
  contactNumber: string;
  projectDetails: string;
};

const DetailsOrSchedule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DetailsOrScheduleInputs>();

  const onSubmit: SubmitHandler<DetailsOrScheduleInputs> = async (data) => {
    try {
      const res = await fetch("/api/inquiries", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <p>Book a meeting or fill out the form below and we will get in touch</p>

      <br />

      <hr />

      <a
        href={externalLinks.bookingUrl}
        target="blank"
        className="pointOnHover"
      >
        <CTAButton
          buttonText="Book a Meeting"
          buttonIcon={iconSchedule}
          buttonIconName="Calendar"
        />
      </a>

      <form onSubmit={handleSubmit(onSubmit)}>
        <br />

        <hr />

        {/* NAME */}
        <br />

        <label>
          Name <sup>*</sup>
        </label>

        <br />

        <input
          {...register("name", { required: "Name is Required" })}
          placeholder="John Doe"
        />
        {errors.name?.message && (
          <p className={styles.warning}>This filed is required</p>
        )}

        {/* EMAIL */}

        <label>email</label>

        <br />

        <input {...register("email")} placeholder="email@website.com" />

        {/* CONTACT NUMBER */}

        <label>
          contact number <sup>*</sup>
        </label>

        <br />

        <input
          {...register("contactNumber", {
            required: "Please provide a contact number",
          })}
          placeholder="+91-0123456789"
        />
        {errors.contactNumber?.message && (
          <p className={styles.warning}>This filed is required</p>
        )}

        {/* PROJECT DETAILS */}

        <label>
          Tell us about your project <sup>*</sup>
        </label>

        <br />

        <textarea
          {...register("projectDetails", {
            required: "Please provide a briref description of your project",
          })}
          placeholder="Describe your project"
        />

        {errors.projectDetails?.message && (
          <p className={styles.warning}>This filed is required</p>
        )}

        {/* SUBMIT BUTTON */}
        <Button buttonText="Send Enquire" />
      </form>
    </div>
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
