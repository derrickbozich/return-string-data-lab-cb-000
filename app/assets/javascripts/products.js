$(function(){
  $('.js-more').on('click', function(){
    const id = parseInt(this.dataset.id)
    const url = `product/${id}/description`
    $.get(url, data => {
      $('#product-' + id).text(data)
    })
  })
})
