import React from 'react'
import fo from './Footer.module.css'

export const Footer = () => {
  return (
    <>
    <div className={fo.contactSection}>
      <div className={fo.contactBlock}>
        <h2>
          For questions <br /> and suggestions
        </h2>
        <div className={fo.contactInfo}>📧 email@shelter.com</div>
        <div className={fo.contactInfo}>📞 +13 674 567 75 54</div>
      </div>

      <div className={fo.contactBlock}>
        <h2>
          We are waiting <br /> for your visit
        </h2>
        <div className={fo.contactInfo}>
          📍 1 Central Street, Boston <br />
          (entrance from the store)~
        </div>
        <div className={fo.contactInfo}>📍 18 South Park, London</div>
      </div>

      <div className={fo.contactBlock}>
        <img src={dogImage} alt="Cute Dog" className={fo.dogImage} />
      </div>
    </div>

    </>
  )
}
