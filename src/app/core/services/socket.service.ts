import { Injectable, OnInit, signal } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;
  private readonly uri: string = 'http://localhost:3000'; // replace with your server URL
  constructor() {
    this.socket = io(this.uri);

    this.socket.on('connect', () => {
      console.log('Socket ID:', this.socket.id); // Now it's defined
    });

  }

  // Emit event
  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

  // Listen to event
  on(event: string, callback: (data: any) => void) {
    this.socket.on(event, callback);
  }

  // Disconnect socket
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
