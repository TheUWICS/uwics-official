# UWICS-Official - 
This is the official repo for The University of the West Indies Computing Society. Visit the website [here](https://uwics-official.firebaseapp.com/).

## List of pages
 * Home - Introduction to club
 * Executives - List of executives and info
 * Events - List of past sessions and the next upcoming session
 * Projects - List of projects done by the members
 * About - More information about this page

### Home page
Meant to give the user a sense of the what the club is about, location and the 
next upcoming meeting. 

### Executives
A list of all the current executives of the 2018/2019 term as well as some personal 
information about them.

### Events and Meetings
All the past sessions for the 2018/2019 term as well as the next upcoming session. 
A chronological timeline of what each session was about will be present. Events hosted within
the club, such as Project Month, and events hosted by the Department of Computing and Information 
Technology, such as The Runtime Competition, and their details will also be listed on this page.

### Projects
As a way for the rest of the club members to feel included and to showcase the skills of the 
club to the rest of the world, members are allowed to post up their personal projects This 
will include a link to the respective repos, a description and perhaps any future work involved.

# Development

This application is built using Angular 7.2.2. To see all the relevant application info and 
versions, run `ng -v` or `ng --version`. 

## Running the development build
Running a local development server is crucial for testing new features and layouts of the 
application.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Guidelines for Contributing

## What should I know before I start?

Due to this project being built on Angular 7, knowledge in JavaScript is a absolute must, 
especially ES6 (ES2015) JavaScript.

Below are some tutorials you can follow: 

* [Basic JavaScript](https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET)
* [ES6 JavaScript](https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml)
* [Angular](https://www.youtube.com/watch?v=9RG3MiEBEIw&list=PLqq-6Pq4lTTb7JGBTogaJ8bm7f8VCvFkj&index=1) 

The entire playlists do not have to be completed but the major aspects should be covered from each.
And other developers can be asked for help as well :)

## Structure of Projects
Angular is made up of Modules and Components (a reuseable piece of code). Each Module has its
own associated list of components. 
 
Each page of this project is given its own module. This helps to facilitate a feature called 
Lazy Loading, which allows the browser to download the content for the website as it's needed, 
as opposed to downloading the entire application. This helps to speed up load time and 
performance on the user's device.

The basic folder structure is as follows:

* app
  - name-of-page
    - main-page
    - other-component-1
    - other-component-2
    - page.module.ts
    - page-routing.module.ts
  - page-2
  - page-3
  - ....
  
## Editing the Project
All editing will be done by creating a separate branch and editing your code in that branch.
This keeps the code clean, separated and your work will not be interfered with by others.
Make sure your code is running properly, meaning the following:
* No console errors when running `ng serve`
* No console errors/warnings when opening the website in the local dev server.
* No errors when running `ng build --prod`
* Console error showing the application is over 1MB should not appear.

Make sure to add very descriptive commit messages. For example, do not add 
    
    Fixed Project Page
    
Instead, do the following:

    - Removed excess styles for the Project Page
    - Re-designed the Home Page with cards instead of panels
    - Added a padding of 20px around the header text of the Header Component

DO NOT MERGE BRANCHES WHEN FINISHED. Merges will be done by the webmaster.


### Fixing a bug
If you need to perform any bug fixes, then follow the steps below:

* Pull from master to gain any new changes to the project
* Create a new branch prefixed with your initials, `-bug-fix-`followed by a number
(eg. QQB-bug-fix-1, QQB-bug-fix-2, etc.)
* Edit the code in your IDE
* Before pushing your changes, make sure to pull from the repo again.
  
## Adding a Page
When adding a page, the following has to be done:

* Run the command to generate a new module `ng generate module page-name --routing`
 or `ng g m page-name --routing`
* Add the newly created module to the list of routes in the `app-routing.module.ts` file
* A folder will be added for this new module. Any components pertaining to this new page will 
be placed in this folder.
