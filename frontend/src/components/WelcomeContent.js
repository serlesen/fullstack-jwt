import * as React from 'react';

export default class WelcomeContent extends React.Component {

  render() {
    return (
        <div className="row justify-content-md-center">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">Welcome</h1>
                <p className="lead">Login to see protected content.</p>
              </div>
            </div>
        </div>
    );
  };
}