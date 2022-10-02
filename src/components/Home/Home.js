import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List/List';
import Lists from '../Lists/Lists';
import ListForm from '../ListForm/ListForm'

const Home = () => { 
  return (
    <>
      <Hero />
      <Lists/>
      <ListForm/>
    </>
  )
}

export default Home;