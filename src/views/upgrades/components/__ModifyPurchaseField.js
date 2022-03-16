import React from 'react'
import {useTranslate, useRefresh, useLocale} from 'react-admin'
import {Button} from '../../../components';
import {Check, Cancel, Pencil} from '@material-ui/icons';

import {useDispatch} from 'react-redux'
import {purchaseUpdate} from '../../../redux/actions';

const ModifyPurchaseField = ({record}) =>  {

    const dispatch = useDispatch()
    const translate = useTranslate()
    const refresh = useRefresh()
    const locale = useLocale()

    const handleClick = () => {


        dispatch(purchaseUpdate(record.id, {
                quantity : 0,
                locale : locale,
                template : `${process.env.REACT_APP_UPGRADES_TEMPLATE}`,
                cc :  `${process.env.REACT_APP_UPGRADES_CC}`,
            },
            {...record},
            // basePath
        ))

        refresh();
    }

    const canBeModified = () => {
        return record.status!=="new";
    }

    return  (<Button
        disabled={canBeModified()}
        color="primary"
        label="common.actions.modify"
    //    icon={ this.canBeModified() ? <Pencil /> : <Cancel />}
        onClick={handleClick}
        />
    )

} 


export default ModifyPurchaseField
  