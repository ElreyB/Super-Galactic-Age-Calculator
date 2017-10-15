export class GalacticAgeCalculater {
  constructor(options){
    this.earthDays = 365;
    this.age = options.age;
    this.gender = options.gender;
    this.smoker = this.parseBoolean(options.smoker);
    this.exercise = options.exercise;
    this.drink = options.drink;
    this.averageLifeExpectency = 0;
  }

  secondsOnEarth(){
    return this.age * 31536000;
  }

  secondsByDates(mostCurentDate, otherDate){
    let date1 = new Date(mostCurentDate);
    let date2 = new Date(otherDate);
    let difference = (date1.getTime() - date2.getTime()) / 1000;

    return parseInt(difference);
  }

  yearsOnMercury(){
    return parseInt((this.earthDays * this.age) / 87.97);
  }

  yearsOnVenus(){
    return parseInt((this.earthDays * this.age) / 243);
  }

  yearsOnMars(){
    return parseInt((this.earthDays * this.age) / 686.98);
  }

  yearsOnJupiter(){
    return this.age * 12;
  }

  calculateLifeExpectency(){
    this.genderaverageLifeExpectency();
    this.expectencyForSmoker();
    this.expectencyWhenExercising();
    this.expectencyWhenDrinking();
    return this.averageLifeExpectency;
  }

  expectencyOnPlanet(planet){
    if (planet === "Earth"){
      return this.calculateLifeExpectency();
    }else if (planet === "Mercury"){
      return parseInt((this.earthDays * this.calculateLifeExpectency()) / 87.97);
    }else if (planet === "Venus"){
      return parseInt((this.earthDays * this.calculateLifeExpectency()) / 243);
    }else if (planet === "Mars"){
      return parseInt((this.earthDays * this.calculateLifeExpectency()) / 686.98);
    }else if (planet === "Jupiter") {
      return this.calculateLifeExpectency() * 12;
    }else {
      return "No data on planet.";
    }
  }

  genderaverageLifeExpectency(){
    if (this.gender === "male"){
    this.averageLifeExpectency = 76;
    }else{
    this.averageLifeExpectency = 81;
    }
  }

  expectencyForSmoker(){
   return this.smoker ? this.averageLifeExpectency -= 10 : 0;
  }

  expectencyWhenExercising(){
    if(this.exercise === "light"){
      this.averageLifeExpectency += 4;
    }else if(this.exercise === "medium"){
      this.averageLifeExpectency += 7;
    }else{
      this.averageLifeExpectency += 5;
    }
  }

  expectencyWhenDrinking(){
    if(this.drink === 2){
      this.averageLifeExpectency -= 1;
    }else if(this.drink === 3){
      this.averageLifeExpectency -= 3;
    }else{
      this.averageLifeExpectency -= 0;
    }
  }

  parseBoolean(stringBoolean){
    return stringBoolean === "true" ? true : false;
  }

}
