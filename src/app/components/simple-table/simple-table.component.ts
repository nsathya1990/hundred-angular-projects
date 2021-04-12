import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent implements OnInit {
  @Input() tableData = [
    { first: 'Sathyapriyan', last: 'Chinnathangam', dob: '12/23/1991' },
    { first: 'Brad', last: 'Pitt', dob: '12/23/1981' },
    { first: 'Tom', last: 'Cruise', dob: '12/23/1991' },
    { first: 'Tom', last: 'Hanks', dob: '12/23/1991' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
