import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const {id}=useParams();
    const history=useHistory();
    const {data:blog, error, isLoaded}=useFetch('http://localhost:8000/blogs/'+id);
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id,
            {method:'DELETE',}
        ).then(()=>{
            history.push('/');
        })
    }
    const handleEditClick=()=>{
        history.push(`/edit/${blog.id}`);

    }
    return ( 
        <div className="blog-details">
            {isLoaded && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    <p>{blog.author}</p>
                </article>)
            }
            <button onClick={handleDelete}>delete</button>
            <button onClick={() => handleEditClick(blog.id)}>Modify</button>
        </div>
     );
}
 
export default BlogDetails;