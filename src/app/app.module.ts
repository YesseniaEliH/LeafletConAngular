import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThunderforestComponent } from './thunderforest/thunderforest.component';
import { WmsComponent } from './wms-mundialis/wms.component';
import { UiMarkersComponent } from './ui-markers/ui-markers.component';
import { UiEventsComponent } from './ui-events/ui-events.component';
import { UiPopupComponent } from './ui-popup/ui-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ThunderforestComponent,
    WmsComponent,
    UiMarkersComponent,
    UiEventsComponent,
    UiPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
