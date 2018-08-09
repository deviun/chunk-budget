import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import Popup from '../components/Popup';

// body of popups
import PointEditor from '../components/PointEditor';

// producers

function CreatePoint () {
  return (
    <Popup
      name="Create a point"
      id="addPoint"
      key="addPoint"
    >
      <PointEditor />
    </Popup>
  );
}

/**
 * @class Popups
 * @description Manager popup windows
 */
class Popups extends Component {
  static get reference () {
    return {
      addPoint: CreatePoint
    }
  }

  render() {
    return this.props.open.map((popup) => {
      const Component = Popups.reference[popup.id];

      return <Component data={popup.data} key={popup.id} />;
    });
  }
}

Popups.propTypes = {
  open: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    open: state.popups
  };
}

export default connect(mapStateToProps, null)(Popups);