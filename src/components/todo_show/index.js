import React from 'react';
import TodoShowContainer from './todo_show_container';
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

const TodoShow = ({ match: { params }, history, classes }) => (
  <Paper className={classes.root} elevation={2}>
    <TodoShowContainer id={params.id} history={history} />
  </Paper>
)

export default withStyles(styles)(TodoShow);
