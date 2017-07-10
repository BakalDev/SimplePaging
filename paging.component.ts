import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

// import { Paging } from '../../../models/paging';

export class Paging {
    disablePaging: boolean;
    totalItems: number;
    totalPages: number;
    pageSize: number;
    offset: number = 0;
    pageNumber: number = 0;
}


@Component({
  selector: 'app-paging',
  styleUrls: ['./paging.component.scss'],
  template: `
  
  <nav aria-label="Page navigation">
  <ul class="pagination">
    <li [class.disabled]='this.paging.pageNumber == 1'>
     <button type="button" class="btn" aria-label="Previous" (click)='previous($event)'>
        <span aria-hidden="true">&laquo;</span>
      </button>
    </li>
   <!-- <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li> -->
    <li [class.disabled]='this.paging.pageNumber == this.paging.totalPages'>
      <button type="button" class="btn" aria-label="Next" (click)='next($event)'>
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>


  `
})
export class PagingComponent implements OnInit {

  @Input() paging: Paging;
  @Output() pagerToList: EventEmitter<Paging> = new EventEmitter<Paging>();

  constructor() { }

  ngOnInit() {
    this.calculatePaging();
  }

  next(event) {
    if (this.paging.pageNumber == this.paging.totalPages) { return;}

    this.paging.offset = this.paging.offset + this.paging.pageSize;
    this.paging.pageNumber+=1;
    this.pagerToList.emit(this.paging);
  }

  previous(event) {
    if (this.paging.pageNumber == 1) { return;}

    this.paging.offset = this.paging.offset - this.paging.pageSize;
    this.paging.pageNumber-=1;
    this.pagerToList.emit(this.paging);
  }

  calculatePaging() {
    this.paging.totalPages = Math.ceil(this.paging.totalItems / this.paging.pageSize);
  }

}
