import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';
import { ParentGuardianComponent } from './parent-guardian/parent-guardian.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { FormControlNullifierComponent } from './form-control-nullifier/form-control-nullifier.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ParentInfoComponent,
    ParentGuardianComponent,
    FormControlNullifierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RxReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
