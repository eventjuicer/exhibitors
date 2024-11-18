
import React from 'react';
import { AdminContext, AdminUI, Admin, Layout, Loading } from 'react-admin';
import {customRoutes, CustomMenu, CustomAppBar, CustomLogin, LogoutButton} from './layout'
import { authClient, dataProvider, addUploadFeature, transformRequestParams } from './api';
import {rawFetchApi, hasFullAccess} from './helpers'
import i18nProvider, {useTranslations} from './i18n'
import sagas from './redux/sagas';
import reducers from './redux/reducers';
import {getTheme} from './styles/muiTheme'
import {ModalContext, SettingsContext, UserContext, CacheContext, useToken} from './contexts'
import {Dialog, SvgDesaturate, UrlWatcher, CheckIfCompanyLangIsSet} from './components'
import Logistics from './views/logistics'
import resourcesArr from './resources'
import settings from './settings'

const CustomLayout = (props) => {

  return (
    <ModalContext>
    
    <CheckIfCompanyLangIsSet />

    <Layout {...props} menu={CustomMenu} appBar={CustomAppBar} />
    <Dialog />
    <SvgDesaturate />
  
    </ModalContext>
)

}



function App() {
  return (
    <AdminContext 
      dataProvider={transformRequestParams(
        addUploadFeature(
          dataProvider(`${process.env.REACT_APP_API_ENDPOINT}`)
    ))}
      i18nProvider={ i18nProvider }
      authProvider={ authClient }
      // customReducers={ reducers }
      // customSagas={ sagas }
    > 
    <SettingsContext data={settings}>
      <UserContext>
        <CacheContext>
          <UrlWatcher /> 
       
          <CustomAdminUI />
        </CacheContext>
      </UserContext>

      <chatlio-widget widgetid={`process.env.REACT_APP_CHATLIO`}></chatlio-widget>


    </SettingsContext>
    </AdminContext>
  );
}

function CustomAdminUI() {

  const token = useToken()
  const [resources, setResources] = React.useState(resourcesArr);
  const translations = useTranslations()

  // const dataProvider = useDataProvider();

  React.useEffect(() => {
    setResources(resourcesArr)
  }, [token]);


  if(!translations){
    return <Loading />
  }


  return (
      <AdminUI 
        layout={CustomLayout}
        loginPage={ CustomLogin }
        logoutButton={ LogoutButton } 
        theme={ getTheme() }
        customRoutes={ customRoutes }
        dashboard={ Logistics }
        catchAll={ Logistics }
      >
     {resources}
      </AdminUI>
  );
}


export default App;


/**
 * 
basePath: "/companydata"
hasCreate: false
hasEdit: true
hasList: true
hasShow: false
history: {length: 8, action: 'PUSH', location: {…}, createHref: ƒ, push: ƒ, …}
location: {pathname: '/companydata', state: {…}, search: '', hash: ''}
match: {path: '/companydata', url: '/companydata', isExact: true, params: {…}}
options: {}
permissions: "\"6573adcaa970aeec560cbac4a475ffe81b6b1a0d\""
resource: "companydata"
syncWithLocation: true
 */



/**
 * 
 * 
 * const filterResources = (permissions) => new Promise((resolve, reject) => rawFetchApi(`https://api.eventjuicer.com/v1/public/hosts/${process.env.REACT_APP_BASEHOST}/settings`, null, (data) => {
    
    if(hasFullAccess()){
      resolve(resources)
    }

    //some modules should be always enabled
    let enabledModules = "companydata,purchases,people,premium"

    if("account-modules" in data){
      enabledModules += `,${data["account-modules"]}`
    }

    console.log("APP/filterResources", {

      permissions,
      enabledModules

    })

    const filteredResources = resources.filter(resource => enabledModules.includes(resource.props.name))
      

    // TODO:
     // use auth.getPermissions => permissions to filter create/edit in views...
     
    
     resolve(resources)
    }))
  
*/