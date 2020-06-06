import React from 'react';

export default React.createContext({
    isLogged:null,
    userEmail:null,
    token:null,
    toggleLogin:()=>{},
    mountComp:()=>{}
})