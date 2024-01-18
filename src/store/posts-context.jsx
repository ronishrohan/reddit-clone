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
      console.log(height)
      if(scrollY+scrollHeight > height*0.85){
        setScrolled(true);
      }
      console.log(scrollY+scrollHeight, height);
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
    setSkip((prev) => prev + 4);
  }
  
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts(filterMode, subreddit, skip);
      setPosts((prev) => [...prev, postsData]);
      setScrolled(false)
    };

    fetchPosts();
  }, [fetchID, filterMode, subreddit, skip]);

  useEffect(() => {
    setPosts([[]]);
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
