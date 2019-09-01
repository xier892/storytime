$(".card, .endQuote").hide();
$(".story").hide();
$(".prompt:not(:first)").hide();
$(".introduction").click(function() {
  if ($("#director").is(":visible") == true) {
    $(".prompt").prev(".prompt:not('.done')").eq(0).addClass("done");
    $(".prompt").nextAll(".prompt:not('.done')").eq(0).slideDown(200);
    $(".done").slideUp(200);
    $(".introtext").animate({ scrollTop: $(".introtext").height() + 500 }, "slow");
  } else if ($(".final").is(":visible") == true) {
    $(".prompt").prev(".prompt:not('.done')").eq(0).addClass("done");
    $(".introduction-wrapper, .introtext").hide("blind");
    setTimeout(function() {
      $(".introduction").hide();
      $("#1a").show(200);
    }, 450);
  } else {
    $(".prompt").prev(".prompt:not('.done')").eq(0).addClass("done");
    $(".prompt").nextAll(".prompt:not('.done')").eq(0).slideDown(200);
    $(".introtext").animate({ scrollTop: $(".introtext").height() + 500 }, "slow");
  }
});
$(document).ready(function() {
  $(".wrapper").removeClass("hidden");
});
