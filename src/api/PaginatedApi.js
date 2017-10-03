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
    define(['ApiClient', 'model/InlineResponse200', 'model/InlineResponse2002', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2007'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse200'), require('../model/InlineResponse2002'), require('../model/InlineResponse2004'), require('../model/InlineResponse2005'), require('../model/InlineResponse2007'));
  } else {
    // Browser globals (root is window)
    if (!root.banking_client) {
      root.banking_client = {};
    }
    root.banking_client.PaginatedApi = factory(root.banking_client.ApiClient, root.banking_client.InlineResponse200, root.banking_client.InlineResponse2002, root.banking_client.InlineResponse2004, root.banking_client.InlineResponse2005, root.banking_client.InlineResponse2007);
  }
}(this, function(ApiClient, InlineResponse200, InlineResponse2002, InlineResponse2004, InlineResponse2005, InlineResponse2007) {
  'use strict';

  /**
   * Paginated service.
   * @module api/PaginatedApi
   * @version 0.1.0
   */

  /**
   * Constructs a new PaginatedApi.
   * @alias module:api/PaginatedApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountBalancesGet operation.
     * @callback module:api/PaginatedApi~accountBalancesGetCallback
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
     * @param {module:api/PaginatedApi~accountBalancesGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the accountsAccountIdTransactionsGet operation.
     * @callback module:api/PaginatedApi~accountsAccountIdTransactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List transactions for an account
     * @param {String} accountId The id of the account for which to retrieve transactions (note that this identifies an account at the suffix level)

     * @param {Object} opts Optional parameters
     * @param {String} opts.page
     * @param {String} opts.perPage
     * @param {String} opts.xRequestId
     * @param {module:api/PaginatedApi~accountsAccountIdTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.accountsAccountIdTransactionsGet = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsGet");
      }





      var pathParams = {
        'accountId': accountId
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
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/accounts/{accountId}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsGet operation.
     * @callback module:api/PaginatedApi~accountsGetCallback
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
     * @param {module:api/PaginatedApi~accountsGetCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the subscriptionsGet operation.
     * @callback module:api/PaginatedApi~subscriptionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List subscriptions

     * @param {Object} opts Optional parameters
     * @param {String} opts.page
     * @param {String} opts.perPage
     * @param {String} opts.xRequestId
     * @param {module:api/PaginatedApi~subscriptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.subscriptionsGet = function(opts, callback) {
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
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionsGet operation.
     * @callback module:api/PaginatedApi~transactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List transactions

     * @param {Object} opts Optional parameters
     * @param {String} opts.page
     * @param {String} opts.perPage
     * @param {String} opts.xRequestId
     * @param {module:api/PaginatedApi~transactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.transactionsGet = function(opts, callback) {
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
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/PaginatedApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users
     *

     * @param {Object} opts Optional parameters
     * @param {String} opts.page
     * @param {String} opts.perPage
     * @param {String} opts.xRequestId
     * @param {module:api/PaginatedApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.usersGet = function(opts, callback) {
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
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
