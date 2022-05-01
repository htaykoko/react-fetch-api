import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPost(data[0]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      {isLoading && <p>Loading...</p>}
      <div className="post">
        <h3>{post.title}</h3>
      </div>
      <div>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

