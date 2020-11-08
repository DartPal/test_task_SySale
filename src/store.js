const productsData = [
    {
        id: 1,
        productImage: 'http://kapustinpavel.com/test_sysale/product_1.png',
        productImageLarge: 'http://kapustinpavel.com/test_sysale/product_1_large.png',
        tags: [
            {id: 't1', name: 'new', className: 'new'},
        ],
        name: 'Шампунь',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        colors: [
            {id: 'c1', name: 'White'},
            {id: 'c2', name: 'Green'},
            {id: 'c3', name: 'Red'},
        ],
        volume: [
            {id: 'v1', nameValue: 1, name:100, coefficient: 1, checked:true},
            {id: 'v3', nameValue: 1, name:200, coefficient: 2},
            {id: 'v4', nameValue: 1, name:300, coefficient: 3},
        ],
        price: 200,
    },
    {
        id: 2,
        productImage: 'http://kapustinpavel.com/test_sysale/product_2.png',
        productImageLarge: 'http://kapustinpavel.com/test_sysale/product_2_large.png',
        tags: [
            {id: 't4', name: 'new', className: 'new'},
        ],
        name: 'Шампунь',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        colors: [
            {id: 'c4', name: 'White'},
            {id: 'c5', name: 'Green'},
            {id: 'c6', name: 'Red'},
        ],
        volume: [
            {id: 'v4', nameValue: 2, name:100, coefficient: 1, checked:true},
            {id: 'v5', nameValue: 2, name:200, coefficient: 2},
            {id: 'v6', nameValue: 2, name:300, coefficient: 3},
        ],
        price: 200,
    },
    {
        id: 3,
        productImage: 'http://kapustinpavel.com/test_sysale/product_3.png',
        productImageLarge: 'http://kapustinpavel.com/test_sysale/product_3_large.png',
        tags: [
            {id: 't7', name: 'new', className: 'new'},
        ],
        name: 'Шампунь',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        colors: [
            {id: 'c7', name: 'White'},
            {id: 'c8', name: 'Green'},
            {id: 'c9', name: 'Red'},
        ],
        volume: [
            {id: 'v7', nameValue: 3, name:100, coefficient: 1, checked:true},
            {id: 'v8', nameValue: 3, name:200, coefficient: 2},
            {id: 'v9', nameValue: 3, name:300, coefficient: 3},
        ],
        price: 200,
    }
]

export default productsData;