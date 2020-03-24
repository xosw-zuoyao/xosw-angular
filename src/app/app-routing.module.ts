import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './components/start/start.component';
import {MemberLoginComponent} from './components/member-login/member-login.component';
import {MemberRegisterComponent} from './components/member-register/member-register.component';
import {WaterComponent} from './components/water/water.component';
import {MemberComponent} from './components/member/member.component';
import {LaizhouwanComponent} from './components/laizhouwan/laizhouwan.component';
import {ContentComponent} from './components/manage/content/content.component';
import {ManageComponent} from './components/manage/manage/manage.component';
import {ChartComponent} from './components/manage/chart/chart.component';
import {XoswComponent} from './components/xosw/xosw.component';
import {BsdbComponent} from './components/bsdb/bsdb.component';
import {EchartsProvinceComponent} from "./components/echarts-province/echarts-province.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', component: StartComponent, children: [
      {path: '', component: WaterComponent},
      {path: 'laizhouwan', component: LaizhouwanComponent},
      {path: 'xosw', component: XoswComponent},
      {path: 'echartsprovince', component: EchartsProvinceComponent},
      {path: 'bsdb', component: BsdbComponent},
      {path: '**', component: WaterComponent}
    ]
  },
  {
    path: 'member', component: MemberComponent, children: [
      {path: '', component: MemberLoginComponent},
      {path: 'login', component: MemberLoginComponent},
      {path: 'register', component: MemberRegisterComponent},
      {path: '**', component: MemberLoginComponent}
    ]
  },

  {
    path: 'manage', component: ManageComponent, children: [
      {path: '', component: ChartComponent},
      {path: '**', component: ContentComponent}
    ]
  },
  {path: '**', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
