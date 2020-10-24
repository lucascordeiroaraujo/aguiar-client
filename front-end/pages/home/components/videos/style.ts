import styled from 'styled-components';

export default styled.section`
  width: 100%;
  padding-top: calc(6.2% + 125px);
  margin-bottom: 125px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50%;
    background: #d6fff8;
  }
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-family: 'FarmhandSansRegular';
      text-transform: uppercase;
      color: #089ec3;
      text-align: center;
      font-weight: normal;
      margin-bottom: 50px;
      font-size: calc(40px + (80 - 40) * ((100vw - 250px) / (1920 - 250)));
      span {
        transition: 0.5s;
      }
      @media (min-width: 992px) {
        span {
          margin-left: -57%;
        }
      }
      @media (min-width: 1920px) {
        font-size: 80px;
      }
    }
    div.full-video {
      width: 100%;
      position: relative;
      padding-bottom: 56.25%;
      iframe {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }
    }
    div.list-videos {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 30px;
      article {
        width: 24%;
        opacity: 0.5;
        transition: 0.5s;
        h2 {
          display: none;
        }
        button {
          width: 100%;
          border: none;
          cursor: pointer;
          img {
            width: 100%;
            height: auto;
          }
        }
        &.active {
          opacity: 1;
        }
        @media (max-width: 768px) {
          width: 49%;
          &:first-child, &:nth-child(2) {
            margin-bottom: 2%;
          }
        }
      }
    }
    & > a {
      font-size: 16px;
      color: #ffffff;
      text-transform: uppercase;
      text-align: center;
      padding: 21px 15px;
      font-family: 'GothamBold';
      margin-top: 60px;
      transition: 0.5s;
      background: #ff0000;
      &:hover {
        background: #ed2222;
      }
      @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
        margin-top: 30px;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 100px;
  }
`;
