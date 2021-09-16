$(document).ready(function() {

    $("div.items > div.item:nth-child(even)").addClass("animate__animated animate__slideInLeft")
    $("div.items > div.item:nth-child(odd)").addClass("animate__animated animate__slideInRight")
    $("div.figures > figure").addClass("wow animate__flipInY")
    $("div.figures > figure").addClass("c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right")
    $("div.fugures > figure > figcaption").addClass("c4-layout-bottom-left")
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
    wow.init();

    $("#btnAdd").click(function() {
        var content = $("#contentId").val()
        var date = $("#dateId").val()

        $("div.items").prepend(`
            <div class="item active">
                <div class="col5">
                    <img src="images/lab02/calendar2.png" alt="test" />
                </div>
                <div class="col70">
                    <a href="#">${content}</a>
                </div>
                <div class="col15">
                    ${date}
                </div>
                <div class="col10">
                    <input type="button" value="Xoa" />
                </div>
            </div>
        `)
        
        setTimeout(function() {
            $("div.item").removeClass("active")
        }, 2000)
    })

    $("div.items").on("click", "div.item input[type=button]", function() {
        if (confirm("Ban co chac chan xoa khong?") == true)
            $(this).parent().parent().remove()
    })
})