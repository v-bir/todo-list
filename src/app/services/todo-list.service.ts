import { Injectable } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {StorageService} from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})

export class TodoListService {


  private todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  public getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    console.log(this.todoList[index]);
    this.saveList();
  }

  removeItem(item: TodoItem) {
    console.log(item);
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
}
