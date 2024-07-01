import styled from 'styled-components';
import { tokens } from '@app/styles/theme';

const Background = styled.div`
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    position: fixed;
    min-height: 100vh;
    background-color: white;
    background-image: url('/hero-2.jpg');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    z-index: -2;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    min-height: 100vh;
    background: linear-gradient(
      45deg,
      ${tokens.color.primary},
      #fff,
      ${tokens.color.primary},
      #fff
    );
    background-size: 800% 800%;
    -webkit-animation: AnimationName 16s ease infinite;
    -moz-animation: AnimationName 16s ease infinite;
    animation: AnimationName 16s ease infinite;
    background-clip: padding-box;
    opacity: 0.4;
    z-index: -1;
  }
`;

export default Background;
export { Background };
