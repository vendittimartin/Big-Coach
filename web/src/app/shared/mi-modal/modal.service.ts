// modal.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private abrirModalSource = new Subject<{ idEquipo: number, idJugador: number }>();
  private cerrarModalSource = new Subject<void>();

  abrirModal$ = this.abrirModalSource.asObservable();
  cerrarModal$ = this.cerrarModalSource.asObservable();

  abrirModal(data: { idEquipo: number, idJugador: number }) {
    this.abrirModalSource.next(data);
  }

  cerrarModal() {
    this.cerrarModalSource.next();
  }
}
