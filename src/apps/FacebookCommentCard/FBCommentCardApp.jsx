import FBCommentCard from "../../components/FBCommentCard/FBCommentCard";
import "./FBCommentCardApp.css"

const FBCommentCardApp = () => {
    const userInfo = {
        imgSrc: "https://media.istockphoto.com/id/1275763595/vector/blue-flame-bird.jpg?s=612x612&w=0&k=20&c=R7Y3DJnYFIQM8TfOfM3smZpdEl4Ks3ku4mzEFqSDKVU=",
        alt: "iStock - Blackmoon9",
        name: "Andre Blaze",
        headline: "Code me up Scotty!!!"
    }
    
    return (
        <div>
            <FBCommentCard user={userInfo} />
        </div>
    );
}

export default FBCommentCardApp;