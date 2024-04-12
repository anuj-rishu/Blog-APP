import { baseUrl } from "../baseUrl";


const { createContext, useState, children } = require("react");


export  const Appcontext = createContext()

export function AppContextProvider({ children }) {
const [loading ,setLoading ] = useState(false);
const [posts ,setPosts ] = useState([1]);
const [page ,setPage ] = useState(1);
const [totalPages ,setTotalPages ] = useState(null)

async function fetchBlogPost(page =1 ){
    setLoading(true)
    let url = `${baseUrl}?page=${page}`
    
    try{
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);

    }
    catch{
        console.log("error i handling data");
        setLoading(1);
        setPosts([]);
        setTotalPages(null);

    }
    setLoading(false);
}
function handlePageChange(page){

    setPage(page);
    fetchBlogPost(page);
}


const value ={
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPost,
handlePageChange

};
return <Appcontext.Provider value={value}>
    {children}
</Appcontext.Provider>


}