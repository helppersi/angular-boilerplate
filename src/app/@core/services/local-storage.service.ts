import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
    private storage: Storage;
    private hasUpdate: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {
        this.storage = window.localStorage;
    }

    public createItem(key:string, value: string): any{
        if(this.storage){
            this.storage.setItem(key, JSON.stringify(value));
            this.hasUpdate.next(true);
        }
    }

    public readItem(key:string): any{
        if(this.storage){
            const item = this.storage.getItem(key);
            return JSON.parse(item);
        }
    }

    public getObservable(): Observable<boolean>{
        return this.hasUpdate.asObservable();
    }

    //   public updateItem(key:string, alteration:string): any{
    //     //if(this.storage){}
    //   }

    public deleteItem(key:string): any{
        if(this.storage){
            this.storage.removeItem(key);
        }
    }
}
