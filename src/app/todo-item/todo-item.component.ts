import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      change: {completed: !this.item.completed}
    });
    console.log('todo-item');
  }
}
