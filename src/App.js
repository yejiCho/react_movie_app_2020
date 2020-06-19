import React from 'react';


// function Food(props){
//   console.log(props);
//   return <h1>I like { props.fav }</h1>;
// }

function Food({name, picture}){
  return (
  <div>
  <h1>I like {name}</h1>
  <img src={picture}/>
  </div>
  );
}

const foodIlike = [
  {
      name : 'Kimchi',
      image : 'https://ucarecdn.com/c1b36cd7-ebeb-469b-bf95-4120c9cd8dc4/-/scale_crop/1280x1280/center/-/quality/normal/-/format/jpeg/kimchi.jpg'
  },
  {
      name : 'Doncasu',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG0MEbQppeMfRbHchWxV3JMpYUFR44dhCHWZiZNaW5aEQWZiGO&usqp=CAU'
  }
];


function App() {
  // return <div className="App"/>;
  return (
    <div>
      
      {foodIlike.map(dish => (<Food name={dish.name} picture={dish.image}/>))}
      {/* <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgiopsal"/>
      <Food fav="chukumi"/> */}
    </div>
  );
}

export default App;
