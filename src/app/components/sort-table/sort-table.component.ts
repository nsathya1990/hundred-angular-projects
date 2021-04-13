import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
})
export class SortTableComponent implements OnInit {
  sortDirection = true;
  tableData: any[] = [
    {
      first: 'Sathyapriyan',
      last: 'Chinnathangam',
      dob: '10/25/88',
      age: 34,
      living: true,
    },
    {
      first: 'Bradford',
      last: 'Pitt',
      dob: '10/11/58',
      age: 14,
      living: true,
    },
    {
      first: 'Table',
      last: 'Christopher',
      dob: '12/12/80',
      age: 49,
      living: false,
    },
    {
      first: 'Christopher',
      last: 'Nolan',
      dob: '01/13/65',
      age: 78,
      living: true,
    },
    {
      first: 'Steven',
      last: 'Spielberg',
      dob: '05/03/89',
      age: 3,
      living: true,
    },
    {
      first: 'Henry',
      last: 'Bradford',
      dob: '08/05/93',
      age: 9,
      living: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  sort(headerData: { key: string; value: any }): void {
    console.log(headerData);
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;
      case typeof value === 'number':
        this.sortNumber(key);
        break;
      case this.isDate(value):
        this.sortDate(key);
        break;
      case typeof value === 'string':
        this.sortString(key);
        break;
      default:
        break;
    }
  }

  private isDate(value: any): boolean {
    const parsedDate = Date.parse(value);
    return isNaN(value) && !isNaN(parsedDate);
  }

  private sortDate(key: string): void {
    this.tableData.sort((element1: any, element2: any) => {
      if (this.sortDirection) {
        return (
          new Date(element1[key]).getTime() - new Date(element2[key]).getTime()
        );
      } else {
        return (
          new Date(element2[key]).getTime() - new Date(element1[key]).getTime()
        );
      }
    });
  }

  private sortBoolean(key: string): void {
    this.tableData.sort((element1: any, element2: any) => {
      if (this.sortDirection) {
        return Number(element1[key]) - Number(element2[key]);
      } else {
        return Number(element2[key]) - Number(element1[key]);
      }
    });
  }

  private sortNumber(key: string): void {
    this.tableData.sort((element1: any, element2: any) => {
      if (this.sortDirection) {
        return Number(element1[key]) - Number(element2[key]);
      } else {
        return Number(element2[key]) - Number(element1[key]);
      }
    });
  }

  private sortString(key: string): void {
    this.tableData.sort((element1: any, element2: any) => {
      const element1UpperCased = element1[key].toUpperCase();
      const element2UpperCased = element2[key].toUpperCase();

      if (this.sortDirection) {
        if (element1UpperCased > element2UpperCased) {
          return -1;
        }
        if (element2UpperCased > element1UpperCased) {
          return 1;
        }
        return 0;
      } else {
        if (element2UpperCased > element1UpperCased) {
          return -1;
        }
        if (element1UpperCased > element2UpperCased) {
          return 1;
        }
        return 0;
      }
    });
  }
}
