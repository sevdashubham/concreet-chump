import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* Material Components*/
import { MdCheckboxModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

/* Feature Components */
import { DialogSignUpComponent } from './dialog-sign-up/dialog-sign-up.component';
import { RenterRegistrationComponent } from './renter-registration/renter-registration.component';
import { RenterRegistration2Component } from './renter-registration2/renter-registration2.component';
import { RenterRegistrationCodeComponent } from './renter-registration-code/renter-registration-code.component';
import { RenterRegistrationSuccessComponent } from './renter-registration-success/renter-registration-success.component';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';
import { AgentTypeSelectionComponent } from './agent-type-selection/agent-type-selection.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing/app-routing.module';

/* Shared Service */
import { RegistrationFormDataService } from './services/registration-form-data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DialogSignUpComponent,
    RenterRegistrationComponent,
    RenterRegistration2Component,
    RenterRegistrationCodeComponent,
    RenterRegistrationSuccessComponent,
    RegistrationHomeComponent,
    AgentTypeSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MdCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule
  ],
  entryComponents: [ DialogSignUpComponent ],
  providers: [{ provide: RegistrationFormDataService, useClass: RegistrationFormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
