import React from 'react'
import ut from './About.module.css'
import petsImage from '../../assets/img/about-pets.png';

export const About = () => {
  return (
    <>
      <section className={ut.aboutSection}>
      <div className={ut.aboutContainer}>
        <div className={ut.imageWrapper}>
          <img src={petsImage} alt="Dog and cat" className={ut.petsImage} />
        </div>
        <div className={ut.textWrapper}>
          <h3 className={ut.subtitle}>About the shelter</h3>
          <h2 className={ut.title}>"Cozy House"</h2>
          <p className={ut.description}>
            Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.
          </p>
          <p className={ut.description}>
            We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
