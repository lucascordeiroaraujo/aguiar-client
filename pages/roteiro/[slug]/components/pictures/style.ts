import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 260px;
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
    @media (min-width: 576px) {
      br {
        display: none;
      }
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    img {
      width: 25%;
      height: auto;
      @media (max-width: 992px) {
        width: 50%;
      }
    }
  }
  @media (max-width: 992px) {
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    margin-top: 150px;
  }
  @media (max-width: 576px) {
    margin-top: 100px;
  }
`;
