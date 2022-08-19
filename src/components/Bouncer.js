import React, { useEffect } from "react";

const Bouncer = () => {
    
    const [pos, setPos] = React.useState({x: 1, y: 0, dir: 'up'}) 
    
    
    useEffect(() => { 
        const intervalId = setInterval(() => {

        const newPos = Object.assign({}, pos);
        
        if (newPos.y >= 1500){ newPos.y = newPos.y - 2000 };
             
        newPos.y = newPos.y + 5
        
        const speed = 1 - (newPos.x/50)
        const velocity = 15 * speed
    
        if (newPos.dir === 'up') {
            newPos.x = newPos.x + velocity
            
            if (newPos.x >= 49) {
            newPos.dir = 'down'
            }
        
        } else {
        
            newPos.x = newPos.x - velocity
            
            if (newPos.x < 0){ newPos.x = 0 };      
        
            if (newPos.x <= 1) {
                newPos.dir = 'up'
            }
        
        }
        
    
        setPos(newPos)
        }, 50);

        return () => clearInterval(intervalId)

    }, [pos])

    return (
        <>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'black', position: 'absolute',
            left: 0,
            bottom: pos.x*5
        }} />
{pos.x}

</>
    )
}

export default Bouncer;
