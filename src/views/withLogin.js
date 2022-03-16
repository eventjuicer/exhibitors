
import LoginContainer from '../logins/LoginContainer';

const withLogin = (WrappedComponent, preview=null) => ({...props}) => {

    const {permissions} = props

    if(!permissions){
        return  <div><LoginContainer {...props} preview={preview}/></div>
    }

    return <WrappedComponent {...props} />
    
}


export default withLogin