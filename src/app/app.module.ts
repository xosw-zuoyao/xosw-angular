import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
import { StartComponent } from './components/start/start.component';
import { MemberLoginComponent } from './components/member-login/member-login.component';
import { MemberRegisterComponent } from './components/member-register/member-register.component';
import { XoswComponent } from './components/xosw/xosw.component';
import { WaterComponent } from './components/water/water.component';
import { MemberComponent } from './components/member/member.component';
import { LaizhouwanComponent } from './components/laizhouwan/laizhouwan.component';
import { MessageService } from './services/message.service';
import { MemberService } from './services/member.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavigateComponent } from './components/manage/navigate/navigate.component';
import { HeaderComponent } from './components/manage/header/header.component';
import { FooterComponent } from './components/manage/footer/footer.component';
import { ContentComponent } from './components/manage/content/content.component';
import { ManageComponent } from './components/manage/manage/manage.component';
import { ChartComponent } from './components/manage/chart/chart.component';
import { BsdbComponent } from './components/bsdb/bsdb.component';
import {NgxEchartsModule} from "ngx-echarts";
import { EchartsProvinceComponent } from './components/echarts-province/echarts-province.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NavbarComponent,
    WaterComponent,
    JumbotronComponent,
    CarouselComponent,
    BreadcrumbComponent,
    CardComponent,
    MemberLoginComponent,
    MemberRegisterComponent,
    XoswComponent,
    MemberComponent,
    LaizhouwanComponent,
    NavigateComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ManageComponent,
    ChartComponent,
    BsdbComponent,
    EchartsProvinceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [MessageService, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
