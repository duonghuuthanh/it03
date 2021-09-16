$(document).ready(function() {
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