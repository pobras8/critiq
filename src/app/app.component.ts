import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger/logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'app';

    constructor(private logger: LoggerService) {}

    ngOnInit() {
    }
}