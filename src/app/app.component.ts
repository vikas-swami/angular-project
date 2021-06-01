import * as $ from 'jquery';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  // constructor(){
  //   document.getElementById("myP").contentEditable = true;
  // }
  public codeValue: string | undefined;
  public myname: string = '';

  public typedTerm: string | undefined;

  public id = '';


  public codeList = [
    { name: 'Gina Williams' },
    { name: 'Jake Williams' },
    { name: 'Jamie Jhon' },
    { name: 'John Doe' },
    { name: 'Jeff stwart' },
    { name: 'Paula. M. Kelith' },

  ];

  handleDropdown = () => {
      $(document).ready(() => {
      // Keyborad key code 
      var KEYCODE_ESCAPE = 27;
      var KEYCODE_UP = 38;
      var KEYCODE_DOWN = 40;
      $('#input1').on('keyup', function (e) {
        if (e.keyCode === 50) {
          $('#list1').removeClass('hide');
        } else {
          if (e.keyCode === KEYCODE_DOWN) {
            if ($('#list1.hide').length > 0) {
              $('#list1.hide').removeClass('hide');
            } else {
              $('#list1 .list-group-item:first-child').focus();
            }
          } else if (e.keyCode === KEYCODE_UP) {
            if ($('#list1.hide').length > 0) {
              $('#list1.hide').removeClass('hide');
            } else {
              $('#list1 .list-group-item:last-child').focus();
            }
          } else if (e.keyCode === KEYCODE_ESCAPE) {
            $('#list1').addClass('hide');
          } else if (e.keyCode === 8) {
            $('#list1').addClass('hide');
          }
        }
      });

      $('#list1').on('keydown', '.list-group-item', function (e) {
        if (e.keyCode === KEYCODE_DOWN) {
          if ($(this).is(':last-child')) {
            $(this).closest('.list-group').find('.list-group-item:first-child').focus();
          } else {
            $(this).next().focus();
          }
        } else if (e.keyCode === KEYCODE_UP) {
          if ($(this).is(':first-child')) {
            $(this).closest('.list-group').find('.list-group-item:last-child').focus();
          } else {
            $(this).prev().focus();
          }
        } else if (e.keyCode === KEYCODE_ESCAPE) {
          $('#list1').addClass('hide');
          $('#input1').focus();
        } else if (e.keyCode === 8) {
          $('#list1').addClass('hide');
        } else if (e.keyCode === 13) {
          $('#list1').addClass('hide');
        } else {
          $('#input1').focus();
        }
      }).on('focus', '.list-group-item', function () {
        $(this).addClass('active').attr('aria-selected', 'true');
        // this.name = $(this).text();
      }).on('blur', '.list-group-item', function () {
        $(this).removeClass('active').attr('aria-selected', 'false');
      });
    });
  }
  // [(ngModel)]='myname' 
  public saveCode(e: any): void {
    let name = e.target.value;
    this.codeList.filter(x => x.name === name)[0];
  }

  values() {
    if (this.myname.charAt(this.myname.length - 1) == "@") {
      this.id = this.myname.charAt(this.myname.length - 1);
      this.handleDropdown();
    }
    
  }
  selectvalue(c: any) {
    this.myname = this.myname.replace(this.myname.charAt(this.myname.length - 1), "") + c;
    this.id = '';
    // const text = this.myname.split(" ");
    // console.log('name', text);

    $('#list1').addClass('hide');
  }

  public reset() {
    this.myname = "";
  }
}