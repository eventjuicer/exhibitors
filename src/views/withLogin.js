import React from 'react';
import LoginContainer from '../logins/LoginContainer';

const withLogin = (WrappedComponent, preview=null) => (props) => {

    const {permissions} = props

    if(!permissions){
        return  <div>
            <LoginContainer {...props} preview={
            React.isValidElement(preview) ? React.cloneElement(preview, props): null
            }/></div>
    }

    return <WrappedComponent {...props} />
    
}

export default withLogin