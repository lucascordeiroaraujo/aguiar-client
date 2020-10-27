import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  margin-bottom: -6.2%;
  h1 {
    font-family: 'FarmhandSansRegular';
    text-transform: uppercase;
    color: #089ec3;
    text-align: center;
    font-weight: normal;
    margin-bottom: 50px;
    font-size: calc(40px + (80 - 40) * ((100vw - 250px) / (1920 - 250)));
    @media (min-width: 1920px) {
      font-size: 80px;
    }
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 6.25%;
    div.images {
      width: 43%;
      img{
        width: 100%;
        height: auto;
      }
      button.slick-arrow, ul.slick-dots {
        display: none !important;
      }
    }
    div.slick-container {
      width: 57%;
      padding-right: 12.5%;
      background: #089ec3;
      button.slick-arrow {
        width: 73px;
        height: 73px;
        position: absolute;
        z-index: 5;
        top: auto;
        right: auto;
        left: -36.5px;
        transition: 0.5s;
        background: #ffffff;
        &:before {
          color: #4eb9d4;
          font-family: 'icomoon';
          font-size: 40px;
        }
        &.slick-next {
          top: calc(50% - 36.5px);
          &:before {
            content: "\\e900";
          }
        }
        &.slick-prev {
          bottom: calc(50% - 108.5px);
          &:before {
            content: "\\e901";
          }
        }
        &:hover {
          background: #c0f3ff;
        }
        @media (max-width: 1200px) { 
          top: auto !important;
          bottom: -25px !important;
          left: 50%;
          width: 50px;
          height: 50px;
          &:before {
            font-size: 25px;
          }
          &.slick-next {
            margin-left: 25px;
            transform: translate(-50%, 0px);
          }
          &.slick-prev {
            margin-left: -25px;
            transform: translate(-50%, 0px);
          }
        }
      }
      ul.slick-dots {
        display: none !important;
      }
      article {
        width: 100%;
        display: flex !important;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        outline: none !important;
        padding: 50px 0px 50px 12.5%;
        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
        h2, p {
          width: 100%;
          text-align: center;
          color: #ffffff;
        }
        h2 {
          font-size: 20px;
          text-transform: uppercase;
          font-weight: normal;
          font-family: 'GothamUltra';
          margin: 15px 0px;
        }
        div.stars {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 18px;
            color: #ffffff;
            margin: 0px 2px;
            &.active {
              color: #ffdd36;
            }
          }
        }
        p {
          font-size: 16px;
          font-family: 'GothamBook';
          line-height: 30px;
          margin: 35px 0px 0px 0px;
        }
        @media (max-width: 1200px) { 
          padding: 50px 0px 50px 0px;
          p {
            font-size: 15px;
            line-height: 28px;
          }
        }
      }
    }
    @media (max-width: 1200px) { 
      padding-left: 0px;
      flex-direction: column-reverse;
      div.images, div.slick-container {
        width: 96%;
      }
      div.slick-container {
        padding: 0px 15px;
      }
    }
  }
  &.not-has-videos {
    margin-bottom: 100px;
  }
`;
