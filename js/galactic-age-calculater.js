export class GalacticAgeCalculater {
  constructor(options){
    this.earthDays = 365
    this.age = options.age
    this.gender = options.gender
    this.smoker = options.smoker
    this.exercise = options.exercise
    this.averageLifeExpectency = 0
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
    return parseInt((this.earthDays * this.age) / 686.98)
  }

  yearsOnJupiter(){
    return this.age * 12;
  }

  genderaverageLifeExpectency(){
    if (this.gender === "male"){
    this.averageLifeExpectency = 76;
    }else{
    this.averageLifeExpectency = 81;
    }
  }

  expectencyForSmoker(){
    this.smoker ? this.averageLifeExpectency -= 10 : 0;
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
}
