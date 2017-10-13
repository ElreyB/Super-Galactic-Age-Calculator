import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

describe('GalacticAgeCalculater', function(){
  var calculater;

  beforeEach(function() {
    calculater = new GalacticAgeCalculater(37)
  });

  it ("should return age in years", function(){
    expect(calculater.age).toEqual(37)
  });
});
