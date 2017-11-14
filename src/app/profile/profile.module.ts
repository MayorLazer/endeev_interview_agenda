import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component'
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// My Models
import { Evento } from '../models/event.model';
import { Human } from '../models/human.model';

// My Services
import { HumansService } from '../services/humans/humans.service';
import { EventsService } from '../services/events/events.service';

import { NavbarModule } from  '../navbar/navbar.module';

import { ProfileRouting } from './profilerouting';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( ProfileRouting ),
    NavbarModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [
    HumansService,
    EventsService]
})
export class ProfileModule { }
