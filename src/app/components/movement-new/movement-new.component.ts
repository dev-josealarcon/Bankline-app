import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/accountHolder.service';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-movement-new',
  templateUrl: './movement-new.component.html',
  styleUrls: ['./movement-new.component.css']
})
export class MovementNewComponent implements OnInit {
  accountHolders:any;
  accountHolder:any;

  dateTime:any;
  description:any;
  valor:any;
  type:any;

  constructor(
    private movementService: MovementService,
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
    console.log(this.accountHolder)
    const movement = {
      valor:this.valor,
      description:this.description,
      type:this.type,
      idAccount:this.accountHolder.id,
      dateTime:this.dateTime

    };
    console.log(movement);
    this.movementService.create(movement)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
