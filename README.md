# Forkpitch
![Heroku](https://heroku-badges.herokuapp.com/?app=heroku-badges)

### About
This app uses [this](https://github.com/omardelarosa/pitchfork-npm) third-party API that scrapes Pitchfork review data and lets you to leave your opinions on album reviews.

### Technologies Used
- HTML/CSS
- Javascript 
- MongoDB/Mongoose + MongoDB Atlas
- Materialize 
- Express
- Node.js 

### Planning 
- [ERD](https://app.lucidchart.com/invitations/accept/5fe59195-d0dc-4c47-ad9e-7113447107e2)
- [Wireframes](https://app.lucidchart.com/invitations/accept/25437d16-60c9-4020-8c07-5bdbb8fc879a)

### Screenshots
<img src="/imgs/onescreenshot.png"/>
<img src="/imgs/twoscreenshot.png"/>
<img src="/imgs/threescreenshot.png"/>

### Getting Started 
Launch demo [here](https://forkpitch.herokuapp.com)

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
- Improve CSS on show pavges and front page
    - The comments are very unstructured and the button positioning is not the best
    - ~~Implement some CSS grids/flexbox to create better layouts~~ (September 25 2020)
- Make search better by implementing sort functionality, right now the search returns results randomly and in no specific order, sometimes the least relevant result will be returned first which does not make sense if a user has entered a very specific search
- ~~View top reviews on the home page so it's not so empty~~ (September 25 2020)
- Make the app more responsive especially for mobile users by implementing the following...
    - ~~The sizing of cards on the front page become squished on smaller screens~~ (September 25 2020)
    - The navigation bar is not accessible from a mobile device, make it accessible through a drop-down menu
    - The search bar is not user friendly on a mobile device, make it size up on smaller screens for better UX
- Minor tweaks
    - Make the date on comments in the form, minutes/hours ago
