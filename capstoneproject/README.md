# capstoneproject
Jobportal management Project
This Project has created Ruby on Rails. Our front end is React js and back end is Ruby on Rails. Database Postgressql(AWS).
Creating React Project
Create a folder jobportal .If you have already created no need to create again
Suppose not created , create now
D:\> md jobportal
D:\> cd jobportal
D:\jobportal>

Suppose you have already created, Just do the following

D:\> cd jobportal
D:\jobportal> 
Then type the following , to open visual code
Then open in the vscode . 
now create a new Application for jobportal userinterface
D:\jobportal>npx create-react-app jobui
D:\jobportal>cd jobui
D:\jobportal\jobui>
To start the server just type the following command
D:\jobportal>jobui>npm start
By default react application will run in port 3000.

Then create a components folder under src folder
Go to-->scr\components
components folder 
create Header folder for creating header .
create header.js and header,css file in this folder.
create content folder for creating content page.
create content.js and content.css file in this folder
create Footer folder for creating footer .
create Footer.js and Footer.css file in this folder.(Suppose required for this project)

Then create a image folder in public
Go to Public folder-->create a folder name as image then add your all the images in this folder.
Then we have installed two library files axios and react-router-dom
The axios is library is a ,Promise based HTTP client for the browser and node.js
In command prompt , type the following command
D:\jobportal\jobui>npm install axios 
 
To connect with Ruby on rails , Postgressql database with react.
In command window type the following command to install react-router dom
D:\jobportal>jobui>npm i react-router-dom
The react-router-dom package contains bindings for using React Router in web applications. 

After installing the both libraries include your page also using import command.
To connect with database use proxy . 
Open the package.json file and add the following line in line no 5
"proxy": "http://127.0.0.1:3001",
In this file already all the dependendices are added.
Include Routes and Route libray for Routing concepts 
import {
     Routes, Route } from "react-router-dom";
Use the following library for navigating next page
import { Link,useNavigate } from "react-router-dom";



To create project on Ruby on Rails . Follow the below steps
Create a folder jobportal
d:\> md jobportal
d:\>cd jobportal
d:\jobportal>
To open Vscode
d:\jobportal>code .

Create a new Project
rails new jobbck --database=postgresql
Create Landingpage routes:
1. Go to config/routes.rb
	root "application#landingpage"
2. Go to app/controllers/application_controller.rb
	Add a function called as hello inside the application controller class
		 def landingpage
    			render html: "welcome to our Jobportal"
 		end
Execute rails app:
 rails s -p 3001
Note: If no port is specified then it will run at 3000 port which is default.
Since our react project is running in our port 3000. So we are using 3001 port for rails.
Gem file:
Adding some required library files in gem file:
Open your gem file and uncomment the line no 37 
gem "bcrypt", "~> 3.1.7"
 then in terminal 
D:\jobportal\jobbck>bundle install

After installing gemfile. configure the database file database.yml file
