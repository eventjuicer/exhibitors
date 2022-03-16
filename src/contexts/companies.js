import React from 'react'
import { useLocalStorage, find, useSearchParams} from '../helpers';
import { useCompany } from './user';

export const useStoreCompanyId = (key = "guestCompanyId") => {
    const [_, toLocalStorage] = useLocalStorage(key, 0)
    return React.useCallback((company_id) => toLocalStorage(company_id),[key, toLocalStorage])
}

export const useResolveCompanyId = (key = "guestCompanyId") => {

    const searchParams = useSearchParams()
    const [fromLocalStorage] = useLocalStorage(key, 0)
    const fromAuth = useCompany()

    if(fromAuth){
        return fromAuth
    }

    if(searchParams.has("company_id")){

        return searchParams.get("company_id")
    }

    return fromLocalStorage

}


