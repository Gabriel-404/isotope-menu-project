//items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/buttermilk.jpeg",
        desc: 'Ronaldinho penta liberta flamengo uma vez pra sempre Flamengo aqui é flamengo campeao do mundo vamos meu Flamengo',
    },
    {
        id: 2, 
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/doubledinner.jpeg",
        desc: 'cyberpunk 2077 blade runner 2048 ronaldinho soccer 98 brasil hexacampeão 2022',
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/godzilla.jpg",
        desc:  'vs superman vs boruto naruto goku vaitomanocu ronaldinho cucucucucu alalalala rororo llelelelelleleeleladjhvgasoiho',
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/baconzito.jpg",
        desc: "Uma frase aleatória pode ajudá-lo a encontrar características específicas que você pode não ter considerado se estiver tentando criar um novo conceito, ideia ou produto.",   
    }
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector(".btn-container")


//load items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu) 
    displayMenuButtons()
})

function displayMenuItems(menuItems){    
    let displayMenu = menuItems.map(function(item){

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
      </p>

    </div>
    </article>`;
    })
    displayMenu = displayMenu.join("")
   sectionCenter.innerHTML = displayMenu
};

function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
          values.push(item.category)
        }
          return values
          
      },
      ['all']
      )
      const categoryBtns = categories.map(function(category){
          return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
      })
      .join("")
      container.innerHTML = categoryBtns
      const filterBtns = container.querySelectorAll(".filter-btn")
      // FILTER ITEMS
  filterBtns.forEach(function(btn){
      btn.addEventListener("click",function(e){
           const category = e.currentTarget.dataset.id
           const menuCategory = menu.filter(function(menuItem){
                  // console.log(menuItem.Category)
                  if(menuItem.category === category){
                      return menuItem
                  }
                      
           })
           if(category === 'all'){
              displayMenuItems(menu)
           }
           else{
              displayMenuItems(menuCategory)
           }
      })
      })

}