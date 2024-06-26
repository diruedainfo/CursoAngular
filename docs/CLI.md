# CLI journal
...
ng new angular-intro --routing true --style scss

npm install @picocss/pico
...

## 1. Templates

## 2. Modules

...bash
ng g m core
ng g c core/header --export
ng g c core/title
...
ng g c core/footer
...
ng g m home
ng g c home --type=page --export
...
ng g m shared
ng g c shared/reloading --export
...

## 3. Routes

...bash
ng g m about --route=about --module=app --dry-run

ng g m contact --route=contact --module=app --dry-run
ng g c contact --type=page --dry-run
...
ng g m auth/register --route=auth/register -m=app --dry-run
ng g c auth/register --type=page --dry-run
...
ng g m auth/login --route=auth/login -m=app --dry-run
ng g c auth/login --type=page --dry-run
...
ng g m agencies --route=agencies -m=app --dry-run
ng g c agencies --type=list --dry-run
...
ng g m trips --route=trips -m=app --dry-run
ng g c trips --type=list --dry-run
...
ng g c shared/components/agencies --export --type=lista
ng g c shared/components/trips --export --type=lista
...
ng g m agencies/agency -m=agencies --route=agency/:id  --dry-run
ng g c agencies/agency --type=page
...
ng g m trips/trip -m=trips --route=trip/:id  --dry-run
ng g c trips/trip --type=page

## 4. Forms

...bash
ng g c contact --type=form
...
ng g c auth/register --type=form
...
ng g c auth/login --type=form
...
ng g m agencies/new-agency -m=agencies --route=agency/new
ng g c agencies/new-agency --type=page
ng g c agencies/new-agency --type=form
...
ng g m trips/new-trip -m=trips --route=trip/new
ng g c trips/new-trip --type=page
ng g c trips/new-trip --type=form
...

## 5. Services

...bash
ng g s core/forms/form-validations
ng g s core/forms/form-messages
ng g s core/forms/form-common-utilities

ng g class core/forms/form --type=base --dry-run



ng g interface core/api/agency --type=interface
ng g i core/api/id-name --type=interface
...

ng g s core/api/agencies --dry-run
ó
ng g class core/api/agencies --type=api --dry-run   USAMOS ESTA OPCIÓN
ng g class core/api/id-name --type=api --dry-run

...

ng g interface core/api/trip --type=interface --dry-run

...

ng g class core/api/trips --type=api --dry-run    USAMOS ESTA OPCIÓN


## 6. Containers

GENERAMOS UNA VISTA PARA agency.page.ts
ng g c agencies/agency --type=view

GENERAMOS UNA VISTA PARA trip.page.ts
ng g c trips/trip --type=view

## 7. Http

...bash
npm i -D json-server json-server-auth
npm run api
...


## 8. Pro

...bash
CRUD GENÉRICO
ng g class core/api/crud --type=api
ESTO GENERA UNA CLASE -> src/app/core/api/crud.api.ts


...
ng g class core/api/status --type=store --dry-run
...

(TAREA)
ng g class core/api/bookings --type=api --dry-run    USAMOS ESTA OPCIÓN
ng g m bookings --route=bookings -m=app --dry-run
ng g c shared/components/bookings --export --type=lista --dry-run
...
ng g m bookings/booking -m=bookings --route=booking/:id  --dry-run
ng g c bookings/booking --type=page --dry-run
...
GENERAMOS UNA VISTA PARA booking.page.ts
ng g c bookings/booking --type=view --dry-run
...
ng g m bookings/new-booking -m=bookings --route=booking/new --dry-run
ng g c bookings/new-booking --type=page --dry-run
ng g c bookings/new-booking --type=form --dry-run
...


## 10. forms-cva

...bash
ng g c shared/controls/email -- type control --export true
...
CONTROL GENÉRICO PARA TEXTOS
ng g c shared/controls/template --type control --export true
...
ng g c shared/controls/search --type=control --export
...


## 11. Pro

## 12. Auth

...bash
ng g class auth/api/auth --type=api
ng g i auth/api/register --type=interface
ng g i auth/api/login --type=interface
...
INTERCEPTOR ERROR -> Log + Login
ng g interceptor core/api/error --dry-run

ApiAuth -> pipe -> accessToken

INTERCEPTOR AUTH -> AuthApi.accessToken -> request.headers['Authorization']
ng g interceptor auth/api/auth --dry-run
...

GUARDS
ng g guard auth/api/authenticated --implements CanLoad --dry-run

...
STORAGE
creamos una clase
ng g class core/utils/storage --type=base --dry-run

creamos otra clase local-storage
ng g class core/utils/local-storage --type=service --dry-run

creamos otra clase session-storage
ng g class core/utils/session-storage --type=service --dry-run
...
creamos una INTEFACE para el STORAGE
ng g interface core/utils/storage --type=interface --dry-run
...


## 13. PWA

...
ng add @angular/pwa@13.3.0
npm i --force
...
