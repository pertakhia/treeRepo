"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
var axios_1 = __importDefault(require("axios"));
var HttpRequest = /** @class */ (function () {
    function HttpRequest(url, method, body, headers) {
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
    }
    HttpRequest.prototype.execute = function () {
        return axios_1.default.request({
            url: this.url,
            method: this.method,
            data: this.body,
            headers: this.headers,
        });
    };
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=http.js.map