import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { addColumn } from '../../redux/store';
import { useDispatch } from 'react-redux';

const ColumnForm =({ listId })=> {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
     };

     
	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label className={styles.label}>Title: </label><input type="text" className={styles.columnForm} value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>Icon: </label><input type="text" className={styles.columnForm} value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>ADD COLUMN</Button>
        </form>
	);
};

export default ColumnForm; 




