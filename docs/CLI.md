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

