// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/zone';
import 'zone.js/testing';
// organize-imports-disable-next-line
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import 'core-js/es7/reflect';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
