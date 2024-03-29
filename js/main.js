(function repaintLines() {
jqSimpleConnect.repaintAll();
setTimeout(repaintLines, 10);
})();

$('.closeButton').click(function() {
  $(".story").hide(200);
});
$(document).keyup(function(e){
  if (e.which === 27) {
      $('.closeButton:visible').click();
  } else if (e.which === 13) {
    if ($(".closeButton").is(":visible")) {
      $('.closeButton:visible').click();
    } else if ($(".introduction").is(":visible")) {
      $(".introduction").click();
    } else {
      $('.plus:visible').click();
    }
  } else {
    return false;
  }
});


// ROUTE Z
$("#4zChoice, #4zTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#5a").hide("fold", 200);
  $("#4a").switchClass("pending", "selected", 150, "easeInOutQuad");
  $("#4zChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
  $("#4zTriangle").detach();
  $("#5z").show(200).switchClass("", "plus", 150, "easeInOutQuad");
  setTimeout(function() {
    jqSimpleConnect.connect("#4a", "#4z", {radius: 20, color: 'black'});
    jqSimpleConnect.connect("#4z", "#5z", {radius: 20, color: 'black'});
    $(window).scrollTo($('#5z'), 800);
  }, 150);
  }
});

$("#5z").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#5zStory").show(200);
  }
});
$("#5zStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#6z").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#5z").switchClass("plus", "selected", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#5z", "#6z", {radius: 20, color: 'black'});
      $(window).scrollTo($('#6z'), 800);
    }, 150);
  }, 210);
});

$("#6z").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#5a, #6a").addClass("filler").show();
    $("#7a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#6z").switchClass("plus", "selected", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#6z", "#7a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#7a'), 800);
    }, 150);
  }
});

$("#12zChoice , #12zTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#12a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#13a").hide("fold", 200);
    $("#12zChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#12zTriangle").detach();
    $("#13z").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#12a", "#12z", {radius: 20, color: 'black'});
      jqSimpleConnect.connect("#12z", "#13z", {radius: 20, color: 'black'});
      $(window).scrollTo($('#13z'), 800);
    }, 150);
  }
});

$("#13z").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#13zStory").show(200);
  }
});
$("#13zStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#13z").switchClass("plus", "selected", 150, "easeInOutQuad");
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      $(".card[id$='c']").not("#28c").addClass("filler").show("fold", 200);
      $("#28c").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#13z", "#28c", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28c'), 800);
        }, 2250);
      }, 150);
    }, 500);
  }, 210);
});

$("#26zChoice, #26zTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#27z").switchClass("", "plus", 150, "easeInOutQuad").show(200);
    $("#26a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#26zChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#26zTriangle").detach();
    $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b, #9b, #10b, #11b, #12b, #13b, #14b, #15b, #16b, #17b, #18b, #19b, #20b, #21b, #22b, #23b, #24b, #25b, #26b, #27a").hide("fold", 200);
    setTimeout(function() {
      jqSimpleConnect.connect("#26a", "#26z", {radius: 20, color: 'black'});
      jqSimpleConnect.connect("#26z", "#27z", {radius: 20, color: 'black'});
      $(window).scrollTo($('#27z'), 800);
    }, 150);
  }
});

$("#27z").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#27zStory").show(200);
  }
});
$("#27zStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#27z").switchClass("plus", "selected", 150, "easeInOutQuad");
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      $("#28z").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#27z", "#28z", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28z'), 800);
        }, 2000);
      }, 150);
    }, 500);
  }, 210);
});

