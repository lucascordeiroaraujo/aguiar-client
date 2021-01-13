import styled from 'styled-components';

export default styled.section`
  margin: 125px 0px;
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
      @media (min-width: 576px) {
        br {
          display: none;
        }
      }
    }
    form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        & > div {
          width: 100%;
          max-width: 400px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          margin: 0px 20px;
          label, select {
            width: 100%;
            font-family: 'GothamBook';
          }
          label {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 16px;
            margin-bottom: 15px;
            i {
              font-size: 16px;
              color: #606060;
              margin-right: 5px;
            }
          }
          div {
            width: 100%;
            position: relative;
            &:after {
              content: "\\e903";
              font-family: 'icomoon';
              font-size: 15px;
              color: #000000;
              position: absolute;
              top: 50%;
              right: 0px;
              pointer-events: none;
              transform: translate(0px, -50%);
            }
            select {
              color: #70cabb;
              font-size: 18px;
              border: none;
              height: 30px;
              border-bottom: 1px solid #1c1c1c;
              padding-right: 25px;
              cursor: pointer;
              appearance: none;
              border-radius: 0px;
              background: transparent;
              option {
                padding: 0px 10px;
              }
            }
          }
          @media (max-width: 768px) {
            width: 100%;
            margin: 20px 0px;
            label, select {
              justify-content: center;
              text-align-last: center;
            }
          }
        }
      }
      input {
        padding: 20px;
        font-size: 18px;
        border-radius: 50px;
        font-family: 'GothamUltra';
        text-transform: uppercase;
        color: #ffffff;
        transition: 0.5s;
        text-align: center;
        margin: 40px 0px 60px 0px;
        border: none;
        cursor: pointer;
        appearance: none;
        background: #089ec3;
        &:hover {
          background: #46a9c1;
        }
        @media (max-width: 768px) {
          padding: 10px;
          width: 100%;
          margin: 20px 0px 30px 0px;
        }
      }
    }
    div.content-travels {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 40px;
      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
      &.tree-itens {
        justify-content: center;
        justify-items: center;
      }
    }
  }
  @media (max-width: 992px) {
    margin: 50px 0px 100px 0px;
  }
`;
