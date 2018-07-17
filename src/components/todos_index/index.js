import React from 'react';
import Title from './title';
import TodoFormContainer from './todo_form_container';
import TodoListContainer from './todo_list_container';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit
  },
});

const TodosIndex = (props) => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={2}>
	<Title />
	<TodoFormContainer />
      </Paper>
      <Paper className={classes.root} elevation={1}>
	<TodoListContainer />
      </Paper>
    </div>
  )
}

export default withStyles(styles)(TodosIndex);
