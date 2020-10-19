import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url(${require('./fonts/icomoon/icomoon.eot?9d6k7y')});
    src:  url(${require('./fonts/icomoon/icomoon.eot?9d6k7y#iefix')}) format('embedded-opentype'),
      url(${require('./fonts/icomoon/icomoon.ttf?9d6k7y')}) format('truetype'),
      url(${require('./fonts/icomoon/icomoon.woff?9d6k7y')}) format('woff'),
      url(${require('./fonts/icomoon/icomoon.svg?9d6k7y#icomoon')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-arrow-down:before {
    content: "\\e903";
  }
  .icon-left-arrow:before {
    content: "\\e902";
  }
  .icon-next:before {
    content: "\\e900";
  }
  .icon-previous:before {
    content: "\\e901";
  }
  .icon-location:before {
    content: "\\e947";
  }
  .icon-calendar:before {
    content: "\\e953";
  }
  .icon-star-full:before {
    content: "\\e9d9";
  }
  .icon-facebook2:before {
    content: "\\ea91";
  }
  .icon-instagram:before {
    content: "\\ea92";
  }
  .icon-youtube:before {
    content: "\\ea9d";
  }

`;
