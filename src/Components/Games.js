import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
      <div id="games" className="games-news">
      <h1 className='game-head'>List of banned video Games</h1>
      
           <div className="game-1">
               <h2 className='game-name'>Elden Ring</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Elden.webp").default } />
                Originally announced during E3 2019, Elden Ring is the next FromSoftware offering from Dark Souls creator Hidetaka Miyazaka and Game of Thrones author George R.R. Martin. In what will be FromSoftware's biggest game to date, Elden Ring takes place in an open world filled with rich lore and bloody history, with incredible monster designs, magic, and a horse too.
              </p>
              <p> Platform's: PS4, Xbox One, PC, PS5, Xbox Series X</p>
              <p>Release date: February 25, 2022</p>
           </div>
           <div className="game-1">
               <h2 className='game-name'>Forspoken</h2>
              <p className="game-des">
                <img alt='game' className="game-image" src={ require("../Images/Games/Forspoken.webp").default } />
                Luminous Production's team is made up of some of the developers who worked on Final Fantasy 15. As the debut adventure from the studio, Forspoken follows the story of Frey, a young woman from New York who finds herself in the hostile world of Athia. With magic powers, parkour, and lots of other-worldly creatures, Forspoken also boasts a host of established writers such as Gary Whitta, Alison Rhymer, Todd Stashwich, and Amy Hennig.   
              </p>
              <p> Platform's:PS5, PC</p>
              <p>Release date:May 24, 2022</p>
           </div> 
           <div className="game-1">
               <h2 className='game-name'>OlliOlli World</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Olli.webp").default } />
                Take a trip to skateboarding utopia - aka Radlandia - with OlliOlli World, where you'll be able to attempt to master the game's deep combo system. Sandbox mode will have you mastering "millions of unique levels", with global leagues to up the competition. Your character is fully customizable, and you'll meet vibrant characters as you work your way to discovering the mystical skate gods of Gnarvana.
              </p>
              <p> Platform's:PS5, PS4, Xbox One, Xbox Series X, PC, Nintendo Switch</p>
              <p>Release date: February 8, 2022</p>
           </div>   
           <div className="game-1">
               <h2 className='game-name'>Horizon Forbidden West</h2>
              <p className="game-des">
                <img alt='game' className="game-image" src={ require("../Images/Games/Horizon.webp").default } />
                Aloy is officially back in a sequel to 2017's Horizon Zero Dawn, and this time we'll be journeying to the post-apocalyptic setting of San Franciso in America. The trailer which debuted during Sony's Future of Gaming event revealed Horizon Forbidden West will be coming to the PS5, and showed off gorgeous, vibrant landscapes, new big machines creatures, and - most interestingly of all - underwater sequences. We'll no doubt have more mysteries to unravel as we return to Guerrilla Games' unique world when it does eventually release on the next-gen console. 
              </p>
              <p> Platform's:PS5. PS4</p>
              <p>Release date: February 18, 2022</p>
           </div> 
           <div className="game-1">
               <h2 className='game-name'>Triangle Strategy</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Triangle.webp").default } />
                As the second game in the HD-2D series, Triangle Strategy features the sprite style graphics we saw in Octopath Traveler to bring us a new strategy RPG. Playing as  newly appointed lord, Serenoa, you'll command warriors on the battlefield, make big decisions that will shape the fate of the continent of Norzelia, and find yourself caught up in the power play between nations. Since the launch of the demo earlier this year, Square Enix revealed it has taken on board player feedback to bring a wealth of the player requested changes to the upcoming release. 
              </p>
              <p> Platform's: Nintendo Switch </p>
              <p>Release date: March 4, 2022</p>
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
