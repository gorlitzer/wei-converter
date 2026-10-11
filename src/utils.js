// this snippet is part of underscorejs 
// => https://github.com/jashkenas/underscore/blob/master/modules/index.js

// Internal function for creating a toString-based type tester.
function tagTester(name) {
    return function (obj) {
        return toString.call(obj) === '[object ' + name + ']';
    };
}

// *********************************************************

// this snippet is part of  web3js
// => https://github.com/ethereum/web3.js/blob/1.x/packages/web3-utils/src/utils.js

var BN = require('bn.js');
var numberToBN = require('number-to-bn');

/**
 * Returns true if object is BN, otherwise false
 *
 * @method isBN
 * @param {Object} object
 * @return {Boolean}
 */
var isBN = function (object) {
    return BN.isBN(object);
};

/**
 * Returns true if object is BigNumber, otherwise false
 *
 * @method isBigNumber
 * @param {Object} object
 * @return {Boolean}
 */
var isBigNumber = function (object) {
    return object && object.constructor && object.constructor.name === 'BigNumber';
};

/**
 * Takes an input and transforms it into an BN
 *
 * @method toBN
 * @param {Number|String|BN} number, string, HEX string or BN
 * @return {BN} BN
 */
var toBN = function (number) {
    try {
        return numberToBN.apply(null, arguments);
    } catch (e) {
        throw new Error(e + ' Given value: "' + number + '"');
    }
};

module.exports = {
    isBN,
    isBigNumber,
    toBN,
    isString: tagTester('String')
};