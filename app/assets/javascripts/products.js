$(function(){
  $('.js-more').on('click', function(){
    console.log('stop')
    debugger
    const id = this.dataset.id
    const url = `products/${id}/description`
    $.get(url, data => {
      debugger
    })
  })


})
