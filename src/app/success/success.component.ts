import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-success',
    template: `
        <h1>SUCCESS! :)</h1>
    `,
    styles: [`
        h1 {
            color: green;
        }
    `]
})
export class SuccessComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        
    }
}