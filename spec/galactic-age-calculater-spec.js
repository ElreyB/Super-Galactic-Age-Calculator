import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

describe('GalacticAgeCalculater', function(){
  var calculateAge;

  beforeEach(function() {
    calculateAge = new GalacticAgeCalculater(37)
  });

  it ("should return age in Earth seconds", function(){
    expect(calculateAge.secondsOnEarth()).toEqual(1166832000)
  });

  it("should return dates difference in seconds", function(){
    expect(calculateAge.secondsByDates('10-13-2017', '01-22-1980')).toEqual(1190502000)
  });

  it ("should return age in Mercury years", function(){
    expect(calculateAge.yearsOnMercury()).toEqual(153)
  });

  it ("should return age in Venus years", function(){
    expect(calculateAge.yearsOnVenus()).toEqual(55)
  });

  it ("should return age in Mars years", function(){
    expect(calculateAge.yearsOnMars()).toEqual(19)
  });

  it ("should return age in Jupiter years", function(){
    expect(calculateAge.yearsOnJupiter()).toEqual(444)
  });


});
