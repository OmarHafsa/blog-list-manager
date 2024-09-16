import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('author1');
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams(); // Get blog ID from URL params
  const history = useHistory(); // useHistory for React Router v5

  // Fetch existing blog data to pre-fill the form
  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the blog');
        }
        return res.json();
      })
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      })
      .catch((err) => {
        console.error('Error fetching blog:', err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoaded(true);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('The blog was edited');
      setIsLoaded(false);
      history.push('/'); // Redirect to the homepage after edit
    });
  };

  return (
    <div className="edit-blog">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="author1">author1</option>
          <option value="author2">author2</option>
          <option value="author3">author3</option>
          <option value="author4">author4</option>
        </select>
        {!isLoaded && <button>Edit</button>}
        {isLoaded && <button>Editing blog...</button>}
      </form>
    </div>
  );
};

export default EditBlog;
