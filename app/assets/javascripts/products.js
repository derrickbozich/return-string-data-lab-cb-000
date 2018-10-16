$(function(){
  $('.js-more').on('click', function(){
    console.log('stop')
    const id = parseInt(this.dataset.id)
    const url = `product/${id}/description`
    $.get(url, data => {
      $('#product-' + id).text(data)
      // document.getElementById(`product-${id}`).innerHTML = data
      // debugger
    })
  })


})
