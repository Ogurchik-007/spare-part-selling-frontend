# off-black
Sneaker store app using technologies like node.js, postgres db, REST, React

### Branch naming:
  feature/[b || f]_[task number]-[branch name in cebab-case]

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
  feat: Add Test component


### Frontend structure: 
  - public/index.html - main and only .html file in project
  - node_modules - packages used in a project
  - src/components - place for create your components. Folder should include:

    [ComponentName in PascalCase].tsx file - component code itself,

    [ComponentName in PascalCase].module.scss file - file for styles,

    index.ts - file for export component from [componentName in PascalCase].tsx file
 
  - src/types - plase for your types

  - src/stores - place for your stores

  - src/utils - place for you utils( code block for solving a specific problem )

  - tsconfig.json - place for settings typescript work

  - package.json - place for all project dependencies

  - index.tsx - the main file which render the main component - ./component/App

  - index.scss - styles for index.tsx

### Comand for start the frontend in http://localhost:3000 : 
  **yarn start**

### Comand for start the backend in http://localhost:5000 :
  **yarn dev**
