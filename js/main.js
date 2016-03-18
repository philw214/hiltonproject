$( document ).ready(function() {

  var $cardGrid = $('#card-grid').isotope({
    layoutMode: 'fitRows',
    itemSelector: '.grid-item',
    fitRows: {
      gutter: 12
    }
  });

  function makeCards(data) {
    var cards = '';
    for (var i = 0; i < 100; i++) {
      cards += '<a class="grid-item" href="#"><img class="card-image" src="http://news.hiltonworldwide.com/100countries'+ data[i].image +'"></a>';
    }
    return $(cards);
  }

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/assets/properties.json"})
    .done(function(data) {
      var dataLength = data.length;
      var deck = makeCards(data);
      $cardGrid.append(deck)
               .isotope('appended', deck);
  });

});
