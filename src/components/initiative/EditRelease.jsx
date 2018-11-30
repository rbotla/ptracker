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

class EditRelease extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  state = {
    open: this.props.open || false,
    release: this.props.release.release || '',
    releaseDate: this.props.release.releaseDate || '',
    status: this.props.release.status || ''
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
      release: oldProps.release.release || '',
      releaseDate: oldProps.release.releaseDate || '',
      status: oldProps.release.status || '',
    });
  }

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Release</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            margin="dense"
            id="release"
            label="Release"
            onChange={this.handleChange('release')}
            value={this.state.release}
            fullWidth
          />
          <TextField
            margin="dense"
            id="description"
            label="Release Date"
            onChange={this.handleChange('releaseDate')}
            value={this.state.releaseDate}
            multiline
            rows="3"
            rowsMax="6"
            fullWidth
          />
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

EditRelease.defaultProps = {
};

EditRelease.propTypes = {
  release: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default EditRelease;
