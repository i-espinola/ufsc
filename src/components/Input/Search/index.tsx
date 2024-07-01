import React from 'react';
import { Button } from '@app/components';
import { SearchStyle, ButtonContainer } from './Styled';

import IconSearch from '@app/assets/svg/search.svg';

export interface SearchProps {
  onChange: () => any;
  onSubmit?: () => any;
  value: string;
  placeholder: string;
}

const Search = ({
  onChange,
  onSubmit,
  value,
  placeholder,
  withSubmit = false,
}) => {
  return (
    <SearchStyle onSubmit={onSubmit}>
      {!withSubmit && <IconSearch />}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {withSubmit && (
        <ButtonContainer>
          <Button onClick={onSubmit} block>
            <IconSearch />
          </Button>
        </ButtonContainer>
      )}
    </SearchStyle>
  );
};

Search.defaultProps = {
  onChange: () => null,
  onSubmit: () => null,
  value: '',
  placeholder: '',
};

export default Search;
export { Search };
