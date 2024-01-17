import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderdashboardempComponent } from './headerdashboardemp/headerdashboardemp.component';
import { PostjobComponent } from './postjob/postjob.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { ProfilemepComponent } from './profilemep/profilemep.component';
import { EmpmessageComponent } from './empmessage/empmessage.component';
import { ApplieduserdetailsComponent } from './applieduserdetails/applieduserdetails.component';
import { UpdateempprofileComponent } from './updateempprofile/updateempprofile.component';
import { NotificationComponent } from '../dashboarduser/notification/notification.component';
import { NotificationempComponent } from './notificationemp/notificationemp.component';
import { VideocallComponent } from './videocall/videocall.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';
import { authGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '', component: HeaderdashboardempComponent,
    canActivate: [authGuard], 
    children: [
      {
        path: '', component: PostjobComponent
      }, {
        path: 'alljobs', component: AlljobsComponent
      }, {
        path: 'profilemep', component: ProfilemepComponent
      }, {
        path: 'empmessage/:uid', component: EmpmessageComponent
      },
      {
        path: 'applieduserdetails', component: ApplieduserdetailsComponent
      },
      {
        path: 'updateempprofile/:empId', component: UpdateempprofileComponent
      },
      {
        path: 'notificationemp', component: NotificationempComponent
      },
      {
        path:'videocall/:uid', component:VideocallComponent
      },
      {
        path:'updatejob/:jobid',component:UpdatejobComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardempRoutingModule { }
