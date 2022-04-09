"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSRuError = void 0;
var SMSRuError = /** @class */ (function (_super) {
    __extends(SMSRuError, _super);
    function SMSRuError(message, response) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, SMSRuError.prototype);
        _this.response = response;
        _this.name = _this.constructor.name;
        _this.response = response;
        if (_this._isErrorResponse(response)) {
            _this.errorResponse = response;
        }
        return _this;
    }
    SMSRuError.prototype._isErrorResponse = function (response) {
        return ((response &&
            response.status &&
            // check status_code
            response.status_code !== null &&
            response.status_code !== undefined &&
            // check status_text
            (response.status_text ? typeof response.status_text === 'string' : true)) ||
            false);
    };
    return SMSRuError;
}(Error));
exports.SMSRuError = SMSRuError;
//# sourceMappingURL=SMSRuError.error.js.map