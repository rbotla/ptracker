import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class EditRisk extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  state = {
    open: this.props.open || false,
    risk: this.props.risk.risk || '',
    description: this.props.risk.description || '',
    likelihood: this.props.risk.likelihood || '',
    severity: this.props.risk.severity || '',
    action: this.props.risk.action || '',
    owner: this.props.risk.owner || '',
    status: this.props.risk.status || '',
    notes: this.props.risk.notes || '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    event.preventDefault()
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false }, this.props.onClose());
  };

  componentWillReceiveProps(oldProps, newProps) {
    this.setState({
      open: oldProps.open,
      risk: oldProps.risk.risk || '',
      description: oldProps.risk.description || '',
      likelihood: oldProps.risk.likelihood || '',
      severity: oldProps.risk.severity || '',
      action: oldProps.risk.action || '',
      owner: oldProps.risk.owner || '',
      status: oldProps.risk.status || '',
      notes: oldProps.risk.notes || '',
    });
  }

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Risk</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            margin="dense"
            id="risk"
            label="Risk"
            onChange={this.handleChange('risk')}
            value={this.state.risk}
            fullWidth
          />
          <TextField
            margin="dense"
            id="description"
            label="Risk Description"
            onChange={this.handleChange('description')}
            value={this.state.description}
            multiline
            rows="3"
            rowsMax="6"
            fullWidth
          />
          <InputLabel shrink htmlFor="likelihood" style={{fontSize: 'small'}}>
            Likelihood
          </InputLabel>
          <Select
            value={this.state.likelihood}
            onChange={this.handleChange('likelihood')}
            fullWidth
            inputProps={{
              name: 'likelihood',
              id: 'likelihood',
            }}
          >
            <MenuItem value={'high'}>High</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'low'}>Low</MenuItem>
          </Select>
          <InputLabel shrink htmlFor="severity" style={{fontSize: 'small'}}>
            Severity
          </InputLabel>
          <Select
            value={this.state.severity}
            onChange={this.handleChange('severity')}
            fullWidth
            inputProps={{
              name: 'severity',
              id: 'severity',
            }}
          >
            <MenuItem value={'high'}>High</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'low'}>Low</MenuItem>
          </Select>

          <InputLabel shrink htmlFor="status" style={{fontSize: 'small'}}>
            Status
          </InputLabel>
          <Select
            value={this.state.status}
            onChange={this.handleChange('status')}
            fullWidth
            inputProps={{
              name: 'status',
              id: 'status',
            }}
          >
            <MenuItem value={'open'}>Open</MenuItem>
            <MenuItem value={'closed'}>Closed</MenuItem>
          </Select>
          <TextField
            margin="dense"
            id="action"
            label="Mitigation plan"
            onChange={this.handleChange('action')}
            value={this.state.action}
            multiline
            rows="3"
            rowsMax="6"
            fullWidth
          />
          <TextField
            margin="dense"
            id="owner"
            label="Owner"
            onChange={this.handleChange('owner')}
            value={this.state.owner}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

EditRisk.defaultProps = {
};

EditRisk.propTypes = {
  risk: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default EditRisk;
