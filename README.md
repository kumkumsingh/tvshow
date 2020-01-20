TV Maze Show
INTRO:
Tv maze show web app has Home page, which have list of 8 static shows . Home page contains image of the show and name of the show as the caption of the image . Onclick of either image of the show or the caption of the image , navigates it to that particular show detail page . 
Each show detail page has following data :
1.Title of the show 
2.Image of the show
3.Summary of the show 

Below summary it has the table containing list of episodes which has information about its season , episode number , name of the episode and the air date.
Onclick of each episode name which is inside table , it will navigate it to that particular episode detail page . 
Episode detail page has the following data:
1.Title of the show 
2.Image of the show
3.Summary of the show 

Note:
For some of the episodes , image or summary will not be available on episode detail page because its not there in API its self .

How to set up
Clone this repository with

git clone https://github.com/kumkumsingh/tvshow.git
Cd into the folder you just cloned

cd tvshow

Install dependencies and run the app

npm install
npm run start
