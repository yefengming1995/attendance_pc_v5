import { Component, OnInit } from '@angular/core';
import {Http,URLSearchParams} from "@angular/http";
import {Router} from '@angular/router';
import {LocalstorageService} from "../services/localstorage.service";
import {Leave} from "../shared/leave.service";

@Component({
  selector: 'app-askforleave',
  templateUrl: './askforleave.component.html',
  styleUrls: ['./askforleave.component.scss']
})
export class AskforleaveComponent implements OnInit {

  public leaves:Array<Leave>;
  public leave:Leave;
  public pageindex:number=1;
  public pagesize:number=10;

  displayData:Array<Leave>;
  constructor(public http:Http,public router: Router,private storage:LocalstorageService) { }

  ngOnInit() {

    this.http.get('/login/AllLeave').map(res=>res.json()).subscribe(data =>
      {
        this.leaves=data['data'];
        console.log(data);
        this.displayData = [ ...this.leaves];
        if(this.storage.getItem('leave')!=null)
        {
          this.storage.removeItem('leave');
        }
        this.storage.setItem('leave',this.leaves);
      }
    );
  }

  Refresh() {
    this.http.get('/login/AllLeave').map(res => res.json()).subscribe(data => {
      this.leaves = data['data'];
      console.log(data);
      this.displayData = [...this.leaves];
    });
  }

}
