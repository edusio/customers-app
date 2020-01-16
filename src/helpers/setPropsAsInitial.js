
import React, { Component } from 'react';

// Hight order component
export const setPropsAsInitial = (WrappedComponent) => (
  class extends Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          initialValues={this.props}
          enableReinitialize
        />
      );
    }
  }
);
