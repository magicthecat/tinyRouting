tinyrouting-navigationhandler
-----------------------------

What is it for?
---------------

This is a tiny npm package that provides the ability to update a URL with a path. That's it. It can be used in conjunction with tinyrouting-routinghandler (<https://www.npmjs.com/package/tinyrouting-routinghandler>) in order to create routing logic and page re-renders based on routing.

Why?
----

A lot of routing libraries are either framework specific, large or both. The tinyRouting packages (<https://github.com/magicthecat/tinyRouting>) aim to provide atomic functions that can be used in a wide variety of applications and use cases.

Function Parameters
-------------------

The function accepts a single string  `path` parameter, which represents the new path to navigate to.

How it works
------------

Within the function it uses the History Web API which is part of the JavaScript Browser API. This s a set of built-in JavaScript APIs provided by web browsers.

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