import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

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
    return (
      <div>
        <p>
          <Link to='/'>
           {"<"} Back to tasks
          </Link>
        </p>
        <div>
          <label>
            Task
          </label>
        </div>
        <div>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange} />
          <button disabled={this.props.todo.completed} onClick={this.handleComplete}>
            Complete
          </button>
          { this.state.titleError ?
            <p>Task cannot be blank.</p>
            : null
          }
        </div>
        <div>
          <label>
            Description
          </label>
        <div>
        </div>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange} />
        </div>
        <div>
          <button onClick={this.handleSubmit}>
            Save
          </button>
          <button onClick={this.handleCancel}>
            Cancel
          </button>
          <button onClick={this.handleDelete}>
            Delete
          </button>
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

export default TodoShowForm;
