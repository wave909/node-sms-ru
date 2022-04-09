import { SMSRuErrorResponse } from '../interfaces/SMSRuErrorResponse.interface';
export declare class SMSRuError extends Error {
    errorResponse?: SMSRuErrorResponse;
    response?: any;
    constructor(message: string, response?: any);
    private _isErrorResponse;
}
