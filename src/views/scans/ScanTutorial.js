import React from 'react';
import {Card} from '@material-ui/core';
import {Grid, Box, Tutorial, Typography, ButtonLink} from '../../components'
import { Title } from 'react-admin';
import { ScanIcon } from '.';
 const ScanTutorial = () => {

  return (
    <Card>
    <Title title="badgescanner.title" />
    <Box mt={2} ml={2} mb={5}>
    <Typography label="badgescanner.description" variant="h5" />
    <Tutorial setting="badgescanner" />
    <ButtonLink to="/scans" variant="outlined" label="resources.scans.menu" startIcon={<ScanIcon />} />
    </Box>
   </Card>
  );
}



export default ScanTutorial