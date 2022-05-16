
import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/accountHolder.service';


@Component({
  selector: 'app-accountHolder',
  templateUrl: './accountHolder.component.html',
  styleUrls: ['./accountHolder.component.css']
})
export class AccountHolderComponent implements OnInit {
  accountHolders:any;
  cpf:any;
  name:any;
  constructor(
    private accountHolderService: AccountHolderService,
    ) { }
  ngOnInit(): void {
    this.displayAccountHolders();
  }
  displayAccountHolders(): void {
    this.accountHolderService.list()
      .subscribe(
        data => {
          this.accountHolders = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  save(): void {
    const accountHolder = {
      cpf:this.cpf,
      name:this.name
    };
    console.log(accountHolder);
    this.accountHolderService.create(accountHolder)
      .subscribe(
        response => {
          console.log(response);
          this.displayAccountHolders();
        },
        error => {
          console.log(error);
        });
  }
}
