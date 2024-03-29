import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  input, select, textarea {
    font-family: 'GothamMedium';
    outline: none;
  }
  body {
    overflow-x: hidden;
    transition: 0.5s;
  }
  ol, ul {
    list-style: none;
    padding: 0px;
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none !important;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face{
    font-family: 'FarmhandSansRegular';
    src: url(${require('./fonts/FarmhandSansRegular/FarmhandSansRegular.woff')}) format('woff'),
      url(${require('./fonts/FarmhandSansRegular/FarmhandSansRegular.woff2')}) format('woff2'),
      url(${require('./fonts/FarmhandSansRegular/FarmhandSansRegular.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face{
    font-family: 'GothamBold';
    src: url(${require('./fonts/GothamBold/GothamBold.woff')}) format('woff'),
      url(${require('./fonts/GothamBold/GothamBold.woff2')}) format('woff2'),
      url(${require('./fonts/GothamBold/GothamBold.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face{
    font-family: 'GothamBook';
    src: url(${require('./fonts/GothamBook/GothamBook.woff')}) format('woff'),
      url(${require('./fonts/GothamBook/GothamBook.woff2')}) format('woff2'),
      url(${require('./fonts/GothamBook/GothamBook.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face{
    font-family: 'GothamMedium';
    src: url(${require('./fonts/GothamMedium/GothamMedium.woff')}) format('woff'),
      url(${require('./fonts/GothamMedium/GothamMedium.woff2')}) format('woff2'),
      url(${require('./fonts/GothamMedium/GothamMedium.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face{
    font-family: 'GothamUltra';
    src: url(${require('./fonts/GothamUltra/GothamUltra.woff')}) format('woff'),
      url(${require('./fonts/GothamUltra/GothamUltra.woff2')}) format('woff2'),
      url(${require('./fonts/GothamUltra/GothamUltra.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  #nprogress {
		pointer-events: none;
		.bar {
			position: fixed;
			z-index: 1031;
			top: 0;
			left: 0;
			width: 100%;
			height: 5px;
			background: #089ec3
		}
	}
  .react-reveal {
		opacity: 0;
  }
`;

export const Container = styled.div`
  width: 96%;
  max-width: 1680px;
  margin: 0px auto;
  position: relative;
  &.full {
    width: 100%;
    max-width: 1920px;
  }
  &.small-container {
    max-width: 1440px;
  }
`;
