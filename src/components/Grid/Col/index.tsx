import React from 'react';
import { ColStyle } from './styled';

export interface ArrProps {
  width: number;
  mediaQuery: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children?: React.ReactNode | JSX.Element | string;
  className?: string;
  style?: object;
}

const sortMediaQuery = (arr: ArrProps[]) => {
  const sort = arr.sort((a, b) => {
    if (a.width > b.width) return -1;
    if (a.width < b.width) return 1;
    return 0;
  });
  return sort;
};

const buildMediaQuery = (props: ColProps) => {
  const { xs, sm, md, lg, xl } = props;
  const screens: any = { xs, sm, md, lg, xl };
  const arrTheme: any = [];
  for (let width in screens) {
    if (screens[width]) {
      arrTheme.push({
        width: parseInt(screens[width]),
        mediaQuery: width.toString(),
      });
    }
  }
  return sortMediaQuery(arrTheme);
};

const DivCol = (props: ColProps) => {
  const { style, className, children } = props;
  const arrTheme = buildMediaQuery(props);
  return (
    <ColStyle style={style} className={className} theme={arrTheme}>
      {children}
    </ColStyle>
  );
};

DivCol.defaultProps = {
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  className: '',
  style: {},
};

const Col = React.memo(DivCol);

export default Col;
export { Col };
