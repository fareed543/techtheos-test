import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  singleSelect = new FormControl();
  multiSelect = new FormControl();
  toppingList: string[] = [
    'Hair Care',
    'PBBU',
    'Skin Care',
    'General',
  ];
  singleSelectList: string  = '';
  multiSelectList: string[] = [];

  deleteSingle() {
    this.singleSelect.setValue(null);
  }

  deleteMultiple(option: string) {
    const index = this.multiSelectList.indexOf(option);
    if (index > -1) {
      this.multiSelectList.splice(index, 1);
    }
    this.multiSelect.setValue(this.multiSelectList);
  }
}
