import React from 'react'
import Box from '@material-ui/core/Box';

import Search from './Search'
import Table from './Table'
import Button from './Button'
import Avatar from './Avatar'

import { makeStyles, useGet, isFunction } from '../helpers';
import { useCloseModal, useStoreCompanyId } from "../contexts"


const useStyles = makeStyles(theme => ({
    root: {

    }
}))

const CompanySelector = ({onSelect}) => {

    const {data} = useGet("/ranking", true)
    const [filtered, setFiltered] = React.useState([]);
    const classes =  useStyles()
    const storeCompanyId = useStoreCompanyId()

    const closeModal = useCloseModal()
    const handleButtonClick = (row) => () => {
        storeCompanyId(row.company_id)
        closeModal()
        if(isFunction(onSelect)){
            onSelect(row.company_id)
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