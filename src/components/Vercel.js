


import {Box, Typography} from '.'

const Vercel = () => {


   return ( <Box m={5} mt={50}>
    <Typography variant="overline" paragraph>{`
    ${process.env.REACT_APP_VERCEL_ENV} 
    ${process.env.REACT_APP_VERCEL_GIT_COMMIT_REF} 
    ${process.env.REACT_APP_VERCEL_GIT_COMMIT_SHA}
    `}</Typography>
    </Box>
    )

}

export default Vercel