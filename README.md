# RUNS + MUSIC (Aka, Moove & Groove)

### The purpose of my webapp is to allow users to input a run they did, and the original intent was that once that run was entered they could then enter music they listend to on the run. However, as the app development evolved the music component became slightly more ancillary. One pivot that resulted was the inclusion of the user being able to add comments to a run. In the end I had to remind myself to keep things small and focused on the MVP – feature creep can doom a project, but in the next steps section I'll address items I'll add later, or would have attempted given more time. 


### The idea for this webapp came about due to the fact I enjoy running and listening to music on my runs. In fact, I have a spreadsheet with every run I've done since July 11, 2006. When I did GA's Product Management Immersive in early 2015 I envision creating a webapp like this someday, and eight years later it's coming to pass. 

## SCREEN SHOTS:
- LANDING PAGE:
![Image-2](https://i.imgur.com/8gHUAsI.png)
- On this page you can see runs a user has entered. You can delete any of them, or add a new one. You can click into the details of a run, or in the header click over into the music entry section: 
![Image-3](https://i.imgur.com/qfCmJOm.png)
- This is the detail page of a run. You can see the title of the run, the distance, the duration, and the location. You can click to edit the run. You can also view any comments on the run which you can delete, and if there aren't any add one. This also displays the user who enterd the comment. Runs have a one to many relationship with comments. 
![Image-4](https://i.imgur.com/mURooyj.png)
- Here's the music page. You can view music by song title and either click to add, delete music, or go into music detail page. 
![Image-5](https://i.imgur.com/L7OXySU.png)
- This shows the edit view of a run page - any of the fields can be edited, or just left blank. It's worth noting that the music edit page is similar to this too. 
![Image-6](https://i.imgur.com/Tpc2dyp.png)

## TECHNOLOGIES USED
- 

## GETTING STARTED
- Deployed App: https://moveandgroove.fly.dev/
- Trello Board Used for Planning: https://trello.com/b/LBHRiZr3/project-2-sei-alex-christion

## NEXT STEPS

### The immediate next steps would be to make music render as a sub-element of runs (a one to many relationship). The screenshots from my original wires below shows the idea. 

### Other ideas would include more fields for both runs and music. Fields for runs would include pace, weather, maps, etc. Fields for music would includ year recorded, more artist info, artwork for music covers, and ability to hear music within the app. Within these features there is a lot of opportunity to leverage third party APIs related to music, health, weather, maps, etc. Additionally users would be able to create profiles. 

### A social-interactive concept would also be desireable, so that users can interact with each others' profiles and thus make this a social media application. 

Below three images show immediate next steps (the first and second images I feel were met in the current app, and the third is the music rendering in the run page which I'm pretty close to getting, but it was that, or neglecting any CSS)

the new run is rendered: 

![Image-2](https://i.imgur.com/BNAU1wi.png)

form to add new music as sub-element of a run: 

![Image-3](https://i.imgur.com/Tn3fOP5.png)

run image rendered w/ music included

![Image-4](https://i.imgur.com/zGEWhl8.png)

full link to Balsamic wires: https://balsamiq.cloud/sjh802t/ppd0jux/r03D8

#### Preliminary ERD: 

![Image-ERD](https://i.imgur.com/C5r4JSK.png)