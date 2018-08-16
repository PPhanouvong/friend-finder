
var operatorArray = [
    {
        name: 'Thermite',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiZma61pvDcAhWNTN8KHVIfCEEQjRx6BAgBEAU&url=http%3A%2F%2Ftomclancy.wikia.com%2Fwiki%2FFile%3AThermite.png&psig=AOvVaw3RLhPHpn4DsgCqF1qfUiR-&ust=1534465080139628",
        score: [3, 1, 3, 1, 3, 4, 5, 5, 1, 1]
    },

    {
        name: 'Blitz',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwislY3WpvDcAhUlWN8KHeCbA8MQjRx6BAgBEAU&url=http%3A%2F%2Frainbowsix.wikia.com%2Fwiki%2FFile%3ABlitz_Portrait.png&psig=AOvVaw3RLhPHpn4DsgCqF1qfUiR-&ust=1534465080139628",
        score: [5, 3, 1, 5, 3, 5, 1, 1, 5, 1]
    },

    {
        name: 'Ash',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwifpYXfpfDcAhVBdt8KHVBqBSkQjRx6BAgBEAU&url=https%3A%2F%2Frainbowsixsiege.gamepedia.com%2FAsh&psig=AOvVaw2xRCu1vHdcVIoQmXHNoSSj&ust=1534464663221235",
        score: [5, 1, 3, 1, 3, 5, 5, 5, 1, 1]
    },

    {
        name: 'Hibana',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi328q-pvDcAhXkQd8KHRejA_cQjRx6BAgBEAU&url=http%3A%2F%2Frainbowsix.wikia.com%2Fwiki%2FFile%3AHibana_-_Full_Body.png&psig=AOvVaw3RLhPHpn4DsgCqF1qfUiR-&ust=1534465080139628",
        score: [5, 3, 1, 1, 4, 5, 5, 5, 1, 2]
    },

    {
        name: 'Lion',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiBrL7OpfDcAhUIWN8KHXqaCe4QjRx6BAgBEAU&url=http%3A%2F%2Frainbowsix.wikia.com%2Fwiki%2FLion&psig=AOvVaw2xRCu1vHdcVIoQmXHNoSSj&ust=1534464663221235",
        score: [2, 5, 3, 1, 5, 2, 4, 4, 1, 3]
    },

    {
        name: 'Dokkaebi',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjKxdCGpvDcAhUDON8KHQeUBRsQjRx6BAgBEAU&url=https%3A%2F%2Fstore.ubi.com%2Fie%2Ftom-clancy-s-rainbow-six-siege%2F56c494ad88a7e300458b4d5a.html&psig=AOvVaw3RLhPHpn4DsgCqF1qfUiR-&ust=1534465080139628",
        score: [1, 5, 2, 1, 5, 2, 5, 4, 2, 2]
    },

    {
        name: 'IQ',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiZwp-OpvDcAhXCl-AKHRVlDIMQjRx6BAgBEAU&url=https%3A%2F%2Frainbowsixsiege.gamepedia.com%2FIQ&psig=AOvVaw3RLhPHpn4DsgCqF1qfUiR-&ust=1534465080139628",
        score: [3, 3, 3, 1, 5, 3, 4, 4, 2, 3]
    },

    {
        name: 'Twitch',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiEv9TNpvDcAhVOUt8KHQZUDbUQjRx6BAgBEAU&url=http%3A%2F%2Frainbowsix.wikia.com%2Fwiki%2FTwitch%2FGallery&psig=AOvVaw3RLhPHpn4DsgCqF1qfUiR-&ust=1534465080139628",
        score: [1, 4, 5, 1, 5, 3, 4, 3, 1, 4]
    },

    {
        name: 'Glaz',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQssPYpfDcAhUvTd8KHckXAwEQjRx6BAgBEAU&url=http%3A%2F%2Fpowerairsoft.com.br%2Fhome%2Fr6-operators-glaz_229118%2F&psig=AOvVaw2xRCu1vHdcVIoQmXHNoSSj&ust=1534464663221235",
        score: [1, 5, 1, 1, 5, 2, 5, 5, 1, 5]
    },

    {
        name: 'Fuze',
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiq3JPwpfDcAhUiTt8KHSdHADEQjRx6BAgBEAU&url=https%3A%2F%2Fru.kisspng.com%2Fpng-tom-clancys-rainbow-six-siege-tom-clancys-the-divi-1443239%2F&psig=AOvVaw2xRCu1vHdcVIoQmXHNoSSj&ust=1534464663221235",
        score: [5, 5, 5, 5, 3, 4, 4, 1, 1, 1]
    },
];

//How to export array.
module.exports = operatorArray;