import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput className="input" placeholder="Search..." type="text"/>
            <Button>
            <span className="fa fa-search" />             
            </Button>
        </form>
    );
};

export default SearchForm;
