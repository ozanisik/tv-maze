# tv-shows-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

## 🛠️ Library and Tools

- #### Vue 3
- #### Typescript
Decided to use type safety and some other features like interfaces, type aliases...
Otherwise, I think the readability and maintainability of the code becomes difficult.
- #### Jest
Jest was preferred for unit tests. 
I tried to add few tests due to time problem. Normally ttd can progress but since the priority here is to show something, I hope a few tests will help to understand the approach.
- #### Babel
Used as transpiler
- #### SASS
Preferred to maintain better css codes as much as possible.
- #### Cypress
Implemented but not used. I would prefer to go with cypress because of compability.
- #### Tailwind
Implemented but not used at all. Attempted to demonstrate css capabilities and approach.
- #### PWA (Progressive Web App)
Not implemented but would be nice for this project.

## 🏛️ Structure
```
.
└── tv-maze-api/
    ├── node_modules/
    ├── src/
    │   ├── api/
    │   │   ├── common/
    │   │   │   └── HttpClient
    │   │   ├── [api-flow]/
    │   │   └── ...
    │   ├── assets/
    │   ├── common/
    │   ├── components/ //
    │   │   ├── atoms/ // folder of some pure components like input, button
    │   │   └── molecules/ // folder of some mix components like navbar
    │   ├── composables/
    │   ├── router/
    │   ├── store/
    │   ├── views/ // pages
    │   ├── App.vue
    │   └── main.ts
    └── tests/
        ├── e2e
        └── unit/
            ├── views
            └── components

```

