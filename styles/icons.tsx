import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
      src:  url(${require('./fonts/icomoon/icomoon.eot?7stw2t')});
      src:  url(${require('./fonts/icomoon/icomoon.eot?7stw2t#iefix')}) format('embedded-opentype'),
      url(${require('./fonts/icomoon/icomoon.ttf?7stw2t')}) format('truetype'),
      url(${require('./fonts/icomoon/icomoon.woff?7stw2t')}) format('woff'),
      url(${require('./fonts/icomoon/icomoon.svg?7stw2t#icomoon')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-location:before {
    content: "\e947";
  }
  .icon-calendar:before {
    content: "\e953";
  }
  .icon-star-full:before {
    content: "\e9d9";
  }
  .icon-facebook2:before {
    content: "\ea91";
  }
  .icon-instagram:before {
    content: "\ea92";
  }
  .icon-youtube:before {
    content: "\ea9d";
  }
`;
