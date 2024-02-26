import { Component, OnInit } from '@angular/core';
import { List } from '../model/list';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ApiServiceService } from '../api-service.service';
import { ListKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private http: HttpClient, private api: ApiServiceService) { }

  list: List[] = [{
    item: '',
    quantity: 0,
    id: 0,
    userId: 0
  }]
  
  userId = Number(localStorage.getItem('userId'))
  
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/list').subscribe((res)=>{     
      this.list = res 
    }) 
  }

  onAdd(item: List){
    item.quantity += 1 
    this.http.put<List>('http://localhost:3000/list/' + item.id, item).subscribe()
    location.reload();
  }

  onRemove(item: List){
    item.quantity -= 1 
    if(item.quantity === 0){
      this.onDelete(item.id)
    }else{
      this.api.updateItem(item);
      location.reload();
    }
  }

  onDelete(id: number){
    this.api.removeItem(id).subscribe(()=>{
      alert('Item Removed from Cart')
      location.reload();
    });
  }
}
