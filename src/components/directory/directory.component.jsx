import React from 'react';

// components
import MenuItem from '../menu-item/menu-item.component';

// styles
import './directory.styles.scss';

// redux
import { connect } from 'react-redux';

// selectors
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
