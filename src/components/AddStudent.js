import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// properties addCoure is required, function called when Add clicked.
class AddStudent extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, student:{ } };
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    handleChange = (event) => {
      this.setState({student:{email: event.target.value, name: event.target.value}});
    }

  // Save student and close modal form
    handleAdd = () => {
       this.props.addStudent(this.state.student);
       this.handleClose();
    }

    render()  { 
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent>
                  <TextField autoFocus fullWidth label="Email" name="email" onChange={this.handleChange}/> 
                  <TextField autoFocus fullWidth label="Name" name="name" onChange={this.handleChange}/> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

// required property:  addStudent is a function to call to perform the Add action
AddStudent.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudent;