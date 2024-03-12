import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItem } from '../../../shared/models/item';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() items: IItem[] = [];
  @Output() itemSelected = new EventEmitter<IItem>();

  selectItem(item: IItem) {
    this.itemSelected.emit(item);
  }
}
