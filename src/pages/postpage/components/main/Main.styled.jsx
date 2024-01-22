import {
  card_bg_color,
  border_color,
  card_styles,
  input_styles,
  input_hover,
  text_color,
  text_color_bright,
} from "../../../../resources/resources";
import { styled } from "styled-components";

export const PostPageContainer = styled.div`
  position: absolute;
  margin-top: 49px;
  background-color: #191919;
  width: 100%;
  height: max-content;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;
export const PostContainer = styled.div`
  position: relative;
  width: 1200px;
  background-color: #030303;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PostPageHeader = styled.div`
  height: 50px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  background-color: #030303;
  position: fixed;
`;
export const PostBodyContainer = styled.div`
  margin-top: 85px;
  background-color: #1a1a1b;
  width: 1050px;
  @media (max-width: 1100px) {
    width: 100%;
  }
  border-radius: 5px;

  margin-bottom: 20px;
`;
export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding-inline: 90px;
  color: ${text_color_bright};
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-weight: 600;
`;
export const HeaderTypeIcon = styled.div`
  color: ${text_color_bright};
  font-size: 16px;
`;
export const HeaderVoteButton = styled.div`
  cursor: pointer;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-content: center;
  &:hover {
    background-color: ${card_bg_color};
  }
  i {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ vote, type }) => {
      if (vote === type) {
        return type === 1 ? "orangered" : "#7193ff";
      } else {
        return text_color;
      }
    }};
  }
`;
export const HeaderTitle = styled.div`
  font-size: 14px;
  font-weight: 200;
`;
export const HeaderClose = styled.div`
  cursor: pointer;
  margin-left: auto;
  display: flex;
  font-size: 12px;
  font-family: "IBM Plex Sans";
  gap: 6px;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;
export const PostContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;
export const PostContentSidebar = styled.div`
  padding-top: 4px;
  width: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "IBM Plex Sans";
  font-size: 12px;
  color: ${text_color_bright};
`;
export const PostContent = styled.div`
  margin: 10px;
  margin-block: 5px;
  width: 100%;
  #post-header {
    width: 100%;

    display: flex;
    gap: 10px;
    color: #d7dadc;
    align-items: center;
    a {
      font-size: 12px;
      color: #d7dadc;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      i {
        padding-top: 3px;
        font-size: 16px;
      }
    }
    div {
      font-size: 12px;
    }
    #post-subreddit {
      font-family: "IBM Plex Sans";
      font-weight: 600;
    }
    #post-dot {
      width: 2px;
      height: 2px;
      background-color: #6d6d6d;
      border-radius: 50%;
    }
    #post-by {
      color: #6d6d6d;
      font-family: "IBM Plex Sans";
      font-weight: 600;
    }
  }
`;
export const PostTitle = styled.div`
  font-size: 24px;
  color: ${text_color_bright};
  font-family: "IBM Plex Sans";
  font-weight: 400;
  margin-bottom: 20px;
`;
export const PostText = styled.div`
  font-size: 14px;
  color: ${text_color_bright};
  font-family: "IBM Plex Sans";
  font-weight: 200;
  min-height: 300px;
`;
export const PostLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #4aabe7;
  font-family: "IBM Plex Sans";
  font-weight: 200;
  min-height: 300px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const PostImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 20px;
    width: 90%;
    max-width: 500px;
    img {
      width: 100%;
    }
  }
`;