$("#28z").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#28zStory").show(200);
  }
});
$("#28zStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#28z").switchClass("plus", "pending", 150, "easeInOutQuad");
    $(".filler").show("fold", 200);
    $(window).scrollTo($('#28z'), 800);
    setTimeout(function() {
      $(".choiceText").addClass("selected decided").show("fade");
      $(".horizontalDecision, .verticalDecision").removeClass("filler").show("fade");
      $(".card[data-summary]").not("#28z").addClass("pending").removeClass("filler").show("fade");
    }, 250);
    setTimeout(function() {
      $(window).scrollTo($('#1a'), 6000);
      setTimeout(function() {
        jqSimpleConnect.removeAll();
        setTimeout(function() {
          $(".d").hide("drop", {direction: "down"});
          setTimeout(function() {
            $(".z").hide("drop", {direction: "down"});
            setTimeout(function() {
              $(".c").hide("drop", {direction: "down"});
              setTimeout(function() {
                $(".a").hide("drop", {direction: "down"});
                setTimeout(function() {
                  $(".b").hide("drop", {direction: "down"});
                  setTimeout(function() {
                    $("#endQuote1").show("fade");
                  }, 2500);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 100);
      }, 5000);
    }, 2210);
  }, 210);
});


// ROUTE A

$("#1a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#1aStory").show(200);
  }
});
$("#1aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#2a, #1b").show("fold", 200);
    $("#1a").switchClass("plus", "pending", 150, "easeInOutQuad");
    setTimeout(function() {
      $(window).scrollTo($('#2a'), 400);
    }, 210);
  }, 210);
});

$("#2aChoice, #2aTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#1b").hide("fold", 200);
  $("#1a").switchClass("pending", "selected", 150, "easeInOutQuad");
  $("#2aChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
  $("#2aTriangle").detach();
  $("#3a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
  setTimeout(function() {
    jqSimpleConnect.connect("#1a", "#3a", {radius: 20, color: 'black'});
    $(window).scrollTo($('#3a'), 800);
  }, 150);
  }
});

$("#3a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#3aStory").show(200);
  }
});
$("#3aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#4a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#3a").switchClass("plus", "selected", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#3a", "#4a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#4a'), 800);
    }, 150);
  }, 210);
});

$("#4a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#4aStory").show(200);
  }
});
$("#4aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#1z, #2z, #3z, #5a, #4z").show("fold", 200);
    $("#4a").switchClass("plus", "pending", 150, "easeInOutQuad");
    setTimeout(function() {
      $(window).scrollTo($('#5a'), 400);
    }, 210);
  }, 210);
});

$("#5aChoice, #5aTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#4a").switchClass("pending", "selected", 150, "easeInOutQuad");
  $("#5aChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
  $("#5aTriangle").detach();
  $("#6a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
  $("#1z, #2z, #3z, #4z").hide("fold", 200);
  setTimeout(function() {
    jqSimpleConnect.connect("#4a", "#6a", {radius: 20, color: 'black'});
    $(window).scrollTo($('#6a'), 800);
  }, 150);
  }
});

$("#6a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#6aStory").show(200);
  }
});
$("#6aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#7a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#6a").switchClass("plus", "selected", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#6a", "#7a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#7a'), 800);
    }, 150);
  }, 210);
});

$("#7a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#7aStory").show(200);
  }
});
$("#7aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#8a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#7a").switchClass("plus", "selected", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#7a", "#8a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#8a'), 800);
    }, 150);
  }, 210);
});

$("#8a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#8aStory").show(200);
  }
});
$("#8aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#9a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#8a").switchClass("plus", "selected", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#8a", "#9a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#9a'), 800);
    }, 150);
  }, 210);
});

$("#9a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#9aStory").show(200);
  }
});
$("#9aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#8a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#10a, #9b").show("fold", 200);
    $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").show("fold", 200).addClass("filler");
    $("#9a").switchClass("plus", "pending", 150, "easeInOutQuad");
    setTimeout(function() {
      $(window).scrollTo($('#10a'), 400);
    }, 210);
  }, 210);
});

$("#10aChoice, #10aTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#9b").hide("fold", 200);
  $("#9a").switchClass("pending", "selected", 150, "easeInOutQuad");
  $("#10aChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
  $("#10aTriangle").detach();
  $("#11a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
  $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").hide("fold", 200);
  setTimeout(function() {
    jqSimpleConnect.connect("#9a", "#11a", {radius: 20, color: 'black'});
    $(window).scrollTo($('#11a'), 800);
  }, 150);
  }
});

$("#11a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#11aStory").show(200);
  }
});
$("#11aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#11a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#12a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#11a", "#12a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#12a'), 800);
    }, 150);
  }, 210);
});

