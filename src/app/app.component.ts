import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { editorConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public editorConfig = editorConfig;

  public angularEditorFG = new FormGroup({
    email: new FormControl(null),
  });

  submitText() {
    document.getElementById('displayText').innerHTML = this.angularEditorFG.controls.email.value;
  }

  getHtmlCode() {
    // toggleEditorMode-editor1
    document.getElementById('toggleEditorMode-').click();
    const test = document.getElementById('sourceText').innerHTML;
    const data = test.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    document.getElementById('data').innerHTML = data;
    document.getElementById('toggleEditorMode-').click();
  }

}
