Modified Medium-Hackd

This is a slightly modified repo of the original repo - https://github.com/MahirJhaveri/medium-hackd

The chrome extension - https://radiant-brushlands-42787.herokuapp.com/ collects IP address and other relevant data to perform analytics on the users or may be sell that data to companies. Hence, in order to avoid that I removed the scripts where the data is sent to storage engines.

To Run this application:
1. Clone this repository
    `git clone https://github.com/Better-Boy/medium-hackd`
1. Go to more tools using the hamburger button on chrome
1. Go into extensions and turn on developer mode
1. On the upper left click on load unpacked and select the folder extension
1. Once loaded you will see the extension on the page
1. Go to the `app` directory
1. Run `pip install requirements.txt`
1. Run `nohup nohup python server.py &`
1. Go to any medium article where it asks for subscription
1. Click on the Extension
1. The article gets unlocked!!!