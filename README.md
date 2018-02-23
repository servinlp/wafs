# wafs
The course repo for 'Web App From Scratch'

## The project

### Flow

Here you can see the global structure of the project.
[alt text](./images/global-structure.png "The global structure of the project")

And here we can see the actual flow the app takes to function.
[alt text](./images/flow.png "The flow of the project")

### Features

Using the app you can scroll through the public objects from [Google Poly]. You can chose to see the best of the best or perhaps you only want to see objects from [Google Blocks] or only from [Tilt Brush].

Want to have a closer look? Just click on it and the app will load the object for you to see in all its glory.

Note: This app makes use of the [Google Poly API](https://developers.google.com/poly/)

### Wishlist

- Navigating with the back button
- Load the objects properly
- Using the WebVR API

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

### Single, multi, hybrid web app
I think before we start it might be good to know what the difference is between a singe, multi or hybrid web app.

As the name implies, a single page web app is just one page. You load one page and then depending on your actions it will load new data or an entire new component.

The multi page web app is an application where you will navigate in the traditional way by going between pages.

The hybrid web app is (as the name implies) a hybrid of the two. Having functionalities that live on a single page and still being able to go to another page when necessary.

### Client side single page web apps
Here the part of 'client side' is important. This means no communication between app en server unless it's from an api.

Knowing this we can say that something like server side rendering is not an option. Because this app will heavily rely on JavaScript this means there is no option to make the website progressive enhanced.

Another thing to keep in mind with a single page app is the speed. Yes the speed will be fast when sending and receiving data but because everything is wrapped in a single page all the scripts need to be downloaded. This can mean that the first load of the page will be much slower then with a multi page app because here you only need to load the necessary scripts (instead of all the scripts + frameworks you might be using). (Of course if you properly cache your scripts this will only be a problem for new users.)

A known problem with single page apps though is security. XSS (Cross-site scripting) has been a known problem with these types of sites. If addressed properly it can be avoided but it will need more attention then with a multi page app.

Overall a single page web app can be a simpler alternative. Development is simplified/streamlined, your code is easy to debug and the app is easier to turn into a mobile app.

TLDR:

Pro
- Speed
- Development simplified/streamlined
- Easy to debug
- Easier to turn into a mobile app

Con
- SEO
- XSS
- Requires JavaScript
- Initial download slower

[Resource: Single-page application vs. multiple-page application]

[Resource: Single-page application vs. multiple-page application]: https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58

## Best practices
...

[Google Poly]:poly.google.com
[Google Blocks]:https://vr.google.com/blocks/
[Tilt Brush]:https://www.tiltbrush.com/