import Styled from 'styled-components';

const MarginStyle = Styled.div`
  margin-left: ${({ theme }) => theme.left}rem; 
  margin-top: ${({ theme }) => theme.top}rem; 
  margin-right: ${({ theme }) => theme.right}rem; 
  margin-bottom: ${({ theme }) => theme.bottom}rem; 
  display: flex;
`;

export default MarginStyle;
export { MarginStyle };
