// import React from 'react';
// import { ReactP5Wrapper } from 'react-p5-wrapper';

// const NetworkCapture = () => {
//   const numNodes = 30;
//   const distance = 150;
//   let nodes = [];

//   class Node {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       this.r = 10;
//       this.color = 'white';
//       this.speed = {
//         x: Math.random() * 2 - 1,
//         y: Math.random() * 2 - 1,
//       };
//     }

//     display() {
//       fill(this.color);
//       stroke('black');
//       ellipse(this.x, this.y, this.r * 2, this.r * 2);
//     }

//     move() {
//       this.x += this.speed.x;
//       this.y += this.speed.y;

//       if (this.x > window.innerWidth || this.x < 0) {
//         this.speed.x *= -1;
//       }

//       if (this.y > window.innerHeight || this.y < 0) {
//         this.speed.y *= -1;
//       }
//     }

//     connect() {
//       stroke(this.color);
//       for (let i = 0; i < nodes.length; i++) {
//         if (dist(this.x, this.y, nodes[i].x, nodes[i].y) < distance) {
//           line(this.x, this.y, nodes[i].x, nodes[i].y);
//         }
//       }
//     }
//   }

//   const sketch = (p5) => {
//     p5.setup = () => {
//       p5.createCanvas(window.innerWidth, window.innerHeight);
//       for (let i = 0; i < numNodes; i++) {
//         let node = new Node(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
//         nodes.push(node);
//       }
//     };

//     p5.draw = () => {
//       p5.background('black');
//       for (let i = 0; i < nodes.length; i++) {
//         nodes[i].display();
//         nodes[i].move();
//         nodes[i].connect();
//       }
//     };
//   };

//   return (
//     <div>
//       <ReactP5Wrapper sketch={sketch} />
//     </div>
//   );
// };

// export default NetworkCapture;
