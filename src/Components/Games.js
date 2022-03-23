import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
      <div id="games" className="games-news">
      <h1 className='game-head'>Upcoming Games On Mobile Platform</h1>
      
           <div className="game-1">
               <h2 className='game-name'>Valorant Mobile</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Valorant.jpg").default } />
                Riot Games have announced that Valorant will be coming to mobile devices.
                The free-to-play competitive first-person PC shooter will be migrating from over PC where it has had a spectacular start to life, accumulating 14 million players each month.
                Valorant’s developers have committed to expanding on their rapidly-growing player base, stating that they are prepared to “expand the franchise.”
              </p>
              <p></p>
              <p></p>
           </div>
           <div className="game-1">
               <h2 className='game-name'>Garena : Undawn</h2>
              <p className="game-des">
                <img alt='game' className="game-image" src={ require("../Images/Games/Undawn.jpg").default } />
                Tencent is a name any mobile gamer is very familiar with, so any upcoming titles they announce are bound to be interesting. Undawn is a cooperative zombie survival title heading for iOS and Android. It will boast a mixture of PvE and PvP, where players will have to deal with the zombie hordes whilst contending with other players.
                Additionaly they can team up with others and create shelters to provide sanctuary from the zombies whilst trading resources with their pals to ensure they are appropriately stocked with supplies. Admittedly, yet another zombie game doesn't sound that appealing, but Tencent has earned a reputation for making successful mobile games for a reason.
              </p>
              <p></p>
              <p></p>
           </div> 
           <div className="game-1">
               <h2 className='game-name'>Jujutsu Kaisen: Phantom Parade</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Jujutsu.jpg").default } />
                One of the most anticipated mobile games of 2022 (alongside Kimetsu no Yaiba / Demon Slayer), Jujutsu Kaisen: Phantom Parade is an outstanding turn-based RPG with amazing graphics, unique animations and dialogues, and never-before-seen scenes. Fans of the anime or manga should definitely keep an eye out for this one - I know for sure I will!
                At the moment we don't have a lot of information, but we do know for sure that we'll get to see the beloved main characters Yuji, Megumi, Kugisaki Nobara, and of course the one that cannot be missing, Gojo Satoru. Ah, and Nanami Kento.
              </p>
              <p></p>
              <p></p>
           </div>   
  </div>
    )
}

export default Games;

// const Games = () => {
//   return(

// <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/DOTA.jpg"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/CS GO 2.jpg"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/CS GO.jpg"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// )
// }

// export default Games;
