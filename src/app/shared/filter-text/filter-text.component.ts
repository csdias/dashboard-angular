import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-text',
  templateUrl: 'filter-text.component.html'
})
export class FilterTextComponent {
  @Output() changed: EventEmitter<string>;
  filtro: string;

  constructor() {
    this.changed = new EventEmitter<string>();
    // componentHandler.upgradeDom();
  }

  clear() {
    this.filtro = '';
  }

  filterChanged(event: any) {
    // event.preventDefault();
    console.log('filter has changed');
    this.changed.emit(this.filtro);
  }
}
