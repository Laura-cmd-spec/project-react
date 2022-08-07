import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
const handleSubmit = e => {
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit}>
           <label>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></label>
            <label>Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} /></label>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;


