import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { CoreModule } from "./core/core.module";
import { JSModule } from "./modules/js/js.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    JSModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
