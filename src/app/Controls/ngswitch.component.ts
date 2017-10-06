import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styles :[`.container{
    width: 800px;
    margin: 0 auto;
  }



  ul.tabs{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  ul.tabs li{
    background: none;
    color: #222;
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;
  }

  ul.tabs li.current{
    background: #ededed;
    color: #222;
  }

  .tab-content{
    display: none;
    background: #ededed;
    padding: 15px;
  }

  .tab-content.current{
    display: inherit;
  }`]
})
export class NgSwitchComponent implements OnInit {

  tab:number;
  constructor() { }

  isActive(num: number){
    return num === this.tab;
  }
  setTab(num :number){
    this.tab = num;
  }
  ngOnInit() {
    this.tab = 0;
  }

}
