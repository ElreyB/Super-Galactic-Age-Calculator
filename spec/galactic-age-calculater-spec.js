import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

describe('GalacticAgeCalculater', function(){
  let maleUser;
  let femaleUser;

  beforeEach(function() {
    maleUser = new GalacticAgeCalculater({ age: 37, gender: "male", smoker: true })

    femaleUser = new GalacticAgeCalculater({ age: 25, gender: "female", smoker: false })
  });

  it ("should return age in Earth seconds", function(){
    expect(maleUser.secondsOnEarth()).toEqual(1166832000)
  });

  it("should return dates difference in seconds", function(){
    expect(maleUser.secondsByDates('10-13-2017', '01-22-1980')).toEqual(1190502000)
  });

  it ("should return age in Mercury years", function(){
    expect(maleUser.yearsOnMercury()).toEqual(153)
  });

  it ("should return age in Venus years", function(){
    expect(maleUser.yearsOnVenus()).toEqual(55)
  });

  it ("should return age in Mars years", function(){
    expect(maleUser.yearsOnMars()).toEqual(19)
  });

  it ("should return age in Jupiter years", function(){
    expect(maleUser.yearsOnJupiter()).toEqual(444)
  });

  it("should return average age expectency for males", function(){
    expect(maleUser.genderLifeExpectency()).toEqual(76)
  });

  it("should return average age expectency for female", function(){
    expect(femaleUser.genderLifeExpectency()).toEqual(81)
  });

  // it("should lower lifeExpectency by 10 years if a smoker", function(){
  //   maleUser.expectencyForSmoker();
  //   expect(maleUser.averageLifeExpectency).toEqual(66)
  // });
});
