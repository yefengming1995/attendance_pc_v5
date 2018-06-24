import { Component, OnInit } from '@angular/core';
import {Http,URLSearchParams} from "@angular/http";
import {Router} from '@angular/router';
import {LocalstorageService} from "../services/localstorage.service";
import {Record} from "../shared/record.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-historyrecord',
  templateUrl: './historyrecord.component.html',
  styleUrls: ['./historyrecord.component.scss']
})
export class HistoryrecordComponent implements OnInit {

  public records:Array<Record>;
  public record:Record;
  public pageindex:number=1;
  public pagesize:number=10;
  displayData:Array<Record>;
  private nameFilter:FormControl = new FormControl();
  private  keywork:string;
  constructor(public http:Http,public router: Router,private storage:LocalstorageService) { }

  ngOnInit() {
    this.http.get('/login/SelectRecord').map(res=>res.json()).subscribe(data =>
      {
        this.records=data['data'];
        console.log(data);
        this.displayData = [ ...this.records];

        this.nameFilter.valueChanges
          .debounceTime(500)
          .subscribe(value =>this.keywork=value);
        this.displayData = [ ...this.records];

      }
    );
  }

  Refresh() {
    this.http.get('/login/SelectRecord').map(res => res.json()).subscribe(data => {
      this.records=data['data'];
      console.log(data);
      this.displayData = [ ...this.records];

      this.nameFilter.valueChanges
        .debounceTime(500)
        .subscribe(value =>this.keywork=value);
      this.displayData = [ ...this.records];
    });
  }

}
