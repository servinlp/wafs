# wafs
The course repo for 'Web App From Scratch'

## Advantages and disadvantages of JavaScript libraries/frameworks

### Vanilla.js
> Vanilla JS is a fast, lightweight, cross-platform framework
for building incredible, powerful JavaScript applications.

Made as a joke, the website shows with a few examples the difference between "vanilla.js" and other libraries such as Dojo, jQuery or Protorype JS.

There goal (and i'm assuming here) is to show you that JavaScript doesn't need to be that long and can be much more powerfull than a library that is in fact just another layer on top of it.

To use Vanilla JS, just put the following code anywhere in your application's HTML:
```javascript
<script src="path/to/vanilla.js"></script>
```
When you're ready to move your application to a production deployment, switch to the much faster method:
```javascript

```

That's right - no code at all. Vanilla JS is so popular that browsers have been automatically loading it for over a decade.

-From [Vanilla-js.com]

[Vanilla-js.com]: Vanilla-js.com


### React
One of the things that probably makes React so populair is that you have to work in components. Sure this can be achieved in many ways but with React it becomes much easier to use and especially reuse these components. By creating a component that you can modify with its `props` you can create a piece of code that can work in many more places than just one.

This and the ability to decide weather you want to update a component or not makes it so that you have much more control over your code and how it behaves.

A pro and con is the dataflow. The way React is created makes it so that you can only send data downwards to it's child components. Sending data from a component to it's parent isn't possible.

A quite obvious con of React (but it just depends on if this is something you care about) is that you can't (easily) make it progressive enhanced. Because React is build purely with JavaScript you can't really do this. Maybe unless you use server side rendering but even with that this still remains a task not worth for some.

## Advantages and disadvantages of client-side single page web apps
...

## Best practices
...

[Libararies]:Libararies.md