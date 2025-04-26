import React, { useState } from 'react';
import styles from './Regis.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Регистрация прошла успешно', formData);
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>Регистрация в приют</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {["firstName", "lastName", "email", "phone", "password", "confirmPassword"].map((field) => (
          <div key={field} className={styles.inputWrapper}>
            <input
              type={field.includes('password') ? "password" : field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={
                field === "firstName" ? "Имя" :
                field === "lastName" ? "Фамилия" :
                field === "email" ? "Email" :
                field === "phone" ? "Телефон" :
                field === "password" ? "Пароль" :
                "Подтвердите пароль"
              }
              value={formData[field]}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <span className={styles.underline}></span>
          </div>
        ))}
        <button type="submit" className={styles.button}>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;