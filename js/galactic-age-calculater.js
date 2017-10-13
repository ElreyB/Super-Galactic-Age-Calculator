export class GalacticAgeCalculater {
  constructor(){
  }

  secondsOnEarth(age){
    return age * 31536000;
  }

  secondsByDates(mostCurentDate, otherDate){
    let date1 = new Date(mostCurentDate);
    let date2 = new Date(otherDate);
    let difference = date1.getUTCFullYear() - date2.getUTCFullYear();

    return this.secondsOnEarth(difference);
  }

  yearsOnMercury(age){
    return age * 87.97
  }
}
