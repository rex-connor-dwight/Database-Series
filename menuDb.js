


const cocktailPriceOne = 7000.00;

const drinks = {

    wines : {
        wineOne : { name : `Four Cousins`, price : 15000.00},
        wineTwo : { name : `Frontera`, price : 15000.00},
        wineThree : { name : `4th Street`, price : 15000.00},
        wineFour : { name : `Carlo Rossi`, price : 15000.00},
        wineFive : { name : `Baileys`, price : 15000.00}
    },

    whiskey : {
        whiskeyOne : { name : `James Original`, price : 40000.00},
        whiskeyTwo : { name : `James Black Barrel`, price : 60000.00},
        whiskeyThree : { name : `Jack Daniel`, price : 30000.00},
        whiskeyFour : { name : `Singleton (12 Years)`, price : 80000.00},
        whiskeyFive : { name : `Glenfiddich (18 Years)`, price : 180000.00},
        whiskeySix : { name : `Gold Label`, price : 50000.00},
        whiskeySeven : { name : `Black Label`, price : 50000.00},
        whiskeyEight : { name : `Johnny Walker (18 Years)`, price : 120000.00},
        whiskeyNine : { name : `Blue Label`, price : 350000.00}
    },

    brandy : {
        brandyOne : { name : `H by Hine`, price : 70000.00},
        brandyTwo : { name : `Hine Rare`, price : 70000.00},
        brandyThree : { name : `Hennessy VSOP`, price : 150000.00},
        brandyFour : { name : `Hennessy XO`, price : 500000.00}
    },

    champagne : {
        champagneOne : { name : `Moet Rose`, price : 220000.00},
        champagneTwo : { name : `Moet Ice`, price : 250000.00},
        champagneThree : { name : `Moet Brute`, price : 200000.00},
        champagneFour : { name : `Tattinger Noc Rose `, price : 90000.00},
        champagneFive : { name : `Tattinger Noc`, price : 85000.00},
        champagneSix : { name : `Blue Nun (Gold Flakes)`, price : 30000.00},
        champagneSeven : { name : `Blue Nun Silver (Non Alcoholic)`, price : 20000.00}
    },

    tequilaAndDryGin : {
        tadgOne : { name : `Gordon’s Gin`, price : 15000.00},
        tadgOTwo : { name : `Omelca Tequila`, price : 40000.00},
        tadgThree : { name : `Sierra Tequila`, price : 30000.00},
        tadgFour : { name : `Azul`, price : 400000.00}
    },

    vodka : { name : `Absolute Vodka`, price : 20000.00},

    beers : {
        beerOne : { name : `Heineken`, price : 1500.00},
        beerTwo : { name : `Legend Stout`, price : 1500.00},
        beerThree : { name : `Star`, price : 1200.00},
        beerFour : { name : `Gulder`, price : 1200.00},
        beerFive : { name : `Goldberg`, price : 1200.00},
        beerSix : { name : `Life`, price : 1200.00},
        beerSeven : { name : `Radler`, price : 1000.00},
        beerEight : { name : `Smooth`, price : 1200.00},
        beerNine : { name : `Orijin Bitters`, price : 1200.00},
        beerTen : { name : `Medium Stout`, price : 1200.00},
        beerEleven : { name : `Budweiser`, price : 1500.00},
        beerTwleve : { name : `Hero`, price : 1200.00},
        beerThirteen : { name : `Throphy`, price : 1200.00},
        beerFourteen : { name : `Guinness Big Stout`, price : 1500.00},
        beerFifteen: { name : `Tiger`, price : 1200.00},
        beerSixteen : { name : `Desparado`, price : 1200.00}
    },

    ciders : {
        ciderOne : { name : `Savanna Dry`, price : 12000.00},
        ciderTwo : { name : `Hunters Gold`, price : 12000.00}
    },

    moctails : {
        moctailOne : { name : `Champman`, price : 4000.00},
        moctailTwo : { name : `Virgin Mojito`, price : 5500.00},
        moctailThree : { name : `Virgin Colada`, price : 5500.00},
        moctailFour : { name : `Iced Tea`, price : 5500.00},
        moctailFive : {
            typeOne : { name : `The Republic Summer Peach lemon juice`, price : 5500.00},
            typeTwo : { name : `The Republic Summer Peach Sweetened Soda`, price : 5500.00},
            typeThree : { name : `The Republic Summer Peach Angostura`, price : 5500.00},
        },
        moctailSix : { name : `Roy Rodgers`, price : 5500.00},
        moctailSeven : { name : `No Tequila Sunrise`, price : 5500.00},
        moctailEight : { name : `Abstinence on The Beach`, price : 5500.00},
    },

    cocktails : {
        marshMellow : {
            typeOne : { name : `Marsh Mellow flavoured vodka`, price : `${cocktailPriceOne}`},
            typeTwo : { name : `Marsh Mellow pineapple juice`, price : `${cocktailPriceOne}`},
            typeThree : { name : `Marsh Mellow lime juice `, price : `${cocktailPriceOne}`},
        },
        daiquiri : {
            typeOne : { name : `Daiquiri Rum`, price : `${cocktailPriceOne}`},
            typeTwo : { name : `Daiquiri Lime Juice`, price : `${cocktailPriceOne}`},
            typeThree : { name : `Daiquiri Brown Sugar`, price : `${cocktailPriceOne}`},
            typeFour : { name : `Daiquiri Choice of Fruit`, price : `${cocktailPriceOne}`}
        },
        mojito : {
            typeOne : { name : `Mojito Mint Leaves`, price : `${cocktailPriceOne}`},
            typeTwo : { name : `Mojito Brown Sugar`, price : `${cocktailPriceOne}`},
            typeThree : { name : `Mojito Lime juice`, price : `${cocktailPriceOne}`},
            typeFour : { name : `Mojito Soda`, price : `${cocktailPriceOne}`}
        },
        tomCollins : {
            typeOne : { name : `Tom Collins Gin`, price : `${cocktailPriceOne}`},
            typeTwo : { name : `Tom Collins Lemon Juice`, price : `${cocktailPriceOne}`},
            typeThree : { name : `Tom Collins Simple Syrup`, price : `${cocktailPriceOne}`}
        },
        babyGirl : {
            typeOne : { name : `Baby Girl Brandy`, price : `${cocktailPriceOne}`},
            typeTwo : { name : `Baby Girl Irish Cream`, price : `${cocktailPriceOne}`},
            typeThree : { name : `Baby Girl Coffee Liquor`, price : `${cocktailPriceOne}`}
        },
        whiskeySour : {
            typeOne : { name : `Whiskey Sour Whiskey`, price : `${cocktailPriceOne}`},
            typeTwo : { name : `MWhiskey Sour Lime Juice`, price : `${cocktailPriceOne}`},
            typeThree : { name : `Whiskey Sour Egg White`, price : `${cocktailPriceOne}`},
            typeFour : { name : `Whiskey Sour Brown Sugar`, price : `${cocktailPriceOne}`}
        },
        jungleBird : {
            typeOne : { name : `Jungle Bird Dark Rum`, price : `${cocktailPriceOne}`},
            typeTwo : { name : `MWhiskey Sour Lime Juice`, price : `${cocktailPriceOne}`},
            typeThree : { name : `Whiskey Sour Egg White`, price : `${cocktailPriceOne}`},
            typeFour : { name : `Whiskey Sour Brown Sugar`, price : `${cocktailPriceOne}`}
        },
        Hurricane: {
            typeOne: { name: `Various rum`, price: `${cocktailPriceOne}` },
            typeTwo: { name: `Lime Juice`, price: `${cocktailPriceOne}` },
            typeThree: { name: `Passion syrup`, price: `${cocktailPriceOne}` }
        },
        sexOnTheBeach: {
            typeOne: { name: `Vodka`, price: `${cocktailPriceOne}` },
            typeTwo: { name: `Peach schnapps`, price: `${cocktailPriceOne}` },
            typeThree: { name: `Cranberry juice`, price: `${cocktailPriceOne}` },
            typeFour: { name: `Orange juice`, price: `${cocktailPriceOne}` },
            typeFive: { name: `Pineapple juice`, price: `${cocktailPriceOne}` }
        },
        LongIslandIcedTea: {
            typeOne: { name: `Various spirits`, price: `${cocktailPriceOne}` },
            typeTwo: { name: `Lemon juice`, price: `${cocktailPriceOne}` },
            typeThree: { name: `Dash of cola`, price: `${cocktailPriceOne}` }
        },
        painKiller: {
            typeOne: { name: `Dark rum`, price: `${cocktailPriceOne}` },
            typeTwo: { name: `Pineapple juice`, price: `${cocktailPriceOne}` },
            typeThree: { name: `Orange juice`, price: `${cocktailPriceOne}` }
        },
        margarita: {
            typeOne: { name: `Tequila`, price: `${cocktailPriceOne}` },
            typeTwo: { name: `Triple sec`, price: `${cocktailPriceOne}` },
            typeThree: { name: `Lemon juice`, price: `${cocktailPriceOne}` }
        },
        cosmopolitan: {
            typeOne: { name: `Vodka`, price: `${cocktailPriceOne}` },
            typeTwo: { name: `Lime juice`, price: `${cocktailPriceOne}` },
            typeThree: { name: `Cranberry juice`, price: `${cocktailPriceOne}` }
        },
        pinaColada: {
            typeOne: { name: `Rum`, price: `${cocktailPriceOne}` },
            typeTwo: { name: `Coconut cream`, price: `${cocktailPriceOne}` },
            typeThree: { name: `Pineapple`, price: `${cocktailPriceOne}` },
            typeFour: { name: `Coconut rum`, price: `${cocktailPriceOne}` }
        },
        theRepublicSpecial: {
            typeOne: { name: `Vodka`, price: `${cocktailPriceOne}` },
            typeTwo: { name: `Orange juice`, price: `${cocktailPriceOne}` },
            typeThree: { name: `Lemon juice`, price: `${cocktailPriceOne}` }
        },
        milkshakes: {
            vanillaMilkshake: { name: `Vanilla Milkshake`, price: 5500.00 },
            strawberryMilkshake: { name: `Strawberry Milkshake`, price: 5500.00 },
            caramelMilkshake: { name: `Caramel Milkshake`, price: 6000.00 },
            chocolateMilkshake: { name: `Chocolate Milkshake`, price: 5500.00 },
            bananaMilkshake: { name: `Banana Milkshake`, price: 5500.00 },
            oreoMilkshake: { name: `Oreo Milkshake`, price: 6000.00 },
            boozySmoresMilkshake: { name: `Boozy S’mores Milkshake`, price: 5500.00 },
            theRepublicMudSlide: { name: `The Republic Mud Slide`, price: 5500.00 },
            crazyMilkshake: { name: `Crazy Milkshake`, price: 6000.00 }
        },
        smoothies: {
            frozenOcean: {
                typeOne: { name: `Frozen Ocean Apple`, price: 5500.00 },
                typeTwo: { name: `Frozen Ocean Banana`, price: 5500.00 },
                typeThree: { name: `Frozen Ocean Pineapple`, price: 5500.00 },
                typeFour: { name: `Frozen Ocean Orange`, price: 5500.00 }
            },
            unforgettable: {
                typeOne: { name: `Unforgettable Mixed Fruits`, price: 5000.00 },
                typeTwo: { name: `Unforgettable Cream`, price: 5000.00 },
                typeThree: { name: `Unforgettable Passion Syrup`, price: 5000.00 }
            },
            kissMeQuick: { name: `Kiss Me Quick - strawberry cream`, price: 5000.00 },
            bananaSmoothie: { name: `Banana Smoothie`, price: 5000.00 },
            pineappleSmoothie: { name: `Pineapple Smoothie`, price: 5000.00 },
            watermelonSmoothie: { name: `Watermelon Smoothie`, price: 5000.00 },
            tropicalGingerSmoothie: { name: `Tropical Ginger Smoothie`, price: 5000.00 }
        },
        cigarettes: {
            bensonSwitch: { name: `Benson Switch`, price: 1500.00 },
            oris: { name: `Oris`, price: 1500.00 },
            rothmansSwitch: { name: `Rothmans Switch`, price: 1500.00 },
            bensonBrown: { name: `Benson Brown`, price: 1500.00 },
            bensonDemi: { name: `Benson Demi`, price: 1500.00 },
            esseChange: { name: `Esse Change`, price: 1500.00 },
            rothmansBrown: { name: `Rothmans Brown`, price: 1500.00 },
            captainBlack: { name: `Captain Black`, price: 1500.00 }
        },
        coffee: {
            "3in1Nescafé": { name: `3 in 1 Nescafé`, price: 1000.00 },
            millsAllInOne: { name: `Mills all in one`, price: 1000.00 },
            nescaféBlack: { name: `Nescafé Black`, price: 1000.00 },
            creamer: { name: `Creamer`, price: 1000.00 },
            cappucino: { name: `Cappucino`, price: 1000.00 },
            caféMocha: { name: `Café Mocha`, price: 1000.00 },
            mikaCino: { name: `Mika cino`, price: 1000.00 },
            caféLate: { name: `Café Late`, price: 1000.00 }
        }
    }
}
