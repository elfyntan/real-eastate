import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css']
})
export class WhatsNewComponent implements OnInit {
  whats_new  = [{'date':'2021-05-09 15:42:55', 'title':'When selling a home', 'body':'Our mission is to challenge each student, teacher, and parent with the highest expectations of a rigorous curriculum, and to provide a learning environment that prepares students for college and future careers. Our students are encouraged to be contributing members of the community'},
  {'date':'2021-06-22 15:42:55', 'title':'How to get a job at Real Estate company', 'body':'Our mission is to challenge each student, teacher, and parent with the highest expectations of a rigorous curriculum, and to provide a learning environment that prepares students for college and future careers. Our students are encouraged to be contributing members of the community'}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
