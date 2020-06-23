import { Model } from 'mongoose';
export declare class NotificacionesPushService {
    private readonly tokenModel;
    constructor(tokenModel: Model<any>);
    createToken(createToken: any): Promise<any>;
    getTokens(): Promise<any[]>;
    getTokenId(id: any): Promise<any>;
    deleteTokenId(id: string): Promise<any>;
}
