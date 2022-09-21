import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';

const Card = props =>{
    const dispatch = useDispatch();
    return (
        <li className={styles.card}>{props.title}</li>
    );
};

export default Card;


