import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={`tab ${props.tab.selected ? "active-tab" : null}`}
      onClick={() => { props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string,
  selectTabHandler:  PropTypes.func
}

export default Tab;
