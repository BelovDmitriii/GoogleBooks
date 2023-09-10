import styles from '../../styles/main-page.module.css';

function MainPage():JSX.Element {
  return(
    <section className={styles.main_section}>
      <div className={styles.container}>
        <form action="">
          <div className={styles.form_action}>
            <input
              type="text"
              className={styles.input_control}
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