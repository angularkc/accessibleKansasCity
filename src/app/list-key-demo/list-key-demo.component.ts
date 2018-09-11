import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { UsersService } from '../users.service';
import { first } from 'rxjs/operators';
import { FocusKeyManager, ListKeyManager } from '@angular/cdk/a11y';
import { UP_ARROW, DOWN_ARROW, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-list-key-demo',
  templateUrl: './list-key-demo.component.html',
  styles: []
})
export class ListKeyDemoComponent implements OnInit {
  users: any;
  isLoadingUsers: boolean;
  searchQuery: string;
  // keyboardEventsManager: ListKeyManager;
  // @ViewChildren('listItem') listItems: QueryList;
  constructor(private usersService: UsersService) {
    // this.keyManager = new FocusKeyManager().withWrap();
  }

  ngOnInit() {
    this.isLoadingUsers = true;
    this.usersService
      .getUsers()
      .pipe(first())
      .subscribe(users => {
        console.log(users);
        this.users = users;
        this.isLoadingUsers = false;
      });
  }

  // handleKeyUp(event: KeyboardEvent) {
  //   event.stopImmediatePropagation();
  //   if (this.keyboardEventsManager) {
  //     if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
  //       // passing the event to key manager so we get a change fired
  //       this.keyboardEventsManager.onKeydown(event);
  //       return false;
  //     } else if (event.keyCode === ENTER) {
  //       // when we hit enter, the keyboardManager should call the selectItem method of the `ListItemComponent`
  //       this.keyboardEventsManager.activeItem.selectItem();
  //       return false;
  //     }
  //   }
  // }
}
