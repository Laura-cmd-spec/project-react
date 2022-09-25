import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearching } from '../../redux/store';

const SearchForm = () => {
    const [SearchString, setSearchString] = useState('');

    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateSearching(SearchString));
        setSearchString('');
        };

            
    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
        <TextInput placeholder="Search…" type='text' value={SearchString} onChange={e => setSearchString(e.target.value)}/>
        <Button>
            <span className="fa fa-search"/>             
        </Button>
        </form>
    );
};

export default SearchForm;
