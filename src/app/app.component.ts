import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'table';
  id!: number;
  name!: string;
  weight!: number;
  symbol!: string;
  name1!: string;
  discoverer!: string;
  ngOnInit() {
    // this.dataSource.sort = this.sort;
  }

  data = [
    {
      id: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      periodicTable: {
        position: 1,
        name: 'nonmetal',
        color: 'red',
        electronConfiguration: '1s1',
      },
      discoverer: 'Henry Cavendish',
      info: [],
    },
    {
      id: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He',
      periodicTable: {
        position: 2,
        name: 'noble gas',
        color: 'red',
        electronConfiguration: '1s2',
      },
      discoverer: 'Pierre Janssen',
    },
    {
      id: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li',
      periodicTable: {
        position: 3,
        name: 'alkali metal',
        color: 'red',
        electronConfiguration: '[He] 2s1',
      },
      discoverer: 'Johan August Arfwedson',
    },
    {
      id: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be',
      periodicTable: {
        position: 4,
        name: 'alkaline earth metal',
        color: 'red',
        electronConfiguration: '[He] 2s2',
      },
      discoverer: 'Louis Nicolas Vauquelin',
    },
    {
      id: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B',
      periodicTable: {
        position: 5,
        name: 'metalloid',
        color: 'red',
        electronConfiguration: '[He] 2s2 2p1',
      },
      discoverer: 'Joseph Louis Gay-Lussac, ',
    },
    {
      id: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C',
      periodicTable: {
        position: 6,
        name: 'nonmetal',
        color: 'red',
        electronConfiguration: '[He] 2s2 2p2',
      },
      discoverer: 'Ancient Egypt',
    },
    {
      id: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N',
      periodicTable: {
        position: 7,
        name: 'nonmetal',
        color: 'red',
        electronConfiguration: '[He] 2s2 2p3',
      },
      discoverer: 'Daniel Rutherford',
    },
    {
      id: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O',
      periodicTable: {
        position: 8,
        name: 'nonmetal',
        color: 'red',
        electronConfiguration: '[He] 2s2 2p4',
      },
      discoverer: 'Carl Wilhelm Scheele',
    },
    {
      id: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F',
      periodicTable: {
        position: 9,
        name: 'nonmetal',
        color: 'red',
        electronConfiguration: '[He] 2s2 2p5',
      },
      discoverer: 'André-Marie Ampère',
    },
    {
      id: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne',
      periodicTable: {
        position: 10,
        name: 'noble gas',
        color: 'red',
        electronConfiguration: '[He] 2s2 2p6',
      },
      discoverer: 'Morris Travers',
    },
    {
      id: 11,
      name: 'Sodium',
      weight: 22.9897,
      symbol: 'Na',
      periodicTable: {
        position: 11,
        name: 'alkali metal',
        color: 'red',
        electronConfiguration: '[Ne] 3s1',
      },
      discoverer: 'Humphry Davy',
    },
    {
      id: 12,
      name: 'Magnesium',
      weight: 24.305,
      symbol: 'Mg',
      periodicTable: {
        position: 12,
        name: 'alkaline earth metal',
        color: 'red',
        electronConfiguration: '[Ne] 3s2',
      },
      discoverer: 'Joseph Black',
    },
  ];

  sortedData = this.data;
  constructor() {

    this.sortedData = this.data.slice();
  }

  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'name',
    'weight',
    'symbol',
    'periodicTable',
    'discoverer',
  ];
  dataSource = new MatTableDataSource(this.data);

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  sortChange(event: Event) {
    const sort = event as unknown as Sort;

    const data2 = this.data.slice();
    if ( sort.direction === '') {
      this.sortedData = data2;
      return;
    }

    this.sortedData = data2.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'weight':
          return compare(a.weight, b.weight, isAsc);
        case 'symbol':
          return compare(a.symbol, b.symbol, isAsc);
        case 'periodicTable':
          return compare(a.periodicTable.name, b.periodicTable.name, isAsc);
        case 'discoverer':
          return compare(a.discoverer, b.discoverer, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
