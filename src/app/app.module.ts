import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DicerComponent } from './dicer/dicer.component';
import {HttpClientModule} from '@angular/common/http';
import {RolzApiService} from './shared/service/rolz-api.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DicerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
//    HttpClientInMemoryWebApiModule.forRoot(
//      InMemoryDataService, {dataEncapsulation: false}
//    )
  ],
  providers: [
    RolzApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
