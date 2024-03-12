import { Component } from '@angular/core';
import { IItem } from '../../shared/models/item';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-question-3',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './question-3.component.html',
  styleUrl: './question-3.component.scss',
})
export class Question3Component {
  items = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description for item 1',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description for item 2',
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description for item 3',
    },
  ];
  selectedItem: IItem[] = [];

  onItemSelected(item: IItem) {
    this.selectedItem = [...this.selectedItem, item];
  }
}
