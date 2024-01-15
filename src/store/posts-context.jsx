/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, Children } from "react";
import { getPosts } from "../utils/postUtils";
const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  let [fetchID, setFetchID] = useState(1);
  let [filterMode, setFilterMode] = useState("3");
  function updateFetchID(){
    
    setFetchID((prevID) => {
        const newID = prevID+1;
        return newID;
    })
  }
  function updateFilterMode(mode){
    setFilterMode(mode);
    console.log("change mode to ", mode)
  }
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts(filterMode);
      setPosts(postsData);
    };

    fetchPosts();
  }, [fetchID, filterMode]);

  return (
    <PostsContext.Provider value={{posts, updateFetchID, updateFilterMode}}>{children}</PostsContext.Provider>
  );
};

export { PostsContext, PostsProvider };
