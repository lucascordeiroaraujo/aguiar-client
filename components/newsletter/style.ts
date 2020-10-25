import styled from 'styled-components';

export default styled.div`
  width: 100%;
  margin-top: 125px;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d6fff8;
  & > div, form {
    width: 48%;
    display: flex;
    flex-direction: column;
  }
  & > div {
    justify-content: flex-end;
    strong, p {
      text-align: right;
      @media (max-width: 992px) {
        text-align: center;
        br {
          display: none;
        }
      }
    }
    strong {
      font-family: 'GothamUltra';
      text-transform: uppercase;
      color: #089ec3;
      font-weight: normal;
      margin-bottom: 20px;
      font-size: calc(25px + (30 - 25) * ((100vw - 250px) / (1920 - 250)));
      @media (min-width: 1920px) {
        font-size: 30px;
      }
    }
    p {
      font-family: 'GothamMedium';
      font-size: 18px;
      color: #313131;
      @media (max-width: 992px) {
        font-size: 16px;
      }
    }
  }
  form {
    justify-content: flex-start;
    input {
      width: 100%;
      height: 50px;
      max-width: 380px;
      border-radius: 30px;
      border: 1px solid transparent;
      font-size: 16px;
      color: #313131;
      padding: 15px;
      margin-bottom: 15px;
      transition: 0.5s;
      background: #ffffff;
      &:disabled {
        border: 1px solid #089ec3;
        opacity: 0.5 !important;
      }
      &[type=submit] {
        width: 240px;
        cursor: pointer;
        font-size: 18px;
        color: #ffffff;
        font-family: 'GothamUltra';
        text-transform: uppercase;
        transition: 0.5s;
        appearance: none;
        background: #609764;
        &:hover {
          background: #4cb153;
        }
      }
    }
    @media (max-width: 992px) {
      margin-top: 40px;
      input {
        width: 100% !important;
        max-width: 100%;
        text-align: center;
      }
    }
    div.loader {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: 'GothamMedium';
      font-size: 14px;
      color: #313131;
      @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      i {
        margin-right: 8px;
        font-size: 20px;
        &.icon-spinner {
          animation: rotating 1.5s linear infinite;
          color: #089ec3;
        }
        &.icon-checkmark {
          color: #609764;
        }
        &.icon-cancel-circle {
          color: #ff0000;
        }
      }
      @media (max-width: 992px) {
        justify-content: center;
        text-align: center;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        i {
          margin: 0px 0px 8px 0px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding: 40px;
    margin-top: 100px;
    flex-direction: column;
    div, form {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 576px) {
    padding: 20px;
  }
`;
