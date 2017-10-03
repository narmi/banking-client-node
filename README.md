# Banking API

banking_client - JavaScript client for Narmi's Banking API

## Introduction

- API version: 0.1.0
- Package version: 0.1.0

## Installation

### npm

The library is hosted at a git repository, (https://github.com/narmitech/banking-client-node), it can be installed via:

```shell
npm install narmitech/banking-client-node --save
```

Or in a `package.json`:
```js
{
  ...
  "dependencies": {
    ...
    "banking-client": "github:narmitech/banking-client-node",
    ...
  }
}
```

## Getting Started


Example usage:

```javascript
var banking_client = require('banking-client');
var defaultClient = banking_client.ApiClient.instance;
defaultClient.basePath = "YOUR BASE PATH"

// Configure OAuth2 access token for authorization: Application
var Application = defaultClient.authentications['Application'];
Application.accessToken = "YOUR ACCESS TOKEN"
Application.secret = "YOUR SECRET"

var api = new banking_client.AccountApi()

var opts = {
  'page': "page_example", // {String}
  'perPage': "perPage_example", // {String}
  'xRequestId': "xRequestId_example" // {String}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data.account_balances[0].primary);
  }
};
api.accountBalancesGet(opts, callback);

```
