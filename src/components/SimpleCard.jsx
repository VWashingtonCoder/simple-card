import Image from "./Image";
import Title from "./Title";
import Description from "./Description";

const SimpleCard = ({ item }) => {
    const { imgSrc, alt, title, desc } = item;

    return (
        <div id="SimpleCard">
            <Image src={imgSrc} alt={alt} />

            <div className="card-text">
                <Title title={title} /> 
                <Description desc={desc} />
            </div>
        </div>
    );
}

export default SimpleCard;