$(function(){
  $('.js-more').on('click', function(){
    console.log('stop')
    const id = parseInt(this.dataset.id)
    const url = `product/${id}/description`
    $.get(url, data => {
      $('#product-' + id + '-description').text(data)
      document.getElementById(`product-${id}-description`)
      debugger
    })
  })


})
