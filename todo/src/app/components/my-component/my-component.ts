import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ToDoApp} from '../../todo-app';

@Component({
  selector: 'my-component',
  templateUrl: './app/components/my-component/my-component.html',
  styleUrls: ['app/components/my-component/my-component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class MyComponent {
	@Input() data;
	@Output() remove: EventEmitter<any> = new EventEmitter();
	show = false;
	done = false;

	constructor( ) {
		setTimeout(function(){
			this.show = true;
		}.bind(this), 10);
	}

	onClickDone(){
		this.done = true;
	}

	onClickRemove(){
		this.show = false;

		setTimeout(function(){
			this.remove.next(this.data);
		}.bind(this), 300);
	}
}
