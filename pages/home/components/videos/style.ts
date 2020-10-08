import styled from 'styled-components';

export default styled.section`
  width: 100%;
  padding-top: 450px;
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
      @media (max-width: 576px) {
        font-size: calc(32px + (80 - 32) * ((100vw - 250px) / (1920 - 250)));
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
      div {
        width: 24%;
        img {
          width: 100%;
          height: auto;
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
      text-transform: uppercase;
      color: #ffffff;
      text-align: center;
      padding: 25px 20px;
      font-family: 'GothamBold';
      margin-top: 60px;
      transition: 0.5s;
      background: #ff0000;
      &:hover {
        background: #ed2222;
      }
      @media (max-width: 768px) {
        font-size: 14px;
        padding: 15px;
        margin-top: 30px;
      }
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 100px;
  }
`
