import React from 'react';

export default React.createContext({
    isLogged:null,
    userEmail:null,
    username:null,
    token:null,
    balance:null,
    history:null,
    toggleLogin:()=>{},
    toggleBalance:()=>{},
    mountComp:()=>{}
})