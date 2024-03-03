# MyWeatherApp

SPA create to get the current weather and the forecast weather

[Live demo](https://egm77.github.io/my-weather-app)

## Criteria
* I added linters during pre-commit hooks in order to have a kind of order and good practices applied in the code from the beginning.
* I created an api layer to connect with the API and map the responses to our domain
* I used https://app.quicktype.io/?l=ts to get the DTOs interfaces
* I got the weather icons from the same weather service
* I reused the weather card for current weather and forecast
* I saved the last forecast request in localstore and call it again just if was not saved the same day. (TODO save location)
* I deployed the application in Github pages to have a [Live demo](https://egm77.github.io/my-weather-app)
* The application is responsive
* In order to save time I implemented integration tests using Playwright to cover happy paths instead of unit tests
* It would be good for the future manage data, errors and loading states using NxRx
* I used BEM for styles
* I used bootstrap styles

## Linters
(They are executed during the commit)

* Eslint
* Stylelint
* Prettier

## TO DO list

* Add unit test
* Move urls to environments files
* Move components services to Ngrx State management
* Create toast to show errors
* Improve UX

## Running unit tests

TODO

## Running integration tests

Run `npm run test:playwright` to execute the integration tests. You have to have `npm run start` running

