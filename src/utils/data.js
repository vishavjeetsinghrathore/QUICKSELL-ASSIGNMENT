import CustomIcon1 from "../assets/Done.svg";
import CustomIcon2 from "../assets/in-progress.svg";
import CustomIcon3 from "../assets/Cancelled.svg";
import CustomIcon4 from "../assets/To-do.svg";
import CustomIcon5 from "../assets/Backlog.svg";
import CustomIcon6 from "../assets/No-priority.svg";
import CustomIcon7 from "../assets/Img - Low Priority.svg";
import CustomIcon8 from "../assets/Img - Medium Priority.svg";
import CustomIcon9 from "../assets/Img - High Priority.svg";
import CustomIcon10 from "../assets/SVG - Urgent Priority colour.svg";



const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: <img src={CustomIcon6} alt="No Priority" /> },
    { title: "urgent", color: "orange", icon: <img src={CustomIcon10} alt="Urgent Priority" /> },
    { title: "high", color: "black", icon: <img src={CustomIcon9} alt="High Priority" /> },
    { title: "medium", color: "gray", icon: <img src={CustomIcon8} alt="Medium Priority" /> },
    { title: "low", color: "lightgray", icon: <img src={CustomIcon7} alt="Low Priority" /> },
];

export const status = [
    { title: "backlog", color: "black", icon: <img src={CustomIcon5} alt="Backlog" /> },
    { title: "todo", color: "lightgrey", icon: <img src={CustomIcon4} alt="To-do" /> },
    { title: "in progress", color: "#EBCB62", icon: <img src={CustomIcon2} alt="In Progress" /> },
    { title: "done", color: "#606ACB", icon: <img src={CustomIcon1} alt="Done" /> },
    { title: "cancelled", color: "gray", icon: <img src={CustomIcon3} alt="Cancelled" /> },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: <img src={CustomIcon5} alt="Backlog" />,
    },
    todo: {
        color: "lightgrey",
        icon: <img src={CustomIcon4} alt="To-do" />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <img src={CustomIcon2} alt="In Progress" />,
    },
    done: {
        color: "#606ACB",
        icon: <img src={CustomIcon1} alt="Done" />,
    },
    cancelled: {
        color: "gray",
        icon: <img src={CustomIcon3} alt="Cancelled" />,
    },
};

export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
};

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};
