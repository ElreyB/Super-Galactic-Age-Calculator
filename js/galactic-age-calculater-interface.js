import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

$(document).ready(function(){
  $('.age-form').submit(function(e){
    e.preventDefault();
    const ageInput = parseInt($('input#age').val());
    const galacticAgeCalculater = new GalacticAgeCalculater();

    $('.earth-seconds').text(galacticAgeCalculater.secondsOnEarth(ageInput));

    $('.mercury-years').text(galacticAgeCalculater.yearsOnMercury(ageInput));

    $('.venus-years').text(galacticAgeCalculater.yearsOnVenus(ageInput));

    $('.mars-years').text(galacticAgeCalculater.yearsOnMars(ageInput));

    $('.jupiter-years').text(galacticAgeCalculater.yearsOnJupiter(ageInput));
  });
});
