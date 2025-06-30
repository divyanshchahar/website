import externalLinks from "@/consts/externalLinks";
import Button from "@/ui/components/Button";
import CTAButton from "@/ui/components/CTAButton";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import iconSchedule from "../../../public/icons/icon_meeting.svg";
import AlertDialogDemo from "./AlertDialogPrimitive";
import styles from "./ContactUsLayout.module.css";
import AcceptedDialouge from "./AcceptedDialouge";

export type InquiryFormInputs = {
  name: string;
  email: string;
  contactNumber: string;
  projectDetails: string;
};

const InquiryForm = () => {
  interface InquiryType {
    status: "ready" | "waiting";
    data: string;
  }

  const [isAlerted, setIsAlerted] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  const [inquiry, setInquiry] = useState<InquiryType>({
    status: "ready",
    data: "",
  });

  const toggleIsAlerted = () => {
    setIsAlerted(!isAlerted);
  };

  const toggleIsSucess = () => {
    setIsSucess(!isSucess);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryFormInputs>();

  const onSubmit: SubmitHandler<InquiryFormInputs> = async (data) => {
    try {
      setInquiry({ data: "", status: "waiting" });

      const res = await fetch("/api/inquiries", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(
          "Sorry something went wrong, your inquiry was not registered with us"
        );
      } else {
        setInquiry({ data: "", status: "ready" });
        setIsSucess(true);
      }
    } catch (e) {
      if (e instanceof Error) {
        setInquiry({ ...inquiry, status: "ready", data: e.message });
        setIsAlerted(true);
      }
    }
  };

  return (
    <div className={`${styles.formContainer} blackShadow`}>
      <p>Book a meeting or fill out the form below and we will get in touch</p>

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
          clickHandler={() => {}}
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
        <Button
          buttonText="Send Enquire"
          isDisabled={inquiry.status === "waiting"}
        />
      </form>

      <AlertDialogDemo
        alertTitle="Unable to register Inquiry"
        alertDescription="We were unable to register your Inquiry right now please try again"
        alertCancel="Try Again"
        alertDialogState={isAlerted}
        alertDialogeController={toggleIsAlerted}
      />

      <AcceptedDialouge
        alertTitle="Inquiry Sent Sucessfully"
        alertDescription="Congratulations. Your inquiry has been submitted sucessfully"
        alertCancel="Okay"
        alertDialogState={isSucess}
        alertDialogeController={toggleIsSucess}
      />
    </div>
  );
};

function ContactUsLayout() {
  return (
    <div className={styles.container}>
      <p className="h4">Lets Get In Touch</p>
      <InquiryForm />
    </div>
  );
}

export default ContactUsLayout;
