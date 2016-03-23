$( document ).ready(function() {

  var $cardGrid = $('#card-grid').isotope({
    layoutMode: 'fitRows',
    itemSelector: '.grid-item',
    fitRows: {
      gutter: 12
    }
  });

  $("body").on('click', '.grid-item', function(e) {
    $(this).toggleClass('flipped');
  });

  function makeCards(data) {
    var cards = '';
    for (var i = 0; i < data.length; i++) {
      cards += '<div class="grid-item"><div class="front"><img class="card-image" src="http://news.hiltonworldwide.com/100countries'+ data[i].image +'"></div><div class="back"></div></div>'
    }
    return $(cards);
  }

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/assets/properties.json"})
    .done(function(data) {
      var deck = makeCards(data);
      $cardGrid.append(deck)
               .isotope('appended', deck);
  });

});
