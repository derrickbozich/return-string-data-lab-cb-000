$(function(){
  $('.js-more').on('click', function(){
    const id = parseInt(this.dataset.id)
    const descriptionURL = `product/${id}/description`
    const inventoryURL = `product/${id}/inventory`

    $.get(descriptionURL, data => {
      $('#product-' + id).text(data);
    })

    $.get(inventoryURL, data => {
      const result = $('#product-' + id + '-inventory').text(data);
    })




  })
})
