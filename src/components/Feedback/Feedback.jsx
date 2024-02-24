import {useState} from 'react';
import "./styles.css";
import Button from "../Button/Button";
import PictureLike from "./like.png";
import PictureDislike from "./dislike.png"


function Feedback() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike]=useState(0);

    const plusLike =()=>{
        setLike((prevValue)=>{
            return prevValue+1;
        });
    };

    const plusDislike =()=>{
        setDislike((prevValue)=>{
            return prevValue +1;
        });
    };



    const resetResult = ( )=> { setLike(0); setDislike(0); }

    return (
        <div className='feedback-wrapper'>
            <div className='button-control'>
                <Button foto={PictureLike} onClick={plusLike}/>
            </div>
            <p className='like'>{like}</p>
            <div className='button-control'>
                <Button foto={PictureDislike} onClick={plusDislike}/>
            </div>
            <p className='like'>{dislike}</p>
            <div className='button-control'>
            <Button name ="Reset Results" onClick={resetResult}/>
                </div>
        </div>
    )

}

export default Feedback;