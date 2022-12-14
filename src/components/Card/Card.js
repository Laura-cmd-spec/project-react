import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';

const Card = props =>{
    const dispatch = useDispatch();
   
const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <div>
      <li className={styles.card}>
        {props.title}
        <button className={styles.favButton} onClick={handleClick}>
          <span className={clsx('fa fa-heart', props.isFavorite && styles.isFavorite)}></span>
        </button>
      </li>
    </div>
  );
};
export default Card;