$("#12a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#12aStory").show(200);
  }
});
$("#12aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#12a").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#13a, #12z").show("fold", 200);
    if ($("#4zChoice").is(":visible") == true) {
      $("#7z, #8z, #9z, #10z, #11z").show("fold", 200);
    } else {
      $("#1z, #2z, #3z, #4z, #5z, #6z, #7z, #8z, #9z, #10z, #11z").show("fold", 200).switchClass("", "filler", 150, "easeInOutQuad");
    }
    setTimeout(function() {
      $(window).scrollTo($('#13a'), 400);
    }, 210);
  }, 210);
});

$("#13aChoice , #13aTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#12a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#13aChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#13aTriangle").detach();
    $("#14a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
      if ($("#4zChoice").hasClass("selected") == true) {
        $("#7z, #8z, #9z, #10z, #11z, #12z").hide("fold", 200);
      } else {
        $("#1z, #2z, #3z, #4z, #5z, #6z, #7z, #8z, #9z, #10z, #11z, #12z").hide("fold", 200);
      }
    setTimeout(function() {
      jqSimpleConnect.connect("#12a", "#14a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#14a'), 800);
    }, 150);
  }
});

$("#14a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#14aStory").show(200);
  }
});
$("#14aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#14a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#15a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#14a", "#15a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#15a'), 800);
    }, 150);
  }, 210);
});

$("#15a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#15aStory").show(200);
  }
});
$("#15aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#15a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#16a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#15a", "#16a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#16a'), 800);
    }, 150);
  }, 210);
});

$("#16a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#16aStory").show(200);
  }
});
$("#16aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#16a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#17a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#16a", "#17a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#17a'), 800);
    }, 150);
  }, 210);
});

$("#17a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#17aStory").show(200);
  }
});
$("#17aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#17a").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#18a, #17b").show("fold", 200);
    $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b, #9b, #10b, #11b, #12b, #13b, #14b, #15b, #16b").show("fold", 200).addClass("filler");
    setTimeout(function() {
      $(window).scrollTo($('#18a'), 400);
    }, 210);
  }, 210);
});

$("#18aChoice , #18aTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#17a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#18aChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#18aTriangle").detach();
    $("#19a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b, #9b, #10b, #11b, #12b, #13b, #14b, #15b, #16b, #17b").hide("fold", 200);
    setTimeout(function() {
      jqSimpleConnect.connect("#17a", "#19a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#19a'), 800);
    }, 150);
  }
});

$("#19a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#19a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#20a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#19a", "#20a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#20a'), 800);
    }, 150);
  }
});

$("#20a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#20aStory").show(200);
  }
});
$("#20aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#20a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#21a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#20a", "#21a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#21a'), 800);
    }, 150);
  }, 210);
});

$("#21a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#21aStory").show(200);
  }
});
$("#21aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#21a").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#22a, #21b").show("fold", 200);
    $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b, #9b, #10b, #11b, #12b, #13b, #14b, #15b, #16b, #17b, #18b, #19b, #20b").show("fold", 200).addClass("filler");
    setTimeout(function() {
      $(window).scrollTo($('#22a'), 400);
    }, 210);
  }, 210);
});

$("#22aChoice , #22aTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#21a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#22aChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#22aTriangle").detach();
    $("#23a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b, #9b, #10b, #11b, #12b, #13b, #14b, #15b, #16b, #17b, #18b, #19b, #20b, #21b").hide("fold", 200);
    setTimeout(function() {
      jqSimpleConnect.connect("#21a", "#23a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#23a'), 800);
    }, 150);
  }
});

$("#23a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#23aStory").show(200);
  }
});
$("#23aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#23a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#24a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#23a", "#24a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#24a'), 800);
    }, 150);
  }, 210);
});

$("#24a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#24aStory").show(200);
  }
});
$("#24aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#24a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#25a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#24a", "#25a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#25a'), 800);
    }, 150);
  }, 210);
});

$("#25a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#25aStory").show(200);
  }
});
$("#25aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#25a").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#26a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#24a", "#26a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#26a'), 800);
    }, 150);
  }, 210);
});

