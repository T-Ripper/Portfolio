import Herbs from '../assets/Herbs.png'
import Yout from '../assets/Yout.png';
import Robo from '../assets/Robo.png';


export const ProjectList = [
    {
        name: 'Ecommerce app',
        image: Herbs,
        Taughts: `This is the first web app I deployed and took me a while to get hang
        of using redux . It was also my first time using Mondo DB on my own ; with a few knowledge
        I was able to make a databse out of mongoDb. The Product name and pictures are all stored in the database. 
        I also use node and express framework. My front-end design was mostly Bootstrap.
        I cant take all the credit though , thank God to all youtube classes on bootsrap and
        also codecademy . It has a functioning input form where you can login and logout.
        I can also login as admin and be able to edit my products and also see the users
        that has placed an order. There is also a payment method (PAYSTACK)  `,
        skills: 'React, Bootsrap, expressJs, node,Redux, MongoDB',
        github: 'https://github.com/T-Ripper/herbs-frontend'
    },
    {
        name: 'videos app',
        image: Yout,
        Taughts: `I made this app using the youtube API , All I use throughout this app
        was fuctional component. I wanted to know how good I am in working with hooks and state.
         `, 
        skills: 'React(hooks) ',
        github: 'https://github.com/T-Ripper/videos-hook'
    },
    {
        name: 'Robo app',
        image: Robo,
        Taughts: `This is my first react-app , I didnt deploy this app until recently when I created my portfolio app
        I used the Json api to get the names and also used a class component here`,
        skills: 'React ',
        github: 'https://github.com/T-Ripper/Robotics'
    }
]