import React from 'react';

export default React.createContext({
    isLogged:null,
    userEmail:null,
    change:0,
    toggleLogin:()=>{},
    mountComp:()=>{}
})