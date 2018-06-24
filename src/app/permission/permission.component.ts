import { Component, OnInit } from '@angular/core';
import {Permission} from "../shared/permission.service";
import {Http,URLSearchParams} from "@angular/http";
import {Router} from '@angular/router';
import {LocalstorageService} from "../services/localstorage.service";

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  public permissions:Array<Permission>;
  public permission:Permission;
  public pageindex:number=1;
  public pagesize:number=10;

  displayData:Array<Permission>;
  constructor(public http:Http,public router: Router,private storage:LocalstorageService) { }

  ngOnInit() {
    this.http.get('/login/SelectPermission').map(res=>res.json()).subscribe(data =>
      {
        this.permissions=data['data'];
        console.log(data);
        this.displayData = [ ...this.permissions];
        if(this.storage.getItem('permission')!=null)
        {
          this.storage.removeItem('permission');
        }
        this.storage.setItem('permission',this.permissions);
      }
    );
  }
  todetail(permission: Permission,key)
  {
    this.router.navigateByUrl('/test/permdetail/' + key);
  }


  Refresh() {
    this.http.get('/login/SelectPermission').map(res => res.json()).subscribe(data => {
      this.permissions = data['data'];
      console.log(data);
      this.displayData = [...this.permissions];
    });
  }
}
