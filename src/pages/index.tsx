import Footer from "@/ui/layouts/Footer";
import TopNavBar from "@/ui/layouts/TopNavBar";
import Image from "next/image";
import heroSectionImage from "../../public/pictures/heroImage.png";
import styles from "./Index.module.css";

const HeroSection = () => {
  return (
    <div className={styles.herosectionContainer}>
      <div
        style={{
          maxWidth: "1024px",
          margin: "auto",
        }}
      >
        <Image
          src={heroSectionImage}
          alt="hero section"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <p className="h1">We make web app empower business with technology</p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <TopNavBar />
      <HeroSection />
      <Footer />
    </>
  );
}
