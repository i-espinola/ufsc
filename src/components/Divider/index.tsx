import React from 'react';
import { DividerStyle } from './styled';

const Hr = () => <DividerStyle />;

const Divider = React.memo(React.forwardRef(Hr));

export default Divider;
export { Divider };