$("#26a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
  $("#26aStory").show(200);
  }
});
$("#26aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#26a").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#27a, #26b, #26z").show("fold", 200);
    $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b, #9b, #10b, #11b, #12b, #13b, #14b, #15b, #16b, #17b, #18b, #19b, #20b, #21b, #22b, #23b, #24b, #25b").show("fold", 200).addClass("filler");
    if ($("#4zChoice").hasClass("selected") == true) {
      $("#7z, #8z, #9z, #10z, #11z, #12z, #13z, #14z, #15z, #16z, #17z, #18z, #19z, #20z, #21z, #22z, #23z, #24z, #25z").show("fold", 200).addClass("filler");
    } else {
      $("#1z, #2z, #3z, #4z, #5z, #6z, #7z, #8z, #9z, #10z, #11z, #12z, #13z, #14z, #15z, #16z, #17z, #18z, #19z, #20z, #21z, #22z, #23z, #24z, #25z").show("fold", 200).addClass("filler");
    }
    setTimeout(function() {
      $(window).scrollTo($('#27a'), 400);
    }, 210);
  }, 210);
});

$("#27aChoice, #27aTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#28a").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
    $("#26a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#27aChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#27aTriangle").detach();
    $("#1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b, #9b, #10b, #11b, #12b, #13b, #14b, #15b, #16b, #17b, #18b, #19b, #20b, #21b, #22b, #23b, #24b, #25b, #26b").hide("fold", 200);
    if ($("#4zChoice").hasClass("selected") == true) {
      $("#7z, #8z, #9z, #10z, #11z, #12z, #13z, #14z, #15z, #16z, #17z, #18z, #19z, #20z, #21z, #22z, #23z, #24z, #25z, #26z").hide("fold", 200);
    } else {
      $("#1z, #2z, #3z, #4z, #5z, #6z, #7z, #8z, #9z, #10z, #11z, #12z, #13z, #14z, #15z, #16z, #17z, #18z, #19z, #20z, #21z, #22z, #23z, #24z, #25z, #26z").hide("fold", 200);
    }
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      jqSimpleConnect.connect("#26a", "#28a", {radius: 20, color: 'black'});
      setTimeout(function() {
        $(window).scrollTo($('#28a'), 800);
      }, 2000);
    }, 150);
  }
});

$("#28a").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#28aStory").show(200);
  }
});
$("#28aStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#28a").switchClass("plus", "pending", 150, "easeInOutQuad");
    $(".filler").show("fold", 0);
    setTimeout(function() {
      $(".choiceText").addClass("selected decided").show("fade");
      $(".horizontalDecision, .verticalDecision").removeClass("filler").show("fade");
      $(".card[data-summary]").not("#28a").addClass("pending").removeClass("filler").show("fade");
    }, 250);
    setTimeout(function() {
      $(window).scrollTo($('#1a'), 6000);
      setTimeout(function() {
        jqSimpleConnect.removeAll();
        setTimeout(function() {
          $(".d").hide("drop", {direction: "down"});
          setTimeout(function() {
            $(".z").hide("drop", {direction: "down"});
            setTimeout(function() {
              $(".c").hide("drop", {direction: "down"});
              setTimeout(function() {
                $(".a").hide("drop", {direction: "down"});
                setTimeout(function() {
                  $(".b").hide("drop", {direction: "down"});
                  setTimeout(function() {
                    $("#endQuote1").show("fade");
                  }, 2500);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 100);
      }, 5000);
    }, 2210);
  }, 210);
});


// ROUTE B

$("#1bChoice, #1bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#2a").hide("fold", 200);
    $("#1a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#1bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#1bTriangle").detach();
    $("#2b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#1a", "#1b", {radius: 20, color: 'black'});
      jqSimpleConnect.connect("#1b", "#2b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#2b'), 800);
    }, 150);
  }
});

$("#2b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#2bStory").show(200);
  }
});
$("#2bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#3b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#2b").switchClass("plus", "selected", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#2b", "#3b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#3b'), 800);
    }, 150);
  }, 210);
});

$("#3b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#3bStory").show(200);
  }
});
$("#3bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#3b").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#4b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#3b", "#4b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#4b'), 800);
    }, 150);
  }, 210);
});

$("#4b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#4bStory").show(200);
  }
});
$("#4bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#4b").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#1c, #2c, #3c").show("fold", 200);
    $("#5b, #4c").show("fold", 200);
    setTimeout(function() {
      $(window).scrollTo($('#5b'), 400);
    }, 210);
  }, 210);
});

$("#5bChoice, #5bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#4b").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#1c, #2c, #3c, #4c").hide("fold", 200);
    $("#5bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#5bTriangle").detach();
    $("#6b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#4b", "#6b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#6b'), 800);
    }, 150);
  }
});

