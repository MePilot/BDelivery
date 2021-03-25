export const restarauntList = [
    {
        name: 'KFC',
        logo: require('../assets/restLogos/kfc.png'),
        description: `It is the world's second-largest restaurant chain after McDonald's`,
        products: [
            { name: 'Solo Bucket', logo: require('../assets/productsLogos/soloBucket.png'), price: 10 },
            { name: 'Box Master', logo: require('../assets/productsLogos/boxMaster.png'), price: 20 },
            { name: 'KFC3', logo: require('../assets/productsLogos/salad2.png'), price: 30 }],
        location: { lat: 31.2336089, lon: 34.7975834 }
    },
    {
        name: 'MacDonalds',
        logo: require('../assets/restLogos/McDonald.png'),
        description: `Number one in the world`,
        products: [
            { name: 'Solo Bucket', logo: require('../assets/productsLogos/soloBucket.png'), price: 10 },
            { name: 'Box Master', logo: require('../assets/productsLogos/boxMaster.png'), price: 20 },
            { name: 'KFC3', logo: require('../assets/productsLogos/salad2.png'), price: 30 }],
        location: { lat: 31.244067, lon: 34.81077 }
    },
    {
        name: 'Burger King',
        logo: require('../assets/restLogos/burgerking.png'),
        description: `The king of burgers`,
        products: [
            { name: 'Burger1', logo: require('../assets/productsLogos/burger.png'), price: 34 },
            { name: 'Burger2', logo: require('../assets/productsLogos/burger.png'), price: 53 },
            { name: 'Burger3', logo: require('../assets/productsLogos/burger.png'), price: 24 }],
        location: { lat: 31.2222163, lon: 34.7983161 }
    },
    {
        name: 'Pizza Hut',
        logo: require('../assets/restLogos/pizzahut.png'),
        description: `Pizza restaraunt in Beer Sheva`,
        products: [
            { name: 'Pepperoni', logo: require('../assets/productsLogos/pepperoni.png'), price: 89 },
            { name: 'Neapoli', logo: require('../assets/productsLogos/pizza.png'), price: 123 },
            { name: 'Roma', logo: require('../assets/productsLogos/pizza.png'), price: 44 },
            { name: 'Italia', logo: require('../assets/productsLogos/pizza.png'), price: 78 },
            { name: 'Gladiator', logo: require('../assets/productsLogos/pizza.png'), price: 97 },
        ],
        location: { lat: 31.2684673494, lon: 34.768492290 }
    }
]