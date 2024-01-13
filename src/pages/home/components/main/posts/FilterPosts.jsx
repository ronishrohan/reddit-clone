import React from 'react'
import { ActionsCard, CreateCardButton, FilterContainer, FilterButton } from '../Main.styled'
import { Link } from 'react-router-dom'

function FilterPosts() {
  return (
    <ActionsCard>
        <FilterContainer>
            <FilterButton>
                <i className="fa-solid fa-rocket"></i>
                <div>Best</div>
            </FilterButton>
            <FilterButton>
                <i className="fa-solid fa-fire"></i>
                <div>Hot</div>
            </FilterButton>
            <FilterButton>
                <i className="fa-solid fa-certificate"></i>
                <div>New</div>
            </FilterButton>
            <FilterButton>
                <i className="fa-solid fa-ranking-star"></i>
                <div>Top</div>
            </FilterButton>
            <FilterButton>
                <i className="fa-solid fa-arrow-trend-up"></i>
                <div>Rising</div>
            </FilterButton>
        </FilterContainer>
    </ActionsCard>
  )
}

export default FilterPosts