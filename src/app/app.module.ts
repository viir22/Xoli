import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavController } from "ionic-angular";

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//**************PAGES CREADAS**************** */
import { EventosPage } from '../pages/eventos/eventos';
import { HistorialPage } from '../pages/historial/historial';
import { MapasPage } from '../pages/mapas/mapas';
import { ForoPage } from '../pages/foro/foro';
import { PerfilPage } from '../pages/perfil/perfil';
import { ChatPage } from '../pages/chat/chat';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    EventosPage,
    HistorialPage,
    MapasPage,
    ForoPage,
    PerfilPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    EventosPage,
    HistorialPage,
    MapasPage,
    ForoPage,
    PerfilPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
