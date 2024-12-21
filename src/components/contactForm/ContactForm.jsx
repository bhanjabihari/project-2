import React from 'react'
import styles from './contact.module.css'
import Button from '../button/button'
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5"
import { HiOutlineMail } from "react-icons/hi";


const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px" />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA EMAIL FORM" icon={<HiOutlineMail fontSize="24px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlfor='name'>Name</label>
            <input type='text' name='name' />
          </div>
        </form>

      </div>
      <div className={styles.contact_img}></div>
    </section>
  )
}

export default ContactForm
