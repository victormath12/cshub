import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './webparts/header/header.component';
import { FooterComponent } from './webparts/footer/footer.component';
import { CardComponent } from './components/card/card.component';

import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  exports: [
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ApiService
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
