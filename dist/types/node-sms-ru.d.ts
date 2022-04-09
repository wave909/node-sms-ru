import { SMSRuSendSMSResponse } from './interfaces/SMSRuSendSMSResponse.interface';
import { SMSRuSendSMSOptions } from './interfaces/SMSRuSendSMSOptions.interface';
import { SMSRuSMSStatuses } from './interfaces/SMSRuSMSStatuses.interface';
import { SMSRuError } from './errors/SMSRuError.error';
import { SMSRuGetCostOptions } from './interfaces/SMSRuGetCostOptions.interface';
import { SMSRuGetCostResponse } from './interfaces/SMSRuGetCostResponse.interface';
import { SMSRuGetLimitResponse } from './interfaces/SMSRuGetLimitResponse.interface';
import { SMSRuGetFreeResponse } from './interfaces/SMSRuGetFreeResponse.interface';
import { SMSRuCodeCallOptions } from './interfaces/SMSRuCodeCallOptions.interface';
import { SMSRuCodeCallResponse } from './interfaces/SMSRuCodeCallResponse.interface';
export { SMSRuErrorResponse } from './interfaces/SMSRuErrorResponse.interface';
export declare class SMSRu {
    private _params;
    constructor(apiId: string);
    constructor(login: string, password: string);
    /**
     * Отправить СМС сообщение
     *
     * Если у вас есть необходимость в отправке СМС
     * сообщения из вашей программы, то вы можете
     * использовать этот метод.
     *
     * @see http://sms.ru/api/send
     */
    sendSms(options: SMSRuSendSMSOptions): Promise<SMSRuSendSMSResponse>;
    /**
     * Отправить четырехзначный авторизационный код звонком
     *
     * @see https://sms.ru/api/code_call
     */
    codeCall(options: SMSRuCodeCallOptions): Promise<SMSRuCodeCallResponse>;
    /**
     * Проверить статус отправленных сообщений
     *
     * Если у вас есть необходимость вручную проверить
     * статус отправленных вами сообщений, то вы
     * можете использовать этот метод.
     *
     * @see http://sms.ru/api/status
     */
    checkSmsStatuses(smsIds: string | string[]): Promise<SMSRuSMSStatuses>;
    /**
     * Проверить стоимость сообщений перед отправкой.
     *
     * Если у вас есть необходимость проверить стоимость сообщения
     * перед его отправкой из вашей программы,
     * то вы можете использовать этот метод.
     *
     * @see http://sms.ru/api/cost
     */
    getCost(options: SMSRuGetCostOptions): Promise<SMSRuGetCostResponse>;
    /**
     * Получить информацию о балансе
     *
     * Если вы хотите узнать ваш текущий баланс на сайте SMS.RU,
     * используйте этот метод.
     */
    getBalance(): Promise<number>;
    /**
     * Получить информацию о дневном лимите и его использовании
     *
     * Если вы хотите узнать какой у вас лимит на отправку
     * сообщений и на какое количество номеров вы уже
     * сегодня отправили сообщения, используйте этот метод.
     */
    getLimit(): Promise<SMSRuGetLimitResponse>;
    /**
     * Получить информацию о бесплатных сообщениях и его
     * использовании.
     *
     * Если вы хотите узнать ваш расход бесплатных
     * сообщений на свой номер за день, используйте этот метод.
     */
    getFree(): Promise<SMSRuGetFreeResponse>;
    /**
     * Получение списка одобренных отправителей
     *
     * Если вы хотите получить список отправителей, которые
     * были согласованы вами на сайте SMS.RU,
     * то необходимо использовать этот метод
     */
    getSenders(): Promise<string[]>;
    /**
     * Проверить на валидность пару логин/пароль (или api_id).
     *
     * Если вы хотите проверить, является ли рабочим ваш api_id
     * или логин и пароль, используйте этот метод.
     *
     * Если вам api_id или логин и пароль работают - метод ничего не вернет,
     * иначе выбросит исключение.
     */
    checkAuth(): Promise<void>;
    private _makeApiRequest;
    private get _authParams();
}
export { SMSRuSendSMSOptions, SMSRuSendSMSResponse, SMSRuSMSStatuses, SMSRuGetCostOptions, SMSRuGetCostResponse, SMSRuGetLimitResponse, SMSRuGetFreeResponse, SMSRuError };
