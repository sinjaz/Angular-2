import {Component} from 'angular2/core';
import {MyComponent} from './components/my-component/my-component';


@Component({
  selector: 'todo-app',
  providers: [],
  templateUrl: 'app/todo-app.html',
  directives: [MyComponent],
  pipes: []
})
export class ToDoApp {
  tasks = [];
  task = "";

  ShouldShowAddButton(){
    return (this.task != "" && this.task != undefined);
  }

  onClickAdd(e){
  	if(this.task != "" && this.task != undefined){
  		this.addTask(this.task);
  		this.task = "";
  	}
  }

  onClickRemove(item){
    var index = this.tasks.indexOf(item);
    if(index != -1){
      this.tasks.splice(index, 1);
    }
  }

  onRemove(e){
    this.onClickRemove(e);
  }

  doneTyping(e){
  	if(e.which === 13) {
  		this.addTask(this.task);
    		this.task = "";
  	}
  }

  addTask(task){
  	this.tasks.push(task);
  }
}
