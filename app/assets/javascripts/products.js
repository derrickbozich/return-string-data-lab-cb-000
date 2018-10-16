$(function(){
  $('.js-more').on('click', function(){
    const id = parseInt(this.dataset.id)
    const description = `product/${id}/description`
    const inventory = `product/${id}/inventory`
    
    $.get(description, data => {
      $('#product-' + id).text(data)
    })

    $.get(inventory, data => {
      $('#product-' + id).text(data)
    })

    


  })
})
