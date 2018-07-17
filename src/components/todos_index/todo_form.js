import React from 'react';
import PropTypes from 'prop-types';

// This should work when the user hits the enter key. Right
// now you have to actually click the button. :/
class TodoForm extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      titleError: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      title: event.target.value
    })
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
    return (
      <div id="todo-form">
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleInputChange} />
        <button onClick={this.handleSubmit}>
          Add Todo
        </button>
        { this.state.titleError ?
          <p>Task cannot be blank.</p>
          : null
        }
      </div>
    );
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm;
