/**
 * Narmi Banking API
 *
 * OpenAPI spec version: 0.1.0
 * Contact: contact@narmitech.com
 *
 * NOTE: This class is auto generated.

 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/Error', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2005'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Account'), require('../model/Error'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2005'));
  } else {
    // Browser globals (root is window)
    if (!root.banking_client) {
      root.banking_client = {};
    }
    root.banking_client.AccountApi = factory(root.banking_client.ApiClient, root.banking_client.Account, root.banking_client.Error, root.banking_client.InlineResponse2002, root.banking_client.InlineResponse2003, root.banking_client.InlineResponse2005);
  }
}(this, function(ApiClient, Account, Error, InlineResponse2002, InlineResponse2003, InlineResponse2005) {
  'use strict';

  /**
   * Account service.
   * @module api/AccountApi
   * @version 0.1.0
   */

  /**
   * Constructs a new AccountApi.
   * @alias module:api/AccountApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountBalancesGet operation.
     * @callback module:api/AccountApi~accountBalancesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List account balances

     * @param {Object} opts Optional parameters
     * @param {String} opts.page
     * @param {String} opts.perPage
     * @param {String} opts.xRequestId
     * @param {module:api/AccountApi~accountBalancesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.accountBalancesGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;




      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {

        'X-Request-Id': opts['xRequestId']
      };
      var formParams = {
      };

      var authNames = ['Application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/account_balances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdGet operation.
     * @callback module:api/AccountApi~accountsAccountIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account
     * @param {String} accountId The id of the account to be operated on (note that this identifies an account at the suffix level)

     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId
     * @param {module:api/AccountApi~accountsAccountIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.accountsAccountIdGet = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling accountsAccountIdGet");
      }





      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {

        'X-Request-Id': opts['xRequestId']
      };
      var formParams = {
      };

      var authNames = ['Application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/accounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdPut operation.
     * @callback module:api/AccountApi~accountsAccountIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update account
     * @param {String} accountId The id of the account to be operated on (note that this identifies an account at the suffix level)

     * @param {module:model/Account} body Account attributes to update object
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId
     * @param {module:api/AccountApi~accountsAccountIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.accountsAccountIdPut = function(accountId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling accountsAccountIdPut");
      }




      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountsAccountIdPut");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {

        'X-Request-Id': opts['xRequestId']
      };
      var formParams = {
      };

      var authNames = ['Application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/accounts/{accountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsGet operation.
     * @callback module:api/AccountApi~accountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List accounts

     * @param {Object} opts Optional parameters
     * @param {String} opts.page
     * @param {String} opts.perPage
     * @param {String} opts.xRequestId
     * @param {module:api/AccountApi~accountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.accountsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;





      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {

        'X-Request-Id': opts['xRequestId']
      };
      var formParams = {
      };

      var authNames = ['Application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
