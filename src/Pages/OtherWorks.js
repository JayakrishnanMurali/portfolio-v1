import React from "react";
import styled from "styled-components";
import posts from "../data/Posts";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import PrimaryButton from "../Components/PrimaryButton";
import { ArrowForward } from "@material-ui/icons";

function OtherWorks() {
  return (
    <MainLayout>
      <OtherWorksStyled>
        <Title title={"Other Works"} span={"Works"} />
        <InnerLayout className="post">
          {posts.map((post) => {
            return (
              <div key={post.id} className="post-item">
                <div className="image">
                  <img src={post.image} alt="" />
                  <div className="filter"></div>
                </div>
                <div className="title">
                  <a target="_blank" rel="noreferrer" href={post.link}>
                    {post.title}
                  </a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
        <div className="show-moreDiv">
          <a
            href="https://www.instagram.com/the_rollinsoul/"
            target="_blank"
            rel="noreferrer"
          >
            <PrimaryButton title={"Show More"} />
          </a>
        </div>
      </OtherWorksStyled>
    </MainLayout>
  );
}

const OtherWorksStyled = styled.div`
  .post {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    .post-item {
      background-color: var(--background-dark-grey);
    }
    .image {
      width: 100%;
      overflow: hidden;
      position: relative;

      /* .filter {
        position: absolute;
        bottom: 0;
        height: 100%;
        background-color: rgba(3, 127, 255, 0.3);
        width: 100%;
      } */
      img {
        width: 100%;
        height: 20rem;
        object-fit: cover;
        transition: all 0.4s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: rotate(2deg) scale(1.1);
        }
      }
    }
    .title {
      padding-bottom: 1rem;
      padding-left: 1rem;
      padding-top: 0.5rem;
      a {
        font-size: 1rem;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  .show-moreDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default OtherWorks;
