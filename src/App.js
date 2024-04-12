import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import { Appcontext } from './Context/AppContext';
import { useContext, useEffect } from 'react';

 


function App() {
  const { fetchBlogPost } = useContext(Appcontext);

  useEffect(() => {
    fetchBlogPost();
  }, []);

  return (
    <div className=" w-full h-full flex flex-col gap-y-1 justify-center items-center ">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
