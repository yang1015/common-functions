
var utils = require('./sign.js');

function getPaySign(myObj, keys, len) {
    let payKey = 'xxxx' // 商户号对应的支付key
    var newObj = {};
    keys.sort();
    for (let i = 0; i < len; i++) {
        newObj[keys[i]] = myObj[keys[i]];
    }
    var str = '';
    var key = Object.keys(newObj);
    for (let i = 0; i < key.length; i++) {
        if (i != 0) {
            str += "&";
        }
        str += key[i] + '=' + newObj[key[i]];
    }
    str = str + "&key=";
    str = str + payKey;
    return utils.md5(str).toUpperCase();
}