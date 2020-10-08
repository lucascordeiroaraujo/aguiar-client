import styled from 'styled-components';

export default styled.article`
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fdf8e3;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  span:not(.buy), h2 {
    width: 100%;
    padding: 0px 7%;
    text-align: left;
    color: #2d2d2d;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  span:not(.buy) {
    font-family: 'GothamBook';
    font-size: 14px;
    text-transform: lowercase;
  }
  h2 {
    font-family: 'GothamUltra';
    font-size: 30px;
    font-weight: normal;
    text-transform: uppercase;
    margin: 10px 0px 25px 0px;
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 7%;
    div {
      width: 48%;
      &:first-child {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        strong {
          font-family: 'GothamUltra';
          color: #609764;
          font-size: 48px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          small {
            font-size: 16px;
            margin-right: 5px;
          }
        }
        span {
          padding: 0px;
        }
        @media (max-width: 768px) {
          justify-content: center;
          align-items: center;
        }
      }
      &:last-child {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
          font-family: 'GothamBook';
          font-size: 20px;
          color: #2d2d2d;
        }
        @media (max-width: 768px) {
          justify-content: center;
          margin-top: 15px;
          span br {
            display: none;
          }
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  & > a {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    transition: 0.5s;
    background: #609764;
    span {
      font-family: 'GothamUltra';
      font-size: 24px;
      text-transform: uppercase;
      color: #ffffff;
      text-align: center;
    }
    &:hover {
      background: #4cb153;
    }
  }
`;
