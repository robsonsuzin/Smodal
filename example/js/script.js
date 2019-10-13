$(function () {

    /*
    *  Template Smodal
    *  Você pode criar seus templates e chamar no seu objeto Smodal :)
    */
    template = {};
    template.print = `<a class="icon-notext icon-print suzin_smodal_print" href="#" onClick="window.print();"></a>`;

    template.info = `<div class="js-icon icon-notext text-info icon-info-circle text-center"></div>
                <h3 class="js-title title"></h3>
                <div class="d-flex text-center" >
                <a class="js-cancel btn btn-success icon-check radius transition" smodalclose="true" href="#">OK</a>
                <a class="js-confirm btn btn-info icon-pencil radius transition" smodalclose="true" href="#" >Editar</a></div>`;

    template.delete = `<div class="js-icon icon-notext text-warning icon-exclamation-triangle text-center"></div>
                <h3 class="js-title title"></h3>
                <div class="d-flex text-center" >
                <a class="js-cancel btn btn-default icon-ban radius transition" smodalclose="true" href="#">Cancelar</a>
                <a class="js-confirm btn btn-danger icon-trash radius transition" smodalclose="true" href="#" >Apagar</a></div>`;

    template.teste = `<h3>Titulo da Modal</h3>
                <p>Um paragráfo da Modal</p>
                <h3 class="js-title title"></h3>
                <div class="d-flex text-center" >
                <a class="js-cancel btn btn-default icon-ban radius transition" smodalclose="true" href="#">Cancelar</a>
                <a class="js-confirm btn btn-danger icon-trash radius transition" smodalclose="true" href="#" >Apagar</a></div>`;

    /*
    * APP MODAL
    * Monitoramento do smodalname
    */
    $(document).on('click', "[smodalname]", function (e) {
        e.preventDefault();
        $(this).smodal([], template);
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
                    $(document).smodal(response.smodal, template);
                }

            }
        });
    });


});