$("#6b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#6bStory").show(200);
  }
});
$("#6bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#6b").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#7b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#6b", "#7b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#7b'), 800);
    }, 150);
  }, 210);
});

$("#7b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#7bStory").show(200);
  }
});
$("#7bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#7b").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#1c, #2c, #3c, #4c, #5c, #6c").show("fold", 200).addClass("filler");
    $("#8b, #7c").show("fold", 200);
    setTimeout(function() {
      $(window).scrollTo($('#8b'), 400);
    }, 210);
  }, 210);
});

$("#8bChoice, #8bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#7b").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#1c, #2c, #3c, #4c, #5c, #5c, #6c, #7c").hide("fold", 200);
    $("#8bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#8bTriangle").detach();
    $("#9b").addClass("filler").show("fold", 200);
    $("#10b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#7b", "#10b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#10b'), 800);
    }, 150);
  }
});

$("#9bChoice, #9bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#9a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#10a").hide("fold", 200);
    $("#9bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#9bTriangle").detach();
    $("#1c, #2c, #3c, #4c, #5c, #6c, #7c, #8c").show("fold", 200).addClass("filler");
    $("#9c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#9a", "#9c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#9c'), 800);
    }, 150);
  }
});

$("#10b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#10bStory").show(200);
  }
});
$("#10bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#10b").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#11b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#10b", "#11b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#11b'), 800);
    }, 150);
  }, 210);
});

$("#11b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#11bStory").show(200);
  }
});
$("#11bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#11b").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#12b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#11b", "#12b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#12b'), 800);
    }, 150);
  }, 210);
});

$("#12b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#12bStory").show(200);
  }
});
$("#12bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#12b").switchClass("plus", "selected", 150, "easeInOutQuad");
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      $("#13b, #14b, #15b, #16b, #17b, #18b, #19b, #20b, #21b, #22b, #23b, #24b, #25b, #26b, #27b").addClass("filler").show("fold", 200);
      $("#28b").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#12b", "#28b", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28b'), 800);
        }, 2000);
      }, 150);
    }, 500);
  }, 210);
});

$("#14bChoice, #14bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#14c").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#15c").hide("fold", 200);
    $("#14bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#14bTriangle").detach();
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      $("#10a, #11a, #12a, #13a, #14a, #15a, #16a, #17a, #18a, #19a, #20a, #21a, #22a, #23a, #24a, #25a, #26a, #27a").addClass("filler").show("fold", 200);
      $("#28a").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#14c", "#14b", {radius: 20, color: 'black'});
        jqSimpleConnect.connect("#14b", "#28a", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28a'), 800);
        }, 2000);
      }, 150);
    }, 500);
  }
});

$("#17bChoice, #17bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#17a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#18a").hide("fold", 200);
    $("#17bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#17bTriangle").detach();
    $("#1c, #2c, #3c, #4c, #5c, #6c, #7c, #8c, #9c, #10c, #11c, #12c, #13c, #14c, #15c, #16c").show("fold", 200).addClass("filler");
    $("#17c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#17a", "#17c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#17c'), 800);
    }, 150);
  }
});

$("#19bChoice, #19bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#19c").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#20c").hide("fold", 200);
    $("#19bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#19bTriangle").detach();
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      $("#18a, #19a, #20a, #21a, #22a, #23a, #24a, #25a, #26a, #27a").addClass("filler").show("fold", 200);
      $("#28a").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#19c", "#19b", {radius: 20, color: 'black'});
        jqSimpleConnect.connect("#19b", "#28a", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28a'), 800);
        }, 1000);
      }, 150);
    }, 500);
  }
});

$("#21bChoice, #21bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#21a").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#22a").hide("fold", 200);
    $("#21bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#21bTriangle").detach();
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      $("#22a, #23a, #24a, #25a, #26a, #27a").addClass("filler").show("fold", 200);
      $("#28a").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#21a", "#21b", {radius: 20, color: 'black'});
        jqSimpleConnect.connect("#21b", "#28a", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28a'), 800);
        }, 1000);
      }, 150);
    }, 500);
  }
});

