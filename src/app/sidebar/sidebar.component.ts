import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  conversations = [
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:false},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:false},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:false},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:false},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:false},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:false},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:false},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:false},
    {name:"Davic",time:"8:21",lastMessage:"Good Morning",latestMessageRead:true}
  ]
}
