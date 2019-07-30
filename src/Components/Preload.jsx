import React from "react";

class Preload extends React.Component {
    
  render() {
    const { error, isLoading, children } = this.props;

    if (error) {
      return (<p>{error.message}</p>);
    }
    if (isLoading) {
      return (<p>Loading ...</p>);
    }
    return children;
  }
}

export default Preload;