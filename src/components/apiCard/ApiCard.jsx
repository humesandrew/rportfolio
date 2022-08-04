import React, { useEffect, useState } from "react";
import "./apicard.scss";
import resumeData from "../../resumeData.jsx";
import axios from "axios";

export default function ApiCard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handlePosts();
  }, []);

  const handlePosts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://api.github.com/users/humesandrew/repos"
      );
      console.log(result);
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };



  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );




  // return (
  //   <div className="apiCard">
  //     <div>
  //       <h1>Posts</h1>
  //       {loading && <p>Posts are loading!</p>}
  //       {error && <p>{error}</p>}
  //       <ul>
  //         {posts.map((post) => (
  //           <li key={post.id}>{post.title}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
}