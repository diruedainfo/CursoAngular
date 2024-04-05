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
...
ng g s core/forms/form-common-utilities
...


ng g class core/forms/form --type=base --dry-run
