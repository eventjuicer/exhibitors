import React from 'react'
import { useLocalStorage, find, get, map, useGet, useSearchParams} from '../helpers';


export const useResolveCompanyId = (key = "guestCompanyId") => {

    const searchParams = useSearchParams()
    const [fromLocalStorage] = useLocalStorage(key, 0)
  
    if(searchParams.has("company_id")){

        return searchParams.get("company_id")
    }

    return fromLocalStorage

}

export const usePublicCompanyData = () => {

    const company_id = useResolveCompanyId()
    const {data} = useGet(company_id? `/companies/${company_id}`: null, true)


    const purchases = get(data, 'instances', []).filter(p => parseInt(p.sold));
    const booths = purchases.filter(p => "role" in p.ticket && p.ticket.role == "exhibitor")

    const boothIds = map(booths, 'formdata.id').filter(v => v && v.length);
    const boothNames = map(booths, 'formdata.ti').filter(v => v && v.length);  

    return React.useMemo(() => ({boothIds, boothNames}), [boothIds, boothNames])
}



