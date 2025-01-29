import styles from "./Categories.module.css";

export default function Categories(props) {
    
    return(
        <li className={styles.categories}>{props.propCategorie}</li>
    );
}