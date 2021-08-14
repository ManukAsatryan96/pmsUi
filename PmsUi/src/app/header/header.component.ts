import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  private translateService: any;

  // @ts-ignore
  private language: string;
  // @ts-ignore
  constructor(public translateService: TranslateService) {
    this.language = localStorage.getItem('language');

  }
  // tslint:disable-next-line:typedef
  scroll(element) {
    document.getElementById(element).scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {
  }

// /isSelected(value) {
  //   if (this.language === value) {
  //     return true;
  //   }
  // }


  public changeLanguage(language: string): void {
    localStorage.setItem('language', language);
    this.translateService.use(language);


  }
}
