import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {enableProdMode} from '@angular/core';
enableProdMode();

import { AppModule } from './app.module.js';


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
