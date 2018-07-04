import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {DicerComponent} from './dicer/dicer.component';
import {HttpClientModule} from '@angular/common/http';
import {RolzApiService} from './shared/service/rolz-api.service';
import {FormsModule} from '@angular/forms';
import {DiceResultDisplayComponent} from './shared/component/dice-result-display/dice-result-display.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    DicerComponent,
    DiceResultDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    RolzApiService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule {
}
