"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var auth_helper_1 = require('./auth-helper');
var AuthHelperOffice365 = (function (_super) {
    __extends(AuthHelperOffice365, _super);
    function AuthHelperOffice365(clientId, scope) {
        _super.call(this);
        var scopeStr = scope.join('%20');
        this.credentials = {
            authority: 'https://login.microsoftonline.com/common',
            authorizeEndpoint: '/oauth2/v2.0/authorize',
            tokenEndpoint: '/oauth2/v2.0/token',
            clientId: clientId,
            redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
            scope: scopeStr
        };
    }
    AuthHelperOffice365.prototype.logout = function (successPage) {
        var cookieDomains = ["login.microsoftonline.com", ".live.com"];
        return this._logout(successPage, cookieDomains);
    };
    return AuthHelperOffice365;
}(auth_helper_1.AuthHelper));
exports.AuthHelperOffice365 = AuthHelperOffice365;
