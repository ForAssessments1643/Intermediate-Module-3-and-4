import img1 from '../../assets/Playstation.jpeg'
import img2 from '../../assets/Xbox.jpeg'
import img3 from '../../assets/PC.jpeg'
import img4 from '../../assets/Nintendo.jpeg'

const ServiceList = [
    {
        name: "Playstation Games",
        email: "PSGames@yahoo.com",
        review: '5',
        avatar:img1,
        coord:{latitude:-30,longitude:33}
    },
    {
        name: "Xbox Games",
        email: "XboxG@gmail.com",
        review: '4',
        avatar:img2,
        coord:{latitude:-31,longitude:36}


    }, {
        name: "PC Games",
        email: "PCGames@yahoo.com",
        review: '4',
        avatar: img3,
        coord:{latitude:30,longitude:-27}


    }, {
        name: "Nintendo Games",
        email: "NintendoG@gmail.co.za",
        review: '5',
        avatar:img4,
        coord:{latitude:40,longitude:-28}


    },
]

export default ServiceList;