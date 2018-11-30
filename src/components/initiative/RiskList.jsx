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
import EditRisk from './EditRisk';

const RiskItemList = styled.div`
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

const RiskListWrapper = styled.div`
  
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

class RiskList extends Component {
  constructor(props, context) {
    super(props, context);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onRiskEdit = this.onRiskEdit.bind(this);
    this.onRiskEditClose = this.onRiskEditClose.bind(this);
  }

  state = {
    risks: this.props.initiative.risks || [],
    risk: '',
    showRiskEdit: false,
    currentRisk: {},
    toolTipOpen: false
  };

  onRiskEdit = (risk) => (event) => {
    this.setState({
      showRiskEdit: true,
      currentRisk: risk
    })
  }

  onRiskEditClose = () => {
    this.setState({
      showRiskEdit: false,
    })
  }

  handleChange(e) {
    this.setState({ Risk: e.target.value });
  }

  onKeyPress = (e) => {
    if(e.keyCode == 13){
      this.props.onRiskCreate(this.props.initiative.id, this.state.Risk);
      this.setState({Risk: ''})
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
      risks: oldProps.initiative.risks,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <RiskListWrapper>
        {this.state.showRiskEdit && 
          <EditRisk risk={this.state.currentRisk} open={this.state.showRiskEdit} onClose={this.onRiskEditClose}/>}

        <form className={classes.container} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <h3>Risks</h3>
          <FormControl
            className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
            aria-describedby="Risk"
          >
            <FormHelperText id="Risk"></FormHelperText>
            <Input
              id="adornment-weight"
              value={this.state.Risk}
              placeholder={"Enter a new Risk and hit Enter"}
              onChange={this.handleChange}
              onKeyDown={this.onKeyPress} 
              inputProps={{
                'aria-label': 'Risk',
              }}
            />
            <FormHelperText id="Risk"></FormHelperText>
          </FormControl>
        </form>
        <RiskItemList>
          <table>
            <tr>
              <th style={{width: '40%'}}>Risk</th>
              <th>Likelihood</th>
              <th>Severity</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tbody>
            {
              this.state.risks && this.state.risks.map ((x,key) => (
                <tr key={key}>
                  <td style={{width: '40%'}}>{x.risk}</td>
                  <td>{x.likelihood}</td>
                  <td>{x.severity}</td>
                  <td>{x.owner}</td>
                  <td>{x.status}</td>
                  <td>
                    <IconButton className={classes.button} aria-label="Add an alarm" onClick={this.onRiskEdit(x)}>
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
        </RiskItemList>
      </RiskListWrapper>
    );
  }
}

RiskList.defaultProps = {
  initiative: {}
};

RiskList.propTypes = {
  initiative: PropTypes.object,
  onRiskCreate: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RiskList);
