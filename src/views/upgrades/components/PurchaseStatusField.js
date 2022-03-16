import React from 'react'
import {translate} from 'react-admin'
 
const PurchaseStatusField = ({basePath, record, resource, translate, locale}) => translate(`common.statuses.${record.status}`)

PurchaseStatusField.defaultProps = {
    record : {},
    addLabel : true
}  

export default translate(PurchaseStatusField)
  