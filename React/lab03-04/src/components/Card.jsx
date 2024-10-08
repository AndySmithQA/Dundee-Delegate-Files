const Card = ({name,age,role, isActive}) => {
   
        return ( 
                <div className="card">
                    <img src="https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png" 
                    width="100px"
                    alt="" 
                    />
                    <h1>{name} {isActive && '🏵'}</h1> 
                    <h2>{age}</h2>
                    <h2>{role}</h2>


                </div> 
            );
    
}
 
export default Card;