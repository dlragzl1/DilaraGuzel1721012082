var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function(req, res, next) {
    res.render('mekanlar-liste', {
        'baslik': 'Mekan32 | Anasayfa',
        'footer': 'Dilara Güzel - Copyrigt 2020',
        'sayfaBaslik': {
            'siteAd': 'Mekan 32',
            'aciklama': 'Isparta Civarındaki Mekanları Keşfedin!'
        },
        'mekanlar': [{
                'ad': 'Mavi',
                'adres': 'Yedişehitler Mahallesi',
                'puan': 3,
                'imkanlar': ['Kazak ', 'Pantolon', 'T-shırt'],
                'mesafe': '1km'
            },
            {
                'ad': 'Koton',
                'adres': 'Yedişehitler Mahallesi',
                'puan': 5,
                'imkanlar': ['Çorap', 'Kazak', 'Mont', 'Kaban'],
                'mesafe': '7km'
            },
            {
                'ad': 'Flo',
                'adres': 'Iyas AVM',
                'puan': 5,
                'imkanlar': ['Bot', 'Sandalet', 'Terlik'],
                'mesafe': '4km'
            },
            {
                'ad': 'Lacoste',
                'adres': 'Iyaş AVM',
                'puan': 2,
                'imkanlar': ['T-shrt', 'Kazak', 'Pantolon'],
                'mesafe': '11km'
            },
            {
                'ad': 'Mademe COCO',
                'adres': 'Centruim Garden',
                'puan': 3,
                'imkanlar': ['Kavanoz', 'Paspas', 'Oda Kokusu'],
                'mesafe': '0,9km'
            },
            {
                'ad': 'In Street',
                'adres': 'Iyas AVM',
                'puan': 2,
                'imkanlar': ['Short', 'Sneakers', 'Bot'],
                'mesafe': '1km'
            }
        ]
    });
}

const mekanBilgisi = function(req, res, next) {
    res.render('mekan-detay', {
        'baslik': 'Mekan Bilgisi',
        'footer': 'Dilara Güzel - Copyrigt 2020',
        'sayfaBaslik': 'Starbucks',
        'mekanBilgisi': {
            'ad': 'Starbucks',
            'adres': 'Centrium Garden',
            'puan': 3,
            'imkanlar': ['Sütlü Kahve', 'Cold brew', 'Filtre Coffee'],
            'koordinatlar': {
                'enlem': '37.781885',
                'boylam': '30.566034'
            },
            'saatler': [{
                'gunler': 'Pazartesi-Cuma',
                'acilis': '07:00',
                'kapanis': '23:00',
                'kapali': false
            }, {
                'gunler': 'Cumartesi',
                'acilis': '09:00',
                'kapanis': '22:00',
                'kapali': false
            }, {
                'gunler': 'Pazar',
                'kapali': true
            }],
            'yorumlar': [{
                    'yorumYapan': 'Dilara Güzel',
                    'puan': 3,
                    'tarih': '27.11.2020',
                    'yorumMetni': 'Herşey çok güzel.'
                },

            ]
        }
    });
}

const yorumEkle = function(req, res, next) {
    res.render('yorum-ekle', {
        title: 'Yorum Ekle',
        'footer': 'Dilara Güzel - Copyrigt 2020',
    });
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
