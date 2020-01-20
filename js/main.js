const App = new Vue({
  el: '#app',
  data: {
    drinkName: '',
    alcohols: [
      'rum 🥃',
      'scotch 🥃',
      'tequilla 🥃',
      'bourbon 🥃',
      'beer 🍺',
      'gin 🍸',
      'whiskey 🥃',
      'vodka 🍸',
      'red wine 🍷',
      'white wine 🥂',
      'red vermouth 🍷',
      'white vermouth 🥂'
    ],
    juices: [
      'apple juice 🍎',
      'orange juice 🍊',
      'lemon juice 🍋',
      'lime juice 🍋',
      'tomato juice 🍅',
      'cherry juice 🍒',
      'pineapple juice 🍍',
      'cola 🥤',
      'seltzer ✨'
    ],
    garnishes: [
      'lemon slice 🍋',
      'lime slice 🍋',
      'orange slice 🍊',
      'pineapple slice 🍍',
      'cocktail olive 🍸',
      'cocktail onion',
      'orange zest 🍊',
      'lemon zest 🍋',
      'salt 🧂',
      'whipped cream 🍦'
    ],
    actions: ['serve with ice ❄️', 'shake with ice ❄️', 'stir 🥄'],
    ingredients: {
      alcohol: [],
      juices: [],
      garnishes: []
    }
  },
  methods: {
    addToIngredients: function(event) {
      const ingredient = event.target.innerText;
      let arr = '';
      const myIngredients = this.ingredients;
      console.log(event.target.className);
      switch (event.target.className) {
        case 'alc-btn':
          arr = myIngredients.alcohol;
          break;
        case 'juice-btn':
          arr = myIngredients.juices;
          break;
        case 'garnish-btn':
          arr = myIngredients.garnishes;
          break;
        default:
          return;
      }
      if (arr.filter(i => i.name === ingredient).length === 0) {
        arr.push({ name: ingredient });
      } else {
        console.log(`${ingredient} already exists`);
      }
    }
  }
});
