import React from 'react'
import Box from '@material-ui/core/Box';

import Search from './Search'
import Table from './Table'
import Button from './Button'
import Avatar from './Avatar'

import { makeStyles, useGet } from '../helpers';
import { useCloseModal } from "../contexts"
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {

    }
}))

const CompanySelector = ({decorateUrl}) => {

    const {data} = useGet("/ranking", true)
    const [filtered, setFiltered] = React.useState([]);
    const classes =  useStyles()
    const {replace} = useHistory()
    const {pathname} = useLocation()
    const closeModal = useCloseModal()

    const handleButtonClick = (row) => () => {

        closeModal()
        if(decorateUrl){
            replace({
                pathname,
                search: new URLSearchParams({company_id: row.company_id}).toString()
            })
        }
    }

    return (
        <Box className={classes.root}>
        <Search data={data} indexes={["name", "slug"]} onSearch={setFiltered} />
        <Table rows={filtered} columns={[
        {name: "logotype", render: (row) => <Avatar src={row.logotype} size={80} /> },
        {name: "select", render: (row) => <Button label="common.select" onClick={handleButtonClick(row)} /> },
        ]}/>  
        </Box>  
    )

}




export default CompanySelector