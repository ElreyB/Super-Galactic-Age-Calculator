import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

$(document).ready(function(){
  $('.age-form').submit(function(e){
    e.preventDefault();
    const ageInput = parseInt($('input#age').val());
    const galacticAgeCalculater = new GalacticAgeCalculater(ageInput);

    $('.earth-seconds').text(galacticAgeCalculater.secondsOnEarth());

    $('.mercury-years').text(galacticAgeCalculater.yearsOnMercury());

    $('.venus-years').text(galacticAgeCalculater.yearsOnVenus());

    $('.mars-years').text(galacticAgeCalculater.yearsOnMars());

    $('.jupiter-years').text(galacticAgeCalculater.yearsOnJupiter());
  });
});
