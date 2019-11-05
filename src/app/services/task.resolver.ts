import { Injectable } from "@angular/core";
import { RestService } from './rest.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { map } from 'rxjs/operators';

@Injectable(
    
    { providedIn:'root'}
    
)

export class TaskResolver implements Resolve<Task> {
    constructor(private _restService: RestService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Task> | Promise<Task> {
            return this._restService.getTaskByid(route.params['id']).pipe(map(task => task));
        }
}