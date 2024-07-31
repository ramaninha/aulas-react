import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Card() {
  let icones = [faHeart, faComment, faPaperPlane];
  let nomes = ["a", "b", "c"];

  return (
    <div className="card">
      <img src="https://picsum.photos/200" alt="Avatar" />

      <div className="flex-start">
      
      { icones.map((item, index) => 
        <FontAwesomeIcon key={index} icon={item}/>
        
        )}

    {/* { nomes.map((item, index) => 
        <FontAwesomeIcon key={index} icon={item}/>
        
        )} */}

        {/* <FontAwesomeIcon icon={faHeart} /> */}
        {/* <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faPaperPlane} /> */}
      </div>

          <ul>
            {nomes.map((l)=><li key={l}>{l}</li>)}
          </ul>

      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}

export default Card;
