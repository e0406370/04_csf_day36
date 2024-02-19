import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrl: './rabbit.component.css'
})
  
export class RabbitComponent implements OnInit, OnDestroy {

  ngOnInit(): void {

    console.info("Rabbit OnInit")
  }

  ngOnDestroy(): void {

    console.info("Rabbit OnDestroy")
  }
}
