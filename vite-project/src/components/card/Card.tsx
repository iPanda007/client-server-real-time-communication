import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import { useState } from "react";

const Card = ({ post }:any) => {
    const [liked, setLiked] = useState<boolean>(false);
    
    const handleLiked = ():void => {
        setLiked(!liked)
    }
    

    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="" className="userImg" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} alt="" className="postImg" />
            <div className="interaction">
                {liked ? (
                    <img src={HeartFilled} alt="" className="cardIcon" onClick={handleLiked} />
                ) : (
                    <img
                        src={Heart}
                        alt=""
                        className="cardIcon"
                        onClick={handleLiked}
                    />
                )}
                <img
                    src={Comment}
                    alt=""
                    className="cardIcon"
            
                />
                <img
                    src={Share}
                    alt=""
                    className="cardIcon"
                
                />
                <img src={Info} alt="" className="cardIcon infoIcon" />
            </div>
        </div>
    );
};

export default Card;