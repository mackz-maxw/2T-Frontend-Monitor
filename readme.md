# Vue 3 + TypeScript + Vite frontend monitoring systerm
## Requirements
·Build a front-end monitoring system website to achieve data collection, rendering, and display. 

·Collect data includes: traffic data such as the number of visits to the monitored target page, link exceptions such as 404 errors on the target page, and code errors such as blank screens on the target page. 

·The collected data should be classified and displayed, requiring an intuitive display page with numerical and chart displays to show the data.

## Techniques
·We chose the Vue3 application as the framework for development, and the project consists of a main page and multiple local refresh routes. Based on the Vue3 framework, we selected the following front-end development tools: Vue3 + TypeScript + Vite + Bootstrap + Element-plus, and we also used tools such as Router, Echarts to further improve the functionality. 

·For the back-end, we chose Java to construct the data transmission level structure and Mysql database. We established a clear, stable and component-based code logic. The back-end and front-end are separated and data is transmitted through network requests. We also did some research on web architecture and presentation.

## Efforts
I participated in the development of front-end data collection APIs, front-end data collection pages and some UI components. 

·In the development of the APIs, I wrote the code for collecting data in different categories, and used XMLHTTP requests to report data and separated general requests from data reporting requests. For data display, I used Vue3 to build the project framework, Bootstrap to organize the webpage layout and Element-UI to beautify the page. 

The data that needs to be collected is divided into three categories: program errors, traffic monitoring and performance monitoring. 

·In program errors, I monitored the existence of blank screen errors by getting the HTML document at a specific point on the page and monitored JS errors and timeout tasks by listening to browser window events. In traffic monitoring, I mainly used XMLHTTP requests and fetch API to get requests and their details. 

·In performance monitoring, I used the observe method to monitor the attributes of elements on the page. 

The learning and application of these technical means have given me a deeper understanding of the structure and steps of front-end and back-end communication, such as the MVVM framework, and also have given me a sense of some design patterns, such as the observer design pattern and the asynchronous execution of programs.
