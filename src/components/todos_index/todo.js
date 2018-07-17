import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  pending: {
    width: "50%"
  },
  completed: {
    width: "50%",
    textDecoration: "line-through"
  }
});


const Todo = ({classes, id, completed, title, remove, complete}) => {
  const link = "/todo/"+id;

  return (
    <ListItem button>
      <ListItemText className={completed ? classes.completed : classes.pending}>
        <Link to={link}>
          {title}
        </Link>
      </ListItemText>
      <Button children="Complete" disabled={completed} onClick={() => {
        complete(id);
      }} />
      <Button children="X" onClick={() => {
        remove(id);
      }} />
    </ListItem>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired
}

export default withStyles(styles)(Todo);
