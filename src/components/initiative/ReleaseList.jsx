import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import EditRelease from './EditRelease';

const ReleaseItemList = styled.div`
  overflow-x:auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
      height: 50px;
  }

  table, th, td {
      border: 0px solid black;
  }

  tr {
    height: 30px;
    &:hover {
      background-color: #FAFAFA;
    }
  }

  td {
    padding-left: 5px;
  }
  
  th {
      text-align: left;
      padding-left: 5px;
  }
`;

const ReleaseListWrapper = styled.div`
  
`;

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },  
  root: {
    display: 'flex',
  },

});

class ReleaseList extends Component {
  constructor(props, context) {
    super(props, context);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onReleaseEdit = this.onReleaseEdit.bind(this);
    this.onReleaseEditClose = this.onReleaseEditClose.bind(this);
  }

  state = {
    releases: this.props.initiative.releases || [],
    release: '',
    showReleaseEdit: false,
    currentRelease: {},
    toolTipOpen: false
  };

  onReleaseEdit = (release) => (event) => {
    this.setState({
      showReleaseEdit: true,
      currentRelease: release
    })
  }

  onReleaseEditClose = () => {
    this.setState({
      showReleaseEdit: false,
    })
  }

  handleChange(e) {
    this.setState({ Release: e.target.value });
  }

  onKeyPress = (e) => {
    if(e.keyCode == 13){
      this.props.onReleaseCreate(this.props.initiative.id, this.state.Release);
      this.setState({Release: ''})
       // put the login here
    }
  }

  handleTooltipClose = () => {
    this.setState({ toolTipOpen: false });
  };

  handleTooltipOpen = () => {
    this.setState({ toolTipOpen: true });
  };

  componentWillReceiveProps(oldProps, newProps) {
    this.setState({
      releases: oldProps.initiative.releases,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <ReleaseListWrapper>
        {this.state.showReleaseEdit && 
          <EditRelease release={this.state.currentRelease} open={this.state.showReleaseEdit} onClose={this.onReleaseEditClose}/>}

        <form className={classes.container} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <h3>Releases</h3>
          <FormControl
            className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
            aria-describedby="Release"
          >
            <FormHelperText id="Release"></FormHelperText>
            <Input
              id="adornment-weight"
              value={this.state.Release}
              placeholder={"Enter a new Release name and hit Enter"}
              onChange={this.handleChange}
              onKeyDown={this.onKeyPress} 
              inputProps={{
                'aria-label': 'Release',
              }}
            />
            <FormHelperText id="Release"></FormHelperText>
          </FormControl>
        </form>
        <ReleaseItemList>
          <table>
            <tr>
              <th style={{width: '40%'}}>Release</th>
              <th>Release Date</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tbody>
            {
              this.state.releases && this.state.releases.map ((x,key) => (
                <tr key={key}>
                  <td style={{width: '40%'}}>{x.name}</td>
                  <td>{x.releaseDate}</td>
                  <td>{x.status}</td>
                  <td>
                    <IconButton className={classes.button} aria-label="Add an alarm" onClick={this.onReleaseEdit(x)}>
                      <Icon>edit</Icon>
                    </IconButton>
                  </td>
                  <td>
                    <IconButton className={classes.button} aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
                )
              )
            }
            </tbody>
          </table>
        </ReleaseItemList>
      </ReleaseListWrapper>
    );
  }
}

ReleaseList.defaultProps = {
  initiative: {}
};

ReleaseList.propTypes = {
  initiative: PropTypes.object,
  onReleaseCreate: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReleaseList);
