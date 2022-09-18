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

const deployPrefix = "https://humesandrew.github.io/";

  return (
    
    <div>
      
        

{/* // here where it says map i can keep commenting out and undo to fix the repeat api calls // */}
 {/* just go from ul to ul, then reinsert and it has been working properly */}
 {/* ill have to figure out again if this is even worth it to show off api call */}

        {/* {data.map((item) => {
            return (
              <div>
                <div className="apiItems" key={item.id} style={{ backgroundImage: `url(${resumeData.githubImage})`}}>
      
                {loading && <p>Projects are loading!</p>}
                {error && <p>{error}</p>}
                  <h2> {item.name}</h2>

                  <h4>{item.description}</h4>

                

                  <div class="linkDiv">
                    <button>
                      <a href={deployPrefix + item.name + "/"} target="_blank" rel="noreferrer">
                    
                        <h3>Deployed</h3>
                      </a>
                    </button>

                    <button>
                      <a href={item.html_url} target="_blank" rel="noreferrer">
                        <h3>Repository</h3>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

 */}


{
              resumeData.project && resumeData.project.map((item)=>{
                return(
                  <div>
                  <li>
                    <div className="individualProjectDiv" style={{ backgroundImage: `url(${item.image})`}}>
                   <h2> {item.name}</h2>
                  <h4>{item.description}</h4>
                  <h4>{item.technologies}</h4>
                  
                  <div class="linkDiv">
                    <button>
                      <a href={item.url} target="_blank" rel="noreferrer">
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
               
                 
               
                  </li>
                
                  </div>
                )
              })
            }


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