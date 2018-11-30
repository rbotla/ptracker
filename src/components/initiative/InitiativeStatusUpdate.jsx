import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import classNames from 'classnames';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

class InitiativeStatusUpdate extends Component {
  constructor(props, context) {
    super(props, context);
    // this.handleChange = this.handleChange.bind(this);
  }

  state = {
    progress: this.props.initiative.progress || 0,
    status: this.props.initiative.status || 'G',
    stage: this.props.initiative.stage || 'Funnel',
    weekStart: this.getMonday(new Date()),
    weekStartStr: (this.getMonday(new Date()).getMonth() + 1) + '/' + this.getMonday(new Date()).getDate() + '/' +  this.getMonday(new Date()).getFullYear()
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentWillReceiveProps(oldProps, newProps) {
    this.setState({
      progress: oldProps.initiative.progress,
      status: oldProps.initiative.status,
      stage: oldProps.initiative.stage,
      goGreen: ''
    });
  }

  getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  // handleChange(e) {
  //   this.setState({ value: e.target.value });
  // }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormControl
          className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
          aria-describedby="Progress"
        >
          <FormHelperText id="Progress">Progress</FormHelperText>
          <Input
            id="adornment-weight"
            value={this.state.progress}
            onChange={this.handleChange('progress')}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
            inputProps={{
              'aria-label': 'Progress',
            }}
          />
          <FormHelperText id="weight-helper-text"></FormHelperText>
        </FormControl>

        <FormControl className={classNames(classes.margin, classes.withoutLabel, classes.textField)}>
          <InputLabel htmlFor="status">Status</InputLabel>
          <Select
            value={this.state.status}
            onChange={this.handleChange('status')}
            inputProps={{
              name: 'Status',
              id: 'status',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'R'}>Red</MenuItem>
            <MenuItem value={'Y'}>Yellow</MenuItem>
            <MenuItem value={'G'}>Green</MenuItem>
          </Select>
          <FormHelperText id="weight-helper-text"></FormHelperText>
        </FormControl>

        {this.state.status !== 'G' &&
        <TextField
          id="filled-multiline-flexible"
          label="Enter details to go green"
          multiline
          rows="3"
          rowsMax="6"
          value={this.state.goGreen}
          onChange={this.handleChange('goGreen')}
          className={classes.textField}
          margin="normal"
          helperText=""
          variant="filled"
        />
        }

        <FormControl className={classNames(classes.margin, classes.withoutLabel, classes.textField)}>
          <InputLabel htmlFor="stage">Stage</InputLabel>
          <Select
            value={this.state.stage}
            onChange={this.handleChange('stage')}
            inputProps={{
              name: 'Stage',
              id: 'stage',
            }}
          >
            <MenuItem value={'Funnel'}>Funnel</MenuItem>
            <MenuItem value={'Analysis'}>Analysis</MenuItem>
            <MenuItem value={'Backlog'}>Backlog</MenuItem>
            <MenuItem value={'Implementing'}>Implementing</MenuItem>
            <MenuItem value={'Done'}>Done</MenuItem>
          </Select>
        </FormControl>

      </form>
    );
  }
}

InitiativeStatusUpdate.defaultProps = {
  initiative: {}
};

InitiativeStatusUpdate.propTypes = {
  initiative: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InitiativeStatusUpdate);
