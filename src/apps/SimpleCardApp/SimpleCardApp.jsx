import SimpleCard from "../../components/SimpleCard/SimpleCard";
import "./SimpleCardApp.css"

const SimpleCardApp = () => {
    const item = {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1163/1163142.png?w=826&t=st=1683570111~exp=1683570711~hmac=38277440edceeb97d2543164625c477a92e9dfff48980b4a763d795b7175a52e",
        alt: "character profile",
        title: "Ninja Prince",
        desc: "Born in 1523 A.D., Ninja Prince has always been a long time royal ninja as well as a royal prince. His specialty moves include submit no jutsu and loyalty storm."
    };

    return (
        <div id="SimpleCardApp">
            <SimpleCard item={item} />
        </div>
    );
}

export default SimpleCardApp;