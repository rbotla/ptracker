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

class EditFeature extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  state = {
    open: this.props.open || false,
    name: this.props.feature.name || '',
    description: this.props.feature.description || '',
    progress: this.props.feature.progress || '',
    status: this.props.feature.status || '',
    release: this.props.feature.release || ''
  };

  handleChange = name => event => {
    console.log(name, event.target.value)
    this.setState({
      [name]: event.target.value,
    }, console.log(this.state.status));
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
      name: oldProps.feature.name || '',
      description: oldProps.feature.description || '',
      progress: oldProps.feature.progress || '',
      status: oldProps.feature.status || '',
      release: oldProps.feature.release || ''
    });
  }

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Feature</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            margin="dense"
            id="feature"
            label="Feature"
            onChange={this.handleChange('name')}
            value={this.state.name}
            fullWidth
          />
          <TextField
            margin="dense"
            id="details"
            label="Feature Description"
            onChange={this.handleChange('description')}
            value={this.state.description}
            multiline
            rows="3"
            rowsMax="6"
            fullWidth
          />
         <InputLabel shrink htmlFor="Release" style={{fontSize: 'small'}}>
            Release
          </InputLabel>
          <Select
            value={this.state.release}
            onChange={this.handleChange('release')}
            fullWidth
            inputProps={{
              name: 'release',
              id: 'release',
            }}
          >
            {
            this.props.releases.map (x => 
              <MenuItem value={x}>{x}</MenuItem>
            )
            }
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
            <MenuItem value={''}>NA</MenuItem>
            <MenuItem value={'R'}>Red</MenuItem>
            <MenuItem value={'Y'}>Yellow</MenuItem>
            <MenuItem value={'G'}>Green</MenuItem>
          </Select>
          <TextField
            margin="dense"
            id="progress"
            label="Progress"
            onChange={this.handleChange('progress')}
            value={this.state.progress}
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

EditFeature.defaultProps = {
  releases: ['Revrec V1', 'Revrec V2', 'Revrec V3']
};

EditFeature.propTypes = {
  feature: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  releases: PropTypes.array
};

export default EditFeature;
