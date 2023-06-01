# GifsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Documentation

The project consists of an application to fetch gifs from an API based on the search parameter you put in the search bar it is limit to 15 results, and as part of the excercise you can order them by date from recent to oldest and the other way around, also you can filter the result by year of published and it will show you the results from that. Also you can save the history of you search in local storage and it is up to limit by 10 searches on the side of the application, also a lazy load implementation for slower connections was implemented to make the user experience more fluent.


The project consist of a folder for the shared components, the cards components, the search box component, and the main methods regarding the functionality are in the home-page component and the gif service, the rest of the components has inner comunication between them, so all the logic can be done in just one component.


