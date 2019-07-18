import React from "react";

class Preload extends React.Component {
    
  render() {
    const { error, isLoading, children } = this.props;

    return (
        <React.Fragment>
            {error ? <p>{error.message}</p> : null}
            {isLoading ? <p>Loading ...</p> : null}
            {(!error && !isLoading) ? children : null}
        </React.Fragment>
    );
  }
}

export default Preload;