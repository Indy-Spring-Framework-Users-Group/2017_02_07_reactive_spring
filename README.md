# 2017_02_07_reactive_spring
## Kappa Generator

This is a simple app that uses reactive spring web to create a random stream of numbers. This stream is intended to be consumed by a client using 
`    "Accept: text/event-stream"
`.

The client can render something each time a new item in the stream is received. In our case Kappa's!

To run server

`mvn spring-boot:run -Drun.profiles=tomcat`

_Netty Servlet was having some issues_

To run client

`cd frontend` run `npm install` then `npm start`


Useful / Fun Links:
* http://start.spring.io/
* https://www.reactivesummit.org/2016
* https://github.com/thymeleaf/thymeleafsandbox-biglist-reactive