$("#26bChoice, #26bTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#26a").switchClass("pending", "selected", 150, "easeInOutQuad");
    if ($("#4zChoice").hasClass("selected") == true) {
      $("#27a, #7z, #8z, #9z, #10z, #11z, #12z, #13z, #14z, #15z, #16z, #17z, #18z, #19z, #20z, #21z, #22z, #23z, #24z, #25z, #26z, #27z").hide("fold", 200);
    } else {
      $("#27a, #1z, #2z, #3z, #4z, #5z, #6z, #7z, #8z, #9z, #10z, #11z, #12z, #13z, #14z, #15z, #16z, #17z, #18z, #19z, #20z, #21z, #22z, #23z, #24z, #25z, #26z, #27z").hide("fold", 200);
    }
    $("#26bChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#26bTriangle").detach();
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      $("#27a").addClass("filler").show("fold", 200);
      $("#28a").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#26a", "#26b", {radius: 20, color: 'black'});
        jqSimpleConnect.connect("#26b", "#28a", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28a'), 800);
        }, 1000);
      }, 150);
    }, 500);
  }
});

$("#28b").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#28bStory").show(200);
  }
});
$("#28bStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#28b").switchClass("plus", "pending", 150, "easeInOutQuad");
    $(".filler").show("fold", 0);
    setTimeout(function() {
      $(".choiceText").addClass("selected decided").show("fade");
      $(".horizontalDecision, .verticalDecision").removeClass("filler").show("fade");
      $(".card[data-summary]").not("#28b").addClass("pending").removeClass("filler").show("fade");
      $(window).scrollTo($('#28b'));
    }, 250);
    setTimeout(function() {
      $(window).scrollTo($('#1a'), 6000);
      setTimeout(function() {
        jqSimpleConnect.removeAll();
        setTimeout(function() {
          $(".d").hide("drop", {direction: "down"});
          setTimeout(function() {
            $(".z").hide("drop", {direction: "down"});
            setTimeout(function() {
              $(".c").hide("drop", {direction: "down"});
              setTimeout(function() {
                $(".a").hide("drop", {direction: "down"});
                setTimeout(function() {
                  $(".b").hide("drop", {direction: "down"});
                  setTimeout(function() {
                    $("#endQuote1").show("fade");
                  }, 2500);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 100);
      }, 5000);
    }, 2210);
  }, 210);
});


// ROUTE C

$("#4cChoice, #4cTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#4b").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#4cChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#4cTriangle").detach();
    $("#5b").hide("fold", 200);
    $("#5c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#4b", "#4c", {radius: 20, color: 'black'});
      jqSimpleConnect.connect("#4c", "#5c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#5c'), 800);
    }, 150);
  }
});

$("#5c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#5cStory").show(200);
  }
});
$("#5cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#6c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    $("#5c").switchClass("plus", "selected", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#5c", "#6c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#6c'), 800);
    }, 150);
  }, 210);
});

$("#6c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#6cStory").show(200);
  }
});
$("#6cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#1d, #2d, #3d, #4d, #5d, #6d").show("fold", 200)
    $("#6c").switchClass("plus", "pending", 150, "easeInOutQuad");
  }, 210);
});

$("#7cChoice, #7cTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#7b").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#7cChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#7cTriangle").detach();
    $("#8b").hide("fold", 200);
    $("#1d, #2d, #3d, #4d, #5d, #6d").addClass("filler").show("fold", 200);
    $("#7d").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#7b", "#7d", {radius: 20, color: 'black'});
      $(window).scrollTo($('#7d'), 800);
    }, 150);
  }
});

$("#9c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#9cStory").show(200);
  }
});
$("#9cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#9c").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#10c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#9c", "#10c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#10c'), 800);
    }, 150);
  }, 210);
});

$("#10c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#10cStory").show(200);
  }
});
$("#10cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#10c").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#11c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#10c", "#11c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#11c'), 800);
    }, 150);
  }, 210);
});

$("#11c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#11cStory").show(200);
  }
});
$("#11cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#11c").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#12c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#11c", "#12c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#12c'), 800);
    }, 150);
  }, 210);
});

