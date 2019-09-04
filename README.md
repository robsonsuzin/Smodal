# Smodal @SuzinCode

[![Maintainer](http://img.shields.io/badge/maintainer-@robsonsuzin-blue.svg?style=flat-square)](https://twitter.com/robsonsuzin)
[![Source Code](http://img.shields.io/badge/source-suzincode/smodal-blue.svg?style=flat-square)](https://github.com/robsonsuzin/s-modal)
[![PHP from Packagist](https://img.shields.io/packagist/php-v/robsonsuzin/smodal.svg?style=flat-square)](https://packagist.org/packages/robsonsuzin/smodal)
[![Latest Version](https://img.shields.io/github/release/robsonsuzin/Smodal.svg?style=flat-square)](https://github.com/robsonvleite/cropper/releases)
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
"suzincode/smodal": "^1.0"
```

or run

```bash
composer require suzincode/smodal
```

## Documentation

###### They are just two methods to do all the work. You just need to call ***make*** to create or use thumbnails of any size, or ***flush*** to free the cache of a file or the entire folder. CoffeeCode Cropper works like this:


Para iniciar a utilização, precisamos incluir o jquery no documento:
 ```php
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
 ```
 o arquivo ***/src/js/smodal.js***:

#### Create thumbnails

```php
<?php
require __DIR__ . "/../src/Cropper.php";

$c = new \CoffeeCode\Cropper\Cropper("patch/to/cache");

echo "<img src='{$c->make("images/image.jpg", 500)}' alt='Happy Coffee' title='Happy Coffee'>";
echo "<img src='{$c->make("images/image.jpg", 500, 300)}' alt='Happy Coffee' title='Happy Coffee'>";
```

#### Clear cache

```php
<?php
require __DIR__ . "/../src/Cropper.php";

$c = new \CoffeeCode\Cropper\Cropper("patch/to/cache");

//flush by filename
$c->flush("images/image.jpg");

//flush cache folder
$c->flush();
```

## Contributing

Please see [CONTRIBUTING](https://github.com/robsonvleite/cropper/blob/master/CONTRIBUTING.md) for details.

## Support

###### Security: If you discover any security related issues, please email cursos@upinside.com.br instead of using the issue tracker.

Se você descobrir algum problema relacionado à segurança, envie um e-mail para cursos@upinside.com.br em vez de usar o rastreador de problemas.

Thank you

## Credits

- [Robson V. Leite](https://github.com/robsonvleite) (Developer)
- [UpInside Treinamentos](https://github.com/upinside) (Team)
- [All Contributors](https://github.com/robsonvleite/cropper/contributors) (This Rock)

## License

The MIT License (MIT). Please see [License File](https://github.com/robsonvleite/cropper/blob/master/LICENSE) for more information.