import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AllComponent } from "./components/all/all.component";
import { OnlineService } from "./services/online.service";

@NgModule({
  declarations: [AppComponent, AllComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [OnlineService],
  bootstrap: [AppComponent],
})
export class AppModule {}
