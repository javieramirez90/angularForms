import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) { }
id:any;

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params =>{
      console.log(params.id)
      this.id = params.id
    })
  }

}
