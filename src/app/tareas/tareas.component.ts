import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { TareasService } from './tareas.service';
import { Task } from './tareas.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
  providers: [TareasService],
  encapsulation: ViewEncapsulation.None
})
export class TareasComponent  {

  @ViewChild('todoTitle') titleInputRef: ElementRef;
  @ViewChild('todoMessage') messageInputRef: ElementRef;
  
  public todo:Task[];
  public inProcess:Task[];
  public backLog:Task[];
  public completed:Task[];

  constructor(private elRef: ElementRef, private taskBoardService: TareasService) {
    this.todo = taskBoardService.todo;
    this.inProcess = taskBoardService.inProcess;
    this.backLog = taskBoardService.backLog;
    this.completed = taskBoardService.completed;
  }

  onAddTask() {
    if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
      this.taskBoardService.addNewTask(this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value);
      this.todo = this.taskBoardService.gettodo();
    }
    this.titleInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.value = "";
    this.titleInputRef.nativeElement.focus();
  }


}
