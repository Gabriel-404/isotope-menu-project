//items
const menu = [
    {
        id: 1,
        title: "Mundial interclubes - 1981",
        category: "World Cup",
        img: "./images/mundial.jpg",
        desc: 'Clube de Regatas Flamengo becomes champion of the Intercontinental Cup (also known as Interclub World Cup) for the first time, beating Liverpool 3-0.',
    },
    {
        id: 2, 
        title: "Taça Libertadores da América - 1981 e 2019",
        category: "Continental",
        img: "./images/libertadores.jpg",
        desc: 'The Taça Libertadores da América is the main football competition between professional clubs in South America (CONMEBOL) since 1960.',
    },
    {
        id: 3,
        title: "Campeonato Brasileiro (8 titles) - 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020",
        category: "National",
        img: "./images/brasileiro.jpg",
        desc:  'The Campeonato Brasileiro de Futebol, is the Brazilian professional football league between clubs in Brazil, being the main football competition in the country.'
    },
    {
        id: 4,
        title: 'Copa do Brasil - 1990 (undefeated), 2006 e 2013',
        category: "National",
        img: "./images/brasil13.jpg",
        desc:  'The Copa do Brasil de Futebol, known simply as Copa do Brasil, is a national football competition in Brazil.',
    },
    {
        id: 5,
        title: "Campeonato Carioca - (37 titles) 1914, 1915 (undefeated) 1920 (undefeated), 1921, 1925, 1927, 1939, 1942, 1943, 1944...",
        category: "Regional",
        img: "./images/carioca.jpg",
        desc: "Campeonato Carioca de Futebol, is the main competition between football teams in the state of Rio de Janeiro, in Brazil",   
    }
];

//console.log(menu[2].title) --- ACHAR UM ATRIBUTO(ID/TITLE/CATEGORY/...) DENTRO DO OBJETO NO ARRAY

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector(".btn-container")


//load items
window.addEventListener("DOMContentLoaded", function(){  // WINDOW SERVE PRA CHAMAR QQR FUNCTION NO JS REFERENTE A DOM
    displayMenuItems(menu) 
    displayMenuButtons()
})

function displayMenuItems(menuItems){   // menuItems é um PARÂMETRO 

    let displayMenu = menuItems.map((item) => { 

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
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