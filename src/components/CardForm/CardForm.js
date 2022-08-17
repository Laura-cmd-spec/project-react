import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';


const CardForm = props => {


    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId); 
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
        <label><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} /></label>
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;

