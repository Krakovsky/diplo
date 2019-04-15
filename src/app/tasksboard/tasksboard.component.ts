import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasksboard',
  templateUrl: './tasksboard.component.html',
  styleUrls: ['./tasksboard.component.scss']
})
export class TasksboardComponent implements OnInit {

  constructor() { }

  today: number = Date.now();

  todos = [
    'Доделать footer',
    'Оптимизация скорости загрузки сайта',
    'Проверка кроссбраузерности',
  ];

  inWork = [
    'Добавить респонсив',
    'Доделать footer',
  ];

  completed = [
    'Вымыть кота',
    'Images save for web',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ratione voluptate perferendis odit, inventore magni eos, quisquam qui possimus, perspiciatis, harum vero accusamus officiis! Obcaecati, aliquid, corporis. Culpa, deleniti, accusantium.'
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log("Задачи:", this.todos);
      console.log("В работе:", this.inWork);
      console.log("Завершено:", this.completed);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
      console.log("Задачи:", this.todos);
      console.log("В работе:", this.inWork);
      console.log("Завершено:", this.completed);
    }
  }

  deleteItemTodos(index) {
    this.todos.splice(index,1);
    console.log(this.todos);
  }

  deleteItemInWork(index) {
    this.inWork.splice(index,1);
    console.log(this.inWork);
  }

  deleteItemCompleted(index) {
    this.completed.splice(index,1);
    console.log(this.completed);
  }

  addTask(title) {
    if (title.length === 0) {
      alert("Введите описание задачи");
    } else {
      this.todos.push(title);
      console.log(this.todos);
    }
  }

  ngOnInit() {
  }

}
