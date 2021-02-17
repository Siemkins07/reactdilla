import React from "react";
import Leaderboards from "./Leaderboards";
// import {Table} from 'reactstrap'

const EndGame = (props) => {
let addThis = {
  name: props.name,
  score: props.score,
  duration: props.duration,
  level: props.level[0]
}


  let toStorage = localStorage.setItem('game result', JSON.stringify([{...props}]))


  let fromStrorage = localStorage.getItem('game result')

  // fromStrorage = fromStrorage ? JSON.parse(fromStrorage) : {}
  fromStrorage = fromStrorage ?fromStrorage.split(',') : [];

  // let arr = []

  // arr.push(fromStrorage)
  // console.log(arr)

  fromStrorage.push(addThis.toString())

  localStorage.setItem('game result', fromStrorage.toString())


// localStorage.setItem





  return (
      <div
        style={{
          display:"flex",
          flexDirection: 'column',
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "100",
          backgroundColor: "rgba(0, 0, 0, 0.9",
          color: "#fff",
        }}
      >
        <h2 style={{ marginTop: "150px" }}>
          End game: Your score is: {props.score}
        </h2>
        {props.gameStarted ? (
        <div style={{display:'flex', flexDirection: 'column', justifyContent:'space-between', alignItems:'center', flexGrow: '1'}}>

        <div>LEADERBOARD:
        <table>
      <thead>
        <tr style={{color:'#fff'}}>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
          <th>Duration</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
      {/* {rank} */}
    </tbody>
    </table>

         
        </div>
     
        <button
            style={{
              border: "2px solid #fff",
              color: "#000",
              zIndex: "100",
              marginBottom: "50px"
  
          
            }}
            onClick={() => {
              props.resetGame();
              props.startGame();
            }}
        >
            Start new game
          </button>          
        </div>
      ) : null}

      </div>

  );
};
export default EndGame;
