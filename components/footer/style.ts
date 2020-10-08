import styled from 'styled-components';

export default styled.footer`
  width: 100%;
  padding: 220px 0px 80px 0px;
  margin-top: 125px;
  background: url(${require('~/public/images/background-footer.jpg')}) center top no-repeat #089ec3;
  background-size: 100% auto;
  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      display: flex;
      &:first-child {
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        text-align: left;
        strong, a {
          color: #FFFFFF;
        }
        strong {
          font-size: 80px;
          text-transform: uppercase;
          font-family: 'FarmhandSansRegular';
          font-weight: normal;
          @media (max-width: 768px) {
            font-size: 54px;
          }
        }
        a {
          &.email {
            font-size: 18px;
            font-family: 'GothamMedium';
            margin: 0px 0px 40px 0px;
            text-transform: uppercase;
            letter-spacing: 3.5px;
            @media (max-width: 768px) {
              font-size: 14px;
              letter-spacing: 1px;
            }
          }
          &.phone {
            font-size: 32px;
            font-family: 'GothamUltra';
            margin: 0px 0px 5px 0px;
            letter-spacing: 1px;
            small {
              font-size: 23px;
              letter-spacing: 0px;
              font-family: 'GothamMedium';
            }
            @media (max-width: 768px) {
              font-size: 28px;
              small {
                font-size: 20px;
              }
            }
          }
          &:hover {
            color: #d6fff8;
          }
        }
        @media (max-width: 992px) {
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
        }
      }
      &:last-child {
        justify-content: center;
        align-items: center;
        a {
          color: #FFFFFF;
          margin: 0px 15px;
          font-size: 30px;
          @media (max-width: 768px) {
            font-size: 25px;
          }
        }
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
  @media (max-width: 992px) {
    padding-top: 130px;
    margin-top: 100px;
  }
`;
