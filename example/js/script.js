$(function () {
    /*
    * APP MODAL
    * Monitoramento do smodalname
    */
    $(document).on('click', "[smodalname]", function (e) {
        e.preventDefault();
        $(this).smodal();
    });


    /*
    * APP MODAL
    * Monitoramento do data-post fazendo ajax
    */
    $(document).on("click", "[data-post]", function (e) {
        e.preventDefault();

        var clicked = $(this);
        var data = clicked.data();

        $.ajax({
            url: data.post,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (response) {

                if (response.smodal) {
                    $(document).smodal(response.smodal);
                }

            }
        });
    });


});