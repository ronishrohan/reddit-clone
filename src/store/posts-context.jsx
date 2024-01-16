/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, Children } from "react";
import { getPosts } from "../utils/postUtils";
const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  let [fetchID, setFetchID] = useState(1);
  let [filterMode, setFilterMode] = useState("3");
  let [subreddit, setSubreddit] = useState("")
  function updateFetchID(){
    
    setFetchID((prevID) => {
        const newID = prevID+1;
        return newID;
    })
  }
  function updateSubreddit(sub){
    setSubreddit(sub)
  }
  function updateFilterMode(mode){
    setFilterMode(mode);
    console.log("change mode to ", mode)
  }
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts(filterMode, subreddit);
      setPosts(postsData);
    };

    fetchPosts();
  }, [fetchID, filterMode, subreddit]);

  return (
    <PostsContext.Provider value={{posts, updateFetchID, updateFilterMode, updateSubreddit}}>{children}</PostsContext.Provider>
  );
};

export { PostsContext, PostsProvider };
