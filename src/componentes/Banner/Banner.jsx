import "./Banner.css";
function Banner(props) {
// "https://upload.wikimedia.org/wikipedia/commons/1/10/Flamengo-rowing-2018.png" alt="Escudo do remo do Flamengo"
console.log(props.imagem)
  return (
  <figure className="banner">
      <img src={props.imagem}/>;
      <figcaption id="legenda">Escudo do remo do Flamengo</figcaption>
      
  </figure>
  
    )
}
export default Banner;