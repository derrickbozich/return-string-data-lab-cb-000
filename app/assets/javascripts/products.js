$(function(){
  $('.js-more').on('click', function(){
    const id = parseInt(this.dataset.id)
    const descriptionURL = `product/${id}/description`
    const inventoryURL = `product/${id}/inventory`

    $.get(descriptionURL, data => {
      let pTag = string.concat()
      $('#product-' + id).text(data)
    })

    $.get(inventoryURL, data => {
      debugger
      $('#product-' + id).text(data)
    })




  })
})
