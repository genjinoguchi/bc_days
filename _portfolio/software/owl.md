---
layout          : content_layout
name            : Owl
sub             : An Android app that automates the process of choosing a designated driver.
category        : software
anchor          : owl
thumbnail       : Owl/main.jpg
landing			: Owl/landing.jpg
timeframe       : Aug 8 2015 - Aug 9 2015
---

Owl is an app that helps ease the process of finding a match between night owl and responsible person that will stay risk-free for the night. It allows the person who is going out to request their friend to be their "designated driver" for the night through the app. The app will then run in the background, and automatically alert the designated driver if their friend is in any dangerous conditions.

<img src="/res/img/src/Owl/owl-splash.jpg" alt="Owl's welcome page." />
<img src="/res/img/src/Owl/owl-info.jpg" alt="Owl's info page." />

## How does it work?
The foundation of Owl is based on two key roles: the OWL and the WATCH.

<img src="/res/img/src/Owl/who-are-you.jpg" alt="owl vs watch" />

The Owl is your night owl-- the one who goes out and does risky behavior.
The Watch is your responsible person, who's watching the owl.

On the Owl side of the app, all they need to do is press one button, and stick the phone in their pocket. The phone will immediately begin tracking two key sources of data: GPS/location data, and the person's gait/pedometer data.

<img src="/res/img/src/Owl/pedometer-condition.jpg" alt="Owl screen" />

In order to track and analyze a person's gait, we measured the consistency of the amount of time between the person's steps. In other words, a steady change in gait doesn't indicate that anything is wrong with the person. But if that amount of time is rapidly fluctuating, then the person is most likely not in the best condition, and the Watch should know about it. (More detailed description of the algorithm can be found [here](http://www.brianch.uk/projects/owl.html)).

<img src="/res/img/src/Owl/pedometer-test.jpg" alt="raw pedometer data" />

For location data, we simply streamed location data to the Watch. The app also calculates speed data to determine if the person is in a vehicle or not.


##Links:

* You can find the code [here](https://github.com/owl-nyc)
* Technology Used
    * Android Development
    * NodeJS
    * The Google Maps API
    * Adobe Photoshop
* Collaborators on this project:
	* [Genji Noguchi]("http://genjinoguchi.com")
	* [Brian Chuk]("http://brianch.uk")
    * [Brennan King]("http://brennanhking.github.io/")
    * [Victor Jiao]("http://vjiaoblack.github.io/")
