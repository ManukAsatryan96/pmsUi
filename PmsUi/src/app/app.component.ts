import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PmsUi';
  constructor(public translateService: TranslateService, public router: Router) {
    // window.scroll({top: 0, left: 0, behavior: 'smooth'});
    if(localStorage.getItem('language')) {
      translateService.setDefaultLang(localStorage.getItem('language'));
    }else {
      translateService.setDefaultLang('en');
    }
    // router.events.subscribe(event => {
    // if (event instanceof NavigationEnd) {
    //   window.scroll({top: 0, left: 0, behavior: 'smooth'});
    // }
    // });
  }

}
