import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import img1 from '../../Assests/1.jpg'
import img2 from '../../Assests/2.jpg'
import img3 from '../../Assests/3.jpg'
import img4 from '../../Assests/4.jpg'
import img5 from '../../Assests/5.jpg'
import star from '../../Assests/star12.png'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
export const FirstData=[
    {
        name:"Total Orders",
        number: "75",
        margin: 3,
        icon: <ShoppingBasketIcon style={{color:"purple",height:40,width:40}}/>,
        icon2:<KeyboardArrowUpIcon style={{color:"#008000",height:20,width:20}}/>,
        background:"#BF40BF",
        color:"purple",
        color1:"#008000"

    },
    {
        name:"Total Delivered",
        number: "70",
        margin: 3,
        icon: <ShoppingBagIcon style={{color:"green",height:40,width:40}}/>,
        icon2:<KeyboardArrowDownIcon style={{color:"red",height:20,width:20}}/>,
        background:"#50C878",
        color:"green",
        color1:"red"

    },
    {
        name:"Total Cancelled",
        number: "05",
        margin: 3,
        icon: <DeleteForeverIcon style={{color:"red",height:40,width:40}}/>,
        icon2:<KeyboardArrowUpIcon style={{color:"#008000",height:20,width:20}}/>,
        background:"#F88379",
        color:"red",
        color1:"#008000",

    },
    {
        name:"Total Revenue",
        number: "$75K",
        margin: 3,
        icon: <MonetizationOnIcon style={{color:'pink',height:40,width:40}}/>,
        icon2:<KeyboardArrowDownIcon style={{color:"red",height:20,width:20}}/>,
        background:"#A95C68",
        color:"pink",
        color1:"red"

    }
]
export const TableData=[
    {
        customer:"Wade Warren",
        order:"1232141",
        amount:"$124.00",
        status:"Delivered",
        img:img1

    },
    {
        customer:"Jane Cooper",
        order:"1232142",
        amount:"$130.00",
        status:"Delivered"  ,
        img:img2     
    },
    {
        customer:"Guy Hawkins",
        order:"1232143",
        amount:"$100.00",
        status:"Cancelled",
        img:img3 
    },
    {
        customer:"Kristin Wastson",
        order:"1232144",
        amount:"$150.00",
        status:"Cancelled",
        img:img4       
    },
    {
        customer:"Cody Fisher",
        order:"1232145",
        amount:"$200.00",
        status:"Delivered",
        img:img5         
    }
]
export const GoalsData = [
    {
        icon:<TaskAltIcon/>
    },
    {
        icon:<LunchDiningIcon/>
    },
    {
        icon:<MenuBookIcon/>
    }
]
export const CustomerData=[
    {
        img:img1,
        name:"Harry Potter",
        review:"Good food, friendly staff with good room service and cleaning ",
        star:star
    },
    {
        img:img4,
        name:"Franklin",
        review:"The breakfast was delightful, featuring a wide array of tasty dishes. The staff were very attentive and made sure all my needs were taken care of.",
        star:star
    },
    {
        img:img2,
        name:"Romeo Juliet",
        review:"Excellent food,Banana chips offered to my Lil one was really something to appreciate",
        star:star
    },
    {
        img:img3,
        name:"Rio More",
        review:"Food also very delicious!! Staff behaviour was excellent!!Ambience excellent!! Service for everything was great!!!!",
        star:star
    },
    {
        img:img1,
        name:"Harry Potter",
        review:"Good food, friendly staff with good room service and cleaning",
        star:star
    },
    {
        img:img4,
        name:"Franklin",
        review:"The breakfast was delightful, featuring a wide array of tasty dishes. The staff were very attentive and made sure all my needs were taken care of.",
        star:star
    },
    {
        img:img2,
        name:"Romeo Juliet",
        review:"Excellent food,Banana chips offered to my Lil one was really something to appreciate",
        star:star
    },
    {
        img:img3,
        name:"Rio More",
        review:"Food also very delicious!! Staff behaviour was excellent!!Ambience excellent!! Service for everything was great!!!!",
        star:star
    },
]