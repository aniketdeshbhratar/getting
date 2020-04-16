**Angular**
All application is set of components and services provide functionaliy across these components
-**Angular component** : contains template which is view, class where code is assosicated with view like data elements and 
methods like event listner
**metadata** - which contains additional information about comonent to Angular
-**Modules** - help us to organize application and functionaliy.
each app as atlest one module which is root module
also there is additional module which is feature module

#### Typescript: 
strong typing- which is we can define a type.
tooling - inline documentation, syntax check , code navigation , advance refactoring

`[Q] what is advance refactoring?`

-superset of javascript and compiles in plain javascript
-stongly typed: variable,function,function parameter have data type using .d.ts file
-class based object orentation 
-can use es6 feature

`[Q] Where is start code`

it is in package.json

++ **Namespaces** 
Modules to help organize namespace issues
[Q] what is namespace in angular/Typescript

++ **ES Modules** **

++ **Angular Modules **
Atleast one angulae module-which is app.module
share module - code which are used by multiple modules,can load on start or lazy module
feature module - group features 

++ **component**
Component contains template
-view layout
-created with html
-including binding and directives

**then class**
-code supporting the view
-created with Typescript
-properties data methods and logic

**metadata**
-to find metadata use selector,template url,style
-@Component

++  **Bootstraping** - self starting 
- tell angular to load our root component 

**hosting the application**
-in index.html we add selector, here it insert html which is define in angular component
angular module provide all information to angular
- imports contains all modules , browserModule
- declarations contains all components
- bootstrap contains startup component

`[Q] what is use of browserModule ?`

Angular directive are case sensative

++ installing bootsatrap and fontawesome

++ **AppModule**
Every app should have atleast one AppModule.
AppCompnent belongs to single component
it also brpwserModule to pull features which are need to be run in browserModule


`[q] What is browserModule`

++ **Binding** 
Co ordinated communication between component class and its template.
and template pass events to pass user actions or user enter value.
-Interpolation (one way)
{{pageTitle}}

++ **directive**
Custome HTML element or attribute to use to power up and extend to HTML
Build in Angular directives
*ngIf (structural directives) modifies the structire or view by manupulating children
*ngFor (structural directives) both are from (browserModule)

*ngIf=
products && products.length

**For of vs For in es2015**
-For of-
iterate over iterable objects, such as an array.
let nickname = ['d1','d2','d3'];
for(let nick of nickNames){
}

-**For in**

Iterates over the properties of an object. can get index
0,1,2


#### Data binding

++**Property Binding**
propety binding allows to set values of template expression.

`<img [src]='product.imageUrl'>
`

[src] is element property and 'product.imageUrl' is template expression

++ adding Styles using variable
create variable in ts file
imageWidth:number = 50;

[style.width.px]='imageWidth'


++**Event binding**
(click)="product.imageUrl"

{{showImage ? 'hide' : 'show}}

++** Two way binding **
Template to class and class to template 
[(ngModule)] = 'listFiler'

++Pipes
transform bound properties before display.
build in pipes - date,number,decimal,percentage,currency,json,slice
Custome pipes 

**we can pass parameter also
`<td>{{product.price | currency:'₹':'symbol' : '1.2-2' | lowercase}}</td>
`
