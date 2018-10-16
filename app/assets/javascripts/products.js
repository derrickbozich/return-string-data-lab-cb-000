$(function(){
  $('.js-more').on('click', function(){
    const id = parseInt(this.dataset.id)
    const description = `product/${id}/description`
    const inventory = `product/${id}/inventory`

    $.get(description, data => {
      let pTag = string.concat()
      $('#product-' + id).text(data)
    })

    $.get(inventory, data => {
      debugger
      $('#product-' + id).text(data)
    })




  })
})
