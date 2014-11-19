# Contribution Guidelines

## White Space
* This app uses spaces not tabs
* An indent consists of 4 spaces
* There is an .editorconfig file available if your editor supports it

## Naming Schemes
### General JavaScript
* variables: camelCase
* private variables: _camelCase
* static variables: ALL_CAPS

### Angular
* Controllers
    * Controllers are named using Pascal Casing appended with the full word "Controller"
        * ex: angular.module('MyController')
    * File name should exactly the controller name with a dot reference to the type
        * ex: Home.ctrl.js
* Services
    * Services are named using Pascal Casing
        * ex: angular.module('GetData')
    * File name should exactly reflect the service name with a dot reference to the type
        * ex: GetDate.svc.js
* Directives
    * Directives may have an external view template associated to them
    * These templates are to be name using dash case syntax
        * ex: my-view.html
    * The directives themselves are to be named using Camel Casing
        * angular.module('myDirective')
    * File name should reflect the implemented name in the markup
        * ex: my-directive.js
* Templates
    * These templates are to be name using dash case syntax
        * ex: my-view.html

### Unit Tests
* Unit Tests files are named using Pascal Casing
    * ex: MyService.spec.js

### LESS and CSS
* File names: camelCase.less
* ids: dash-syntax
* classes: dash-syntax

### HTML
* We use HTML5 syntax so make sure to omit "/" in the self closing tags
* All attributes should be double quoted
    * class="my-class"

## Commit Message Conventions
<p>When you commit your messages, follow this convention:</p>
    [type]: [subject] 
    [BLANK LINE] 
    [optional message]

<p>The following types are accepted in the commit messages:</p>
* feat
* fix
* docs
* style
* refactor
* perf
* test
* chore
* revert
