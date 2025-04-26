import styles from "./Aboutdog.module.css";
import puppy from "../../assets/img/puppy.png";
import creditka from "../../assets/img/СreditkaNumber.png";

export const Aboutdog = () => {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.imageWrapper}>
            <img className={styles.petsImage} src={puppy} alt="Cute puppy" />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.subtitle}>You can also make a donation</p>
            <h3 className={styles.title}>
              Name of the bank / Type of bank account
            </h3>
            <div className={styles.aboutDogIcon}>
              <img src={creditka} alt="Credit card icon" />
            </div>
            <p className={styles.description}>
              Legal information and lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
              ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
