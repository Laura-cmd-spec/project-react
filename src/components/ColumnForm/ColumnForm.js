import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const ColumnForm=props=> {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { id: shortid(), title: title, icon: icon } });
        setTitle('');
        setIcon('');
     };

	return (
        <form onSubmit={handleSubmit} className="columnForm">
            <label>Title:</label><TextInput value={title} onChange={e=>setTitle(e.target.value)}/>
            <label>Icon:</label><TextInput value={icon} onChange={e=>setIcon(e.target.value)}/>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm; 




