/* ### Modal Class ###
* Author: Robson Suzin
* Using jQuery
*
* smodalname = app_modal_dialog (Abre uma modal dialog) | Outro nome adiciona conteudo html
* smodaltype = Ex.: info delete delete_photo ( Atribui os estilos padrões da modal )
* smodalhtml = Ex.: Conteúdo HTML da Modal
* smodalwidth = Qual será o tamanho da modal - Padrão 500px - Ex: 90%
* smodalprint = true (Adiciona um botão de print)
*
* smodaleffect = Qual efeito que vai aparecer a modal, jqueryUi
*
* smodaldata = Qual objeto vai receber os data() do evento
*
* sadddata = Adiciona Data Ex.: elemento::data==valor|elemento::data==valor
* sremovedata = Remover Data Ex.: elemento::data|elemento::data
* saddattr = Adiciona Atributos Ex.: elemento::attr==valor|elemento::attr==valor
* sremoveattr = Remover Atributos Ex.: elemento::attr==valor|elemento::attr==valor
* saddhtml = Adiciona Html Ex.: elemento::valor|elemento::valor
* saddclass = Adicionar Class Ex.: elemento::class|elemento::class
* sremoveclass = Remove Class Ex.: elemento::class|elemento::class
* sremoveelement = Remove Class Ex.: elemento|elemento
* saddcss = Adiciona um css ao elemento Ex.: elemento::css==valor
*
* sdebug = true
*/
(function ($) {
    $.fn.smodal = function (options) {

        if (!options) {
            options = [];
            $(this).each(function () {
                $.each(this.attributes, function () {
                    options[this.name] = this.value;
                });
            });
        }

        if(options.sdebug) {
            console.log('Options', options);
        }

        thisClass = this;

        effecttime = 200;

        if($(`.${options.smodalname}`).length > 0) {
            modalexist = true;
        } else {
            modalexist = false;
        }

        if(!options.smodalwidth) {
            options.smodalwidth = 500;
        }

        if (options.smodaltype !== '') {
            options.smodalhtml = `<div class="js-icon icon-notext al-center"></div>
                <h3 class="js-title title"></h3>
                <div class="ds-flex text-center" >
                <a class="js-cancel btn btn-normal radius transition" smodalclose="true" href="#">Cancelar</a>
                <a class="js-confirm btn btn-normal radius transition" smodalclose="true" href="#" >Confirmar</a></div>`;
        }

        if (options.smodalprint === true) {
            options.smodalprint = `<a class="icon-notext icon-print app_modal_print" href="#" onClick="window.print();"></a>`;
        } else {
            options.smodalprint = '';
        }

        modalname = (options.smodalname ? options.smodalname : 'app_modal_dialog');
        modalzindex = (options.smodaltype !== '' ? '999' : '998');

        defaulthtml = `<div class="app_modal ${modalname}" smodalclose="true"
            style="left: 0; top: 0;right: 0;bottom: 0; background: rgba(100, 100, 100, 0.5); z-index:${modalzindex};">
            <div class="app_modal_box" style="max-width: 94% !important;">
            <div><a class="app_modal_close icon-times icon-notext" smodalclose="true" style="top: 5px; right: 0;"
            href="#"></a>${options.smodalprint}</div>${options.smodalhtml}</div></div>`;

        defaults = {
            'smodalhtml': defaulthtml,
            'smodaldata': 'js-confirm'
        };

        settings = $.extend({}, defaults, options);

        if (typeof smodalname === 'undefined') {
            smodalname = [];
            smodalname.unshift({name: settings.smodalname});
        } else {
            if (smodalname.length === 0) {
                smodalname.unshift({name: settings.smodalname});
            } else {
                $.each(smodalname, function (key, value) {
                    if (value['name'] !== settings.smodalname) {
                        smodalname.unshift({name: settings.smodalname});
                    }
                });
            }

        }

        this.saddhtml = function (e, obj) {
            $.each(obj, function (key, value) {
                e.html(value);
            });
        };

        this.sadddata = function (e, obj) {
            $.each(obj, function (key, value) {
                if (key.indexOf("-") === -1) {
                    key = 'data-' + key;
                }
                e.attr(key, value);
            });
        };

        this.sremovedata = function (e, obj) {
            $.each(obj, function (key, value) {
                if (key.indexOf("-") === -1) {
                    value = 'data-' + value;
                }
                e.removeAttr(value);
            });
        };

        this.saddattr = function (e, obj) {
            $.each(obj, function (key, value) {
                e.attr(key, value);
            });
        };

        this.sremoveattr = function (e, obj) {
            $.each(obj, function (key, value) {
                e.removeAttr(value);
            });
        };

        this.saddclass = function (e, obj) {
            $.each(obj, function (key, value) {
                e.addClass(value);
            });
        };

        this.sremoveclass = function (e, obj) {
            $.each(obj, function (key, value) {
                e.removeClass(value);
            });
        };

        this.sremoveelement = function (e) {
            e.remove();
        };

        this.saddcss = function (e, obj) {
            $.each(obj, function (key, value) {
                obj[key] = value;
                e.css(obj);
            });
        };

        this.setInfo = function () {
            defaultremoveattr = 'js-confirm::data-post';
            thisClass.setProperties(defaultremoveattr, 'sremoveattr');

            defaultaddhtml = 'js-confirm::Editar|js-cancel::OK';
            thisClass.setProperties(defaultaddhtml, 'saddhtml');

            defaultaddclass = 'js-confirm::btn-blue|js-confirm::icon-pencil|js-cancel::btn-green|js-cancel::icon-check|js-icon::color-blue|js-icon::icon-info';
            thisClass.setProperties(defaultaddclass, 'saddclass');
        };

        this.setDelete = function () {
            defaultaddhtml = 'js-confirm::Apagar|js-cancel::Cancelar';
            thisClass.setProperties(defaultaddhtml, 'saddhtml');

            defaultaddclass = 'js-confirm::btn-red|js-confirm::icon-trash|js-cancel::btn-default|js-cancel::icon-ban|js-icon::color-yellow|js-icon::icon-warning';
            thisClass.setProperties(defaultaddclass, 'saddclass');
        };

        this.setProperties = function (s, f) {
            if (!s) {
                return;
            }

            s = s.split('|');

            $.each(s, function (key, value) {
                obj = value.split('::');

                element = $('.' + obj[0]);
                elementObj = thisClass.objSplit(obj[1]);

                switch (f) {
                    case "sadddata":
                        thisClass.sadddata(element, elementObj);
                        break;
                    case "sremovedata":
                        thisClass.sremovedata(element, elementObj);
                        break;
                    case "saddclass":
                        thisClass.saddclass(element, elementObj);
                        break;
                    case "sremoveclass":
                        thisClass.sremoveclass(element, elementObj);
                        break;
                    case "saddattr":
                        thisClass.saddattr(element, elementObj);
                        break;
                    case "sremoveattr":
                        thisClass.sremoveattr(element, elementObj);
                        break;
                    case "sremoveelement":
                        thisClass.sremoveelement(element, elementObj);
                        break;
                    case "saddhtml":
                        thisClass.saddhtml(element, elementObj);
                        break;
                    case "saddcss":
                        thisClass.saddcss(element, elementObj);
                        break;
                }
            });
        };

        this.objSplit = function (v, c = '::') {

            if (!v) {
                return;
            }
            s = v.split(c);

            split_value = null;
            s_obj = Object();
            $.each(s, function (key, value) {
                split_value = value.split('==');
                if (split_value[1]) {
                    s_obj[split_value[0]] = split_value[1];
                } else {
                    s_obj[key] = split_value[0];
                }
            });

            return s_obj;
        };

        this.show = function () {

            $("html").css("overflow-y", "hidden");

            objmodalname = $(`.${smodalname[0]['name']}`);
            box = objmodalname.children();
            objmodalname.css("overflow-y", "auto");
            objmodalname.css("display", "flex");
            objmodalname.fadeIn(effecttime, function () {
                box.css('width', settings.smodalwidth);
                if (settings.smodaleffect) {
                    box.show(settings.smodaleffect, [], 300);
                } else {
                    box.css('display', 'block');
                    box.css('width', '150px');
                    box.animate({"width": settings.smodalwidth}, effecttime);
                    box.animate({"width": settings.smodalwidth}, effecttime - 100);
                }

            });

            if(options.sdebug) {
                console.log('Show', objmodalname, box);
            }
        };

        this.close = function () {
            $("[smodalclose]").click(function (e) {
                if (e.target === this) {

                    $("html").css("overflow-y", "auto");

                    objmodalname = $('.' + smodalname[0]['name']);
                    objmodalname.css("overflow-y", "hidden");
                    box = objmodalname.children();

                    box.animate({"width": "250px"}, effecttime);
                    objmodalname.fadeOut(effecttime, function () {
                        if (box.length === 1 && modalexist === false) {
                            objmodalname.remove();
                            smodalname.splice(0, 1);
                        }
                        box.css("display", "none");
                    });
                }
            });

            if(options.sdebug) {
                console.log('Close', objmodalname, box, modalexist);
            }
        };


        return this.each(function () {

            if(modalexist === false) {
                $('body').prepend(defaulthtml);
            }

            if (settings.smodaltype) {
                if (settings.smodaltype === 'info') {
                    thisClass.setInfo();
                }

                if (settings.smodaltype === 'delete' || settings.smodaltype === 'delete_photo') {
                    thisClass.setDelete();
                }
            }

            if (settings.saddhtml) {
                thisClass.setProperties(settings.saddhtml, 'saddhtml');
            }
            if (settings.sadddata) {
                thisClass.setProperties(settings.sadddata, 'sadddata');
            }
            if (settings.sremovedata) {
                thisClass.setProperties(settings.sremovedata, 'sremovedata');
            }
            if (settings.saddattr) {
                thisClass.setProperties(settings.saddattr, 'saddattr');
            }
            if (settings.sremoveattr) {
                thisClass.setProperties(settings.sremoveattr, 'sremoveattr');
            }
            if (settings.saddclass) {
                thisClass.setProperties(settings.saddclass, 'saddclass');
            }
            if (settings.sremoveclass) {
                thisClass.setProperties(settings.sremoveclass, 'sremoveclass');
            }
            if (settings.sremoveelement) {
                thisClass.setProperties(settings.sremoveelement, 'sremoveelement');
            }
            if (settings.saddcss) {
                thisClass.setProperties(settings.saddcss, 'saddcss');
            }
            if (settings.smodaldata) {
                thisClass.sadddata($('.' + settings.smodaldata), thisClass.data());
            }

            thisClass.show();
            thisClass.close();
        });
    }
})(jQuery);