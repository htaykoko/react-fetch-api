import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
      setIsLoading(true)
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoading(false)
          setPosts(data);
        });
    };

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="content">
      {isLoading && <p>Loading...</p>}
      <h3>Posts</h3>
      {posts.length > 0 && (
        <div>
          {posts.map((p) => (
            <div className="post" key={p.id}>
              <p>{p.title}</p>
              <Link to={`/posts/${p.id}`}>Detail</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}
