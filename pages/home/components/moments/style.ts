import styled from 'styled-components';

export default styled.section`
  width: 100%;
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
    @media (min-width: 1920px) {
      font-size: 80px;
    }
    @media (max-width: 576px) {
      font-size: calc(32px + (80 - 32) * ((100vw - 250px) / (1920 - 250)));
    }
  }
  & > div {
    background: #089ec3;
    div.container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div.react-multi-carousel {
        width: 50%;
        article {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
          }
          h2 {
            font-size: 20px;
            text-transform: uppercase;
            color: #ffffff;
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
              &.active {
                color: #ffdd36;
              }
            }
          }
          p {
            width: 100%;
            text-align: center;
            font-size: 16px;
            font-family: 'GothamBook';
            color: #ffffff;
            line-height: 30px;
            margin: 35px 0px 0px 0px;
          }
        }
      }
    }
  }
`;
