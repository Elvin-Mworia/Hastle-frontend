import '../styles/globals.css'

import styles from "../styles/logo.module.scss";

function MyApp({ Component, pageProps }) {
  return(<>
  <div className={styles.container}>
      
       <h3>HASTLE</h3>

    </div>
  <Component {...pageProps} />
  </>)
}

export default MyApp
