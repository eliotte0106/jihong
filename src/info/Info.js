import self from "../img/self.png"
import mock1 from "../img/game.png"
import mock2 from "../img/rdbms.png"
import mock3 from "../img/vip.png"
import mock4 from "../img/cv.png"
import mock6 from "../img/hongs.png"
import mock7 from "../img/ML.png"
import mock8 from "../img/versus.png"
import mock9 from "../img/safecar.png"

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
        // {
        //     emoji: '💻',
        //     text: 'Software Engineer'
        // },
        // {
        //     emoji: "🐶",
        //     text: "loves dog"
        // },
        // {
        //     emoji: '🇺🇸',
        //     text: 'Based in Atlanta, Georgia'
        // },
        // {
        //     emoji: "🧑‍🎓",
        //     text: "Student at Georgia Tech"
        // },
        {
            emoji: "📧",
            text: "jihong2253@gmail.com / jpark3027@gatech.edu"
        }
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
        // {
        //     link: "https://www.linkedin.com/in/jihong-park-102673224/",
        //     icon: "fa fa-linkedin",
        //     label: 'linkedin'
        // },

    ],
    bio: "Hello! I'm Jihong. I'm a Computer Science student at Georgia Tech. I'm interested in software engineering including full-stack engineering and mobile app development",
    skills:
        {
            Programming: ['javascript', 'java', 'python', 'kotlin', 'C', 'C++', 'typescript'],
            Concepts: ['Object Oriented Programming', 'Data Structure', ,'Software Development','Agile Development', 'Database System Management', 'Computer Vision', 'Machine Learning', 'Problem Solving']
        }
    ,
    hobbies: [
        {
            label: 'Walking',
            emoji: '🚶🏻'
        },
        {
            label: 'Netflix',
            emoji: '🎥'
        },
        {
            label: 'Gaming',
            emoji: '💻'
        },

    ],
    portfolio: [
        {
            title: "Android App Team Project",
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
            title: "Georgia Tech VIP Big Data",
            live: "https://irp.gatech.edu/",
            source: "https://github.gatech.edu/Getting-to-know-U",
            image: mock3
        },
        {
            title: "E-commerce Website Individual Project",
            live: null,
            source: "https://github.com/eliotte0106/Hongs",
            image: mock6
        },
        {
            title: "Computer Vision Individual Project",
            live: "https://github.com/eliotte0106/Comp-Vision/blob/main/project-1/project-1.ipynb",
            source: "https://github.com/eliotte0106/Comp-Vision",
            image: mock4
        },
        {
            title: "Machine Learning Team Project",
            live: "https://github.gatech.edu/pages/jpark3027/ML-Project/",
            source: null,
            image: mock7
        },
        {
            title: "Web Individual Project",
            live: null,
            source: "https://github.com/eliotte0106/Versus",
            image: mock8
        },
        {
            title: "iOS App Individual Project",
            live: "https://www.youtube.com/watch?v=d9Uew2PoKQ0",
            source: "https://github.com/eliotte0106/MAS-iOS",
            image: mock9
        }
    ],
    education: {
        school: "Georgia Institute of Technology",
        term: "Aug 2021 - May 2024",
        type: "Bachelor of Science in Computer Science"
    },
    experience: [
        {
            title: 'Engineer of Production Team',
            company: 'ATL Plastic',
            term: "Dec 2018 - Aug 2020",
            work: [
                    "• Used State-of-the-Art Machinery which allows engineers to turn around orders in quick time frame and reduce the manufacturing cost",
                    "• Created nail, jewelry, souvenir displays as counter-top or floor standing with different size, shapes, and materials to match needs",
                    "• Designed illuminated or Non-Illuminated displays for customers"
                    ]
        },
        {
            title: 'Undergraduate Engineer',
            company: 'Big Data VIP',
            term: "Aug 2022 - Dec 2023",
            work: [
                    "• Collected large volume of data related to information of students, faculty, and staff from GT",
                    "• Created data visualizations including dashboards, and GUIs from possible user stories",
                    "• Used various skills such as Python, Javascript, and Git to use data from GT database/URLs",
                    "• Regularly met with team members/stakeholders to demo the product and assess their needs"
                    ]
        },
        {
            title: 'SWE Intern',
            company: 'Fanduel',
            term: "Jun 2023 - Aug 2023",
            work:[
                "• Contributed to mobile application development (Android) in Daily Fantasy Sportsbook team",
                "• Implemented a new feature “Shadow Contests” for employees to join daily contests internally",
                "• Constructed API endpoints (GraphQL) and modified data to be used in the application",
                "• Created an idea as a hackathon project for a better customer experience from the product",
                "• Regularly met with product/engineering teams to discuss fixing bugs/future plans in products"
                ]
        }
    ]
}