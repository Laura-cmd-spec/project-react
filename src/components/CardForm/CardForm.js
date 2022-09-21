import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import shortid from 'shortid';

const CardForm = props =>{
    
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(addCard({title: title, columnId: props.columnId, id: shortid() }));
        setTitle('');
    }
    

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e =>setTitle(e.target.value)}/>
            <Button>ADD CARD</Button>
        </form>
	);
};

export default CardForm; 


