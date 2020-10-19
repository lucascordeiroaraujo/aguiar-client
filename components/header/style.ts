import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100vw;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 80%;
    background: #d6fff8;
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1920px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    width: 9%;
    height: auto;
    min-width: 115px;
    max-width: 172px;
  }
  & > div.social-networking {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #0098b6;
      font-size: 30px;
      margin: 0px 10px;
      transition: 0.5s;
      &:last-child {
        font-size: 35px;
      }
      &:hover {
        color: #2d2d2d;
      }
    }
    @media (max-width: 576px) {
      display: none;
    }
  }
  & > button {
    width: 31px;
    height: 15px;
    position: relative;
    border: none;
    cursor: pointer;
    background: transparent;
    &:before, &:after {
      content: '';
      position: absolute;
      left: 0px;
      width: 100%;
      height: 3px;
      transition: 0.5s ease-in-out;
      background: #0098b6;
    }
    &:before {
      top: 0px;
    }
    &:after {
      top: 12px;
    }
    &.active {
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        top: 0px;
        transform: rotate(-45deg);
      }
    }
  }
`;

export const Banner = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