$("#12c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#12cStory").show(200);
  }
});
$("#12cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#12c").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#13c, #12d").show("fold", 200);
    $("#1d, #2d, #3d, #4d, #5d, #6d, #7d, #8d, #9d, #10d, #11d").addClass("filler").show("fold", 200);
    setTimeout(function() {
      $(window).scrollTo($('#13c'), 400);
    }, 210);
  }, 210);
});

$("#13cChoice, #13cTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#12c").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#13cChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#13cTriangle").detach();
    $("#1d, #2d, #3d, #4d, #5d, #6d, #7d, #8d, #9d, #10d, #11d, #12d").hide("fold", 200);
    $("#14c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#12c", "#14c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#14c'), 800);
    }, 150);
  }
});

$("#14c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#14cStory").show(200);
  }
});
$("#14cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#14c").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#15c, #14b").show("fold", 200);
    $("#10b, #11b, #12b, #13b").addClass("filler").show("fold", 200);
    setTimeout(function() {
      $(window).scrollTo($('#15c'), 400);
    }, 210);
  }, 210);
});

$("#15cChoice, #15cTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#14c").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#15cChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#15cTriangle").detach();
    $("#11b, #12b, #13b, #14b").removeClass("filler").hide("fold", 200);
    $("#16c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#14c", "#16c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#16c'), 800);
    }, 150);
  }
});

$("#16c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#16cStory").show(200);
  }
});
$("#16cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#16c").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#10b, #11b").addClass("filler").show("fold", 200);
    $("#12b").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#16c", "#12b", {radius: 20, color: 'black'});
      $(window).scrollTo($('#10b'), 800);
    }, 150);
  }, 210);
});

$("#17c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#17cStory").show(200);
  }
});
$("#17cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#17c").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#18c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#17c", "#18c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#18c'), 800);
    }, 150);
  }, 210);
});

$("#18c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#18cStory").show(200);
  }
});
$("#18cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#18c").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#19c").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#18c", "#19c", {radius: 20, color: 'black'});
      $(window).scrollTo($('#19c'), 800);
    }, 150);
  }, 210);
});

$("#19c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#19cStory").show(200);
  }
});
$("#19cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#19c").switchClass("plus", "pending", 150, "easeInOutQuad");
    $("#20c, #19b").show("fold", 200);
    $("#18b").addClass("filler").show("fold", 200);
    setTimeout(function() {
      $(window).scrollTo($('#20c'), 400);
    }, 210);
  }, 210);
});

$("#20cChoice, #20cTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#19c").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#20cChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#20cTriangle").detach();
    $("#18b, #19b").hide("fold", 200);
    $("#26b").addClass("filler");
    $("#18a, #19a, #20a, #21a, #22a, #23a, #24a, #25a").addClass("filler").show("fold", 200);
    $("#26a").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#19c", "#20c", {radius: 20, color: 'black'});
      jqSimpleConnect.connect("#20c", "#26a", {radius: 20, color: 'black'});
      $(window).scrollTo($('#26a'), 800);
    }, 150);
  }
});

$("#28c").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#28cStory").show(200);
  }
});
$("#28cStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#28c").switchClass("plus", "pending", 150, "easeInOutQuad");
    $(".filler").show("fold", 200);
    setTimeout(function() {
      $(".choiceText").addClass("selected decided").show("fade");
      $(".horizontalDecision, .verticalDecision").removeClass("filler").show("fade");
      $(".card[data-summary]").not("#28c").addClass("pending").removeClass("filler").show("fade");
    }, 250);
    setTimeout(function() {
      $(window).scrollTo($('#1a'), 6000);
      setTimeout(function() {
        jqSimpleConnect.removeAll();
        setTimeout(function() {
          $(".d").hide("drop", {direction: "down"});
          setTimeout(function() {
            $(".z").hide("drop", {direction: "down"});
            setTimeout(function() {
              $(".c").hide("drop", {direction: "down"});
              setTimeout(function() {
                $(".a").hide("drop", {direction: "down"});
                setTimeout(function() {
                  $(".b").hide("drop", {direction: "down"});
                  setTimeout(function() {
                    $("#endQuote1").show("fade");
                  }, 2500);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 100);
      }, 5000);
    }, 2210);
  }, 210);
});

// ROUTE D

$("#6dChoice, #6dTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#6c").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#6dChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#6dTriangle").detach();
    $("#7d").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#6c", "#6d", {radius: 20, color: 'black'});
      jqSimpleConnect.connect("#6d", "#7d", {radius: 20, color: 'black'});
      $(window).scrollTo($('#7d'), 800);
    }, 150);
  }
});

