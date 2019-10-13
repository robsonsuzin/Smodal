/* ### Modal Class ###
* Name: Smodal
* Version: 1.0.8
* Author: Robson Suzin
* Using jQuery
*
* smodalname = suzin_smodal_dialog (Abre uma modal dialog) | Outro nome adiciona conteudo html
* smodaltemplate = Ex.: info delete confome seu template criado
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
    $.fn.smodal = function (options, template = []) {

        thisClass = this;

        if (!options || options.length === 0) {
            options = [];
            $(this).each(function () {
                $.each(this.attributes, function () {
                    options[this.name] = this.value;
                });
            });
        }

        if (options.sdebug) {
            console.log('Options', options);
        }

        effecttime = 200;

        modalexist = ($(`.${options.smodalname}`).length > 0);

        if (!options.smodalwidth) {
            options.smodalwidth = 500;
        }

        // Conta quantas modais existem
        modalcount = $('.suzin_smodal').length;

        // Acrescenta no zindex
        modalzindex = 900 + modalcount;

        // Verifica se a modal existe e mante o mesmo nome ou adiciona numeral ao nome da modal
        options.smodalname = modalexist ? options.smodalname : `${options.smodalname}${modalcount}`;
        modalname = (options.smodalname ? options.smodalname  : `suzin_smodal_dialog${modalcount}`);

        // Objeto da Modal
        objectmodal = $(`.${modalname}`);

        if(!options.smodalhtml){
            options.smodalhtml = template[options.smodaltemplate];
            // Verifica se foi passado o parametro template
            if(template.length === 0 && modalexist === false) {
                console.error("Erro: Você precisa passar o parametro template na inicialização da Smodal");
                options.smodalhtml = "<b>Erro:</b> Você precisa passar o parametro template na inicialização da Smodal";
            }
            // Verifica se o template informado foi enviado para o plugin
            if(template[options.smodaltemplate] === undefined && modalexist === false) {
                console.error("Erro: Verifique o template informado ele não foi enviado para o plugin");
                options.smodalhtml = "<b>Erro:</b> Verifique o template informado ele não foi enviado para o plugin";
            }
        }

        // Verifica e adiciona um botão de print na modal
        if (options.smodalprint === '1' || options.smodalprint === 'true') {
            htmlprint = '<a class="icon-notext icon-print suzin_smodal_print" href="#" onClick="window.print();"></a>';
            options.smodalprint = (template['print'] ? template['print'] : htmlprint);
        } else {
            options.smodalprint = '';
        }

        // Html padrão da modal
        defaulthtml = `<div class="suzin_smodal ${modalname}" smodalclose="true"
            style="z-index:${modalzindex};">
            <div class="suzin_smodal_box" style="max-width: 94% !important;">
            <div><a class="suzin_smodal_close icon-times icon-notext" smodalclose="true" style="top: 5px; right: 0;"
            href="#"></a>${options.smodalprint}</div>${options.smodalhtml}</div></div>`;

        defaults = {
            'smodalhtml': defaulthtml,
            'smodaldata': 'js-confirm'
        };

        settings = $.extend({}, defaults, options);

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

        this.setProperties = function (s, f) {
            if (!s) {
                return;
            }

            s = s.split('|');

            $.each(s, function (key, value) {
                obj = value.split('::');

                objmodalname = $(`.${modalname}`);

                element = objmodalname.find(`.${obj[0]}`);
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

        // Inicializa a Modal
        this.show = function () {

            $("html").css("overflow-y", "hidden");

            objmodalname = $(`.${modalname}`);
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

            if (options.sdebug) {
                console.log('Show', objmodalname, box);
            }
        };

        // Monitora o atributo smodalclose para fechar a modal
        this.close = function () {
            $("[smodalclose]").click(function (e) {
                e.preventDefault();
                if (e.target === this) {

                    $("html").css("overflow-y", "auto");
                    if($(this).parents('.suzin_smodal').length === 1) {
                        objmodal = $(this).parents('.suzin_smodal');
                    } else {
                        objmodal = $(this);
                    }

                    objmodal.css("overflow-y", "hidden");
                    box = objmodal.children();

                    box.animate({"width": "250px"}, effecttime);
                    objmodal.fadeOut(effecttime, function () {
                        if (box.length === 1 && modalexist === false) {
                            objmodal.remove();
                        }
                        box.css("display", "none");
                    });
                }
            });

            if (options.sdebug) {
                console.log('Close', objmodalname, box, modalexist);
            }
        };

        // Monitora o botão ESC para fechar a modal
        this.skeydown = function() {
            $(document).keydown(function (e) {
                if(e.which === 27)
                {
                    objmodal = $(".suzin_smodal");
                    objmodalclose = $(objmodal[0]).find('.suzin_smodal_close');
                    console.log(objmodalclose);
                    objmodalclose.click();
                }

            });

        }


        return this.each(function () {

            if (modalexist === false) {
                $('body').prepend(defaulthtml);
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
                thisClass.sadddata($(`.${settings.smodaldata}`), thisClass.data());
            }

            thisClass.show();
            thisClass.close();
            thisClass.skeydown();

        });
    }
})(jQuery);