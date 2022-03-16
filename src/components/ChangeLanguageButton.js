import React from 'react';
import Button from './Button'

import {
  useSetLocale,
  useLocale
} from 'react-admin';
import { getLocalesArray } from '../i18n';
import LanguageIcon from '@material-ui/icons/Language';


const ChangeLanguageButton = ({variant="text", color="default"}) => {


  const setLocale = useSetLocale()
  const locale = useLocale()
  const locales = getLocalesArray()
 // const { loaded, permissions } = usePermissions();

  const otherLocale = locales.find(loc => loc != locale)

  return (<Button 
    label={locale}
    variant={variant}
    color={color}
    onClick={() => setLocale(otherLocale)}
    startIcon={<LanguageIcon />}
  />)

}



export default ChangeLanguageButton
