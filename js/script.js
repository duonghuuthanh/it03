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

    $("nav ul.menu a").click(function() {
        var id = $(this).attr("href")

        $("html, body").animate({
            "scrollTop": $(id).prop("offsetTop")
        }, 1000)
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100)
            $("nav").css({
                "position": 'fixed',
                "left": 0,
                "right": 0,
                "top": 0,
                "background-color": "rgb(223, 70, 10, 0.6)",
                "z-index": "99999"
            })
        else
            $("nav").css({
                "position": "relative",
                "background-color": "rgb(223, 70, 10)",
                "top": 0
            })
    })
})