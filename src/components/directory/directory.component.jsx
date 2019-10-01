import React from 'react';

// components
import MenuItem from '../menu-item/menu-item.component';

// styled components
import { DirectoryMenuContainer } from './directory.styles';

// redux
import { connect } from 'react-redux';

// selectors
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
