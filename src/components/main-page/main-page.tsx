import { useState } from 'react';
import styles from '../../styles/main-page.module.css';

function MainPage():JSX.Element {

  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState('AIzaSyD1m86fJjbWbx8iczVOw4SnCnwbVgVDXWM');

  function handleChange(event) {

  }

  function handleSubmit(event){

  }

  return(
    <section className={styles.main_section}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_action}>
            <input
              onChange={handleChange}
              type="text"
              className={styles.input}
              placeholder='Search for Books'
              autoComplete='off'
            />
          </div>
          <button type='submit' className={styles.btn}>
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default MainPage;