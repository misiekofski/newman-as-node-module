# Newman as Node module:

To jest polska wersja szkieletu do uruchamiania testów API pisanych w Postmanie za pomocą node.js

## Co musimy zainstalować (komendą npm install)
* newman `runner testów pisanych w Postmanie`
* mysql `obsługa bazy danych do posprzątania po testach`
* newman-reporter-html `generator raportów w html`

## Instrukcja uruchomienia
* sklonuj to repozytorium
* zainstaluj https://nodejs.org/en/
* w głownym katalogu repozytorium uruchom z linii komend `npm install` - to zainstaluje lokalnie wszystkie elementy z package.json
* wyeksportuj swoją kolekcje z Postmana do katalogu `collections`
* wyeksportuj swoje środowisko do katalogu `envs`
* raporty bedą generowane w katalogu `/reports`
