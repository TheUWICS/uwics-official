# Home Page
## General Information

This page is supposed to give the user a sense of what the club is about. Text should not be 
overly long and design should be simple. The page includes a welcome message as well as a short 
description about the club. Additional features include cards for every section of the website such 
as: 

* Executives
* Projects
* Events and Meetings
* About

Each one of these cards will give a short description about the page which it refers to. This 
description can be copied from the pages themselves since each page also includes its description.

## Developer Information

In addition to this page belonging to a lazy loaded module, this is also the first page that the 
user will see when visiting the website. To this end, effort has been made to remove as much 
dependencies on this page as possible so that load times are acceptable. 

Dependencies: 
* SharedModule

Components:
* HomeComponent (will be renamed appropriately)
* EventCardComponent (will be renamed and relocated appropriately)

