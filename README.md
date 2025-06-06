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

#### Code Quality

The project maintains code quality through automated checks that run on every pull request:

1. **Linting**
   - Runs ESLint to check code style and quality
   - Command: `npm run lint`

2. **Dependencies**
   - Uses `npm i --legacy-peer-deps` for deterministic installations
   - GitHub Actions cache for faster builds

3. **Code Formatting**
   - Ensures consistent code formatting
   - Can be automatically fixed using `npm run lint:fix`

4. **Testing**
   - Unit tests using Karma
   - Command: `npm run test`

These checks ensure consistent code style and secure dependency management.

## Package Publishing

Workflow automatically builds and publishes NPM packages whenever a new tag is pushed to the repository.

### Publish Workflow

The workflow is triggered on:
- Push events for any Git tag

Key features of the workflow:
1. Automatically builds the project
2. Creates NPM package
3. Publishes to NPM registry using NPM authentication token (must be provided as GitHub secret `NPM_TOKEN`)