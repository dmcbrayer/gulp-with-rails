import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
          <div>
            <h1>This is what a React Component looks like</h1>

            <h2>{this.props.subText}</h2>
          </div>
        )
    }
}

Main.propTypes = {
  subText: React.PropTypes.string
};

Main.defaultProps = {
  subText: "This is the default subtext"
}