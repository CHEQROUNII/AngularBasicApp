import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import {MatDividerModule} from '@angular/material/divider';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,

    FlexLayoutModule,
    MatIconModule, 
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

  ]
})
export class SharedModule { }
