# Smodal @SuzinCode

[![Maintainer](http://img.shields.io/badge/maintainer-@robsonsuzin-blue.svg?style=flat-square)](https://twitter.com/robsonsuzin)
[![Source Code](http://img.shields.io/badge/source-robsonsuzin/smodal-blue.svg?style=flat-square)](https://github.com/robsonsuzin/smodal)
[![PHP from Packagist](https://img.shields.io/packagist/php-v/robsonsuzin/smodal.svg?style=flat-square)](https://packagist.org/packages/robsonsuzin/smodal)
[![Latest Version](https://img.shields.io/github/release/robsonsuzin/Smodal.svg?style=flat-square)](https://github.com/robsonsuzin/smodal/releases)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Build](https://img.shields.io/scrutinizer/build/g/robsonsuzin/Smodal.svg?style=flat-square)](https://scrutinizer-ci.com/g/robsonsuzin/smodal)
[![Quality Score](https://img.shields.io/scrutinizer/g/robsonsuzin/Smodal.svg?style=flat-square)](https://scrutinizer-ci.com/g/robsonsuzin/smodal)
[![Total Downloads](https://img.shields.io/packagist/dt/robsonsuzin/Smodal.svg?style=flat-square)](https://packagist.org/packages/robsonsuzin/smodal)

###### Smodal is a component that simplifies the creation of modals with a simple engine. Smodal creates modals with zero complexity.

Smodal é um componente que simplifica a criação de modais com um motor simples. A Smodal cria modais muito fácil!

## About Smodal

###### Smodal is a tool in PHP and Javascript for creating modals. Maintained by Robson Suzin. With it you turn a more complex task into a simple line of code to generate the renders.

Smodal é uma ferramenta em PHP e Javascript para criar modais. Mantido por Robson Suzin. Com ela você transforma uma tarefa mais complexa em uma simples linha de código para gerar os renders.

### Highlights

- Simple Modal Creator (Simples criador de modais)
- Opening Modes Already Inserted in Document (Abertura de Modais já inseridas no documento)
- Opening modal via callback (Abertura de modais via callback)
- Creating Modes to Confirm an Action (Criação de Modais para confirmação de uma ação)
- Creation of Modals for information (Criação de Modais para informação)
- Various ways to customize (Várias formas de personalizar)
- Composer ready and PSR-2 compliant (Pronto para o composer e compatível com PSR-2)

## Installation

Smodal is available via Composer:

```bash
"robsonsuzin/smodal": "^1.0"
```

or run

```bash
composer require robsonsuzin/smodal
```

## Documentation

Para iniciar a utilização, precisamos incluir o jquery no documento:
 ```php
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
 ```
 Adicionar o arquivo ***smodal.js***:
 
  ```php
 <script src="/vendor/robsonsuzin/smodal/src/js/smodal.js"></script>
  ```

 Adicionar o arquivo ***smodal.css***:
 
  ```php
 <script src="/vendor/robsonsuzin/smodal/src/css/style.css"></script>
  ```
Ou vc pode copiar a estilização que está na pasta ***example***, para seu projeto e fazer as alterações.

## Funções da Smodal:

Você pode passar no construtor um nome para a classe da modal ou vai atribuir a classe padrão

```php
$modal = (new \Source\Support\Smodal())
 ```
Função para setar a class da modal 
```php
->setSmodalname("modal_name_class")
 ```
Função para setar o html da modal - ***info*** ou ***delete***
```php
->setSmodaltype("delete")
 ```
Função para adicionar um conteudo HTML dentro da modal
```php
->setSmodalhtml("<p>Modal</p>")
 ```
Função para setar o tamanho da modal, padrão 500
```php
->setSmodalwidth(700)
 ```
Função para adicionar um botão de Imprimir no canto direito
```php
->setSmodalprint('true')
 ```
Função para setar o tipo de efeito para abrir a modal, efeito do jqueryUi
```php
->setSmodaleffect('bounce')
 ```
Função para setar qual elemento vai receber os data() do elemento que recebe evento
```php
->setSmodaldata('js-confirm')
 ```
Função para adicionar Atributo Data ao $element 
```php
->setSadddata($element, $data, $value)
 ```
Função para remover Atributo Data do $element 
```php
->setSremovedata($element, $data)
 ```
Função para adicionar Atributos ao $element
```php
->setSaddattr($element, $attr, $value)
 ```
Função para remover Atributos do $element
```php
->setSremoveattr($element, $attr)
 ```
Função para adicionar Html ao $element
```php
->setSaddhtml($element, $value)
 ```
Função para adicionar Classe ao $element
```php
->setSaddclass($element, $class)
 ```
Função para remove Classe do $element
```php
->setSremoveclass($element, $class)
 ```
Função para remove o $element
```php
->setSremoveelement($element)
 ```
Função para adiciona css ao $elemento
```php
->setSaddcss($element, $css, $value)
 ``` 
## Exemplos de utilização modal dialog para exclusão

#### Abrindo uma modal pela ação de um botão utilizando a classe Smodal

```php
Botão que vai receber o click
<?php
$modal_delete = (new Smodal())
->setSmodaltype("delete");
->setSadddata("js-confirm", "post", url("/" . CONF_VIEW_APP . "/registration/departament"));
->setSaddhtml(
        "js-title",
        "<b>Atenção:</b> Tem certeza que deseja excluir esse departamento! Essa Ação não pode ser desfeita!"
);
?>
<a class="icon-trash-o btn btn-small btn-red" href="#" title="Deletar Departamento?"
    <?= $modal_delete->renderString(); ?>
    data-action="delete"
    data-id="10">Deletar</a>

Script que monitora o botão:

$(document).on('click', "[smodalname]", function (e) {
    e.preventDefault();
    $(this).smodal();
});    
```
#### Abrindo modal pelo callback do ajax
```php
Objeto para ser enviado ao callback

$smodal = (new Smodal('app_modal_departament_address'));
                ->setSmodalwidth(700);
                ->setSmodaleffect("bounce");
                ->setSmodalhtml(
                        $this->view->render("widgets/registration/views/modal_vehicle", [
                        "title" => $title,
                        "vehicle" => $vehicleEdit,
                        "departaments" => $departaments->order('name')->fetch(true)
                ]));

$json["smodal"] = $smodal->renderObject();

Monitoramento do callback

if (response.smodal) {
    $(this).smodal(response.smodal);
}
  
```
#### Exemplo de Monitoramento pelo [data-post] envio por ajax
```php
    // Envio Ajax pelo click no data-post
    $(document).on("click", "[data-post]", function (e) {
        e.preventDefault();

        var clicked = $(this);
        var data = clicked.data();
        var load = $(".ajax_load");

        $.ajax({
            url: data.post,
            type: "POST",
            data: data,
            dataType: "json",
            beforeSend: function () {
                load.fadeIn(200).css("display", "flex");
            },
            success: function (response) {
               
                if (response.smodal) {
                    $('.app_modal').fadeOut();
                    $(document).smodal(response.smodal);
                }

            },
            error: function () {
                ajaxMessage(ajaxResponseRequestError, 5);
                load.fadeOut();
            }
        });
    });
  
```

#### Exemplo de Utilização de Template
## No seu arquivo de scripts js aonde você vai iniciar ou chamar o smodal()
```php
       /*
        *  Template Smodal
        *  Você pode criar seus templates e chamar no seu objeto Smodal :)
        */
        template = {};
        template.info = `<div class="js-icon icon-notext color-blue icon-info al-center"></div>
                    <h3 class="js-title title"></h3>
                    <div class="ds-flex text-center" >
                    <a class="js-cancel btn btn-normal btn-green icon-check radius transition" smodalclose="true" href="#">OK</a>
                    <a class="js-confirm btn btn-normal btn-blue icon-pencil radius transition" smodalclose="true" href="#" >Editar</a></div>`;
    
        template.delete =  `<div class="js-icon icon-notext color-yellow icon-warning al-center"></div>
                    <h3 class="js-title title"></h3>
                    <div class="ds-flex text-center" >
                    <a class="js-cancel btn btn-normal btn-default icon-ban radius transition" smodalclose="true" href="#">Cancelar</a>
                    <a class="js-confirm btn btn-normal btn-red icon-trash radius transition" smodalclose="true" href="#" >Apagar</a></div>`;
    
        template.teste =  `<h3>Titulo da Modal</h3>
                    <p>Um paragráfo da Modal</p>
                    <h3 class="js-title title"></h3>
                    <div class="ds-flex text-center" >
                    <a class="js-cancel btn btn-normal btn-default icon-ban radius transition" smodalclose="true" href="#">Cancelar</a>
                    <a class="js-confirm btn btn-normal btn-red icon-trash radius transition" smodalclose="true" href="#" >Apagar</a></div>`;
    
        /*
        * APP MODAL
        * Monitoramento do smodalname
        */
        $(document).on('click', "[smodalname]", function (e) {
            e.preventDefault();
            $(this).smodal([], template);
        });
            
        
        //Caso você for utilizar no callback do ajax
        if (response.smodal) {              
            $(document).smodal(response.smodal, template);
        }
```
## Contributing

Please see [CONTRIBUTING](https://github.com/robsonsuzin/smodal/blob/master/CONTRIBUTING.md) for details.

## Support

###### Security: If you discover any security related issues, please email robsonsuzin@hotmail.com instead of using the issue tracker.

Se você descobrir algum problema relacionado à segurança, envie um e-mail para robsonsuzin@hotmail.com em vez de usar o rastreador de problemas.

Thank you

## Credits

- [Robson Suzin](https://github.com/robsonsuzin) (Developer)
- [All Contributors](https://github.com/robsonsuzin/smodal/contributors) (This Rock)

## License

The MIT License (MIT). Please see [License File](https://github.com/robsonsuzin/smodal/blob/master/LICENSE) for more information.