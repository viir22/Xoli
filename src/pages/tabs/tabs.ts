import { Component } from '@angular/core';
;
import { HomePage } from '../home/home';
//**********IMPORTAN LAS PAGES PARA PODER SER USADAS************ */
import { EventosPage } from '../eventos/eventos';
import { HistorialPage } from '../historial/historial';
import { MapasPage } from '../mapas/mapas';
import { ForoPage } from '../foro/foro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventosPage; 
  tab2Root = HistorialPage;
  tab3Root = MapasPage;
  tab4Root = ForoPage;

  constructor() {

  }
}
