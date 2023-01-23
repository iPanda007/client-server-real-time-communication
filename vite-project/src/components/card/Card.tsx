import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import { useState } from "react";

const Card = ({ post,socket,user }:any) => {
    const [liked, setLiked] = useState<boolean>(false);
    
    const handleLiked = (type:any):void => {
        setLiked(!liked);
        socket.emit("sendNotification",{
            senderName : user,
            receiverName: post.username,
            type
        })
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
                        onClick={()=>handleLiked(1)}
                    />
                )}
                <img
                    src={Comment}
                    alt=""
                    className="cardIcon"
                    onClick={()=>handleLiked(2)}
                />
                <img
                    src={Share}
                    alt=""
                    className="cardIcon"
                    onClick={()=>handleLiked(3)}
                />
                <img src={Info} alt=""   onClick={()=>handleLiked(4)} className="cardIcon infoIcon" />
            </div>
        </div>
    );
};

export default Card;