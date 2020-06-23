import { Model } from 'mongoose';
import { Notificacion } from './interfaces/notificacion.interface';
import { NotificacionDto } from './dto/notificacion-dto';
export declare class NotificacionesService {
    private readonly notificacionModel;
    constructor(notificacionModel: Model<Notificacion>);
    createNotify(createNotif: NotificacionDto): Promise<Notificacion>;
    getNotify(): Promise<Notificacion[]>;
    getNotifId(id: any): Promise<Notificacion>;
    getNotifIdPac(id: any): Promise<Notificacion[]>;
    getNotifIdMed(id: any): Promise<Notificacion[]>;
    updateNotify(id: string, editNotifi: NotificacionDto): Promise<Notificacion>;
    deleteNotify(id: string): Promise<any>;
    updateAllNotify(id: string): Promise<any>;
    deleteLogNotify(id: string, editNotifi: NotificacionDto): Promise<Notificacion>;
    listarNotifyDelete(): Promise<Notificacion[]>;
}
