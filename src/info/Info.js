import self from "../img/self.png"
import mock1 from "../img/game.png"
import mock2 from "../img/rdbms.png"
import mock3 from "../img/vip.png"
import mock4 from "../img/cv.png"
import mock6 from "../img/hongs.png"

export let colors = ["rgb(86, 201, 44)", "rgb(227, 230, 183)"];

export const info = {
    firstName: "Jihong",
    lastName: "Park",
    initials: "JP", 
    position: "a student",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: 'β',
            text: 'likes coffee'
        },
        {
            emoji: "πΆ",
            text: "loves dog"
        },
        {
            emoji: 'πΊπΈ',
            text: 'based in Atlanta, Georgia'
        },
        {
            emoji: "π§βπ",
            text: "Student at Georgia Tech"
        },
        {
            emoji: "π§",
            text: "jihong2253@gmail.com / jpark3027@gatech.edu"
        },
    ],
    socials: [

        {
            link: "https://instagram.com/parkzhong",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/eliotte0106",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jihong-park-102673224/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Hello! I'm Jihong. I'm a cs student at Georgia Tech. I'm interested in software engineering including full-stack engineering and data science. I hope to work with you!",
    skills:
        {
            Programming: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html', 'css', 'java', 'python', 'sql', 'tableau'],
            Concepts: ['OOD', 'Data Structure', ,'Software Development', 'Database System', 'Computer Vision', 'Machine Learning']
        }
    ,
    hobbies: [
        {
            label: 'Walking',
            emoji: 'πΆπ»'
        },
        {
            label: 'Netflix',
            emoji: 'π₯'
        },
        {
            label: 'Gaming',
            emoji: 'π»'
        },

    ],
    portfolio: [
        {
            title: "Game App Team Project",
            live: "https://youtu.be/0Z6jgXnfAbk",
            source: "https://github.gatech.edu/Team-108",
            image: mock1
        },
        {
            title: "DBMS Team Project",
            live: "https://github.com/eliotte0106/CS4400",
            source: "https://github.com/eliotte0106/CS4400",
            image: mock2
        },
        {
            title: "Georgia Tech Dashboard Team Project",
            live: "https://irp.gatech.edu/",
            source: "https://github.gatech.edu/Getting-to-know-U",
            image: mock3
        },
        {
            title: "E-commerce Website Individual Project",
            live: "https://github.com/eliotte0106/Hongs/blob/main/README.md",
            source: "https://github.com/eliotte0106/Hongs",
            image: mock6
        },
        {
            title: "Computer Vision Individual Project",
            live: "https://github.com/eliotte0106/Comp-Vision/blob/main/project-1/project-1.ipynb",
            source: "https://github.com/eliotte0106/Comp-Vision",
            image: mock4
        },
    ]
}