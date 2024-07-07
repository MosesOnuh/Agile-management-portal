import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ChatMessage } from '../components/communityComponents/chat-message';
import { User } from '../models/user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  currentChatGroupDisplay: string = '';
  myName: string = '';
  myUserId: string = '';
  myRole: string = '';
  private chatConnection?: HubConnection;
  productOwnersMessages: ChatMessage[] = [];
  // onlineUsers: string[] = [];

  constructor(private httpClient: HttpClient) {}

  registerUser(user: User): Observable<any> {
    console.log(user);
    return this.httpClient.post<any>(
      `${environment.apiUrl}api/Chat/register-user`,
      user
    );
  }

  loginUser(req: LoginUser): Observable<any> {
    console.log(req);
    return this.httpClient.post<any>(
      `${environment.apiUrl}api/Chat/login`,
      req
    );
  }

  getOldProductOwnerMessages() {
    this.getProductOwnerMessages().subscribe({
      next: (response) => {
        this.productOwnersMessages = [
          ...response,
          ...this.productOwnersMessages,
        ];
      },
      error: (error) => {
        console.log(error.error.title || error.error.error);
      },
    });
  }

  getProductOwnerMessages(): Observable<any> {
    console.log('getting older messages');
    return this.httpClient.get<any>(
      `${environment.apiUrl}api/Chat/productOwnerMessages`
    );
  }

  createChatConnection() {
    this.chatConnection = new HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}hubs/chat`)
      .withAutomaticReconnect()
      .build();

    this.chatConnection?.start().catch((error) => console.log(error));

    //receiveing commands from chathub
    this.chatConnection.on('UserConnected', () => {
      this.addUserConnectionId();
    });

    // ProductOwner;
    this.chatConnection.on(
      'NewProductOwnerMessage',
      (newMessage: ChatMessage) => {
        this.productOwnersMessages = [
          ...this.productOwnersMessages,
          newMessage,
        ];
      }
    );
  }

  async CreateProductOwnerGroup() {
    return this.chatConnection?.invoke('CreateProductOwnerChat');
  }

  stopChatConnection() {
    this.chatConnection?.stop().catch((error) => console.log(error));
  }

  async addUserConnectionId() {
    return this.chatConnection
      ?.invoke('AddUserConnectionId', this.myUserId)
      .catch((error) => console.log(error));
  }

  async sendProductOwnerMessage(content: string) {
    const message: ChatMessage = {
      userId: this.myUserId,
      from: this.myName,
      role: this.myRole,
      // Timestamp: "",
      // Timestamp: '',
      content,
    };

    console.log('message', message);

    return this.chatConnection
      ?.invoke('ReceiveProductOwnerChatMessage', message)
      .catch((error) => console.log(error));
  }

  // covertTimeString(dateTime: string) :string {
  //   const momentDateTime = moment(dateTime);
  //   return momentDateTime.format('HH:mm')
  // }

  // convertTimeFormat(dateTime: string) :string {
  //   const momentDateTime = moment(dateTime);
  //   return momentDateTime.format('HH:mm')
  // }

  // convertTimeFormat(dateTime: string): string {
  //   const date = new Date(dateTime);
  //   const formattedTime = date.toLocaleTimeString('en-US', {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //   });
  //   return formattedTime;
  // }

  convertTimeFormat(timestamp: string): string {
    const momentObject = moment.tz(timestamp, 'UTC');
    // const momentObject = moment.tz(
    //   timestamp,
    //   'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ',
    //   'utc'
    // );
    const formattedTime = momentObject.format('HH:mm');
    return formattedTime;
  }
}

// const inputTime = "2023-08-14T16:52:55.3158276+01:00";
// const date = new Date(inputTime);
// const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

// console.log(formattedTime); // Output: 16:52
