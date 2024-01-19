/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, Children } from "react";
import { getPosts } from "../utils/postUtils";
const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  let [fetchID, setFetchID] = useState(1);
  let [filterMode, setFilterMode] = useState("1");
  let [subreddit, setSubreddit] = useState("");
  let [skip, setSkip] = useState(0);
  let [posts, setPosts] = useState([[]]);
  let [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScrollChange() {
      let scrollY = window.scrollY;
      let height = document.documentElement.scrollHeight;
      let scrollHeight = window.innerHeight;
      console.log(scrollY+scrollHeight, height*0.85)
      if(scrollY+scrollHeight > height*0.5){
        
        setScrolled(true);
      }
      
    }
    window.addEventListener("scroll", handleScrollChange);
    
    return (() => {
      removeEventListener("scroll", handleScrollChange);
    });
    
  }, []);
  useEffect(() => {
    if(scrolled){
      updateSkip();
    }
  }, [scrolled])

  function updateFetchID() {
    setFetchID((prevID) => {
      const newID = prevID + 1;
      return newID;
    });
  }
  function updateSubreddit(sub) {
    setSubreddit(sub);
  }
  function updateFilterMode(mode) {
    setFilterMode(mode);
    console.log("change mode to ", mode);
  }
  function updateSkip() {
    setSkip((prev) => prev + 3);
    console.log(skip)
  }
  const fetchPosts = async () => {
    const postsData = await getPosts(filterMode, subreddit, skip);
    console.log(filterMode, subreddit, skip)
    setPosts((prev) => [...prev, postsData]);
    setScrolled(false)
    
  };
  useEffect(() => {
    

    fetchPosts();
  }, [fetchID, filterMode, subreddit, skip]);

  useEffect(() => {
    setPosts([[]]);
    setSkip(0)
  }, [filterMode, fetchID, subreddit]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        updateFetchID,
        updateFilterMode,
        updateSkip,
        updateSubreddit,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContext, PostsProvider };
