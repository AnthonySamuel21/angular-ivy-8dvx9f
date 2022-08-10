import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExibeMensagemComponent } from './exibe-mensagem/exibe-mensagem.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent , ExibeMensagemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
