import { React } from 'react';

export default class NoteCard extends React.Component {
  constructor(){
      this.state = {
        showCheck  : false
      }
  }
  toggleCheck() {
    this.showCheck = !this.showCheck;
  }
  onChecked() {
    this.checked.next(this.note);
  }
  render() {
    return (
      <div
        class="note-card row shadow-1"
        [ngStyle]="{'background-color': note.color}"
        (mouseenter)="toggleCheck()"
        (mouseleave)="toggleCheck()"
      >
        <div class="icon" *ngIf="showCheck" (click)="onChecked()">
          <i class="material-icons">check</i>
        </div>
        <div class="col-xs-12 title">
          {{ note.title }}
        </div>
        <div class="col-xs-12 value">
          {{ note.value }}
        </div>
      </div>
    );
  }
}