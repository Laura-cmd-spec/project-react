import styles from './ColumnForm.module.scss';
import { useState } from 'react';


const ColumnForm = props => {
    const [value, setValue] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit}>
            Title: <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <button>Add column</button>
        </form>
	);
};

export default ColumnForm;