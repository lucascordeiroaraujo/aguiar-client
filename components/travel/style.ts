import styled from 'styled-components';

export default styled.article`
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: #fdf8e3;
  position: relative;
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
    a {
      color: #2d2d2d;
    }
  }
  span:not(.buy) {
    font-family: 'GothamBook';
    font-size: 14px;
    text-transform: lowercase;
  }
  h2 {
    font-family: 'GothamUltra';
    font-size: calc(25px + (30 - 25) * ((100vw - 250px) / (1920 - 250)));
    @media (min-width: 1920px) {
      font-size: 30px;
      br {
        display: none;
      }
    }
    font-weight: normal;
    text-transform: uppercase;
    margin: 10px 0px 25px 0px;
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a {
      width: 100%;
    }
    div.travel-info {
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
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: calc(40px + (48 - 40) * ((100vw - 250px) / (1920 - 250)));
            @media (min-width: 1920px) {
              font-size: 48px;
            }
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
            font-size: calc(16px + (20 - 16) * ((100vw - 250px) / (1920 - 250)));
            @media (min-width: 1920px) {
              font-size: 20px;
            }
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
    a.buy {
      width: 100%;
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      transition: 0.5s;
      position: relative;
      z-index: 2;
      background: #609764;
      span {
        font-family: 'GothamUltra';
        text-transform: uppercase;
        color: #ffffff;
        text-align: center;
        font-size: calc(20px + (24 - 20) * ((100vw - 250px) / (1920 - 250)));
        @media (min-width: 1920px) {
          font-size: 24px;
        }
      }
      &:hover {
        background: #4cb153;
      }
    }
  }
`;
