
import { Typography, Box } from "."


const Section = ({title=null, children, ...props}) => {

    return (
        <Box mb={2}>
        <Typography {...props}>{title}</Typography>
        <Box mt={3}>
        {children}
        </Box>
        </Box>
    )

}

export default Section