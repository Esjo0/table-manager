import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

import { DataTableComponent } from './data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  exports: [DataTableComponent]
})
export class DataTableModule { }
