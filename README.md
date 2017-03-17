# Advertima exercise:


This repository is the development my first Angular2 project to showcase the technical skills I've learning throughout between **06.03.2017** and **13.03.2017** by developing a simple front-end application using some important Angular2 functionalities. In this project, I am going to develop it using a Windows 10 machine andthe following technologies: 



I hope this repository can help me to become a productive Frontend web-developer as well as be useful for other developers. :smile:

my idea is developping a project like this one. 
http://startup-calendar.com/
---

Along this README.md file I intend to make a list of what I consider the most common Angular 2 procedures for web development. 


##### Create a new project based on the QuickStart


first of all, I downloaded the *"Angular 2 QuickStart - source from the documentation"* from:

    git clone https://github.com/angular/quickstart  advertima_exercise
    cd advertima_exercise



Clone this repo into new project folder (e.g., `advertima_exercise`).
```shell
git clone https://github.com/angular/quickstart  advertima_exercise
cd advertima_exercise
```
*moving to env directory created* :open_file_folder:

##### 1) Angular 2 important Procedures on POWER SHELL:
```powershell

npm install		# install all dependencies into a node_modules directory
npm start		# run the the server on localhost:8808 or localhost:3000

npm run tsc		# run the typescript compiler. (I think this is not needed for Angular 2)


npm install -g 
npm install -g typescript	# -- typescript@2.2.1
npm install -g angular-cli

npm init -y 	# Creates standard application development file..

npm new todo	# creates a basic app with basic template file
			 	# generates a complete functional app 

npm test		# ???npm 

ng g component todo-list 	# installing component


npm install ng2-bootstrap --save
npm install toastr --save

---

other stuffs
ls e2e

```



	



### 2) miscellaneous:

#### Angular Templating

{{ }} is interpolation and represents one-way binding.

### More resources about Angular.js 2 can be found in:	
https://angular-ui.github.io/


:construction: This part is under construction :construction:	



##### (today's learning topic 08.03.17)



**Handling Inter-Component communication**

* input properties; 		**@Input()**
* Output properties; 		**@Output()**
* template variables. 		**<div-tag #variable>\</div-tag>**

Styling Components
Styling Encapsulation -- build-in Angular encapsulation. isolates Childs and Parents components
there is a way to get around this CSS encapsulation. if we want to apply styles to a child component. All we haveto do is apply the **deep selector**. next step, is checking this out.
Programaticaly add and remove Styles

**Class binding** is a special type of binding and it is parsed by Angular and it's basically saying that if this expression returns true, then add the class within [] to this div.


New Template Syntax in Angular 2:
Interpolation and Expressions -> allow us to bind to and display data in our templates.

* Interpolation: *{{ user.name }}*
* Property Bindings: *<img [src]="user.imageUrl"/>*

* Event Binding *()* around the element
* Property Bindings *[]* 

Template Statements and Template expressions have basically the same restrictions. with few exceptions.



Eveents binding to DOM events 
repeating data -> ngFor
removing data -> ngIf
kind of special case -> ngSwitch

**Structural Directives** are different from other directives because they actually change the shape of the DOM. They add or remove HTML elements from the HTML document.
ngFor is the classic function that exemplifies it.


*\<div [hidden]="!event?.location">* 	
*\<div \*ngIf="event?.onlineUrl">*



Hiding Elements


[ngClass] and [ngStyle]. read more about the their usage. 

Relation Between Services and Dependency Injection

Services allow you to define business logic in a separate file and then inject whatever service we need whenever we need it. it is kind of choosing which record to put on our turntable and this is where dependency injection comes in.


read more about OnInit typescript


Routing 

Lazy Loading

read more about parameter placeholders

---