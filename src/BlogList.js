import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    return (  
        <div className="blog-list">
            <h1>{title}</h1>
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>content: {blog.body}</p>
                        <p>written by {blog.author}</p>
                    </Link>
                    
                    
                </div>
            ))}
        </div>
     );
}
 {/* <button style={{color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px",
                    padding:"10px",
                    fontSize:"16px",
                    marginTop:"10px",
                    cursor:"pointer"
                }} onClick={() => handleDelete(blog.id)}>delete</button> */}
export default BlogList;