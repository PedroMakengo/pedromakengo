import styled from "styled-components";

import bannerImg from "../../assets/banner.svg";

export const Container = styled.section`
  height: 85vh;
  background: url(${bannerImg});
  background-repeat: no-repeat;
  background-position-x: right;

  color: var(--light);
`;

export const Content = styled.div`
  max-width: 60rem;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  span {
    line-height: 0;
    font-size: 24px;
  }

  h1 {
    color: var(--primary);
    font-size: 54px;
    line-height: 0;
  }

  p {
    font-size: 24px;
  }
`;

export const ContentButtons = styled.div`
  margin-top: 3rem;

  display: flex;

  a {
    width: 153px;
    height: 45px;
    border-radius: 4px;
    background: linear-gradient(var(--dark), var(--dark)) padding-box,
      linear-gradient(to right, #9358f7, #10d7e2) border-box;
    border: 1px solid transparent;

    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--light);
    text-decoration: none;

    &:last-child {
      background: linear-gradient(var(--dark), var(--dark)) padding-box,
        linear-gradient(to right, #d24074, #6518b4) border-box;
      border-radius: 4px;
      border: 1px solid transparent;
    }

    img {
      margin-right: 0.5rem;
    }
  }
`;