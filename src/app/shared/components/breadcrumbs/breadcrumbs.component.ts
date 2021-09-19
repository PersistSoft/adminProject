import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public title: string;

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.getArgumentosRuta()
    .subscribe(({ title }) => {
      this.title = title;
      document.title = `Soluciones Cilivles - ${ title }`;
    });
  }

  ngOnInit(): void {
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
        map( (event: ActivationEnd) => event.snapshot.data ),
      );
  }
}
