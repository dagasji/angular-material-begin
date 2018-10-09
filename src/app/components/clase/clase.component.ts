import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {Post} from '../../Post';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../auth.service';
import {PostDialogComponent} from '../../post-dialog/post-dialog.component';
import {MatDialog} from '@angular/material';
import { element } from 'protractor';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent implements OnInit {

  constructor(public auth: AuthService, public dialog: MatDialog, private dataService: DataService) {
  }

  displayedColumns = ['date_posted', 'title', 'category', 'edit', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  deletePost(id) {
    //if (this.auth.isAuthenticated()) {
      this.dataService.deletePost(id);
      this.dataSource = new PostDataSource(this.dataService);
    //} else {
      //alert('Login in Before');
    //}
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px'
      
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }

  editPost(index): void {
    
    var elemento = this.dataService.getElemento(index);
    
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: elemento
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }

  ngOnInit() {
  }

}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
