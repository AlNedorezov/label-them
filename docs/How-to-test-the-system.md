We will start by configuring testing environment. If you have already configured testing environment, please, skip it and proceed with the [instruction on how to run tests](#running-tests)

## Configuring testing environment 

1. Open a directory which contains LabelThem system source code in a terminal (command shell on Windows), and execute the following command: `npm install webdriverio`

2. Then execute `./node_modules/.bin/wdio config` command

    A question interface pops up. It will help to create the config easy and fast. If you are not sure what to answer follow this answers:

> Q: Where do you want to execute your tests?  
> A: On my local machine

> Q: Which framework do you want to use?  
> A: mocha

> Q: Shall I install the framework adapter for you?  
> A: Yes (just press enter)

> Q: Where are your test specs located?  
> A: ./test/specs/*/.js (just press enter)

> Q: Which reporter do you want to use?  
> A: dot (just press space and enter)

> Q: Shall I install the reporter library for you?  
> A: Yes (just press enter)

> Q: Do you want to add a service to your test setup?  
> A: none (just press enter, let’s skip this for simplicity)

> Q: Level of logging verbosity:  
> A: silent (just press enter)

> Q: In which directory should screenshots gets saved if a command fails?  
> A: `./errorShots/` (just press enter)

> Q: What is the base url?  
> A: http://localhost (just press enter)

3. Open `wdio.conf.js`

    On line 47 replace “firefox” with “chrome” 
    
    Add the following line right after line 47:

    `platform: 'YOUR_PLATFORM'`

    Where YOUR_PLATFORM is your target platform. You can view all supported platforms [here](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#used-by-the-selenium-server-for-browser-selection)

    Find `mochaOpts`, and change `timeout` parameters value to 20000.
    ```
    mochaOpts: {
        ui: 'bdd',
        timeout: 25000
    }
    ```


4. Specify project folder name

    In the `test/` folder, in each js test file assign a string with the project folder name to the `projectFolderName` variable on line 2. (e.g. “git” or “label-them”)

5. Download selenium server

    [http://www.seleniumhq.org/download/](http://www.seleniumhq.org/download/)

6. Download chromedriver

    [https://sites.google.com/a/chromium.org/chromedriver/downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads)

7. Configure a server that runs the system on localhost on 63342 port

    Although, you may use different solutions in order to do so, we strongly recommend to download [WebStorm IDE](https://www.jetbrains.com/webstorm/download), and run `main_local.html` as a JavaScript Debug application (right click on the `main_local.html` in the project structure in WebStorm IDE and select "Run 'main_local.html'". Use [this instruction](https://www.jetbrains.com/help/webstorm/run-debug-configuration-javascript-debug.html) for configuration reference).

## Running tests

0. Start a server that runs the system on localhost on 63342 port

    Although, you may use different solutions in order to do so, we strongly recommend to download [WebStorm IDE](https://www.jetbrains.com/webstorm/download), and run `main_local.html` as a JavaScript Debug application (use [this instruction](https://www.jetbrains.com/help/webstorm/running-applications.html) for reference).

1. Start selenium standalone server.

    Open a directory which contains LabelThem system source code in a terminal (command shell on Windows), and execute the following command `java -jar -Dwebdriver.chrome.driver=./chromedriver selenium-server-standalone-3.4.0.jar` (on unix-based operating systems, e.g. Linux Mint or Mac OS)

    If you are using windows operating system, execute `java -jar -Dwebdriver.chrome.driver=./chromedriver.exe selenium-server-standalone-3.4.0.jar` instead.

    **NOTE**: In the example above it is assumed that chromedriver (or chromedriver.exe on Windows OS) file is located in the root directory of the project.
If it is not the case, change -Dwebdriver.chrome.driver=./chromedriver to -Dwebdriver.chrome.driver=”location of chromedriver on your machine”.

2. Execute the test runner. 

    In order to do so, execute: `./node_modules/.bin/wdio wdio.conf.js`

    **NOTE:** If you encounter the notification similar to the “Page 'http://localhost:63342/...' requested without authorization, you can copy URL and open it in browser to trust it.” in IDE by JetBrains, e.g. WebStorm or IntelliJIdea, do the following.
In your IDE go to File -> Settings -> Build, execution, development -> Debugger, and check on “Allow unsigned request”.