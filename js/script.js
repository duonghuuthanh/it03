function search() {
   var k = document.getElementById("kw")
   if (k != null) {
      k = k.value 

      var items = document.querySelectorAll("div.items > div.item")
      for (var i = 0; i < items.length; i++) {
            var h1 = items[i].getElementsByTagName("h1")[0].innerText
            if (h1.indexOf(k) >= 0)  
                items[i].style.outline = "2px dashed red"
      }
       
      setTimeout(function() {
        var items = document.querySelectorAll("div.items > div.item")
        for (var i = 0; i < items.length; i++)
            items[i].style.outline = "none"
      }, 2000)
   }
} 

$(document).ready(function() {
    $("#btnSearch").click(function() {
        var k = $("#kw").val()

        $(`div.item h1:contains(${k})`).parent().parent().css("outline", "2px dashed red")
        // var items = $("div.item h1")
        // for (var i = 0; i < items.length; i++)
        //     if ($(items[i]).text().indexOf(k) >= 0)
        //         $(items[i]).parent().parent().css("outline", "2px dashed red")

        setTimeout(function() {
            $("div.item").css("outline", "none")
        }, 2000)
    })
})