const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const apiUrl = process.env.REACT_APP_AUTH0_AUDIENCE;
const clientId = process.env.REACT_APP_AUTH0_Client_ID;
const callbackUrl = process.env.REACT_APP_AUTH0_CallbackUrl;

export const AUTH_CONFIG = [
    domain,
    clientId,
    callbackUrl,
    apiUrl
]


