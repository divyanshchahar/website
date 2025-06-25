import React from "react";
import styles from "./SdlcLayout.module.css";

function SdlcLayout() {
  return (
    <div className={styles.container}>
      <p className="h4">How we build software</p>

      <div className={styles.diagramContainer}>
        <p className="h5">Ideation</p>

        <ul>
          <li>Understanding business goals</li>
          <li>Understanding desired outcomes</li>
        </ul>

        <br />
        <hr />
        <br />

        <p className="h5">Scoping</p>

        <ul>
          <li>Convert business goals into technical goals</li>
        </ul>

        <br />
        <hr />
        <br />

        <p className="h5">Designing</p>

        <ul>
          <li>Wireframing</li>
          <li>Design System</li>
          <li>UI/UX Design</li>
        </ul>

        <br />
        <hr />
        <br />

        <p className="h5">Custom Software Developement</p>

        <ul>
          <li>Execution of technical roadmap</li>
          <li>Quality Assurance (Testing) </li>
          <li>Product Launch (Deployment) </li>
        </ul>

        <br />
        <hr />
        <br />

        <p className="h5">Product Improvement</p>

        <ul>
          <li>Collecting User Feedback</li>
          <li>Roadmap for Improvement</li>
        </ul>
      </div>
    </div>
  );
}

export default SdlcLayout;
