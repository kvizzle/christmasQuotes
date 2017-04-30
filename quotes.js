var quote = "";

var quotes = ['"One can never have enough socks", said Dumbledore. "Another Christmas has come and gone and I didn\'t get a single pair. People will insist on giving me books.', 'Then the Grinch thought of something he hadn\'t before! What if Christmas, he thought, doesn\'t come from a store. What if Christmas...perhaps...means a little bit more!', 'Our hearts grow tender with childhood memories and love of kindred, and we are better throughout the year for having, in spirit, become a child again at Christmas time.', 'My idea of Christmas, whether old-fashioned or modern, is very simple: loving others. Come to think of it, why do we have to wait for Christmas to do that?', 'Christmas can be celebrated in the school room with pine trees, tinsel and reindeers, but there must be no mention of the man whose birthday is being celebrated. One wonders how a teacher would answer if a student asked why it was called Christmas.', 'Christmas is doing a little something extra for someone.', 'He who has not Christmas in his heart will never find it under a tree.', 'Santa Claus has the right idea. Visit people only once a year.'];

var bround = ["rgb(120, 137, 255)", "rgb(168,107,255)", "rgb(116, 97, 232)", "rgb(107, 204, 255)"];

function randomNum(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

$(document).ready(function() {
  $("#tweet").hide();
  $("#getMessage").on("click", function(){
    $("#tweet").hide();
      
    quote = '"' + quotes[randomNum(0,quotes.length-1)] + '"';
    $(".message").hide().html(quote).fadeIn("slow", function(){
      $("#tweet").fadeIn("3000");
   });
  });
      
 $("#tweet").on("click", function(){
   $("#tweet").attr("href", "https://twitter.com/intent/tweet?text="+ quote);
 });
});
