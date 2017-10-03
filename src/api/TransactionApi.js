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
    define(['ApiClient', 'model/Error', 'model/InlineResponse2004', 'model/InlineResponse2006', 'model/Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/InlineResponse2004'), require('../model/InlineResponse2006'), require('../model/Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.banking_client) {
      root.banking_client = {};
    }
    root.banking_client.TransactionApi = factory(root.banking_client.ApiClient, root.banking_client.Error, root.banking_client.InlineResponse2004, root.banking_client.InlineResponse2006, root.banking_client.Transaction);
  }
}(this, function(ApiClient, Error, InlineResponse2004, InlineResponse2006, Transaction) {
  'use strict';

  /**
   * Transaction service.
   * @module api/TransactionApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TransactionApi.
   * @alias module:api/TransactionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountsAccountIdTransactionsGet operation.
     * @callback module:api/TransactionApi~accountsAccountIdTransactionsGetCallback
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
     * @param {module:api/TransactionApi~accountsAccountIdTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the transactionsGet operation.
     * @callback module:api/TransactionApi~transactionsGetCallback
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
     * @param {module:api/TransactionApi~transactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the transactionsTransactionIdGet operation.
     * @callback module:api/TransactionApi~transactionsTransactionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transaction
     * @param {String} transactionId The id of the transaction to be operated on

     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId
     * @param {module:api/TransactionApi~transactionsTransactionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.transactionsTransactionIdGet = function(transactionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling transactionsTransactionIdGet");
      }





      var pathParams = {
        'transactionId': transactionId
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
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionsTransactionIdPut operation.
     * @callback module:api/TransactionApi~transactionsTransactionIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update transaction
     * @param {String} transactionId The id of the transaction to be operated on

     * @param {module:model/Transaction} body Transaction attributes to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId
     * @param {module:api/TransactionApi~transactionsTransactionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.transactionsTransactionIdPut = function(transactionId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling transactionsTransactionIdPut");
      }




      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling transactionsTransactionIdPut");
      }


      var pathParams = {
        'transactionId': transactionId
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
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/transactions/{transactionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
