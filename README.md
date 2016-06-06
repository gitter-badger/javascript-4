# javascript

[![Join the chat at https://gitter.im/liberaldart/javascript](https://badges.gitter.im/liberaldart/javascript.svg)](https://gitter.im/liberaldart/javascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
A bunch of code that I have been writing while practicing JavaScript

1.Cloned example from : https://github.com/scruffles/BootstrapModalPopover.git: into:modal_popover_sandbox

    ~~The example above in modal_popover_sandbox would work by opening the index.html in a browser only if your have your~~ ~~browser~~
    ~~configured to open local file without CORS exception:~~
    ~~In MAC:~~
    ~~open /Applications/Google\ Chrome.app --args --allow-file-access-from-files~~

    Better to run in an nodejs express server
    
    Run the app with 
    ```node app.js```
    Install node.js if the above command doesn't work
    
    Then open localhost:8080 in your browser
    
2.Collected another example from : https://github.com/kartik-v/bootstrap-popover-x.git: into: bootstrap-popover-modal-example2
    This is plain old popover with a close icon on the right top corner. Not worth it as compared to the code in modal_popover_sandbox
    
3.Example of using jsonp: wikipedia_searcher
    jsonp is a combination of script tag and callback that returns when the callback loads. jsonp is used as a workaround for same-origin policy
    of browsers for security. In this code base we use jsonp with wikipedia api
    
4. Added d3 examples for maps and bubble chart

