import { NotificacionesPushService } from './notificaciones-push.service';
export declare class NotificacionesPushController {
    private readonly notificacionService;
    constructor(notificacionService: NotificacionesPushService);
    createToken(token: any): Promise<any>;
    getTokens(): Promise<any[]>;
    getTokensId(id: string): Promise<any>;
    deleteTokenId(id: any): Promise<any>;
}
