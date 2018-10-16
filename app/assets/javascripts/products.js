// // My Solution
// $(function(){
//   $('.js-more').on('click', function(){
//     const id = parseInt(this.dataset.id)
//     const descriptionURL = `product/${id}/description`
//     const inventoryURL = `product/${id}/inventory`
//
//     $.get(descriptionURL, data => {
//       $('#product-' + id).text(data);
//     })
//
//     $.get(inventoryURL, data => {
//       const div = $('#product-' + id + '-inventory');
//       if (data == "true") {
//         div.text("Available");
//       } else {
//         div.text("Sold Out");
//       }
//     })
//   })
// })

$(function() {
  $(".js-more").on("click", function() {
    var id = $(this).data("id");
    $.get("/products/" + id + "/description", function(description) {
      $.get("/products/" + id + "/inventory", function(inventory) {
        var inventoryText = "<strong>Available</strong>";
        if(inventory === "false"){
          inventoryText = "<strong>Sold Out</strong>";
        }
        var descriptionText = "<p>" + description + "</p><p>" + inventoryText + "</p>";
        $("#product-" + id).html(descriptionText);
      });
    });
  });
});
