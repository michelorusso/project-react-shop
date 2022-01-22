function nCasuale(){
    return Math.round(Math.random() * 100);
}

const arrayGeneriAbbigliamento = [
    "Camicie",
    "Pantaloni",
    "Maglieria",
    "Jeans",
    "Giacche",
    "Cappotti",
    "T-shirt & Polo",
    "Pantaloni sportivi e Joggers",
    "Bermude",
    "Completi e cravatte",
    "Slip",
    "Boxer",
    "Calze",
    "Pigiami",
    "Funny",
    'Scarpe'
]
const initialState = {
    arrayGeneriAbbigliamento : [
        "Camicie",
        "Pantaloni",
        "Maglieria",
        "Jeans",
        "Giacche",
        "Cappotti",
        "T-shirt & Polo",
        "Pantaloni sportivi e Joggers",
        "Bermude",
        "Completi e cravatte",
        "Slip",
        "Boxer",
        "Calze",
        "Pigiami",
        "Funny",
        'Scarpe'
    ],
    magazine: [
            {
                Id: 0,
                Produttore:'Gabriele',
                Marca:'Nike',
                NameProduct: 'NIKE  SPORTSWEAR',
                Description: 'Felpa in Pile',
                TypeProduct: 'Felpa',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/19ba758866fa46e88af4a9f410ae9574/05bc908fad9645fab65ab8500cb4b0a2.jpg?imwidth=1800',
                gender: 'Uomo',

                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Rate: 3, //?
                Price: 60.00,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['Black', 'gray'],
                QuantitySelected:0,
                QuantityDecurted:0,
                CodeProd: nCasuale(),
                Materials: 'Cotone',
                DatePubblication: '20/10/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 1,
                Produttore:'Gabriele',
                Marca:'North Sails',
                NameProduct: 'North Sails - GO BEYOND',
                Description: 'Giacca invernale',
                TypeProduct: 'Giacca',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/169c5dc256cc4844945661709c090203/d5336f0a3bfb47fd9e13791a075bfa31.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 299.98,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['blue', 'whitesmoke'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 2, //?
                CodeProd: nCasuale(),
                Materials: '100% poliestere',
                DatePubblication: '02/01/22',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 2,
                Produttore:'Gabriele',
                Marca:'North Sails',
                NameProduct: 'North Sails - SAILOR MEDIUM ',
                Description: 'Giacca invernale',
                TypeProduct: 'Giacca',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/57796f98142c41bfa32a7f607319cdb5/8c16b7401ee94f419e770d585305cee7.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 279.98,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['marine'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: '100% poliammide',
                DatePubblication: '02/01/22',
                Shipment: '3-7 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 3,
                Produttore:'Gabriele',
                Marca:'Tommy Hilfiger',
                NameProduct: 'Tommy Hilfiger - BLEECKER PUPPYTOOTH',
                Description: 'Pantaloni Casual',
                TypeProduct: 'Pantaloni',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/21a8ed0f1c594a778ffcfcc8491daafa/022ee74582634850afe5914d515254af.jpg?imwidth=1800&filter=packshot',
                gender: 'Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 129.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['desertsky'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: 'Acrilica',
                DatePubblication: '15/07/21',
                Shipment: '1 - 4 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 4,
                Produttore:'Gabriele',
                Marca:'Tommy Hilfiger',
                NameProduct: 'Tommy Hilfiger - FLAG QUILTED SKI JACKET',
                Description: 'Giacca da mezza stagione',
                TypeProduct: 'Giacche',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/31502cfc3b044d57adf3726543311bb0/7d02196d87a14b9dbd1c845c2b45d956.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 699.98,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['nightblue'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 5, //?
                CodeProd: nCasuale(),
                Materials: '100% poliestere',
                DatePubblication: '02/01/22',
                Shipment: '1-4 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 5,
                Produttore:'Gabriele',
                Marca:'Tommy Hilfiger',
                NameProduct: 'Timberland Tommy Hilfiger',
                Description: 'REIMAGIN PRO G HIKER - Stivaletti stringati',
                TypeProduct: 'Scarpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/546599719cc24d009e6bdd68b2e40076/071a33ec0dba4a14ab9746d22e7d8548.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 249.98,
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['beige', 'black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: 'Nubuk',
                DatePubblication: '20/10/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 6,
                Produttore:'Gabriele',
                Marca:'Nike',
                NameProduct: 'Nike Performance - STAR RUNNER 3 UNISEX ',
                Description: 'Scarpe running neutre',
                TypeProduct: 'Scarpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/06a842f1fe1f46ad874a6ed465a0942d/94386954f36a47d4bead916cfed3b95c.jpg?imwidth=1800&filter=packshot',
                gender: 'Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price:44.16,
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['Black', 'midnight navy'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, 
                CodeProd: nCasuale(),
                Materials: 'Tessuto / Sintetico',
                DatePubblication: '02/01/22',
                Shipment: '1 - 4 giorni lavorativi',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 7,
                Produttore:'Gabriele',
                Marca:'Nike Performance',
                NameProduct: 'Nike Performance - REVOLUTION 6',
                Description: 'Scarpe running neutre',
                TypeProduct: 'Scarpe',
                Thumb:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cc5a8af95fb04923a553ad49001d1b0d_9366/scarpe-basket-profi.jpg',
                gender: 'Uomo Donna',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 54.99,
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['red', 'black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Tessuto / Sintetico',
                DatePubblication: '02/01/22',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 8,
                Produttore:'Gabriele',
                Marca: 'Nike Sportswear',
                NameProduct: 'Nike Sportswear - WEARALLDAY',
                Description: 'Scarpe running neutre',
                TypeProduct: 'Scarpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/dfe6610cf3023936b7970a10f2870333/a627bf38e307474cb4de4eb78c3262f4.jpg?imwidth=1800&filter=packshot',
                gender: 'Uomo Donna',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 64.29,
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['Black', 'white'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Tessuto / Sintetico',
                DatePubblication: '20/10/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 9,
                Produttore:'Gabriele',
                Marca: 'Tommy Hilfiger',
                NameProduct: 'Tommy Hilfiger - LOGO HOODY',
                Description: 'Felpa con cappuccio',
                TypeProduct: 'Felpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/556e1738b2bc4a4a9d8d12506b3b4a34/63d1b11ddfa04c0aba984144300ba779.jpg?imwidth=1800',
                gender: 'Donna,Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 99.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['Black', 'Blue','Grey'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: ' 64% cotone, 36% poliestere',
                DatePubblication: '20/10/21',
                Shipment: '4-7 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 10,
                Produttore:'Gabriele',
                Marca:'Tommy Hilfiger',
                NameProduct: 'Tommy Hilfiger - NEW DENTON',
                Description: 'Cintura Tommy Hilfiger',
                TypeProduct: 'Cintura',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/ab03e4434c9c3190b97803342c8fec80/ef9573a6ecdf4e31b250810d36e6bfc9.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 49.98,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['Black', 'Orbit Gray'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: '100% pelle',
                DatePubblication: '02/01/22',
                Shipment: '2-6 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 11,
                Produttore:'Michele',
                Marca:'Adidas',
                NameProduct: 'Adidas Originals -SUPERSTAR UNISEX',
                Description: 'Sneakers basse',
                TypeProduct: 'Scarpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/43415fae1afa3271b62599a46349668d/ba4a786912dc4e5e8e45455ec63e095a.jpg?imwidth=1800',
                gender: 'Donna , Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: 68.98,
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['Black', 'Orbit Gray'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Cotone',
                DatePubblication: '20/10/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 12,
                Produttore:'Michele',
                Marca:'Adidas',
                NameProduct: 'STAN SMITH UNISEX - ',
                Description: 'Sneakers basse',
                TypeProduct: 'Scarpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/7e295577c9ea4263bcce34df5032f422/e976c1835b3740c4bd797fff5f828609.jpg?imwidth=762&filter=packshot',
                gender: 'Donna',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: Math.round(Math.random() * 100),
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['Black', 'Orbit Gray'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Cotone',
                DatePubblication: '20/10/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 13,
                Produttore:'Michele',
                Marca:'Adidas',
                NameProduct: 'Adidas Originals',
                Description: 'UNISEX - Sneakers basse',
                TypeProduct: 'Scarpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/fc076d1d4b2a4bf79642d8228bce5d4b/3efa6b3948414d1d854e6ca7d2746b34.jpg?imwidth=1800',
                gender: 'Unisex',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: Math.round(Math.random() * 100),
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['white', 'grey'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Finta pelle / Tessuto',
                DatePubblication: '10/08/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 14,
                Produttore:'Michele',
                Marca:'Tommy Hilfiger',
                NameProduct: 'Tommy Hilfiger - CORP BACK LOGO TEE',
                Description: 'T-shirt con stampa',
                TypeProduct: 'T-shirt & Polo',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/9eb11e26a956442296783e4b09e2cf27/3acc17733ff74b069a5bf0ca3a03db6c.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 44.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['black', 'gray'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Cotone',
                DatePubblication: '20/10/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 15,
                Produttore:'Michele',
                Marca:'Nike Sportswear',
                NameProduct: 'CRATER IMPACT - Sneakers basse',
                Description: 'Scarpa ginnica per jogging',
                TypeProduct: 'Scarpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/35b204c243744e3ab4e4a0f9445143cc/ca5a2863ab5e41a599e17e8f4d0806ec.jpg?imwidth=1800',
                gender: 'Unisex',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 62.99,
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['white', 'black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Cotone',
                DatePubblication: '20/10/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 16,
                Produttore:'Michele',
                Marca:'Redefined Rebel',
                NameProduct: 'ELMER - Giacca in pile',
                Description: 'Giacca con Zip e Cappuccio',
                TypeProduct: 'Giacca in pile',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/c90d238776524e1a9c10f4c65954e1e5/864d67c062fc455c988f2f828dea390b.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 44,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['black', 'yellow', 'green', 'white'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Cotone',
                DatePubblication: '20/12/21',
                Shipment: '7-8 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 17,
                Produttore:'Michele',
                Marca:'Trendyol',
                NameProduct: 'Trendyol',
                Description: 'Maglione',
                TypeProduct: 'Maglieria',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/be5cccbb53134768aff781e949d21fac/d22637fef42d44238ac6888e67897008.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: Math.round(Math.random() * 100),
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0,
                    },
                ],
                Color: ['pink'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: '100% acrilica',
                DatePubblication: '05/10/21',
                Shipment: '4 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 18,
                Produttore:'Michele',
                Marca:'Nike',
                NameProduct: 'Nike Sportswear',
                Description: 'BLAZER MID 77 INFINITE - Sneakers alte',
                TypeProduct: 'Scarpe',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/68c9a69e3d4334afb55ca54a4e74c9f7/30b47d8d86a945efb5b5060fb5b75444.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: Math.round(Math.random() * 100),
                Size: [
                    {
                        Size: 36,
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 38,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 40,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 42,
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 44,
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['blue', 'white', 'orange'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: 'Pelle',
                DatePubblication: '12/11/21',
                Shipment: '2 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 19,
                Produttore:'Michele',
                Marca:'PULL&BEAR',
                NameProduct: 'KOMBINIERTE COLLEGE MIT AUFNÄHER ',
                Description: 'Giubbotto Bomber',
                TypeProduct: 'Giacche',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/73c5ff58bd3b4a5593055945218bb8f7/e33f8a34b9ed4f629a231f9d5ed90afb.jpg?imwidth=1800',
                gender: 'Uomo',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: Math.round(Math.random() * 100),
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['green', 'black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: '77% cotone, 23% poliestere',
                DatePubblication: '20/12/21',
                Shipment: '6 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 20,
                Produttore:'Michele',
                Marca:"Levi's®",
                NameProduct: '501 CROP',
                Description: 'Jeans Tapered Fit',
                TypeProduct: 'Jeans',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/f1ba07d19e2640ea8b887cdb71856c5f/d922e5bcb8a24675a54e50b1b79725da.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: ''
                    }
                ],
                Price: Math.round(Math.random() * 100),
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['black', 'blue', 'white'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 3, //?
                CodeProd: nCasuale(),
                Materials: ' 100% cotone',
                DatePubblication: '04/04/21',
                Shipment: '4 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 21,
                Produttore:'Gabriele',
                Marca:'Sixth June',
                NameProduct: 'SHORT PUFFER - Giacca invernale',
                Description: 'Giacca invernale',
                TypeProduct: 'Giacca',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/cab2a172d2d64ae99c1f7f492f08eed0/2dd41cfae8ad4a34afd7261c5c18b944.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 70.00,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['orange','black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: '100% poliestere',
                DatePubblication: '12/01/2022',
                Shipment: '10-12 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 22,
                Produttore:'Gabriele',
                Marca:'Weekday',
                NameProduct: 'MOON HOODED PUFFER JACKET - Giacca invernale',
                Description: 'Giacca invernale',
                TypeProduct: 'Giacca',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/eb6d0269e3054b8a80d619e3d9568d14/df69e969956d4057b054840edd0141eb.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 109.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['pink'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: '100% poliestere',
                DatePubblication: '12/01/2022',
                Shipment: '10-12 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 23,
                Produttore:'Gabriele',
                Marca:'Mango',
                NameProduct: 'Mango - Giacca invernale',
                Description: 'Giacca invernale',
                TypeProduct: 'Giacca',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/589f05e1085445d696c3dc76fd04c0db/2c4e4e48041e451794744c339ae2c6c6.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 79.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['pink'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: '100% poliestere',
                DatePubblication: '12/01/2022',
                Shipment: '10-12 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 24,
                Produttore:'Gabriele',
                Marca:'Stradivarius',
                NameProduct: 'Stradivarius - Pantaloni cargo',
                Description: 'Pantaloni cargo',
                TypeProduct: 'GiaccaPantaloni',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/b82f59715b8b45d29c1b4a0c92c07543/a53cef0de80a40e791a3208efb280100.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 79.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['darkbrown','beige','black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: '100% cotone',
                DatePubblication: '12/01/2022',
                Shipment: '10-12 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 25,
                Produttore:'Gabriele',
                Marca:'PULL&BEAR',
                NameProduct: 'HIGH WAIST - Jeans a sigaretta',
                Description: 'Jeans a sigaretta',
                TypeProduct: 'Jeans',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/0dc7c07b482c4b0484052f1cd462f7db/7a720b2224be466882ad724d72fe6355.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 79.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['darkbrown','beige','black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: '100% cotone',
                DatePubblication: '12/01/2022',
                Shipment: '10-12 giorni per la Spedizione',
                Promo: true,     
                inCart: false,
                ColorSelected: []
            },
            {
                Id: 26,
                Produttore:'Gabriele',
                Marca:'Bershka',
                NameProduct: 'Bershka - Pantaloni',
                Description: 'Pantaloni',
                TypeProduct: 'Pantaloni',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/a03cc827ea314cb2a165059ed2ad0a51/9ab8aff1b5bb4f33a47355438128c107.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 29.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['darkbrown','beige','black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: '100% cotone',
                DatePubblication: '12/01/2022',
                Shipment: '10-12 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
            {
                Id: 27,
                Produttore:'Gabriele',
                Marca:'Even&Odd',
                NameProduct: 'Bershka - Maglietta a manica lunga',
                Description: 'Maglietta a manica lunga',
                TypeProduct: 'Maglieria',
                Thumb:'https://img01.ztat.net/article/spp-media-p1/6ca9a5a85a5346b793ccc8b7a68c6e70/20f9341b9f8c4ac3b3c433b687d416cf.jpg?imwidth=1800',
                gender: 'Donna',
                Image: [
                    {
                        Front: 'fr1',
                        Back: 'rt',
                        Side: 'fr2',
                        FrontB:'fr3',
                        FrontC:'fr4'
                    }
                ],
                Price: 19.99,
                Size: [
                    {
                        Size: 'XS',
                        Quantity: 5,
                        Count: 0
                    },
                    {
                        Size: 'S',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'M',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'L',
                        Quantity: 10,
                        Count: 0,
                    },
                    {
                        Size: 'XL',
                        Quantity: 5,
                        Count: 0
                    },
                ],
                Color: ['black'],
                QuantitySelected:0,
                QuantityDecurted:0,
                Rate: 4, //?
                CodeProd: nCasuale(),
                Materials: 'Jersey',
                DatePubblication: '12/01/2022',
                Shipment: '10-12 giorni per la Spedizione',
                Promo: false,    
                inCart: false,
                ColorSelected: [] 
            },
        ]
        
}

export default function magazine(state = initialState, action:any) {
    
    switch (action.type) {
        case 'READ-MAGAZINE':
            return state
        case 'ADD-MAGAZINE':
            return{
                ...state,
                magazine: [...state.magazine, action.addtoMagazine]
            }
        case 'EDIT_PRODUCT':
            return {
                ...state,
                editProduct: null,
                magazine: state.magazine.map(magazine => magazine.Id === action.payload.id ? magazine = action.payload : magazine)
            }
        default:
            return state
    }
}