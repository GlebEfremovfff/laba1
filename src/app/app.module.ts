import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShdwdomComponent } from './shdwdom/shdwdom.component';
import { ShdwchildComponent } from './shdwchild/shdwchild.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { EmulatedchildComponent } from './emulatedchild/emulatedchild.component';
import { NoneComponent } from './none/none.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ShdwdomComponent,
    ShdwchildComponent,
    EmulatedComponent,
    EmulatedchildComponent,
    NoneComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
