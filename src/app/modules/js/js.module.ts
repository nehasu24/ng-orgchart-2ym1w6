import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { JSONDigger } from "json-digger";
// import { uuid } from "uuid/v4";

import { JSRoutingModule } from './js-routing.module';
import { JSComponent } from './js.component';
import { ContainerComponent } from './chart-container/chart-container.component';
import { NodeComponent } from './chart-node/chart-node.component';
import { NodeSelectService } from './shared/services/node-select.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, JSRoutingModule, BrowserAnimationsModule],
  declarations: [JSComponent, ContainerComponent, NodeComponent ],
  providers: [NodeSelectService],
})
export class JSModule { }