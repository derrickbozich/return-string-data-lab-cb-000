$(function(){
  $('.js-more').on('click', function(){
    console.log('stop')
    const id = this.dataset.id
    const url = `product/${id}/description`
    $.get(url, data => {
      $(`product-${id}-description`).text(data)
      debugger
    })
  })


})
