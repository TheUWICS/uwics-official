import { Component, OnInit } from '@angular/core';
import {AbstractCardInfo, HeaderText} from '../../../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  link = 'url(\'../../assets/images/header.png\') center top no-repeat';
  exec_text: AbstractCardInfo;
  project_text: AbstractCardInfo;
  events_text: AbstractCardInfo;
  about_text: AbstractCardInfo;
  header_text: HeaderText;

  constructor() {

    this.header_text = {
      heading: 'Welcome to the UWI Computing Society!',
      p_text: 'We seek active interest in emerging technology, etc... (More description to come)'
    };

    this.exec_text = {
      title: 'Meet the Executives',
      img_link: '../../assets/images/execs.jpeg',
      desc: 'It takes a lot of drive, energy, passion and commitment to keep the Computing Society interactive and meaningful. Meet ' +
        'some of the people who make it possible',
      router_link: '/public/execs'
    };

    this.project_text = {
      title: 'Members\' Projects',
      img_link: '../../assets/images/project_header.jpg',
      desc: 'In an effort to bring the club closer together, UWICS has decided to showcase some of the projects made by our members. ' +
        'Come witness their talent and skill',
      router_link: '/public/projects'
    };

    this.events_text = {
      title: 'Events and Meetings',
      img_link: '../../assets/images/project_header.jpg',
      desc: 'In addition to keeping track of every week, members are invited to take part in some of our major activities ' +
        'such as Project Month and the DCIT Runtime Competition',
      router_link: '/public/events'
    };
    this.about_text = {
      title: 'More About Us',
      img_link: '../../assets/images/project_header.jpg',
      desc: 'UWICS has been around for years with many talented people passing through, and even some current ' +
        'lecturers. Take a look at what we\'re about and how you can join.',
      router_link: '/public/about'
    };


  }

  ngOnInit() {
  }

}
