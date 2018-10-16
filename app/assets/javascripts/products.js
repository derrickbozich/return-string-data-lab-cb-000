$(function(){
  $('.js-more').on('click', function(){
    const id = parseInt(this.dataset.id)
    const descriptionURL = `product/${id}/description`
    const inventoryURL = `product/${id}/inventory`

    $.get(descriptionURL, data => {
      $('#product-' + id).text(data);
    })

    $.get(inventoryURL, data => {
      const div = $('#product-' + id + '-inventory');
      if (data) {
        div.text("Available");
      } else {
        div.text("Sold Out");
      }
    })




  })
})
