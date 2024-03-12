import { Component } from '@angular/core';
import { IItem } from '../../shared/models/item';
import { ItemService } from '../../shared/services/item.service';

@Component({
  selector: 'app-question-2',
  standalone: true,
  imports: [],
  templateUrl: './question-2.component.html',
  styleUrl: './question-2.component.scss',
})
export class Question2Component {
  items: IItem[] = [];
  errorMessage: string = '';
  isLoading = false;
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.isLoading = true;
    this.itemService.getItems().subscribe({
      next: (response: IItem[]) => {
        this.isLoading = false;
        this.items = response;
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to fetch items. Please try again later.';
      },
    });
  }
}
