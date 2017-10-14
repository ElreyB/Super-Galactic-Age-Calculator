import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

$(document).ready(function(){
  $('.information-form').submit(function(e){
    e.preventDefault();
    const ageInput = parseInt($('input#age').val());
    const genderInput = $("input:radio[name=gender]:checked").val();
    let smokerInput = $("input:radio[name=smoker]:checked").val();
    const exerciseInput = $('.exercise').val();
    const drinksInput = parseInt($('.drinks').val());
    const galacticAgeCalculater = new GalacticAgeCalculater({ age: ageInput, gender: genderInput, smoker: smokerInput, exercise: exerciseInput, drink: drinksInput });

    debugger;

    $('.earth-seconds').text(galacticAgeCalculater.secondsOnEarth());

    $('.mercury-years').text(galacticAgeCalculater.yearsOnMercury());

    $('.venus-years').text(galacticAgeCalculater.yearsOnVenus());

    $('.mars-years').text(galacticAgeCalculater.yearsOnMars());

    $('.jupiter-years').text(galacticAgeCalculater.yearsOnJupiter());
  });
});
