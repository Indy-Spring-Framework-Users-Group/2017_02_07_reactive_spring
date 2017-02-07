# 2017_02_07_reactive_spring
## Kappa Generator

This is a simple app that uses reactive spring web to create a random stream of numbers. This stream is intended to be consumed by a client using 
`    "Accept: text/event-stream"
`.

The client can render something each time a new item in the stream is received. In our case Kappa's!

Turns out experimental really is just that, the netty server doesn't want to spin up currently.
