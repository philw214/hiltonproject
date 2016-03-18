$( document ).ready(function() {

  var $cardGrid = $('#card-grid').isotope({
    layoutMode: 'fitRows',
    itemSelector: '.grid-item',
    fitRows: {
      gutter: 12
    }
  });

  function makeCards() {
    var cards = '';
    for (var i = 0; i < 100; i++) {
      cards += '<a class="grid-item"><img class="card-image" src="../assets/image.png"></a>';
    }
    return $(cards);
  }

  var deck = makeCards();

  $cardGrid.append(deck)
           .isotope('appended', deck);

});
