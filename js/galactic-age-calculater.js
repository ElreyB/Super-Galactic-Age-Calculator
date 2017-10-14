export class GalacticAgeCalculater {
  constructor(age){
    this.earthDays = 365;
    this.age = age;
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
}
