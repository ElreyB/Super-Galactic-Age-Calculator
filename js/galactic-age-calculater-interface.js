import { GalacticAgeCalculater } from './../js/galactic-age-calculater.js';

$(document).ready(function(){
  $('.date-difference').submit(function(e){
    e.preventDefault();
    const date1Input = $("input.recent-date").val();
    const date2Input = $("input.other-date").val();
    $(".result span").text(GalacticAgeCalculater.secondsByDates(date1Input, date2Input)).parent().removeClass("hide");
    $("form.date-difference")[0].reset();
  });


  $('.information-form').submit(function(e){
    e.preventDefault();

    $("div.information-form").addClass('hide');
    $("div.age-result").removeClass('hide');

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

    if(galacticAgeCalculater.age > galacticAgeCalculater.expectencyOnPlanet("Earth")){
      $('p.surpass').removeClass('hide');
    }
  });

// Navigation button clicks for page
  $("button.form").click(function(){
    $(".date").addClass('hide');
    $("div.information-form").removeClass('hide');
  });

  $('button.expectency-result').click(function(){
    $("div.age-result").addClass('hide');
    $("div.expectency-result").removeClass('hide');
  });

  $('button.age-result').click(function(){
    $("div.expectency-result").addClass('hide');
    $("div.age-result").removeClass('hide');
  });

  $('button.return-form').click(function(){
    $("div.expectency-result").addClass('hide');
    $("div.age-result").addClass('hide');
    $("div.information-form").removeClass('hide');
    $("form.information-form")[0].reset();
  });

  $("button.return-home").click(function(){
      window.location.reload(false);
    });
});
