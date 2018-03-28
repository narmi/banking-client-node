# banking-client-node

BankingClient - JavaScript client for banking-client

This SDK is automatically generated for:

- API version: 0.1.0
- Package version: 0.1.0

## Installation

### node (npm)

Install via NPM:

    npm install github:narmitech/banking-client-node --save

The library is hosted at a git repository, (https://github.com/narmitech/banking-client-node).


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

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BankingClient = require('banking-client');
var config = BankingClient.ApiClient.configuration;
config.basePath = "{{default_base_url}}";

var auth = config.authentications['Application'];
auth.accessToken = '{{default_api_key}}';
auth.secret = '{{default_api_secret}}';

var opts = {};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
};
BankingClient.transactions.list(opts, callback);

```

## Documentation for Authorization


### Application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - write: allows reading and modifying resources
  - read: allows reading resources
  - read:profile: allows reading extended information about the user including address

