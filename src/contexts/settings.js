import React from 'react'
import get from 'lodash/get'

export const SettingsContextContainer = React.createContext({});

export const useSettings = (path = null, fallback = undefined) => {

    const {settings} = React.useContext(SettingsContextContainer)  

    const out = get(settings, path, undefined)

    if(out !== undefined){
        return out
    }

    if(fallback !== undefined){
        return fallback
    }

    return {}
}


export const useMenuItemsContext = (setting="menuItems") => {

    const menuItems = useSettings(setting)

    return React.useMemo(()=> {

        return {
            enabled: Array.isArray(menuItems)? menuItems.reduce((prev, current)=>{
                const children = current.children.filter(item => item.visible).map(item => item.name)
                return [...prev, ...children]
              }, []): [] 
        }

    }, [menuItems])

}

export const SettingsContext = ({data={}, children}) => {
    const [settings, setSettingsFunc] = React.useState(data)
    const setSettings = React.useCallback((test) => setSettingsFunc(test))

    const value = React.useMemo(()=> ({
        settings,
        setSettings
    }), [settings])
    
    return <SettingsContextContainer.Provider value={value}>{children}</SettingsContextContainer.Provider>
  }



