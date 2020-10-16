import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import data from "../data/mockData";
import { Button } from 'semantic-ui-react'
import { Card, Image } from 'semantic-ui-react'
import "../styles/CafePage.css";

const ButtonExampleIconShorthand = () => <Button icon='angle down' />

const CardExampleImageCard = () => (
<Card.Group>
    <Card>
    <Image src='https://www.youtube.com/embed/d1vysoqHIus' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Never Say Never YouTube Video</Card.Header>
      <Card.Meta>Jaden • Nov 17, 2017</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>

  </Card.Group>
  
)
export default function CafePage() {
    return(
<div class="ui card"><div class="image"><iframe width="290" height="180"
src="https://www.youtube.com/embed/d1vysoqHIus">
</iframe></div><div class="content"><div class="header">The Syre Movie Trailer</div><div class="meta">Jaden • Nov 17, 2017</div><div class="description">Click the video to watch!</div></div>


<h3><u>Music:</u></h3>
<h4><a href="https://www.youtube.com/watch?v=U7lCIcLGkL8">1. B</a><br/><a href="https://www.youtube.com/watch?v=SzfjyiYp5JA">2. L </a>
<br/><a href="https://www.youtube.com/watch?v=rVLW7tyhp1E">3. U </a> <br/><a href="https://www.youtube.com/watch?v=gVkXklusXZw">4. E </a>
<br/><a href="https://www.youtube.com/watch?v=O2AhRxBlbFo">5. Breakfast (feat. A$AP Rocky) </a> 
<br/><a href="https://www.youtube.com/watch?v=hiwtBPG-PXE"> 6. Hope </a> 
<br/><a href="https://www.youtube.com/watch?v=p1cK4E8WUL8"> 7. Falcon (feat. Raury) </a>   
<br/><a href="https://www.youtube.com/watch?v=huRFB-urWAc">    8. Ninety </a>
<br/><a href="https://www.youtube.com/watch?v=7PGM3-8zvFc">  9. Lost Boy </a>
<br/><a href="https://www.youtube.com/watch?v=0LYzDB4hWUs"> 10. Batman  </a> 
<br/><a href="https://www.youtube.com/watch?v=cmc8q2dcIMs"> 11. Icon  </a>   
<br/><a href="https://www.youtube.com/watch?v=GAO5DuqUgLc"> 12. Watch Me</a>  
<br/><a href="https://www.youtube.com/watch?v=Fof9lHaApXc"> 13. Fallen</a>  
<br/><a href="https://www.youtube.com/watch?v=z2tV8Ezl3VA"> 14. The Passion</a>    
<br/><a href="https://www.youtube.com/watch?v=zXHUHx4R9kI"> 15. George Jeff </a> 
<br/><a href="https://www.youtube.com/watch?v=xY7ufuMDmHs"> 16. Rapper </a>    
<br/><a href="https://www.youtube.com/watch?v=SFZMMEBAlU8"> 17. SYRE </a>  </h4>
</div>
    );

}


