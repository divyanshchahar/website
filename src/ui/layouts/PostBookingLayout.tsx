import styles from "./PostBookingLayout.module.css";

function PostBookingLayout() {
  return (
    <div className={`${styles.postBookingContainer}`}>
      <p className={`${styles.mainHeading} h4`}>
        What happens after sending us a message
      </p>
      <div className={`greyShadow  ${styles.cardContainer}`}>
        <div className={styles.stageContainer}>
          <p className="h5">1. Initial discovery meeting</p>
          <p>
            We'll meet to introduce you to our team and discuss what you are
            aiming to achieve.
          </p>
        </div>

        <hr />

        <div className={styles.stageContainer}>
          <p className="h5">2. Scoping meeting</p>
          <p>
            Our team will work with you to outline your project goals and
            clarify any the scope.
          </p>
        </div>

        <hr />

        <div className={styles.stageContainer}>
          <p className="h5">3. Proposal Workshop</p>
          <p>
            We'll present you the proposal that covers your vision, our
            approach, the roadmap, and budget.
          </p>
        </div>

        <hr />

        <div className={styles.stageContainer}>
          <p className="h5">4. Agreement & kick-off</p>
          <p>
            Once we align on the terms, we sign a contract, and start working on
            your project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostBookingLayout;
