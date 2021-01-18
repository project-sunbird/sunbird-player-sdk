# Sunbird Player Sdk

Contains common component which can be used across the player like start page, end page and side menu and header navigations

## Usage

Quick start

`npm i @project-sunbird/sunbird-player-sdk`


Add the module to the your player root module 

`import { SunbirdPlayerSdkModule  } from '@project-sunbird/sunbird-player-sdk';`

```javascript
@NgModule({
  ...
  imports: [
    ...,
    SunbirdPlayerSdkModule
  ]
})
```

add the assets in angular.json file

```javascript
....
 "assets": [
              "src/favicon.ico",
              "src/assets",
              {
                "glob": "**/*",
                "input": "node_modules/@project-sunbird/sunbird-player-sdk/lib/assets/",
                "output": "/assets/"
              }

...

```

after that you can use the components like below

```html
  <sb-player-start-page  [title]="title" [progress]="progress"></sb-player-start-page>
```


## Development

### Prerequisites

 Node 12+

Fork the repo and execute below steps

```bash
cd <forked-folder>

npm install

cd projects/sunbird-player-sdk

npm install

cd ../..

npm run build

```

This will build the library

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
