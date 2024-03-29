import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrl: './number.component.css',
})
  
export class NumberComponent implements OnInit, OnDestroy {

  private activatedRoute = inject(ActivatedRoute);

  imgWidth: number = 200
  numDisplay: number = 0
  
  sub!: Subscription

  ngOnInit(): void {

    console.info('number OnInit');

    // .snapshot.queryParams -> ref. to @RequestParams
    this.imgWidth = this.activatedRoute.snapshot.queryParams['width']

    // @PathVariable => retrieve the current snapshot params
    // this.numDisplay = this.activatedRoute.snapshot.params['num'];

    // .snapshot.params -> ref. to @PathVariable
    this.sub = this.activatedRoute.params.subscribe(
      value => {
        console.info('>>> value: ', value)
        this.numDisplay = value['num']
      }
    )
  }

  ngOnDestroy(): void {
    
    console.info('number OnDestroy')
    
    this.sub.unsubscribe()
  }
}
