import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

export default class Main extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        resolution: '',
        showResolution: false
      }

      this._handleInputChange = this._handleInputChange.bind(this);
      this.showResolution = this.showResolution.bind(this);
      this.shouldShowResolution = this.shouldShowResolution.bind(this);
    }

    showResolution() {
      this.setState({
        showResolution: true
      });
    }

    _handleInputChange(e) {
      this.setState({
        showResolution: false,
        resolution: e.target.value
      });
    }

    shouldShowResolution() {
      if(this.state.showResolution === true) {
        return (
          <h2>Your new years resolution is {this.state.resolution}</h2>
        )
      }
    }

    render() {
        return (
          <div>
            <AppBar
                title="Gulp and Rails (and React)"
                iconElementRight={
                  <IconMenu
                    iconButtonElement={
                      <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                  </IconMenu>
                } />
              <div className="main">
                <h1>New Years Resolution Thingy</h1>

                <h3>What is your new years resolution?</h3>
                <TextField
                  hintText="To become awesome"
                  floatingLabelText="Resolution"
                  value={this.state.resolution}
                  onChange={this._handleInputChange}
                  onEnterKeyDown={this.showResolution} />

                <RaisedButton 
                  label="Submit" 
                  primary={true}
                  onClick={this.showResolution} />

                { this.shouldShowResolution() }
              </div>
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