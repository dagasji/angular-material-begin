import { Component } from '@angular/core';

@Component({
    selector : 'hello-world',
    templateUrl: './primer.component.html',
    styleUrls : ['./primer.component.scss']
})
export class HelloWorld {
    title = 'Título Hola Mundo';
}