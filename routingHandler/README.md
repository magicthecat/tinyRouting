tinyrouting-routinghandler
-----------------------------

What is it for?
---------------

This is a tiny npm package that provides routing functionality for updating the URL path. It can be used to handle routing logic and trigger a callback function (normally a rerendering function but it could be anything you choose). It can be used in conjunction with tinyrouting-routinghandler (<https://www.npmjs.com/package/tinyrouting-navigationhandler>) in order to create routing logic and page re-renders based on routing.

Why?
----

Many routing libraries are specific to certain frameworks or come with a large codebase. The `routingHandler` package aims to provide a lightweight solution for routing in various applications and use cases.

Function Parameters
-------------------

The function accepts a single `callback` parameter, which should be a function. This callback function will be executed whenever the URL path changes.

How it works
------------

The `routingHandler` function utilizes the History Web API, which is a built-in JavaScript API provided by web browsers. It listens to the `popstate` event, which is triggered when the URL path changes. When the event occurs, the function extracts the current path from the URL and calls the provided callback function with the current path as an argument.

If the callback function is not provided or is not a function, an error will be thrown. The `popstate` event listener is set up to continuously monitor the URL path, and the initial callback is invoked when the function is called.

If any errors occur during the execution of the `routingHandler` function, they will be logged to the console.


Compatibility
-------------

Compatible with:

-   React (tested on v18.2.0)

-   Vue (tested on v3.3.2)

-   Vanilla Javascript

Examples
--------

Note: these examples also use the  tinyrouting-routinghandler (<https://www.npmjs.com/package/tinyrouting-routinghandler>) for routing logic.

Code Sandbox Examples can be found here:

-   Vanilla JS: <https://codesandbox.io/s/tinyrouting-vanilla-js-example-4xh9ok>

-   Vue 3: <https://codesandbox.io/s/tinyrouting-routinghandler-vue-example-0950du>

-   React: <https://codesandbox.io/s/tinyrouting-routinghandler-react-example-6r0teu>