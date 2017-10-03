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
    define(['ApiClient', 'model/Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.banking_client) {
      root.banking_client = {};
    }
    root.banking_client.InlineResponse2006 = factory(root.banking_client.ApiClient, root.banking_client.Transaction);
  }
}(this, function(ApiClient, Transaction) {
  'use strict';




  /**
   * The InlineResponse2006 model module.
   * @module model/InlineResponse2006
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transaction')) {
        obj['transaction'] = Transaction.constructFromObject(data['transaction']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Transaction} transaction
   */
  exports.prototype['transaction'] = undefined;



  return exports;
}));