$("#7d").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#7dStory").show(200);
  }
});
$("#7dStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#7d").switchClass("plus", "selected", 150, "easeInOutQuad");
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      $(".card[id$='d']").not("#1d, #2d, #3d, #4d, #5d, #6d, #7d, #28d").addClass("filler").show("fold", 200);
      $("#28d").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#7d", "#28d", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28d'), 800);
        }, 2250);
      }, 150);
    }, 500);
  }, 210);
});

$("#12dChoice, #12dTriangle").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#12c").switchClass("pending", "selected", 150, "easeInOutQuad");
    $("#12dChoice").switchClass("", "selected decided", 150, "easeInOutQuad");
    $("#12dTriangle").detach();
    $("#13c").hide("fold", 200);
    $("#13d").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#12c", "#12d", {radius: 20, color: 'black'});
      jqSimpleConnect.connect("#12d", "#13d", {radius: 20, color: 'black'});
      $(window).scrollTo($('#13d'), 800);
    }, 150);
  }
});

$("#13d").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#13dStory").show(200);
  }
});
$("#13dStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#13d").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#14d").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#13d", "#14d", {radius: 20, color: 'black'});
      $(window).scrollTo($('#14d'), 800);
    }, 150);
  }, 210);
});

$("#14d").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#14dStory").show(200);
  }
});
$("#14dStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#14d").switchClass("plus", "selected", 150, "easeInOutQuad");
    $("#15d").show(200).switchClass("", "plus", 150, "easeInOutQuad");
    setTimeout(function() {
      jqSimpleConnect.connect("#14d", "#15d", {radius: 20, color: 'black'});
      $(window).scrollTo($('#15d'), 800);
    }, 150);
  }, 210);
});

$("#15d").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#15dStory").show(200);
  }
});
$("#15dStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#15d").switchClass("plus", "selected", 150, "easeInOutQuad");
    $('body').fadeTo('slow', 0.3, function()
    {
        $(this).css('background-image', 'url("images/bg2.jpg")');
    }).fadeTo('slow', 1);
    setTimeout(function() {
      if ($("#4zChoice").is(":visible") == true) {
        $(".card[id$='z']").not("#4z, #5z, #6z, #28z").addClass("filler").show("fold", 200);
      } else {
        $(".card[id$='z']").not("#28z").addClass("filler").show("fold", 200);
      }
      $("#28z").switchClass("", "plus apocalypse", 150, "easeInOutQuad").show(200);
      setTimeout(function() {
        jqSimpleConnect.connect("#15d", "#28z", {radius: 20, color: 'black'});
        setTimeout(function() {
          $(window).scrollTo($('#28z'), 800);
        }, 2250);
      }, 150);
    }, 500);
  }, 210);
});

$("#28d").click(function() {
  if ($(this).hasClass("selected")) {
  } else {
    $("#28dStory").show(200);
  }
});
$("#28dStory > .closeButton").click(function() {
  setTimeout(function() {
    $("#28d").switchClass("plus", "pending", 150, "easeInOutQuad");
    $(".filler").show("fold", 200);
    setTimeout(function() {
      $(".downTriangle, .leftTriangle, .rightTriangle").detach();
      $(".choiceText").detach();
      $(".card").switchClass("filler horizontalDecision verticalDecision selected", "wife", 150, "easeInOutQuad").show("fade");
    }, 250);
    setTimeout(function() {
      $(window).scrollTo($('#1a'), 6000);
      setTimeout(function() {
        jqSimpleConnect.removeAll();
        setTimeout(function() {
          $(".d").hide("drop", {direction: "down"});
          setTimeout(function() {
            $(".z").hide("drop", {direction: "down"});
            setTimeout(function() {
              $(".c").hide("drop", {direction: "down"});
              setTimeout(function() {
                $(".a").hide("drop", {direction: "down"});
                setTimeout(function() {
                  $(".b").hide("drop", {direction: "down"});
                  setTimeout(function() {
                    $("#endQuote2").show("fade");
                  }, 2500);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 100);
      }, 5000);
    }, 2210);
  }, 210);
});
