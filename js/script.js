/* typing animation*/
var typed = new Typed(".typing",{
    strings:["","IT Engineer","Web Designer","Web Developer", "Programmer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* Aside*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSelection = document.querySelectorAll(".section"),
    totalSection = allSelection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                  //allSelection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
           this.classList.add("active")
           showSection(this);
           if(window.innerWidth < 1200)
           {
            asideSectionTogglerBtn();
           }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSelection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSelection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSelection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);


    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => 
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSelection[i].classList.toggle("open");
            }
        }

 /* Work Popup*/
 document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
 })     

 function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
 }

 document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

 function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portafolio__item-details").innerHTML;
 }


 /* Service MOdal*/
const modalViews = document.querySelectorAll('.services__modal'),
    modelBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal')
    }
modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})


modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* Slyder of certifications*/
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

//   Cambio de idioma
var check=document.querySelector(".check");
check.addEventListener('click',idioma);

  function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="esp/index.html";
    }else{
        location.href="../index.html"
    }
  }