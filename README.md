# What is this Project ?
Hello, this project is a Scoreboard Application written by React. I wrote this project to apply what I learnt from React lessons, I can say that this is my first project with React, so it is a very simple and easy project.

# What Can You Do ?
You can use just count boards or save them as a mini boards but you should give a title to them. If you don't, you can't save them. When you save a board, you can see it on right side also they are going to save in a simple api server.


# How It's Working ?
When you save your board,they gonna save to in a simple api server thanks to post method at axios.Then,when we refresh the page,an UseEffect is gonna work and send a request to api.It's gonna pull all off boards and render as a mini board to our page.If you don't have any saved board.You will get a error like "There is not a saved board.".

# Get Started 

`npm install axios`

`npm install -g json-server`

`npx json-server --watch db.json`

# Photos of Project

![ScoreBoardPage](https://github.com/ertugakmann/ScoreBoardWithReact/assets/134059022/e44654dc-d739-4a9f-a3ac-c4322ec14ef9)

![SavedBoards](https://github.com/ertugakmann/ScoreBoardWithReact/assets/134059022/d22263dc-6bb8-403e-99d4-d34e07f74fe4)
