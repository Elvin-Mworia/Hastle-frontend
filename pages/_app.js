import '../styles/globals.css'
import {Provider} from "react-redux";
import styles from "../styles/logo.module.scss";
import store from "../store/store";
import apollo from "./components/apolloclient.js"
import { ApolloProvider } from '@apollo/client';
import Navbar from "./components/navbar";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";
import UploadFileTwoToneIcon from '@mui/icons-material/UploadFileTwoTone';
import {persistStore} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"

function MyApp({ Component, pageProps }) {
  const persistor=persistStore(store);
  return(<>
  <div className={styles.container}>
      
       <h3>HASTLE</h3>

    </div>
    <ApolloProvider client={apollo}>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Component {...pageProps} />
    </PersistGate>
  
  </Provider>
  </ApolloProvider>
  </>)
}

export default MyApp
