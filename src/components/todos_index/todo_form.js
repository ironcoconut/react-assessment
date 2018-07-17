import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
  },
  errorMessage: {
    marginTop: theme.spacing.unit * 2,
  }
});

class TodoForm extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      titleError: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    let title = this.state.title;

    // Don't save only spaces
    if(title.trim()) {
      this.props.addTodo(title);
      this.setState({
        title: "",
        titleError: false
      })
    } else {
      this.setState({titleError: true})
    }
  }

  render() {
    const { classes } = this.props;
    const { title, titleError } = this. state;

    return (
      <div>
        <div>
          <TextField
            label="Task"
            error={titleError}
            autoFocus={true}
            fullWidth={true}
            name="title"
            type="text"
            value={title}
            helperText={titleError ? "Task cannot be blank" : null}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleInputChange} />
        </div>
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
            Add Todo
          </Button>
        </div>
      </div>
    );
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default withStyles(styles)(TodoForm);
