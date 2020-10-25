import styled from 'styled-components';

export const PageBack = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
  color: #089ec3;
  cursor: pointer;
  font-family: 'GothamMedium';
  i {
    margin-right: 5px;
  }
  @media (max-width: 992px) { 
    padding: 40px 0px;
  }
`;

export default styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 125px;
  & > img {
    width: 45%;
    height: auto;
    @media (max-width: 992px) { 
      width: 100%;
      margin-bottom: 20px;
    }
  }
  & > div {
    width: 500px;
    margin-left: 5%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    & > span {
      font-family: 'GothamUltra';
      text-transform: uppercase;
      margin-bottom: 35px;
      &.pre-sale {
        padding: 10px 40px;
        border-radius: 50px;
        font-size: 26px;
        color: #ffffff;
        background: #089ec3;
      }
      &.countdown {
        color: #ff1800;
        font-size: calc(35px + (48 - 35) * ((100vw - 250px) / (1920 - 250)));
        @media (min-width: 1920px) {
          font-size: 48px;
        }
      }
    }
    div.price {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 55px;
      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        span {
          font-family: 'GothamUltra';
          text-transform: uppercase;
          &:first-child {
            margin-right: 10px;
            font-size: 18px;
          }
        }
        &:first-child {
          margin-right: 30px;
          &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0px;
            transform: translate(0px, -50%);
            width: 100%;
            height: 3px;
            background: #262626;
          }
          span {
            color: #262626;
            &:first-child {
              line-height: 18px;
            }
            &:last-child {
              font-size: calc(35px + (46 - 35) * ((100vw - 250px) / (1920 - 250)));
              @media (min-width: 1920px) {
                font-size: 46px;
              }
            }
          }
        }
        &:last-child span {
          color: #089ec3;
          &:first-child {
            line-height: 22px;
            strong {
              font-size: 30px;
            }
          }
          &:last-child {
            font-size: calc(48px + (75 - 48) * ((100vw - 250px) / (1920 - 250)));
            @media (min-width: 1920px) {
              font-size: 75px;
            }
          }
        }
      }
    }
    div.dates {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        color: #353535;
        font-family: 'GothamUltra';
        font-size: calc(30px + (38 - 30) * ((100vw - 250px) / (1920 - 250)));
        @media (min-width: 1920px) {
          font-size: 38px;
        }
        small {
          font-family: 'GothamBold';
          font-size: 12px;
        }
        &:first-child {
          margin-right: 30px;
        }
      }
    }
    div.included-in {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      border-top: 1px solid #b4b4b4;
      border-bottom: 1px solid #b4b4b4;
      padding: 20px 0px;
      margin-top: 10px;
      & > span {
        font-family: 'GothamUltra';
        font-size: 24px;
        text-transform: lowercase;
        color: #089ec3;
        margin-bottom: 15px;
        width: 100%;
        @media (max-width: 992px) { 
          text-align: center;
        }
      }
      & > ul {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        li {
          width: 50%;
          font-family: 'GothamMedium';
          font-size: 18px;
          color: #353535;
          &:not(:last-child) {
            margin-bottom: 15px;
          }
          @media (max-width: 768px) { 
            width: 100%;
          }
        }
        @media (max-width: 992px) { 
          justify-content: center;
          align-items: center;
          li {
            text-align: center;
          }
        }
      }
    }
    div.boarding-location {
      margin: 25px 0px 40px 0px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      i {
        color: #089ec3;
        font-size: 35px;
        margin-right: 5px;
      }
      div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        span {
          font-family: 'GothamMedium';
          font-size: 16px;
          &:first-child {
            text-transform: uppercase;
            color: #089ec3;
            margin-bottom: 5px;
          }
          &:last-child {
            color: #474747;
          }
        }
      }
      @media (max-width: 992px) { 
        flex-direction: column;
        i {
          margin: 0px 0px 10px 0px;
        }
        div {
          justify-content: center;
          align-items: center;
          span {
            text-align: center;
          }
        }
      }
    }
    & > a {
      font-family: 'GothamUltra';
      text-transform: uppercase;
      color: #ffffff;
      border-radius: 50px;
      font-size: 20px;
      padding: 25px 30px;
      transition: 0.5s;
      background: #609764;
      &:hover {
        background: #4cb153;
      }
    }
    @media (max-width: 992px) { 
      width: 96%;
      justify-content: center;
      align-items: center;
      margin: 0px auto;
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 100px;
    flex-direction: column;
  }
`;
