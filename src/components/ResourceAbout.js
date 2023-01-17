
import React from 'react';

import {
  useListContext,
  CreateButton
} from 'react-admin';

import Typography from './Typography'

import {
    Paper,
    Grid,
    Card
} from '@material-ui/core'

import { useIsMobile, makeStyles } from '../helpers';
import Markdown from './Markdown';
import classNames from 'classnames';
import { CardContent, CardActions, Box } from '@material-ui/core';

const useStyles = aside => makeStyles(theme => ({

    root: {
        padding: 10
    },
    aside: {
        minWidth: 280,
        maxWidth: 350,
        paddingTop: 50,
        paddingBottom: 100,
        [theme.breakpoints.between("xs","md")]: {
            
        }
    },
    empty: {
        minWidth: '50vw',
        maxWidth: "100%",
        padding: 20,
        marginBottom: 100,
        [theme.breakpoints.between("xs","md")]: {
            padding: 10,
            width: "100%"
        }
    },
    icon: {
        fontSize: aside? 60: 80,
        color: theme.palette.secondary.main,
        [theme.breakpoints.down("md")]: {
            fontSize: 60
        }
    },
    texts:{
        maxWidth: 700
    }
}))


const ResourceAbout = ({icon=null, resource="", showCreate=true, aside=false, label=null, descriptionLabel=null, pre=null, buttons=null }) => {
    const { basePath } = useListContext();
    const classes = useStyles(aside)()
    const isMobile = useIsMobile()

    return (<Card className={classNames(classes.root, {
            [classes.aside]: aside,
            [classes.empty]: !aside
        })} elevation={aside? 0: 0}>
           
           <CardContent>

            {pre}

           <Grid container justifyContent="center" alignItems="center" direction={aside? "column": "row"}>
                <Grid item xs={12} sm={12} md={2}>{icon? React.createElement(icon, {className: classes.icon}): null}</Grid>
                <Grid item xs={12} sm={12} md={10}>

                    <Box className={classes.texts}>
                    <Typography variant={aside || isMobile? "h5": "h4"} paragraph label={label || `resources.${resource}.menu`} />
                    <Markdown label={descriptionLabel || `resources.${resource}.info`} />
                    {showCreate && basePath ? <CreateButton basePath={basePath} /> : null}
                    {buttons}
                    </Box>

                </Grid>
            </Grid>

           </CardContent>
          {/* <CardActions>as</CardActions> */}
          
        </Card>);
  };

export default ResourceAbout