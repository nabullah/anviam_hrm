import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageLayoutModule } from 'src/app/page-layout/page-layout.module';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from 'src/app/pages/admin/profile/profile.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { DatePipe } from '@angular/common';
import { OfficeTimeComponent } from './office-time/office-time.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { VideoChatComponent } from './video-chat/video-chat.component';
import { FormsModule } from '@angular/forms';


FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'time-count', component:OfficeTimeComponent},
      { path: 'view-details/:id',component:ViewDetailsComponent},
      {path: 'video-chat',component:VideoChatComponent}
    ],
  },
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent, ProfileComponent, OfficeTimeComponent, ViewDetailsComponent, VideoChatComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
    PageLayoutModule,
    FullCalendarModule,
    FormsModule
  ],
  providers: [DatePipe],
})
export class AdminModule {}
