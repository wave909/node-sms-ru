import { DynamicModule } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';
export interface SMSRuNestModuleOptions {
    api_id?: string;
    login?: string;
    password?: string;
}
export interface SMSRuNestModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    name?: string;
    useFactory: (...args: any[]) => Promise<SMSRuNestModuleOptions> | SMSRuNestModuleOptions;
    inject?: any[];
}
export declare class SMSRuModule {
    static forRoot(options: SMSRuNestModuleOptions): DynamicModule;
    static forRootAsync(options: SMSRuNestModuleAsyncOptions): DynamicModule;
    private static _createSMSRu;
}
