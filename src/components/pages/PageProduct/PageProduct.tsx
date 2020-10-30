import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { ProductLayout } from "./components/Product";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
}));

export default function PageProduct({match}: any) {
  const classes = useStyles();
  
  return (
    <div className={classes.content}>
      <ProductLayout id={match} index={1}/>
    </div>
  );
}