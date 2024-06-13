# FlagApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

## Attribution

This project is part of the REST Countries Challenge provided by Frontend Mentors. The challenge includes implementing features such as light/dark mode switch, dynamic card population with JSON data, search functionality, filtering by region, and creating a details page for each country. Additional features include card styling, animation, and responsive design.

For more details on the challenge, visit the following link:

- RESTful Countries Challenge: [https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Consuming a RESTful API

This project consumes a RESTful API to fetch country data. It uses Angular's HttpClient module to make HTTP requests to the API endpoints. The API provides country information such as name, flag image URL, population, region, languages spoken, and more.

### Endpoint and Security

The application interacts with a RESTful API deployed on a free tier of Render. To ensure secure data transmission, the API has a strict origin policy that only accepts requests from the deployed site on Netlify at [https://restful-countries-ksh.netlify.app/](https://restful-countries-ksh.netlify.app/). Requests from other origins will be blocked.

### Note on Service Delay

Due to the free tier deployment of the Node.js service, requests may experience delays of up to 50 seconds before completing. This delay is inherent to the infrastructure and does not affect normal operation once the request is processed.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.