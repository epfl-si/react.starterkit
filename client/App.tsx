import React from 'react'
import { OIDCContext, StateEnum, LoginButton, IfOIDCState, LoggedInUser, useOpenIDConnectContext } from '@epfl-si/react-appauth'
import Home from './home';

function App() {
  return (
    <OIDCContext authServerUrl = { 'http://localhost:8080/realms/react-starter-kit/' }
                        client = { { clientId: "react-starter-kit",
                                    redirectUri: "http://localhost:3000/" } }
                                    onNewToken={ ( token ) => oidcLogin(token) }
                                    onLogout={ () => Accounts.logout() }>
      <Home/>
    </OIDCContext>
  )
}

const oidcLogin = (token: string) => {
  Accounts.callLoginMethod({
  methodArguments: [
    {
      oidcToken: token,
    },
  ],
  userCallback: serverSideError => {
      if (serverSideError) {
        // Only happens when the OIDC login has succeeded but then the Meteor server fails to validate it somehow.
        const { error, reason, details, message } = serverSideError
        alert(`Error ${error} on the server\n\nreason: ${reason}\ndetails: ${details}\n message: ${details}\n`)
      }
    },
  });
}

export default App
