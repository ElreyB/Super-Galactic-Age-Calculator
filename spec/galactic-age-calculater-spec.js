import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

describe('GalacticAgeCalculater', function(){
  var calculateAge;

  beforeEach(function() {
    calculateAge = new GalacticAgeCalculater()
  });

  it ("should return age in Earth seconds", function(){
    expect(calculateAge.secondsOnEarth(37)).toEqual(1166832000)
  });

  it("should return dates difference in seconds", function(){
    expect(calculateAge.secondsByDates('10-13-2017', '01-22-1980')).toEqual(1166832000)
  });

  it ("should return age in Mercury years", function(){
    expect(calculateAge.yearsOnMercury(37)).toEqual(153)
  });


});
