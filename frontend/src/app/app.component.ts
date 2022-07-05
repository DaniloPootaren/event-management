import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    console.log('testing')
    if (window.pageYOffset > 0) {
      return (this.showAlternativeMenu = true);
    }
    return (this.showAlternativeMenu = false);
  }
  title = 'frontend';
  showAlternativeMenu = false;

  ngOnInit(): void {}
}
