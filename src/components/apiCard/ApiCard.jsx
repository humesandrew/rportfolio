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
    
    <div className="apiItems">
    
      {/* {loading && <p>Repos are loading!</p>}
       {error && <p>{error}</p>}
      {data.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))} */}      <ul>
        {resumeData.featured &&
          resumeData.featured.map((item) => {
            return (
              <div class="project">
                <div class="projectDiv" style={{ backgroundImage: `url(${resumeData.githubImage})`}}>
          {/* <div><img src={item.image}></img></div> */}
          
                  <h1> {item.name}</h1>

                  <h4>{item.description}</h4>

                  <h4>{item.technologies}</h4>

                  <div class="linkDiv">
                    <button>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        {/* <h3>Deployed</h3> */}
                        <h3>Deployed</h3>
                      </a>
                    </button>

                    <button>
                      <a href={item.url2} target="_blank" rel="noreferrer">
                        <h3>Repository</h3>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    
    </div>
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