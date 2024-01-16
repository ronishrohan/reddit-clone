import React, { useState, useContext } from "react";
import {
  ActionsCard,
  CreateCardButton,
  FilterContainer,
  FilterButton,
} from "../../Main.styled";
import { Link } from "react-router-dom";
import { PostsContext } from "../../../../../store/posts-context";

function FilterPosts() {
  let postsData = useContext(PostsContext);
  let updateFilterMode = postsData.updateFilterMode;
  let [mode, setMode] = useState("3");
  function isSelected(number){
    
    return (number === mode).toString();
  }
  function handleClicked(number){
    setMode(number);
    updateFilterMode(number);
  }
  return (
    <ActionsCard>
      <FilterContainer>
        <FilterButton isactive={isSelected("1")} onClick={() => handleClicked("1")} >
          <i className="fa-solid fa-rocket"></i>
          <div>Best</div>
        </FilterButton>
        <FilterButton isactive={isSelected("2")} onClick={() => handleClicked("2")} >
          <i className="fa-solid fa-fire"></i>
          <div>Hot</div>
        </FilterButton>
        <FilterButton isactive={isSelected("3")} onClick={() => handleClicked("3")} >
          <i className="fa-solid fa-certificate"></i>
          <div>New</div>
        </FilterButton>
        <FilterButton isactive={isSelected("4")} onClick={() => handleClicked("4")} >
          <i className="fa-solid fa-ranking-star"></i>
          <div>Top</div>
        </FilterButton>
        <FilterButton isactive={isSelected("5")} onClick={() => handleClicked("5")} >
          <i className="fa-solid fa-arrow-trend-up"></i>
          <div>Rising</div>
        </FilterButton>
      </FilterContainer>
    </ActionsCard>
  );
}

export default FilterPosts;
