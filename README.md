# spare-part-selling-frontend
  Spare-part store app using technologies like React + Redux

### Branch naming:
  feature/[task number]-[branch name in cebab-case]

### Commit prefixes: 
  - **feat**: A new feature
  - **fix**: A bug fix
  - **perf**: A code change that improves perfomance
  - **refactor**: A code change that neither fixes a bug nor adds a feature
  - **style**: Changes that do not affect the meaning of the code
  - **docs**: Documentation only changes
  - **test**: Adding missing test or correcting existing test
  - **BREAKING CHANGE**: critical changes, which can break app

### Commit example:
  feat(App): create component
  fix(User): change fields to correct


### Frontend structure: 
  - src/components - place for create your components. Folder should include:

    [ComponentName in PascalCase].tsx file - component code itself,

    [ComponentName in PascalCase].module.scss file - file for styles,

    index.ts - file for export component from [componentName in PascalCase].tsx file

  - src/components/ui - place for ui components

  - src/components/routes - place for components located along a specific route
 
  - src/types - place for types

  - src/stores - place for stores

  - src/utils - place for utils( code block for solving a specific problem )

  - tsconfig.json - place for settings typescript work

  - package.json - place for all project dependencies

  - index.tsx - the main file which render the main component - ./component/App

  - index.css - global styles for the project

### Comand for start the frontend in http://localhost:3000 : 
  **yarn start**
