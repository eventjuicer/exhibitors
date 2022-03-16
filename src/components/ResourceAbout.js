
import React from 'react';
import {
  useListContext,
  CreateButton
} from 'react-admin';
import Typography from './Typography'
import {
    Paper,
    Grid,
    makeStyles
} from '@material-ui/core'
import { useIsMobile } from '../helpers';
import Markdown from './Markdown';
import classNames from 'classnames';
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
        maxWidth: 900,
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
    }
}))


const ResourceAbout = ({icon, resource, aside, descriptionLabel}) => {
    const { basePath } = useListContext();
    const classes = useStyles(aside)()
    const isMobile = useIsMobile()

    return (
        <Paper className={classNames(classes.root, {
            [classes.aside]: aside,
            [classes.empty]: !aside
        })} elevation={aside? 0: 0}>
           
            <Grid container spacing={3} justifyContent="center" alignItems="center" direction={aside? "column": "row"}>
                <Grid item xs={12} sm={12} md={2}>{React.createElement(icon, {className: classes.icon})}</Grid>
                <Grid item xs={12} sm={12} md={10}>
                   
                    <Typography variant={aside || isMobile? "h5": "h4"} paragraph label={`resources.${resource}.menu`} />
                    <Markdown label={descriptionLabel || `resources.${resource}.info`} />
                    {!aside && basePath ? <CreateButton basePath={basePath} /> : null}
                
                </Grid>
            </Grid>
          
        </Paper>
    );
  };

export default ResourceAbout