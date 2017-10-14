import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

describe('GalacticAgeCalculater', function(){
  let maleUser;
  let femaleUser;
  let otherUser;

  beforeEach(function() {
    maleUser = new GalacticAgeCalculater({ age: 37, gender: "male", smoker: true, exercise: "light" })

    femaleUser = new GalacticAgeCalculater({ age: 25, gender: "female", smoker: false, exercise: "medium" })

    otherUser = new GalacticAgeCalculater({ age: 50, gender: "male", smoker: false, exercise: "heavy"})
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
    maleUser.genderaverageLifeExpectency()
    expect(maleUser.averageLifeExpectency).toEqual(76)
  });

  it("should return average age expectency for female", function(){
    femaleUser.genderaverageLifeExpectency()
    expect(femaleUser.averageLifeExpectency).toEqual(81)
  });

  it("should lower averageLifeExpectency by 10 years if a smoker", function(){
    maleUser.genderaverageLifeExpectency()
    maleUser.expectencyForSmoker()
    expect(maleUser.averageLifeExpectency).toEqual(66)
  });

  it("should lower averageLifeExpectency by 10 years if a smoker", function(){
    femaleUser.genderaverageLifeExpectency()
    femaleUser.expectencyForSmoker()
    expect(femaleUser.averageLifeExpectency).toEqual(81)
  });

  it("should add 4 years to averageLifeExpectency", function(){
    maleUser.genderaverageLifeExpectency()
    maleUser.expectencyWhenExercising()
    expect(maleUser.averageLifeExpectency).toEqual(80)
  });

  it("should add 4 years to averageLifeExpectency", function(){
    femaleUser.genderaverageLifeExpectency()
    femaleUser.expectencyWhenExercising()
    expect(femaleUser.averageLifeExpectency).toEqual(88)
  });

  it("should add 4 years to averageLifeExpectency", function(){
    otherUser.genderaverageLifeExpectency()
    otherUser.expectencyWhenExercising()
    expect(otherUser.averageLifeExpectency).toEqual(81)
  });
});
