import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle]= useState('');
    const [body, setBody]= useState('');
    const [author,setAuthor]=useState('author1');
    const [isLoaded,setIsLoaded]= useState(false);
    const history = useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog= {title, body, author};
        setIsLoaded(true);
        fetch('http://localhost:8000/blogs/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
            }
        ).then(()=>{
            console.log('new blog added');
            setIsLoaded(false);
            // history.go(-1);
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label >title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label >body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label >author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)} >
                    <option value="author1">author1</option>
                    <option value="author2">author2</option>
                    <option value="author3">author3</option>
                    <option value="author4">author4</option>
                </select>
                {!isLoaded&&<button>Add blog</button>}
                {isLoaded&&<button>Adding blog..</button>}
            </form>
        </div>
     );
}
 
export default Create;