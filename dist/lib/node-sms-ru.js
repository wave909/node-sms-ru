"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSRuError = exports.SMSRu = void 0;
var axios_1 = __importDefault(require("axios"));
var SMSRuError_error_1 = require("./errors/SMSRuError.error");
Object.defineProperty(exports, "SMSRuError", { enumerable: true, get: function () { return SMSRuError_error_1.SMSRuError; } });
var SMSRu = /** @class */ (function () {
    function SMSRu(apiIdOrLogin, password) {
        this._params = { baseUrl: 'https://sms.ru/' };
        if (arguments.length === 2) {
            this._params.login = apiIdOrLogin;
            this._params.password = password;
        }
        else {
            this._params.api_id = apiIdOrLogin;
        }
    }
    /**
     * Отправить СМС сообщение
     *
     * Если у вас есть необходимость в отправке СМС
     * сообщения из вашей программы, то вы можете
     * использовать этот метод.
     *
     * @see http://sms.ru/api/send
     */
    SMSRu.prototype.sendSms = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, sendResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = __assign(__assign({}, options), { to: Array.isArray(options.to) ? options.to.join(',') : options.to, time: !options.time
                                ? undefined
                                : options.time instanceof Date
                                    ? options.time.valueOf()
                                    : typeof options.time === 'string'
                                        ? new Date(options.time).valueOf()
                                        : options.time, daytime: options.daytime ? 1 : options.daytime === false ? 0 : undefined, transit: options.transit ? 1 : options.transit === false ? 0 : undefined, test: options.test ? 1 : options.test === false ? 0 : undefined });
                        return [4 /*yield*/, this._makeApiRequest('sms/send', params)];
                    case 1:
                        sendResponse = _a.sent();
                        return [2 /*return*/, sendResponse];
                }
            });
        });
    };
    /**
     * Отправить четырехзначный авторизационный код звонком
     *
     * @see https://sms.ru/api/code_call
     */
    SMSRu.prototype.codeCall = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = { phone: options.to };
                return [2 /*return*/, this._makeApiRequest('code/call', params)];
            });
        });
    };
    /**
     * Проверить статус отправленных сообщений
     *
     * Если у вас есть необходимость вручную проверить
     * статус отправленных вами сообщений, то вы
     * можете использовать этот метод.
     *
     * @see http://sms.ru/api/status
     */
    SMSRu.prototype.checkSmsStatuses = function (smsIds) {
        return __awaiter(this, void 0, void 0, function () {
            var smsStatuses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._makeApiRequest('sms/status', {
                            sms_id: Array.isArray(smsIds) ? smsIds.join(',') : smsIds
                        })];
                    case 1:
                        smsStatuses = _a.sent();
                        return [2 /*return*/, smsStatuses];
                }
            });
        });
    };
    /**
     * Проверить стоимость сообщений перед отправкой.
     *
     * Если у вас есть необходимость проверить стоимость сообщения
     * перед его отправкой из вашей программы,
     * то вы можете использовать этот метод.
     *
     * @see http://sms.ru/api/cost
     */
    SMSRu.prototype.getCost = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = __assign(__assign({}, options), { to: Array.isArray(options.to) ? options.to.join(',') : options.to, transit: options.transit ? 1 : options.transit === false ? 0 : undefined });
                return [2 /*return*/, this._makeApiRequest('sms/cost', params)];
            });
        });
    };
    /**
     * Получить информацию о балансе
     *
     * Если вы хотите узнать ваш текущий баланс на сайте SMS.RU,
     * используйте этот метод.
     */
    SMSRu.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getBalanceResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._makeApiRequest('my/balance')];
                    case 1:
                        getBalanceResponse = _a.sent();
                        return [2 /*return*/, getBalanceResponse.balance];
                }
            });
        });
    };
    /**
     * Получить информацию о дневном лимите и его использовании
     *
     * Если вы хотите узнать какой у вас лимит на отправку
     * сообщений и на какое количество номеров вы уже
     * сегодня отправили сообщения, используйте этот метод.
     */
    SMSRu.prototype.getLimit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._makeApiRequest('my/limit')];
            });
        });
    };
    /**
     * Получить информацию о бесплатных сообщениях и его
     * использовании.
     *
     * Если вы хотите узнать ваш расход бесплатных
     * сообщений на свой номер за день, используйте этот метод.
     */
    SMSRu.prototype.getFree = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._makeApiRequest('my/free')];
            });
        });
    };
    /**
     * Получение списка одобренных отправителей
     *
     * Если вы хотите получить список отправителей, которые
     * были согласованы вами на сайте SMS.RU,
     * то необходимо использовать этот метод
     */
    SMSRu.prototype.getSenders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getSendersResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._makeApiRequest('my/senders')];
                    case 1:
                        getSendersResponse = _a.sent();
                        return [2 /*return*/, getSendersResponse.senders];
                }
            });
        });
    };
    /**
     * Проверить на валидность пару логин/пароль (или api_id).
     *
     * Если вы хотите проверить, является ли рабочим ваш api_id
     * или логин и пароль, используйте этот метод.
     *
     * Если вам api_id или логин и пароль работают - метод ничего не вернет,
     * иначе выбросит исключение.
     */
    SMSRu.prototype.checkAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._makeApiRequest('auth/check')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SMSRu.prototype._makeApiRequest = function (path, params) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, axios_1.default.request({
                            url: path,
                            params: __assign(__assign(__assign({}, (params || {})), this._authParams), { json: 1 }),
                            baseURL: this._params.baseUrl
                        })];
                    case 1:
                        response = _c.sent();
                        if (((_a = response.data) === null || _a === void 0 ? void 0 : _a.status) !== 'OK') {
                            throw new SMSRuError_error_1.SMSRuError(((_b = response.data) === null || _b === void 0 ? void 0 : _b.status_text) || 'Unknown error', response.data);
                        }
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    Object.defineProperty(SMSRu.prototype, "_authParams", {
        get: function () {
            return this._params.api_id
                ? { api_id: this._params.api_id }
                : { login: this._params.login, password: this._params.password };
        },
        enumerable: false,
        configurable: true
    });
    return SMSRu;
}());
exports.SMSRu = SMSRu;
//# sourceMappingURL=node-sms-ru.js.map