import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

$(document).ready(function(){
  $('.date-difference').submit(function(e){
    e.preventDefault();
    const date1Input = $("input.recent-date").val();
    const date2Input = $("input.other-date").val();
    $(".result span").text(GalacticAgeCalculater.secondsByDates(date1Input, date2Input)).parent().removeClass("hide");
  });

  $('.information-form').submit(function(e){
    e.preventDefault();
    const ageInput = parseInt($('input#age').val());
    const genderInput = $("input:radio[name=gender]:checked").val();
    const smokerInput = $("input:radio[name=smoker]:checked").val();
    const exerciseInput = $('.exercise').val();
    const drinksInput = parseInt($('.drinks').val());
    const galacticAgeCalculater = new GalacticAgeCalculater({ age: ageInput, gender: genderInput, smoker: smokerInput, exercise: exerciseInput, drink: drinksInput });

    $('.earth-seconds').text(galacticAgeCalculater.secondsOnEarth());

    $('.mercury-years').text(galacticAgeCalculater.yearsOnMercury());

    $('.venus-years').text(galacticAgeCalculater.yearsOnVenus());

    $('.mars-years').text(galacticAgeCalculater.yearsOnMars());

    $('.jupiter-years').text(galacticAgeCalculater.yearsOnJupiter());

    const planets = ["Earth", "Mercury", "Venus", "Mars", "Jupiter"];
    $.each(planets,function(index, planet){
      $(`.${planet.toLowerCase()}-expectency`).text(galacticAgeCalculater.expectencyOnPlanet(planet));
    });

  });



});
