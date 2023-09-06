import styles from '../../styles/header.module.css';

function Header(): JSX.Element {
  return(
    <div className={styles.container}>
      <h1>Search for Books</h1>
    </div>
  )
}

export default Header;