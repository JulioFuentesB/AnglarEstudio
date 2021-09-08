import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css'],
})
export class InputMarkdownComponent implements OnInit {


  @Input()
  contenidoMarkdown = '';

  @Input()
  placeHolderTextarea: string = 'Texto';

  @Output()
  changeMarkdown: EventEmitter<string|any> = new EventEmitter<string |any>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.contenidoMarkdown);
  }

  inputTextArea(texto: Event |any) {

    //const texto2 = texto.target.value;
        // console.log(texto.targets.value);

        //texto.preventDefault();
        console.log( (texto.target as HTMLInputElement).value)

  }


}
