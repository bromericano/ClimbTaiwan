const Information = {
  name: "Welcome to Climb Taiwan!",
  content: "Our goal is to be your one-stop shop for everything outdoor climbing related in Taiwan. Whilst there is wealth of useful information and some excellent resources already out there, everything is in different places and can often be hard to find. Additionally, some of the most useful Taiwan climbing websites are no longer being updated. Therefore, we are working hard to bring you all of the latest information in one place. Over the coming months we are hoping to add more features to the website, including the ability to create an account and log the routes you have climbed, as well as a partner finder. If you have any suggestions for other features you would like to see, or would just like to say hello, please feel free to contact us [info@climbtaiwan.com / using the form below]",
  warning: "WARNING: Rock climbing is a dangerous activity. Proper safety equipment and knowledge of how to use it correctly are essential, You are ultimately responsible for your own safety. Climb Taiwan accepts no liability or responsibility for injury resulting from the use of this site.",
  imgURL: "./Images/introduction.jpg",
}

const LongDong = {
    name: "Long Dong",
    overview: "Long Dong is considered by many to be the premier climbing destination in Taiwan. Here you will find world class climbing on gorgeous sandstone sea cliffs against an atmospheric ocean backdrop. There are a huge number of established routes at Long Dong, with a good mixture of sport and traditional climbing across a wide range of grades, as well as a handful of bouldering and deep water solo (DWS) routes.",
    travel: "By Bus from Taipei: There is a direct bus (1811) departing daily at 8:50 am (every day) and 10:20 am (Saturday and Sunday only) from directly outside Taipei Main Station Exit M1. For School Gate entrance get off at Long Dong Harbour (龍洞港) bus stop. For Backdoor get off at Buddha Temple (佛祖廟). To get back to Taipei, simply take bus 791 back to Keelung and then take bus 1813 from Kuo-Kuang Bus Station (Stand No. 1) back to Taipei Main Station (or alternatively you can take a train from Keelung Station).",
    guidebook: [
      {
        text: "A copy of the Long Dong guidebook by Matt Robertson can be purchased from here:",
        url: "http://climbstone.com",
        urlText: "Rock Climbing Taiwan | 台灣龍洞攀岩"
      },
      {
        text: "There is an ongoing re-bolting project at Long Dong, testing the current bolts and replacing any old steel bolts with newer titanium bolts that are resistant to corrosion by seawater. The Long Dong re-bolting team’s website, which provides information on the status of the bolts can be accessed here:",
        url: "https://longdong.climbio.org",
        urlText: "Climbio"
      },
      {
        text: "Please also refer to the Taiwan Outdoor Climber’s Coalition website for the latest safety information and accident reports for Long Dong:",
        url: "https://www.tocc-climbing.org/ld-safety-information",
        urlText: "Taiwan Outdoor Climber’s Coalition"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14451.275212940061!2d121.9205135!3d25.1079943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d439fc992c2d7%3A0x539f17e22ef63038!2sDragon%20Caves!5e0!3m2!1sen!2stw!4v1617077890107!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14451.275212940061!2d121.9205135!3d25.1079943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d439fc992c2d7%3A0x539f17e22ef63038!2sDragon%20Caves!5e0!3m2!1sen!2stw!4v1617078560727!5m2!1sen!2stw" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/longDong.jpg",
    rocks: [
        {
            name: "Back Door - B1",
            routes: [
                {
                    name: "Bo",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Po",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Mo",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Fo",
                    rating: 5.7,
                    style: "Trad"
                }
            ]
        }
    ]
}

const ReHai = {
    name: "Re Hai",
    overview: "Re Hai is a small outcrop of volcanic rock overlooking the Xinbeitou district of Taipei. It has a distinct jungly feel with scenic views of Xinbeitou and Yangmingshan National Park from the top. There are a total of 23 documented routes, up to around 15 meters in length. All areas are in the shade until around noon. Whilst the trees do provide some cover from the sun in the afternoon, unfortunately they are also prime territory for mosquitos!",
    travel: "Re Hai is approximately a 30 minute walk from the Xinbeitou MRT station. From the MRT station, you need to walk along Guangming Road past Beitou Park (and Burger King) until you get to the Spa Sring Resort. From here, follow the road up to the right and continue walking along Wenquan Road until you reach a steep upward winding road. Follow the road round to the second bend until you arrive at a trail entrance marked by a post inscribed with red painted Chinese characters (GPS coordinates 25.135342, 121.516474). Head up the trail until you reach a large boulder and then take the path the to the right. Continue upwards and shortly after the path levels out you will arrive at the First Wall.",
    guidebook: [
      {
        text: "A guidebook called Rock Climbing Taiwan put together by Nate Ball provides useful topos of each of the routes listed below. A copy of Rock Climbing Taiwan can be accessed below. Scroll down to page 16 for the start of the Re Hai chapter.",
        url: "https://docs.google.com/document/d/18SPGo4IxsBq9iFy81ke-uDGK8QnE1L6oZCaPvV-B0Ic/edit",
        urlText: "Rock Climbing Taiwan – Nate Ball"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5822.527063963946!2d121.5118703!3d25.1344678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae6822c013c3%3A0xd882b3905c2a9e81!2z5YyX5oqV54ax5rW35bKp5aC0!5e1!3m2!1sen!2stw!4v1617078782265!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5822.527063963946!2d121.5118703!3d25.1344678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae6822c013c3%3A0xd882b3905c2a9e81!2z5YyX5oqV54ax5rW35bKp5aC0!5e1!3m2!1sen!2stw!4v1617078782265!5m2!1sen!2stw" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/ReHai.jpg",
    rocks: [
        {
            name: "First Wall",
            routes: [
                {
                    name: "Yi",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Er",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "San",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Si",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Wu",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Liu",
                    rating: 5.9,
                    style: "Sport"
                }
            ]
        },
        {
            name: "Overhang Wall",
            routes: [
                {
                    name: "Left Arete",
                    rating: 5.7,
                    style: "Sport"
                },
                {
                    name: "Layback Roof",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Dual Overhangs",
                    rating: "5.11b",
                    style: "Sport"
                },
                {
                    name: "Crack Romp",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Crack Jump",
                    rating: "5.10a",
                    style: "Sport"
                },
                {
                    name: "Gully Route",
                    rating: "5.10a",
                    style: "Sport"
                }
            ]
        },
        {
            name: "Skinny Wall",
            routes: [
                {
                    name: "Skinny Arete",
                    rating: "5.10a",
                    style: "Sport"
                },
                {
                    name: "Skinny Slab",
                    rating: 5.7,
                    style: "Sport"
                }
            ]
        },
        {
            name: "Fat Wall",
            routes: [
                {
                    name: "Fat Bulge",
                    rating: 5.5,
                    style: "Sport"
                },
                {
                    name: "Fat Jugs",
                    rating: 5.8,
                    style: "Sport"
                }
            ]
        },
        {
            name: "White-streak Wall",
            routes: [
                {
                    name: "Left Edge",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "White Streak",
                    rating: "5.10b",
                    style: "Sport"
                }
            ]
        },
        {
            name: "Last Wall",
            routes: [
                {
                    name: "Chimney Face",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Crack Face",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Slab Left",
                    rating: "5.10b",
                    style: "Sport"
                },
                {
                    name: "Slab Right",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Crimpfest",
                    rating: "5.11a",
                    style: "Sport"
                }
            ]
        }
    ]
}



const BigCannonCliff = {
    name: "Big Cannon Cliff",
    overview: "Big Cannon Cliff was the first climbing area developed in Taiwan and has a row of distinctive blocky towers around 10 meters in height. The routes themselves are not bolted for sport climbing and there is little possibility for placing trad gear. However, there are bolts at the top of each of the towers, allowing most of the routes to be set up for top roping from above. Whilst the routes could be attempted as high-ball boulder boulder problems, the ground at the base of the towers is very rocky and uneven and so particular care must be taken. The style of climbing at Big Cannon Cliff is mostly crimpy technical problems, with some crack climbing.",
    travel: "The easiest way to get to Big Cannon Cliff is take the MRT to Xinbeitou Station, take Exit 1, and then cross the road to the Beitou Park bus stop opposite KFC. From there take the 230 bus to Dahuangzui (大磺嘴), which is the stop after Beitou Museum. Buses depart around every 30 minutes. It is also possible to walk to Big Cannon Cliff from Xinbeitou Station in around 45 minutes (it is useful to note that the walk back to Xinbeitou Station is downhill).  ",
    guidebook: [
      {
        text: "A very useful document prepared by Ron Heinsman provides topos of each of the routes listed below. A copy of this document can be accessed here:",
        url: "http://www.taiwanrock.50webs.com/big_cannon_cliff_guide.pdf",
        urlText: "Big Cannon Cliff Climbing & Bouldering Guide – Ron Heinsman"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7223.602044300907!2d121.5177629!3d25.1424171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae6ca93b9f77%3A0x5ed3b965d43a72bc!2z5YyX5oqV5aSn56Cy5bKp5aC0!5e0!3m2!1sen!2stw!4v1617078842753!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7223.602044300907!2d121.5177629!3d25.1424171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae6ca93b9f77%3A0x5ed3b965d43a72bc!2z5YyX5oqV5aSn56Cy5bKp5aC0!5e0!3m2!1sen!2stw!4v1617078842753!5m2!1sen!2stw" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/BigCannonCliff.jpg",
    rocks: [
        {
            name: "All Routes",
            routes: [
                {
                  "name": "Crack",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.11",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.1",
                  "style": "Top Rope"
                },
                {
                  "name": "South Mountain",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "South Mountain (don’t step on arete)",
                  "rating": "5.1",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Saddle Up",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "LiangDaLung",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.11b",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.1",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.1",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Beef Steak",
                  "rating": "5.11",
                  "style": "Top Rope"
                },
                {
                  "name": "Rebecca",
                  "rating": "5.12d",
                  "style": "Top Rope"
                },
                {
                  "name": "Continue Rising",
                  "rating": "5.12d",
                  "style": "Top Rope"
                },
                {
                  "name": "Rapid Advancement",
                  "rating": "5.11d",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Face/Corner",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Mushroom Grinder",
                  "rating": "5.10a",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "?",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "High Dive",
                  "rating": "5.11d",
                  "style": "Top Rope"
                },
                {
                  "name": "High Stance Rock Carry",
                  "rating": "5.10d",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang",
                  "rating": "5.11",
                  "style": "Top Rope"
                },
                {
                  "name": "Face/Corner",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Balance Face",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Big Chimney",
                  "rating": "5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Sunshine Face",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Sunshine Crack",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Corner",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Hand Plucked Chicken",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Sunshine Overhang",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Face (don’t use horizontal cracks)",
                  "rating": "5.1",
                  "style": "Top Rope"
                },
                {
                  "name": "Parting Tune",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.4",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Crack",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Bird #2",
                  "rating": "5.12d",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Bird #2 (start under the route)",
                  "rating": "5.12c",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.12a",
                  "style": "Top Rope"
                },
                {
                  "name": "Face/Corner",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Bird’s Head",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Bird",
                  "rating": "5.11b",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Bird (don’t use horizontal crack)",
                  "rating": "5.11c",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "?",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Sloping Crack",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Small Chimney",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "“Red Earth”",
                  "rating": "5.11a",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Ape’s Difficult Crossing",
                  "rating": "5.11c",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.11a",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Double Ten Crack",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Ten Side Ambush",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Ten Side Ambush (don’t use horizontal crack or hole)",
                  "rating": "5.1",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Crack to Arete",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Crack",
                  "rating": "5.4",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Chimney",
                  "rating": "5.4",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.11b",
                  "style": "Top Rope"
                },
                {
                  "name": "Eight-cornered Pavillion",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Dragon’s Eight Steps",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Golden Pagoda",
                  "rating": "5.10a",
                  "style": "Top Rope"
                },
                {
                  "name": "Corner & Slab",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Mushroom Grinder #2",
                  "rating": "5.10d",
                  "style": "Top Rope"
                },
                {
                  "name": "No Hole, No Hole",
                  "rating": "5.11a",
                  "style": "Top Rope"
                },
                {
                  "name": "Crack & Slab",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "The Last Overhang",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang & Crack",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang & Face",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete/Overhang/Arete",
                  "rating": "5.10a",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.13?",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Squeeze Chimney",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 11 and 13",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 15 and 17",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 18 and 25",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 30 and 26",
                  "rating": "5.11",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 30 and 32",
                  "rating": "5.1",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 39 and 49",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 86 and 88",
                  "rating": "5.8",
                  "style": "Top Rope"
                }
               ]
        }
    ]
}

const GuanZiLing = {
    name: "Guan Zi Ling",
    overview: "Guan Zi Ling is a famous hot spring sightseeing area located between Jiayi (嘉義) and Tainan (台南).The climbing area is just up the road from the hot spring area and has a number of limestone walls. The ethos here is sport, with grades ranging from 5.8 up to 5.14a. Guan Zi Ling’s prime seasons are autumn and winter. Early spring depends largely on the amount of rain. Late spring and summer are generally hot, muggy and full of mosquitos.",
    travel: "Guan Zi Ling is accessible from Highway 3. Take the Baihe Exit from Highway 3, and then head East on Route 172 for around 10 mins until you reach Xian Cao Pu (仙草舖). Take a right onto Route 96 heading South, and after about 4.8 km you will pass the Bi Yun Temple (碧雲寺) on your left. Keep going uphill, and after about 1.8 km you will pass an iron gate next to a two-storey house. Keep going for another 500 meters until you arrive at a wooden railing on your right. Go through the wood railing and after 200 meters the entrance to the Ultimate Wall will be on your left hand side.",
    guidebook: [
      {
        text: "A copy of the Guan Zi Ling Guidebook by Hung-Hsiang Wang can be purchased from Alpine Direct by following the link below. Alternatively you can purchase a copy from the Red Rock Bouldering Gym in Shilin.",
        url: "http://www.alpinedirect.com.tw/ProductShow.asp?ProductID=306&KindHeadID=25",
        urlText: "Alpine Direct: Guan Zi Ling Guidebook"
      },
      {
        text: "A copy of the Guan Zi Ling Quickguide by Dom Benson can be downloaded here:",
        url: "https://drive.google.com/file/d/0BwOlAvKBJd_TWXZYbENFWXpPVjg/view",
        urlText: "Guan Zi Ling Quickguide"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14654.628673892372!2d120.48207943504426!3d23.328194399999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e8d7340adbe05%3A0xdd22a977aeb95bf2!2z6Zec5a2Q5ba65bKp5aC0!5e0!3m2!1sen!2stw!4v1617682622021!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14654.628673892372!2d120.48207943504426!3d23.328194399999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e8d7340adbe05%3A0xdd22a977aeb95bf2!2z6Zec5a2Q5ba65bKp5aC0!5e0!3m2!1sen!2stw!4v1617682622021!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/GuanZiLing.jpg",
    rocks: []
}

const ShouShan = {
    name: "Shou Shan",
    overview: "Shou Shan is a limestone mountain located in a nature park to the north of Kaohsiung city. The nature park contains a number of different climbing areas, many of which are in narrow valleys with high walls on both sides which provide lots of shade. The climbs here are almost exclusively bolted sport routes on densely pocketed overhanging walls with the occasional drippy feature. Since most of the climbing areas are collapsed cave features, the lower portions of the walls often retain moisture, making them slick to the touch after long wet periods. The winter typically brings weeks of sunshine and lower temperatures. Please be mindful that the nature park, while aware of the climbing activity, has no official management plan. Access could be denied at any time. For the latest information regarding access or to find climbing partners, please refer to the Facebook group below.",
    travel: "Shou Shan is a limestone mountain located in a nature park to the north of Kaohsiung city. The nature park contains a number of different climbing areas, many of which are in narrow valleys with high walls on both sides which provide lots of shade. The climbs here are almost exclusively bolted sport routes on densely pocketed overhanging walls with the occasional drippy feature. Since most of the climbing areas are collapsed cave features, the lower portions of the walls often retain moisture, making them slick to the touch after long wet periods. The winter typically brings weeks of sunshine and lower temperatures. Please be mindful that the nature park, while aware of the climbing activity, has no official management plan. Access could be denied at any time. For the latest information regarding access or to find climbing partners, please refer to the Facebook group below.",
    guidebook: [
      {
        text: "A guidebook called Rock Climbing Taiwan put together by Nate Ball provides useful topos of each of the routes listed below. A copy of Rock Climbing Taiwan can be accessed below. Scroll down to page 23 for the start of the Shou Shan chapter.",
        url: "https://docs.google.com/document/d/18SPGo4IxsBq9iFy81ke-uDGK8QnE1L6oZCaPvV-B0Ic/edit",
        urlText: "Rock Climbing Taiwan – Nate Ball"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3682.7787018482713!2d120.27190650288293!3d22.624737599999985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e040b3ad00197%3A0x7dc5882b10ceb66b!2z5aO95bGx5bKp5aC0!5e0!3m2!1sen!2stw!4v1617682534693!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3682.7787018482713!2d120.27190650288293!3d22.624737599999985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e040b3ad00197%3A0x7dc5882b10ceb66b!2z5aO95bGx5bKp5aC0!5e0!3m2!1sen!2stw!4v1617682534693!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/ShouShan.jpg",
    rocks: []
}

const crags = []

crags.push(Information);
crags.push(LongDong);
crags.push(ReHai);
crags.push(BigCannonCliff);
crags.push(GuanZiLing);
crags.push(ShouShan);

export {
    crags
}