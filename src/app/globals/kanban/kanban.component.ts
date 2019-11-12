import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../../models/task.model';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  
  backlog: Task[] = [];
  todos: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];

  constructor(private _restService: RestService, private route: Router) { }

  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(  event.container.data,
                        event.previousIndex,
                        event.currentIndex  );
    } else {
      transferArrayItem(  event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex  );
      let task = event.item.data;
      task.status = event.container.element.nativeElement.id;
      this._restService.updateTask(task).subscribe(data => {
        console.log(data);
      })
    }
  }

  ngOnInit() {

    this._restService.getTasks().subscribe(data => {
      this.backlog = this._restService.filter(data, 'backlogs');
      this.todos = this._restService.filter(data, 'todo');
      this.inprogress = this._restService.filter(data, 'inprogress');
      this.done = this._restService.filter(data, 'done');
    });
  }

}