import { NotificacionesService } from './notificaciones.service';
import { NotificacionDto } from './dto/notificacion-dto';
export declare class NotificacionesController {
    private readonly notificacionService;
    constructor(notificacionService: NotificacionesService);
    createNotifi(createNoti: NotificacionDto): Promise<import("./interfaces/notificacion.interface").Notificacion>;
    getNoti(): Promise<import("./interfaces/notificacion.interface").Notificacion[]>;
    getNotifId(id: string): Promise<import("./interfaces/notificacion.interface").Notificacion>;
    getNotifIdPac(id: string): Promise<import("./interfaces/notificacion.interface").Notificacion[]>;
    getNotifIdMed(id: any): Promise<import("./interfaces/notificacion.interface").Notificacion[]>;
    updateCatLab(updateNotify: NotificacionDto): Promise<import("./interfaces/notificacion.interface").Notificacion>;
    updateAllNotify(id: string): Promise<any>;
    deleteNotify(id: any): Promise<any>;
    deleteLogNotify(updateNotify: NotificacionDto): Promise<import("./interfaces/notificacion.interface").Notificacion>;
    listarNotifyDelete(): Promise<import("./interfaces/notificacion.interface").Notificacion[]>;
}
