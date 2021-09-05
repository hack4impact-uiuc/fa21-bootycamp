import React, {useState} from 'react';
import { AiFillHeart } from "react-icons/ai";
import { Button } from 'semantic-ui-react'


const LikesButton = () => {
    const [likes, setLikes] = useState(0);

return (
<Button onClick={() => setLikes(likes + 1)} style={{backgroundColor:"black", color:"white", marginLeft:"50%", marginTop:"5%"}}>
    {likes + `\u00a0\u00a0\u00a0\u00a0\u00a0`}
    <AiFillHeart size={20} color="#64BEFD"/>
</Button>

)

};

export {LikesButton};