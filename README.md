## BITOVI TAKE HOME EXERCISE

<p>
The point of this presentation is to demonstrate why a bug is occurring in the current
"Happy Birthday" application, and to demonstrate two proposed solutions.
<br>Let's start by describing the problem.
</p>

### ISSUE

__*Behavior*__: When a User attempts to add an additional person to the application, 
only the most recent person is sent to the Server for persistence.
<br><br>
__*Root Cause Analysis*__: When the Client completed a new feature that prompts the User to add
an additional person to the application, it only persisted the most recent person added by the application. 
No existing behavior was regressed by this change, but the desired outcome of sending 
multiple people to the application server was not achieved.
<br><br>
__*Error*__: The source of this error is that the application's assumption that only one person's data should 
be persisted to the server was never corrected. New User information, rather than being enqueued for server persistence,
simply overwrote previous data that the User gave to the Client application.
<br><br>__*Solution*__: There are two proposed solutions here:
* Refactor the client-side class that holds the in-memory data before it is sent to the Server to be able to
manage data for multiple people.
* Refactor the application so that it simply sends the client-side in memory data to the Server in the background
before it prompts the user if they'd like to add another person.

 ### DEMONSTRATION
 
 <p>
 This proposal will show the working first version of the application, a reproduction of the current issue, as well as
 the two proposed solutions via a bare-bones command line application. Follow these instructions to run the application:
</p>

1. Download this repo locally.
2. Navigate your command prompt to the local repo.
3. Run `npm install`

##### V1
<p>
To run the demonstration of the first version of the application, run `npm run v1` in the command line.
</p>


##### Error Reproduction
<p>
To run the demonstration of the current bug in the application, run `npm run v2` in the command line.
</p>

##### Batched Solution
<p>
To run the batched persistence proposed solution, run `npm run v3` in the command line.
</p>

##### Serialized Solution
<p>
To run the serialized persistence proposed solution, run `npm run v4` in the command line.
</p>

### RECOMMENDATION
<p>
Each of the proposed solutions has its strengths, and the right solution should be chosen based on client needs.
</p>

* _The batched solution_ will succeed or fail all at once, meaning the User has no chance of receiving confusing mixed results.
It also means the front-end will require minimal refactoring to be able to handle potential errors that may interrupt the 
process of adding an additional user. However, any interruption to the user process will result in all their data being lost.
Further, one large batched process is slower than background, serialized processes.
* _The serialized solution_ is a faster user experience, and requires less refactoring for the back-end team; however, it still
requires some front-end work to handle errors for additional users. Each user entry will succeed/fail on its own merit,
so there is no risk of valid data being lost because of invalid data. However, the Client may not want some information to be saved
while other information is not, as it is potentially confusing to the User.

##### My Opinion
<p>
I personally recommend the serialized solution. While it may require some work for the front-end code to integrate, 
the advantages of higher data integrity and faster processing make it very hard to choose against.
</p>
