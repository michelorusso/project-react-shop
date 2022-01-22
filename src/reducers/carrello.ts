const initialState = {
    carrello: [{
        Id: 0,
        Produttore: '',
        Marca: '',
        NameProduct: '',
        Description: '',
        TypeProduct: '',
        Thumb: '',
        gender: '',
        Image: [
            {
                Front: '',
                Back: '',
                Side: '',
                Fronta: '',
                Backb: '',
            }
        ],
        Price: 0,
        Size: [
            {
                Size: '',
                Quantity: 5,
                Count: 0
            }
        ],
        QuantityDecurted: 0,
        QuantitySelected: 0,
        SizeSelected: '',
        Color: [''],
        inCart: false,
        sellCount: 0,
        Rate: 0,
        CodeProd: 0,
        Materials: '',
        DatePubblication: '',
        Shipment: '',
        Promo: false,
    },    
    ],
    Totale: 0,
    singoloProdQMagazzino: [{}],
    AnagraficaUser: {
        Name: 'Name',
        LastName: 'LastName',
        email: 'email',
        password: 'password',
        state: 'state',
        zip: 'zip',
        citta: 'citta',
        andress: 'andress',
        totale: 0
    },
    arrayMethodPagamento: {
        circuito: 'img',
        bitcoin: false,
        usernamePayPal: 'usernamePayPal',
        usernameBitCoin: 'usernameBitCoin',
        intestatarioCarta: 'intestatarioCarta',
        password: 'password',
        numeroCarta: 'numeroCarta',
        scadenzaCarta: 'scadenzaCarta',
        CVV: 'CVV',
        Totale: 0
    },
    ColorSelected: [{}],
    arrayFatture: [
        {
            AnagraficaUser: {
                Name: '',
                LastName: '',
                email: '',
                password: '',
                state: '',
                zip: '',
                citta: '',
                andress: '',
                totale: 0
            },
            arrayMethodPagamento: {
                circuito: '',
                usernamePayPal: '',
                usernameBitCoin: '',
                intestatarioCarta: '',
                password: '',
                numeroCarta: '',
                scadenzaCarta: '',
                CVV: '',
                Totale: 0
            },
            carrello:
            {
                Id: 0,
                Produttore: '',
                Marca: '',
                NameProduct: '',
                Description: '',
                TypeProduct: '',
                Thumb: '',
                gender: '',
                Image: [
                    {
                        Front: '',
                        Back: '',
                        Side: '',
                        Fronta: '',
                        Backb: '',
                    }
                ],
                Price: 0,
                Size: [
                    {
                        Size: '',
                        Quantity: 5,
                        Count: 0
                    }
                ],
                QuantityDecurted: 0,
                QuantitySelected: 0,
                SizeSelected: '',
                Color: [''],
                inCart: false,
                sellCount: 0,
                Rate: 0,
                CodeProd: 0,
                Materials: '',
                DatePubblication: '',
                Shipment: '',
                Promo: false,
            },

        }
    ]

}
export default function carrello(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                carrello: [...state.carrello, action.addtoCart],
            }
        case 'ADD-MAGAZINE':
            return {
                ...state,
                carrello: [...state.carrello, action.addtoCart]
            }
        // case 'REMOVE_CART':
        //     let productsRemove = [...state.products];
        //     productsRemove.forEach((product) => {
        //       if (product.id === action.payload) {
        //         product.inCart = false;
        //         product.qty = 0;
        //       }
        //     });
      
        //     return {
        //       ...state,
        //       products: productsRemove,
        //     };
        default:
            return state
    }
}