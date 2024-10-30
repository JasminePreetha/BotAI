
import React, { useContext, useState } from 'react';
//styles
import "./ChatCard.css";
//assets
import likeOutlined from "../assets/like-outline-black.svg";
import likeFilled from "../assets/like-filled-black.svg";
import dislikeOutlined from "../assets/dislike-outline-black.svg";
import dislikeFilled from "../assets/dislike-filled-black.svg";
//contexts
import { ThemeContext } from '../AllContexts';

const CustomRating = ({ rating, setRating }) => {
    const handleRating = (value) => {
        setRating(value);
    };

    return (
        <div className="custom-rating">
            <img
                src={rating >= 1 ? likeFilled : likeOutlined}
                alt="like"
                onClick={() => handleRating(1)}
                style={{ cursor: 'pointer' }}
            />
            <img
                src={rating >= 2 ? likeFilled : likeOutlined}
                alt="like"
                onClick={() => handleRating(2)}
                style={{ cursor: 'pointer' }}
            />
            <img
                src={rating >= 3 ? likeFilled : likeOutlined}
                alt="like"
                onClick={() => handleRating(3)}
                style={{ cursor: 'pointer' }}
            />
            <img
                src={rating >= 4 ? likeFilled : likeOutlined}
                alt="like"
                onClick={() => handleRating(4)}
                style={{ cursor: 'pointer' }}
            />
            <img
                src={rating >= 5 ? likeFilled : likeOutlined}
                alt="like"
                onClick={() => handleRating(5)}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
};

const Thumbs = ({ likeDislikeReply, id, like, dislike }) => {
    return (
        <span className='thumbsWrapper'>
            <img src={like} alt='like button' onClick={() => likeDislikeReply(id, "like")} />
            <img src={dislike} alt='dislike button' onClick={() => likeDislikeReply(id, "dislike")} />
        </span>
    );
};

const ChatCard = props => {
    //props
    const { name, message, time, icon, customClass, likeDislikeReply, id, like, dislike } = props;
    //states
    const [rate, setRate] = useState(0); // Initialize rating state
    // ..contexts
    const [theme, setTheme] = useContext(ThemeContext);
    
    return (
        <div className={`ChatCard ChatCardTheme-${theme} ${customClass}`}>
            <span className='chatCardImage-wrapper'>
                <img src={icon} alt={`${name} icon`} className='chatCardImage' />
            </span>
            <span className='chatCardTexts'>
                <span className='chatCardName'>{name}</span>
                <span className='chatCardMessage'>
                    <span className='messageAppear'>{message}</span>
                </span>
                <span className='chatCardTime'>
                    <span>{time}</span>
                    {name === "bot ai" ? (
                        <>
                            <Thumbs like={like} dislike={dislike} likeDislikeReply={likeDislikeReply} id={id} />
                            <CustomRating rating={rate} setRating={setRate} />
                        </>
                    ) : null}
                </span>
            </span>
        </div>
    );
};

export default ChatCard;