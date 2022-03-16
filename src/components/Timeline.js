import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from './Typography';
import Accordion from './Accordion'
import Markdown from './Markdown'

const useStyles = makeStyles((theme) => ({
  item: {
    

    // [theme.breakpoints.down('md')]: {
    //   maxWidth: 500
    // },
    // [theme.breakpoints.down('sm')]: {
    //   maxWidth: 400
    // },
    // [theme.breakpoints.down('xs')]: {
    //   maxWidth: 300
    // },

  },
  paper: {
    padding: '6px 16px',

  },

  heading: {
    color: theme.palette.primary.dark
  },

  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


const Item = ({baseLabel="", date="", label="(LABEL)", icon=null, items=[]}) => {
    const classes = useStyles();


    return ( <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          {date}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="primary" />
          {/* <TimelineDot>
            <FastfoodIcon />
          </TimelineDot> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.item}>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h6" component="h1" label={`${baseLabel}${label}.title`} className={classes.heading} />
            <Markdown label={`${baseLabel}${label}.description`} fontSize={14}  />
            <Accordion items={items} elevation={0} baseLabel={`${baseLabel}items.`} />
          </Paper>
        </TimelineContent>
      </TimelineItem>)
}

export default function CustomizedTimeline({baseLabel="", items=[]}) {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (

    <Timeline align={!isMobile? "alternate" : "right"}>
     {items.map(item => <Item key={item.label} baseLabel={baseLabel} {...item} /> )}
    </Timeline>
  );
}

