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
import EditFeature from './EditFeature';

const FeatureItemList = styled.div`
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

const FeatureListWrapper = styled.div`
  
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

class FeatureList extends Component {
  constructor(props, context) {
    super(props, context);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onFeatureEdit = this.onFeatureEdit.bind(this);
    this.onFeatureEditClose = this.onFeatureEditClose.bind(this);
  }

  state = {
    features: this.props.initiative.features || [],
    feature: '',
    showFeatureEdit: false,
    currentFeature: {},
    toolTipOpen: false
  };

  // handleChange = name => event => {
  //   event.preventDefault();
  //   if (event.keyCode === 13) {
  //     console.log('do validate');
  //     return;
  //   }
  //   console.log(event.target.value)
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  // };

  onFeatureEdit = (feature) => (event) => {
    this.setState({
      showFeatureEdit: true,
      currentFeature: feature
    })
  }

  onFeatureEditClose = () => {
    this.setState({
      showFeatureEdit: false,
    })
  }

  handleChange(e) {
    this.setState({ feature: e.target.value });
  }

  onKeyPress = (e) => {
    if(e.keyCode == 13){
      this.props.onFeatureCreate(this.props.initiative.id, this.state.feature);
      this.setState({feature: ''})
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
      features: oldProps.initiative.features,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <FeatureListWrapper>
        {this.state.showFeatureEdit && 
          <EditFeature feature={this.state.currentFeature} open={this.state.showFeatureEdit} onClose={this.onFeatureEditClose}/>}

        <form className={classes.container} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <h3>Features / Deliverables / Milestones</h3>
          <FormControl
            className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
            aria-describedby="Feature"
          >
            <FormHelperText id="feature"></FormHelperText>
            <Input
              id="adornment-weight"
              value={this.state.feature}
              placeholder={"Enter a new feature / deliverable / milestone and hit Enter"}
              onChange={this.handleChange}
              onKeyDown={this.onKeyPress} 
              inputProps={{
                'aria-label': 'Feature',
              }}
            />
            <FormHelperText id="Feature"></FormHelperText>
          </FormControl>
        </form>
        <FeatureItemList>
          <table>
            <tr>
              <th style={{width: '60%'}}>Feature</th>
              <th>Release</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tbody>
            {
              this.state.features && this.state.features.map ((x,key) => (
                <tr key={key}>
                  <td style={{width: '60%'}}>
                      {x.name}
                  </td>
                  <td>{x.release ? x.release : 'NA'}</td>
                  <td>{x.status ? x.status : 'NA'}</td>
                  <td>{x.progress}%</td>
                  <td>
                    <IconButton className={classes.button} aria-label="Add an alarm" onClick={this.onFeatureEdit(x)}>
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
        </FeatureItemList>
      </FeatureListWrapper>
    );
  }
}

FeatureList.defaultProps = {
  initiative: {}
};

FeatureList.propTypes = {
  initiative: PropTypes.object,
  onFeatureCreate: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureList);
