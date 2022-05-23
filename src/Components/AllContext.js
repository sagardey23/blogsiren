import React, { useState, createContext } from 'react'


export const AllContext = createContext();
export const DataProvider = (props) => {
    const [data, setData] = useState([
        {
            Id:"1",
            Category: "bollywood",
            Name: "83",
            Date:"24 Dec, 2021",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16397_83_cover.jpg",
            About:"The story of India's incredible cricket World Cup victory in 1983."
        },
        {
            Id:"2",
            Category: "bollywood",
            Name: "Bob Biswas",
            Date:"03 Dec, 2021",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16660_bob-biswas_cover.jpg",
            About:"Bob Biswas, an insurance agent, is released from hospital after eight years in a coma and is welcomed by his wife Mary and son Benny."
        },
        {
            Id:"3",
            Category: "bollywood",
            Name: "Chehre",
            Date:"27 Aug, 2021 ",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16587_chehre_cover.jpg",
            About:"An 80-year-old man with a penchant for real life games in a story about rights and wrongs. It's a story about the decisions one makes in their lifetime and the fact that every decision has its repercussions, hearing and judgment."
        },
        {
            Id:"4",
            Category: "bollywood",
            Name: "Dhamaka",
            Date:"19 Nov, 2021",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16728_dhamaka_cover.jpg",
            About:"When a cynical ex-TV news anchor gets an alarming call on his radio show, he sees a chance for a career comeback — but it may cost him his conscience."
        },
        {
            Id:"5",
            Category: "bollywood",
            Name: "Mimi",
            Date:"26 Jul, 2021",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16634_mimi_cover.jpg",
            About:"Mimi is introduced by Bhanu to an American couple as a surrogate in exchange for Rs 2 million. She decides to have the baby even when they change their mind and tells her parent that Bhanu is the father."
        },
        {
            Id:"6",
            Category: "bollywood",
            Name: "Mumbai Saga",
            Date:"19 Mar, 2021 ",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/15903_mumbai-saga_cover.jpg",
            About:"The plot of the movie is set in the era of the 80s and 90s which were marked as a transformed period of Mumbai."
        },
        {
            Id:"7",
            Category: "bollywood",
            Name: "Pagglait",
            Date:"26 Mar, 2021 ",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16659_pagglait_cover.jpg",
            About:"Widowed soon after marriage, a young woman grapples with an inability to grieve, quirky relatives and a startling discovery about her late husband."
        },
        {
            Id:"8",
            Category: "bollywood",
            Name: "Saina",
            Date:"26 Mar, 2021",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16320_saina_cover.jpg",
            About:"The story of Saina Nehwal, a professional badminton player who ranked number 1 in the sport."
        },
        {
            Id:"9",
            Category: "bollywood",
            Name: "Sardar Udham",
            Date:"16 Oct, 2021",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16391_sardar-udham_cover.jpg",
            About:"A biopic detailing the 2 decades that Punjabi Sikh revolutionary Udham Singh spent planning the assassination of the man responsible for the Jallianwala Bagh massacre."
        },
        {
            Id:"10",
            Category: "bollywood",
            Name: "The Big Bull",
            Date:"08 Apr, 2021",
            Img:"https://cdn.bollywoodmdb.com/cover/152x202/16642_the-big-bull_cover.jpg",
            About:"The story of the film is based on real events of financial market that took place between 1990 and 2000 involving Harshad Mehta and his financial crimes."
        },
        {
            Id:"11",
            Category: "technology",
            Name: "Virtual Reality and Augmented Reality",
            Date:"24 Dec, 2021",
            Img:"https://cdn.vectorstock.com/i/1000x1000/22/80/augmented-reality-isometric-virtual-reality-vector-23982280.webp",
            About:"Virtual Reality (VR) and Augmented Reality (AR), and Extended Reality (ER). VR immerses the user in an environment while AR enhances their environment. Although this technology trend has primarily been used for gaming thus far, it has also been used for training, as with VirtualShip, a simulation software used to train U.S. Navy, Army and Coast Guard ship captains."
        },
        {
            Id:"12",
            Category: "technology",
            Name: "Quantum Computing",
            Date:"03 Dec, 2021",
            Img:"https://www.eweek.com/wp-content/uploads/2020/10/Quantum.Computingcp.jpg",
            About:"Next remarkable technology trend is quantum computing, which is a form of computing that takes advantage of quantum phenomena like superposition and quantum entanglement. This amazing technology trend is also involved in preventing the spread of the coronavirus, and to develop potential vaccines, thanks to its ability to easily query, monitor, analyze and act on data, regardless of the source."
        },
        {
            Id:"13",
            Category: "technology",
            Name: "Edge Computing",
            Date:"27 Aug, 2021 ",
            Img:"https://www.i-scoop.eu/wp-content/uploads/2019/12/Edge-computing.jpg.webp",
            About:"Formerly a new technology trend to watch, cloud computing has become mainstream, with major players AWS (Amazon Web Services), Microsoft Azure and Google Cloud Platform dominating the market. The adoption of cloud computing is still growing, as more and more businesses migrate to a cloud solution. But it’s no longer the emerging technology trend. Edge is."
        },
        {
            Id:"14",
            Category: "technology",
            Name: "Robotic Process Automation (RPA)",
            Date:"19 Nov, 2021",
            Img:"https://itchronicles.com/wp-content/uploads/2019/10/bigstock-Rpa-Robotic-Process-Automation-300641923-1024x656.jpg.webp",
            About:"Robotic Process Automation, or RPA, is another technology that is automating jobs. RPA is the use of software to automate business processes such as interpreting applications, processing transactions, dealing with data, and even replying to emails. RPA automates repetitive tasks that people used to do."
        },
        {
            Id:"15",
            Category: "technology",
            Name: "Artificial Intelligence and Machine Learning",
            Date:"26 Jul, 2021",
            Img:"https://hackr.io/blog/ai-vs-machine-learning/thumbnail/large?ezimgfmt=rs:754x377/rscb1/ng:webp/ngcb1",
            About:"Artificial Intelligence, or AI, has already received a lot of buzz in the past decade, but it continues to be one of the new technology trends because of its notable effects on how we live, work and play are only in the early stages"
        },
        {
            Id:"16",
            Category: "technology",
            Name: "Blockchain",
            Date:"19 Mar, 2021 ",
            Img:"https://gorillalogic.com/wp-content/uploads/2017/12/Blockchain-Technology.jpg",
            About:"Although most people think of blockchain technology in relation to cryptocurrencies such as Bitcoin, blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you’re making a chain of data."
        },
        {
            Id:"17",
            Category: "technology",
            Name: "Internet of Things (IoT)",
            Date:"26 Mar, 2021 ",
            Img:"https://imageio.forbes.com/specials-images/imageserve/61b6d5fd475a71fdc7dda795/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2022/960x0.jpg?fit=bounds&format=jpg&width=960",
            About:"Another promising new technology trend is IoT. Many “things” are now being built with WiFi connectivity, meaning they can be connected to the Internet—and to each other. Hence, the Internet of Things, or IoT. The Internet of Things is the future, and has already enabled devices, home appliances, cars and much more to be connected to and exchange data over the Internet."
        },
        {
            Id:"18",
            Category: "technology",
            Name: "5G",
            Date:"26 Mar, 2021",
            Img:"https://newsroom.cisco.com/documents/10157/14740/5-things-private-5G_1200x675_hero_051221.png/27af10a8-bef2-4ea6-abf9-53d515232d68?t=1620334907446",
            About:"5G, Where 3G and 4G technologies have enabled us to browse the internet, use data driven services, increased bandwidths for streaming on Spotify or YouTube and so much more, 5G services are expected to revolutionize our lives. by enabling services that rely on advanced technologies like AR and VR, alongside cloud based gaming services like Google Stadia, NVidia GeForce Now and much more. It is expected to be used in factories, HD cameras that help improve safety and traffic management, smart grid control and smart retail too."
        },
        {
            Id:"19",
            Category: "technology",
            Name: "Cyber Security",
            Date:"16 Oct, 2021",
            Img:"https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security-620x400.jpg",
            About:"Cyber security might not seem like an emerging technology, given that it has been around for a while, but it is evolving just as other technologies are. That’s in part because threats are constantly new. The malevolent hackers who are trying to illegally access data are not going to give up any time soon, and they will continue to find ways to get through even the toughest security measures. It’s also in part because new technology is being adapted to enhance security. As long as we have hackers, cybersecurity will remain a trending technology because it will constantly evolve to defend against those hackers."
        },
        {
            Id:"20",
            Category: "technology",
            Name: "Full Stack Development.",
            Date:"08 Apr, 2021",
            Img:"https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer-1024x576.jpg",
            About:"A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)"
        },
        {
            Id:"21",
            Category: "hollywood",
            Name: "Beauty and the Beast",
            Date:"24 Dec, 2021",
            Img:"https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_UY209_CR0,0,140,209_AL_.jpg",
            About:"A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner."
        },
        {
            Id:"22",
            Category: "hollywood",
            Name: "Logan",
            Date:"03 Dec, 2021",
            Img:"https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg",
            About:"In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety."
        },
        {
            Id:"23",
            Category: "hollywood",
            Name: "X-Men: Apocalypse",
            Date:"27 Aug, 2021 ",
            Img:"https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_UY209_CR0,0,140,209_AL_.jpg",
            About:"In the 1980s the X-Men must defeat an ancient all-powerful mutant, En Sabah Nur, who intends to thrive through bringing destruction to the world."
        },
        {
            Id:"24",
            Category: "hollywood",
            Name: "Deadpool",
            Date:"19 Nov, 2021",
            Img:"https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
            About:"A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."
        },
        {
            Id:"25",
            Category: "hollywood",
            Name: "Man of Steel",
            Date:"26 Jul, 2021",
            Img:"https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
            About:"An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth."
        },
        {
            Id:"26",
            Category: "hollywood",
            Name: "Batman v Superman: Dawn of Justice",
            Date:"19 Mar, 2021 ",
            Img:"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg",
            About:"Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs."
        },
        {
            Id:"27",
            Category: "hollywood",
            Name: "Slumdog Millionaire",
            Date:"26 Mar, 2021 ",
            Img:"https://m.media-amazon.com/images/M/MV5BZmNjZWI3NzktYWI1Mi00OTAyLWJkNTYtMzUwYTFlZDA0Y2UwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg",
            About:"A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of Who Wants to be a Millionaire"
        },
        {
            Id:"28",
            Category: "hollywood",
            Name: "Avatar",
            Date:"26 Mar, 2021",
            Img:"https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
            About:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
        },
        {
            Id:"29",
            Category: "hollywood",
            Name: "The Dark Knight",
            Date:"16 Oct, 2021",
            Img:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
            About:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        },
        {
            Id:"30",
            Category: "hollywood",
            Name: "Captain America: Civil War",
            Date:"08 Apr, 2021",
            Img:"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UY209_CR0,0,140,209_AL_.jpg",
            About:"Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man."
        },
        {
            Id:"31",
            Category: "fitness",
            Name: "Black Light Yoga",
            Date:"24 Dec, 2021",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/1-yogapose-g-fizkes-1000.jpg?VersionId=C.gPh6PlCasRASeseDyRWooUg4N_0R_z",
            About:"Whether you’re a yoga junkie or you’re just looking to try something new, black light yoga is sure to be a good time. It’s exactly what it sounds like: yoga done under the glow of a black light. Often, the classes are accompanied by upbeat music and made to mimic a dance sequence so you feel like you’re in a nightclub rather than a yoga studio. Until the end, of course, when things are taken down a notch for you to zone out and reconnect. Don’t forget to wear white or neon colors!"
        },
        {
            Id:"32",
            Category: "fitness",
            Name: "Strength Training",
            Date:"03 Dec, 2021",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/2-kettle-g-takoburito-1000.jpg?VersionId=Dr94pUoyWeAZQLauyEYjSa6T_cdJZ7m9",
            About:"A system of physical conditioning in which muscles are exercised by being worked against an opposing force (as by lifting weights) to increase strength While everyone loses some muscle mass with age, a condition known as sarcopenia, it's possible to slow or even reverse that loss with regular strength training. "
        },
        {
            Id:"33",
            Category: "fitness",
            Name: "Zumba",
            Date:"27 Aug, 2021 ",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/3-zumba-g-luckybusiness-1000.jpg?VersionId=c0UEw6_DgdePBUlUhwdTHQGF21gRZJ.N",
            About:"Zumba is a fitness program that involves cardio and Latin-inspired dance. It was founded by Colombian dancer and choreographer Beto Pérez in 2001, and by 2012, it called itself the largest international branded fitness program in the world. Zumba is a trademark owned by Zumba Fitness."
        },
        {
            Id:"34",
            Category: "fitness",
            Name: "Dance",
            Date:"19 Nov, 2021",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/4-dance-g-kate_sept2004-1000.jpg?VersionId=293D6XYVn9MYZNQqiM3HOnRcOGC1sX.g",
            About:"Zumba and Bokwa aren’t the only types of dance fitness you can try out this year. Just because something isn’t a “fitness class” per se doesn’t mean it isn’t a workout! Try taking a class in dance, whether it’s ballet or salsa or something else entirely."
        },
        {
            Id:"35",
            Category: "fitness",
            Name: "Indoor Cycling",
            Date:"26 Jul, 2021",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/5-cycling-g-bojan89-1000.jpg?VersionId=x.CKY4iFTX7LB4ecpIvBNT__qGSrtlGe",
            About:"Indoor cycling classes help you shed fat, improve your heart health, and boost your muscle endurance. Your legs will get a serious workout. By the end of class, you'll have a steady stream of feel-good brain chemicals called endorphins. Many gyms offer indoor cycling classes."
        },
        {
            Id:"36",
            Category: "fitness",
            Name: "CrossFit",
            Date:"19 Mar, 2021 ",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/8-tire-g-jun-1000.jpg?VersionId=wMxJaQmBUygz91RPxAleenJOWi4ZKyV3",
            About:"A form of high intensity interval training, CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level. These movements are actions that you perform in your day-to-day life, like squatting, pulling, pushing etc."
        },
        {
            Id:"37",
            Category: "fitness",
            Name: "Aerobics",
            Date:"26 Mar, 2021 ",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/6-aerobics-g-jacoblund-1000.jpg?VersionId=N4cLScPOHMVvsbJdt8untMIc9zMy65P2",
            About:"Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness)"
        },
        {
            Id:"38",
            Category: "fitness",
            Name: "Cardio Machines",
            Date:"26 Mar, 2021",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/7-cardio-g-milkos-1000.jpg?VersionId=TQq3yDF605TYAlJkN6R7CsiA3XARk4hO",
            About:"If you’re someone who would rather work out at home, you don’t have to miss out on all the benefits of having a fitness instructor teaching you what to do. Gadgets such as Mirror and bikes by Peloton can bring boutique-style workout classes to your living room. The Mirror is essentially a mirror you hang on the wall that streams a video of an instructor in the reflection. Peloton bikes offer group spin classes streamed to a single bike you keep at home."
        },
        {
            Id:"39",
            Category: "fitness",
            Name: "Kickboxing",
            Date:"16 Oct, 2021",
            Img:"https://qtxasset.com/cdn-cgi/image/w=775,h=435,f=auto,fit=contain,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/files/10-kickbox-g-antoniodiaz-1000.jpg?VersionId=VVqmANu.vQzK9kzmLg3ffSiiNXw9NusX",
            About:"Kickboxing is the perfect in-between for people who think boxing sounds awesome but who don’t want to actually hit anyone in the face. Oh, and it’s also a ton of cardio. But with all the fun you’re having jumping around and learning kicking and punching combinations, you won’t even notice you’re working that hard!"
        },
        {
            Id:"40",
            Category: "fitness",
            Name: "Aerial Fitness ",
            Date:"08 Apr, 2021",
            Img:"https://thumbor.thedailymeal.com/91Cf0tZIZkfLj98GfJQ5mik6jcM=/870x565/filters:format(webp)/https://www.theactivetimes.com/sites/default/files/slideshows/104916/107393/10_Aerial_fitnes_Shutterstock_edit_0.jpg",
            About:"Aerial yoga, aerial hoop, and other similar types of classes involve doing strength-based exercises on a 30-foot ribbon hung from the ceiling. You may not be moving quickly, but this workout will build tons of core and arm strength as you hold yourself up into the air. Don’t let this class intimidate you — every studio offers beginner classes, and you don’t have to be super fit to try one out!"
        },
        {
            Id:"41",
            Category: "food",
            Name: "Masala dosa",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316518/iStock-502019013-552x310-cc.jpg",
            About:"Arguably South India’s most renowned culinary export, masala dosas are famous the world over. A sort of Indian pancake, dosas are made from a thin batter consisting of rice, flour and lentils. Making dosas is no easy task, with the batter mixture having to soak in water for at least 24 hours before it can be shaped. Once ready, the batter is ladled onto a hot tava (griddle pan) and shaped in a similar way to how the French would shape a crepe."
        },
        {
            Id:"42",
            Category: "food",
            Name: "Chaat",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/249711/Delhi-street-food-2-552x310-cc.jpg",
            About:"Synonymous with Delhi street food vendors, chaat is one of India’s most delicious savoury snacks. The name derives from three Hindi words meaning ‘a delicacy,’ ‘licking one’s fingers’ and ‘to devour with relish’ and this dish truly does live up to its heritage."
        },{
            Id:"43",
            Category: "food",
            Name: "Dal makhani",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316520/iStock-530506394-552x310-cc.jpg",
            About:"Most foodies will have heard of or tasted dal, but there’s nothing quite like tasting the original dish in the country where it originated from. Dal is the Hindi word for lentils, and this soup-like delicacy is made by stewing small black lentils for hours on end. Whilst there are  many different varieties of this lentil dish, dal makhani is in a league of its own."
        },{
            Id:"44",
            Category: "food",
            Name: "Vada pav",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316521/iStock-1157170530-552x310-cc.jpg",
            About:"Originating in the traditionally vegetarian state of Maharashtra, vada pav is as close as Indian cuisine gets to veggie burgers. One for carb lovers, vada pav consists of a deep fried potato dumpling placed neatly inside a small bun. "
        },{
            Id:"45",
            Category: "food",
            Name: " Stuffed paratha",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316522/iStock-1084019098-552x310-cc.jpg",
            About:"Punjab’s foodie heritage doesn’t stop at dal makhani. Often eaten at the start of the day, stuffed parathas are seen as the breakfast of champions in northern India. The word paratha derives from the Sanskrit word atta meaning ‘layers of cooked dough,’ and this dish lives up to its moniker."
        },{
            Id:"46",
            Category: "food",
            Name: "Dhokla",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316523/iStock-887144836-552x310-cc.jpg",
            About:"Hailed as the regional dish of northwest India, the Gujarati delicacy dhokla is a savoury vegetarian snack made of rice and split chickpeas. It’s tastier than it sounds – Gujaratis eat it for breakfast or lunch, and sometimes even as a snack or side dish."
        },{
            Id:"47",
            Category: "food",
            Name: "Barfi",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316524/iStock-1156874847-552x310-cc.jpg",
            About:"We’ve cheated a little bit here, as the term barfi can be used to describe any number of Indian sweets. The most traditional type though is milk barfi. Predictably, these milk-based sweets are made from milk powder, condensed milk, ghee and cardamom powder."
        },{
            Id:"48",
            Category: "food",
            Name: "Pani puri",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316525/iStock-1177589252-552x310-cc.jpg",
            About:"Pani puri, or gol guppa,  are thought to originate from the northern state of Bihar. A perfect streetside snack, pani puri are hollow deep fried balls made of semolina or wheat. They’re served alongside spicy potatoes, chickpeas and a spicy tamarind water."
        },{
            Id:"49",
            Category: "food",
            Name: "Idli",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316526/iStock-1024549286-552x310-cc.jpg",
            About:"Popular across South India, idli are often thought of as the breakfast versions of dosa. Eaten at the start of the day, idli are a type of light savoury rice cake. Made by steaming a batter consisting of fermented black lentils and rice, these rice cakes are dangerously easy to eat. "
        },{
            Id:"50",
            Category: "food",
            Name: "Masala chai",
            Date:"16 Oct, 2021",
            Img:"https://www.jacadatravel.com/wp-content/uploads/fly-images/316527/iStock-1142857499-552x310-cc.jpg",
            About:"India’s most famous export, masala chai can be found being sold by everywhere from high end restaurants to chaiwallas at train stations. While there’s many different diluted versions of this classic Indian tea around the globe, the real deal can only be found in India."
        },

    ])
    return (
        <AllContext.Provider value= { [data,setData] }>
            {props.children}
        </AllContext.Provider>

    )
}

