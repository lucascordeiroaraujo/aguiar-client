import styled from 'styled-components';

export default styled.section`
  margin-bottom: 125px;
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
      @media (min-width: 1920px) {
        font-size: 80px;
      }
      @media (max-width: 576px) {
        font-size: calc(32px + (80 - 32) * ((100vw - 250px) / (1920 - 250)));
      }
    }
    div.content-travels {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 40px;
      @media (max-width: 1420px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 100px;
  }
`;
