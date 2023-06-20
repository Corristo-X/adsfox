# Nazwa projektu

## Opis
Projekt składa się z dwóch części: Backend napisany w PHP z wykorzystaniem frameworka Laravel oraz Frontend napisany w React z wykorzystaniem TypeScript.

Backend jest odpowiedzialny za zarządzanie bazą danych oraz udostępnianie API dla aplikacji Frontend. Wykorzystuje serwer XAMPP do uruchomienia lokalnego środowiska z bazą danych MySQL i serwerem Apache.

Frontend pozwala użytkownikom na interakcję z aplikacją za pomocą przeglądarki internetowej. Wykorzystuje bibliotekę React w połączeniu z TypeScript do budowy interfejsu użytkownika i komunikacji z API backendu.

## Wymagania
Aby uruchomić ten projekt, należy spełnić następujące wymagania:
### Backend:
Serwer XAMPP z zainstalowanym Apache i MySQL
PHP w wersji 7.x lub wyższej
Composer (menadżer pakietów PHP)
### Frontend:
Node.js w wersji 14.x lub wyższej
npm (Node Package Manager)
## Instalacja i konfiguracja
Instrukcje instalacji i konfiguracji znajdują się tutaj.
### Backend:
1. Zainstaluj serwer XAMPP na swoim systemie.
2. Uruchom serwer Apache i MySQL w panelu kontrolnym XAMPP.
3. Otwórz terminal lub konsolę i przejdź do katalogu projektu backendowego.
4. Wykonaj polecenie composer install w celu zainstalowania wszystkich zależności PHP.
5. Zmień nazwę pliku .env.example na .env.
6. Wykonaj polecenie php artisan key:generate w celu wygenerowania klucza.
7. Wykonaj polecenie php artisan db:seed w celu wypełnienia bazy danych początkowymi danymi.
### Frontend:
1. Otwórz terminal lub konsolę i przejdź do katalogu projektu frontendowego.
2. Wykonaj polecenie npm install w celu zainstalowania wszystkich zależności.
## Uruchomienie
### Backend:
1.Uruchom serwer Apache i MySQL w panelu kontrolnym XAMPP, jeśli jeszcze tego nie zrobiłeś.
2.Otwórz terminal lub konsolę i przejdź do katalogu projektu backendowego.
3.Wykonaj polecenie php artisan serve w celu uruchomienia lokalnego serwera deweloperskiego.

Backend będzie dostępny pod adresem http://localhost:8000.
### Frontend:
1. Otwórz terminal lub konsolę i przejdź do katalogu projektu frontendowego.
2. Wykonaj polecenie npm start w celu uruchomienia aplikacji frontendowej w trybie deweloperskim.

Frontend będzie dostępny pod adresem http://localhost:3000.
## Testowanie
### Backend : 
1. Wykonaj polecenie php artisan test
### Frontend : 
1. Wykonaj polecenie npm test

## Autorzy
### Daniel Talarek



