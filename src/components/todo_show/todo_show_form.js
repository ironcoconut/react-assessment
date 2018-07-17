import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  completeButton: {
    marginLeft: theme.spacing.unit
  }
});

// This should work when the user hits the enter key. Right
// now you have to actually click the button. :/
class TodoShowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.todo.title,
      description: props.todo.description,
      titleError: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    const { id, history, updateTodo } = this.props;
    const { title, description } = this.state;

    if(title.trim()) {
      updateTodo(id, title, description);
      history.push('/');
    } else {
      this.setState({ titleError: true })
    }
  }

  handleCancel() {
    const { title, description } = this.props.todo;
    this.setState({
      title: title,
      description: description
    })
  }

  handleDelete() {
    const { id, history, removeTodo } = this.props;
    removeTodo(id);
    history.push('/');
  }

  handleComplete() {
    const { id, history, completeTodo } = this.props;
    completeTodo(id);
    history.push('/');
  }

  render() {
    const { title, description, titleError } = this.state;
    const { todo: { completed }, classes } = this.props;

    return (
      <div>
        <Typography gutterBottom variet="subheading">
          <Link to='/'>
           {"<"} Back to tasks
          </Link>
        </Typography>
        <div>
          <TextField
            label="Task"
            name="title"
            type="text"
            error={titleError}
            value={title}
            helperText={titleError ? "Task cannot be blank" : null}
            onChange={this.handleInputChange} />
          <Button
            className={classes.completeButton}
            disabled={completed}
            variant="outlined"
            onClick={this.handleComplete}
            children="Complete" />
        </div>
        <div>
          <TextField
            label="Description"
            name="description"
            type="text"
            value={description}
            onChange={this.handleInputChange} />
        </div>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            children="Save"
            onClick={this.handleSubmit} />
          <Button
            className={classes.button}
            variant="contained"
            children="Cancel"
            onClick={this.handleCancel} />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            children="Delete"
            onClick={this.handleDelete} />
        </div>
      </div>
    );
  }
};

TodoShowForm.propTypes = {
  todo: PropTypes.object.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
}

export default withStyles(styles)(TodoShowForm);
