import styles from "../styles/directions.module.scss";
import FolderList from "./components/list";

export default function Direction(){

    return(
        <div className={styles.container}>
<div className={styles.map}>
</div>

<div className={styles.place}>
<FolderList content="Accepted Task"/>

</div>

        
        
        </div>
    )


}