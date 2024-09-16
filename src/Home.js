// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    // const [name , setName]=useState("mario");
    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    //   }
     
    //   useEffect(()=>{
    //     console.log('use effect run');
    //     console.log(name);
    //   },[name]);
    // const[name,setName]= useState("hafsa");
    // const[age, setAge]= useState(20);
    // const handleClick =()=>{
    //     console.log('Button clicked');
    //     setName("omar");
    //     setAge("30");

    // }
    const {data:blogs,isLoaded,error}=useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoaded&& <div>loading...</div>}
           {blogs && < BlogList blogs={blogs} title="all the blogs"  />}
           {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author==="mario")} title="Mario's blog" /> }
            {/* <button onClick={() =>  setName('luigi')}>change name</button>
            <p>{name}</p> */}
            {/* <h1>Welcome to my website</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button> */}
        </div>
     );
}
 
export default Home;