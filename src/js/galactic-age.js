// export class SpaceAge {
//   constructor(earthAge, portlandLifeExpectancy) {
//     this.earthAge = earthAge;
//     this.portlandLifeExpectancy = portlandLifeExpectancy;
//   }

//   mercuryAge() {
//     let mercuryAge = Math.floor(this.earthAge / 0.24);
//     return mercuryAge;
//   }

//   jupiterLifeExpectancy() {
//     let jupiterLifeExpectancy = Math.floor(79 / 11.86);
//     let timeLeft = jupiterLifeExpectancy - this.jupiterAge();
//     if (timeLeft < 0) {
//       let lifeExpectancy = timeLeft * -1;
//       return `you surpased your life expectancy by ${lifeExpectancy} years`;
//     } else {
//       return `you have ${timeLeft} years left on this planet`;
//     }
//   }
// }
