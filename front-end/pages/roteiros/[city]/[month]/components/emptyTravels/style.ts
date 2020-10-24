import styled from 'styled-components';

export default styled.section`
  padding-top: 125px;
  width: 100%;
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > h2, & > p {
      width: 100%;
      text-align: center;
    }
    & > h2 {
      font-family: 'FarmhandSansRegular';
      font-weight: normal;
      color: #089ec3;
      text-transform: uppercase;
      font-size: calc(40px + (80 - 40) * ((100vw - 250px) / (1920 - 250)));
      @media (min-width: 1920px) {
        font-size: 80px;
      }
    }
    & > p {
      font-family: 'GothamMedium';
      font-size: 18px;
      color: #666;
      margin-top: 20px;
      strong {
        font-family: 'GothamBold';
        color: #000;
      }
    }
  }
  @media (max-width: 992px) {
    padding: 50px 0px;
  }
`;
