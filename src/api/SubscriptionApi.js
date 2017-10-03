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
    define(['ApiClient', 'model/Error', 'model/InlineResponse2007', 'model/InlineResponse201', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/InlineResponse2007'), require('../model/InlineResponse201'), require('../model/Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.banking_client) {
      root.banking_client = {};
    }
    root.banking_client.SubscriptionApi = factory(root.banking_client.ApiClient, root.banking_client.Error, root.banking_client.InlineResponse2007, root.banking_client.InlineResponse201, root.banking_client.Subscription);
  }
}(this, function(ApiClient, Error, InlineResponse2007, InlineResponse201, Subscription) {
  'use strict';

  /**
   * Subscription service.
   * @module api/SubscriptionApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SubscriptionApi.
   * @alias module:api/SubscriptionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the subscriptionsGet operation.
     * @callback module:api/SubscriptionApi~subscriptionsGetCallback
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
     * @param {module:api/SubscriptionApi~subscriptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the subscriptionsPost operation.
     * @callback module:api/SubscriptionApi~subscriptionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create subscription

     * @param {module:model/Subscription} body Subscription attributes to create object
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId
     * @param {module:api/SubscriptionApi~subscriptionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    this.subscriptionsPost = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;




      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling subscriptionsPost");
      }


      var pathParams = {
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsSubscriptionIdDelete operation.
     * @callback module:api/SubscriptionApi~subscriptionsSubscriptionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete subscription
     * @param {String} subscriptionId The id of the subscription to be operated on

     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId
     * @param {module:api/SubscriptionApi~subscriptionsSubscriptionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.subscriptionsSubscriptionIdDelete = function(subscriptionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionsSubscriptionIdDelete");
      }





      var pathParams = {
        'subscriptionId': subscriptionId
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsSubscriptionIdGet operation.
     * @callback module:api/SubscriptionApi~subscriptionsSubscriptionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get subscription
     * @param {String} subscriptionId The id of the subscription to be operated on

     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId
     * @param {module:api/SubscriptionApi~subscriptionsSubscriptionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    this.subscriptionsSubscriptionIdGet = function(subscriptionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionsSubscriptionIdGet");
      }





      var pathParams = {
        'subscriptionId': subscriptionId
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsSubscriptionIdPut operation.
     * @callback module:api/SubscriptionApi~subscriptionsSubscriptionIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update subscription
     * @param {String} subscriptionId The id of the subscription to be operated on

     * @param {module:model/Subscription} body Subscription attributes to update object
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId
     * @param {module:api/SubscriptionApi~subscriptionsSubscriptionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    this.subscriptionsSubscriptionIdPut = function(subscriptionId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionsSubscriptionIdPut");
      }




      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling subscriptionsSubscriptionIdPut");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
