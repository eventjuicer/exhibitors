import React from 'react'
import { useGet } from '../helpers'

const LimitsContextContainer = React.createContext({})


export const LimitsContextProvider = ({children}) => {

    const {data} = useGet("/limits", false)

    const value = React.useMemo(() => ({
        ...data
    }), [data]);

    return <LimitsContextContainer.Provider value={value}>{children}</LimitsContextContainer.Provider>
}


export const useLimit = (key) => {

    const context = React.useContext(LimitsContextContainer)

    return context && key in context? context[key] : 0

}