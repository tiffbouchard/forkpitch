## FORKPITCH

A MEN-stack CRUD application created for Project 2 of General Assembly's Software Engineering Immersive Program

### About
Forkpitch is a platform for your inner critic. We all know that feeling when we come across a "critic" review that we completely disagree with. If you know Pitchfork, you know they are notorious for unnecessarily pretentious and sometimes condescending reviews embodying a sense of "forced criticism". Emily Knepple from [the Daily Cardinal](https://www.dailycardinal.com/article/2020/02/pitchforks-pretentious-problem) says it best, stating that "...most writers talk as if there’s something the reader doesn’t know or maybe wants to but just doesn’t have the artistic intellect that all of their staff somehow embody to do so." 

Who knew that Drake's early career could be described as having ["indelible pop hooks and bleeding-heart lyricism"](https://pitchfork.com/artists/27950-drake/), or that he 

["...sounds comfortable softening his consonants alongside SoundCloud emissary Carti".](https://pitchfork.com/reviews/albums/drake-dark-lane-demo-tapes/). One more, I promise. A review of Lil Yachty's Lil Boat 2 that can be found [here](https://pitchfork.com/reviews/albums/lil-yachty-lil-boat-2/) says "In his quest to conquer the whole yung demo, he discovered teens are fickle and manifold, creatures of varying interests prone to unpredictable changes of heart." and "After being heralded as the harbinger of a new era in rap, the metrics didn’t bear out his impact." What's a harbinger? Maybe we really don't have that same artistic intellect, but I think sometimes you just have to say its a bop. 

Despite all this, I must admit I am a fan of the site and that it is a great resource to find new music, and yes, sometimes there are reviews I agree with. So, regardless of where you stand, you can now be the critic.

This app uses [this](https://github.com/omardelarosa/pitchfork-npm) third-party API that scrapes Pitchfork review data and lets you to leave your opinions on album reviews and what you think the album rating should be. The app will expand it's functionality to include additional features outlined in the Next Steps section.

### Technologies Used
- HTML/CSS
- Javascript 
- MongoDB/Mongoose + MongoDB Atlas
- Materialize 
- Express
- Node.js 

### Screenshots

<img src="/images/screenshot1.png" alt="screenshot1" width="500"/>
<img src="/images/screenshot2.png" alt="screenshot2" width="500"/>

### Wireframes 

### ERDs

### Getting Started 
Get reviewing [here](https://forkpitch.herokuapp.com)!

### Next Steps 
A full collection of iceboxed user stories can be found on my [Trello](https://trello.com/b/lpGplWHP/sei-project-2) along with user stories that are already implemented
- Complete the following features/user stories that are available on the app but not completed...
    - AAU I want to be able to add reviews to My Reviews page through an ADD button, this page allows for users to track album reviews they have commented and/or ones they would like to track
        - Add button is available but does not work
- Implement the following user stories...
    - AAU I want to be able to delete a review from My Reviews page
    - AAU I want to be able to like/dislike a critic review or user review, when the buttons are clicked again they decrease the amount of likes/dislikes
    - AAU/AAV I want to be able to view the amount of like/dislikes 
    - AAU I want to be able to reply to other user reviews
    - AAU/AAV I want to see an average user review 
- Improve CSS on show pages and front page
- Make the app more responsive especially for mobile users by implementing the following...
    - The sizing of cards on the front page become squished on smaller screens 
    - The navigation bar is not accessible from a mobile device, make it accessible through a drop-down menu
    - The search bar is not user friendly on a mobile device, make it size up on smaller screens for better UX