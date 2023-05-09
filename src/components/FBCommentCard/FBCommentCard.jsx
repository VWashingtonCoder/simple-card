import Image from "../Image/Image";
import Title from "../Title/Title";
import Description from "../Description/Description";
import LinkBtn from "../LinkBtn/LinkBtn";

const FBCommentCard = ({ user }) => {
    const { imgSrc, alt, name, headline } = user;

    return (
        <div id="FBCommentCard">
            <Image src={imgSrc} alt={alt} />
            <div className="card-text">
                <Title title={name}/>
                <Description desc={headline}/>
                <div className="btn-time">
                    <LinkBtn text={"Like"} />
                    <span className="seperator">-</span>
                    <LinkBtn text={"Reply"} />
                    <span className="time">3 Mins</span>
                </div>
            </div>
        </div>
    );
}

export default FBCommentCard;