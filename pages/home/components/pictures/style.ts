import styled from 'styled-components';

export default styled.section`
  div.container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
            "full1 full1 normal1"
            "normal2 normal3 normal4"
            "normal5 full2 full2";
    grid-gap: 40px;
    div.item {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
      &:first-child {
        grid-area: full1;
      }
      &:last-child {
        grid-area: full2;
      }
    }
  }
`;
