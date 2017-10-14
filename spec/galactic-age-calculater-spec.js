import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

describe('GalacticAgeCalculater', function(){
  let maleUser;
  let femaleUser;
  let otherUser;

  beforeEach(function() {
    maleUser = new GalacticAgeCalculater({ age: 37, gender: "male", smoker: true, exercise: "light", drink: 1 })
    maleUser.genderaverageLifeExpectency()

    femaleUser = new GalacticAgeCalculater({ age: 25, gender: "female", smoker: false, exercise: "medium", drink: 2 })
    femaleUser.genderaverageLifeExpectency()

    otherUser = new GalacticAgeCalculater({ age: 50, gender: "male", smoker: false, exercise: "heavy", drink: 3 })
    otherUser.genderaverageLifeExpectency()
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
    expect(maleUser.averageLifeExpectency).toEqual(76)
  });

  it("should return average age expectency for female", function(){
    expect(femaleUser.averageLifeExpectency).toEqual(81)
  });

  it("should lower averageLifeExpectency by 10 years if a smoker", function(){
    maleUser.expectencyForSmoker()
    expect(maleUser.averageLifeExpectency).toEqual(66)
  });

  it("should not lower averageLifeExpectency by 10 years if a non-smoker", function(){
    femaleUser.expectencyForSmoker()
    expect(femaleUser.averageLifeExpectency).toEqual(81)
  });

  it("should add 4 years to averageLifeExpectency", function(){
    maleUser.expectencyWhenExercising()
    expect(maleUser.averageLifeExpectency).toEqual(80)
  });

  it("should add 4 years to averageLifeExpectency", function(){
    femaleUser.expectencyWhenExercising()
    expect(femaleUser.averageLifeExpectency).toEqual(88)
  });

  it("should add 4 years to averageLifeExpectency", function(){
    otherUser.expectencyWhenExercising()
    expect(otherUser.averageLifeExpectency).toEqual(81)
  });

  it("should not lower averageLifeExpectency if drink value is 1", function(){
    maleUser.expectencyWhenDrinking()
    expect(maleUser.averageLifeExpectency).toEqual(76)
  });

  it("should not lower averageLifeExpectency if drink value is 2", function(){
    femaleUser.expectencyWhenDrinking()
    expect(femaleUser.averageLifeExpectency).toEqual(80)
  });

  it("should not lower averageLifeExpectency if drink value is 3", function(){
    otherUser.expectencyWhenDrinking()
    expect(otherUser.averageLifeExpectency).toEqual(73)
  });
});
