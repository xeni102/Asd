$(function() {
    
    const worksSlider = $('[data-slider="slick"]')
    
    /* Filter
    ===============================*/    
    let filter = $("[data-filter]");
    
    filter.on("click", function(event) {
        event.preventDefault();
        
        let cat = $(this).data('filter');
        
        if(cat == 'all') {
            $("[data-cat]").removeClass("hide"); 
        } else {
           $("[data-cat]").each(function() {
            
            let workCat = $(this).data('cat');
            
            if(workCat != cat) {
                $(this).addClass('hide')
            } else {
                $(this).removeClass('hide')
            }
        }); 
        }        
    });
        
    
    
    
    /* Modal
    ===============================*/
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function() {
            $(modalId).find(".modal_dialog").css({
            transform: "rotateX(0)"
        });
        }, 200);
        
       worksSlider.slick('setPosition');
    });
    
    modalClose.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');

           modalParent.find(".modal_dialog").css({
            transform: "rotateX(90deg)"
        });
        
        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });
        
    $(".modal").on("click", function(event) {
        let $this = $(this)
        $this.find(".modal_dialog").css({
            transform: "rotateX(90deg)"
        });
        
        setTimeout(function() {
             $this.removeClass('show');
        $("body").removeClass('no-scroll');
        }, 200);
    });
        
        $(".modal_dialog").on("click", function(event) {
        event.stopPropagation();    
    });
    
    /* Slider: https://kenwheeler.github.io/slick/
    ==============================*/
    
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    
    $(".slickPrev").on("click", function(event) {
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick("slickPrev")
    });
    
    $(".slickNext").on("click", function(event) {
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick("slickNext")
    });
    
    
    /* form send 
    ==========================*/
    
        
    const form = document.forms["form"];
    
    form.addEventListener("input", inputHandler);
    
    function inputHander({target}) {
        if (target.hasAttribute("data-reg")) {
            inputCheck(target);
        }
    }
    
    function inputCheck(el) {
        const inputValue = el.value;
        const inputReg = el.getAttribute("data-reg");
        const reg = new RegExp(inputReg);
        console.log(inputValue, reg);
    }   
  
    
    
    
    
    
    /* Mobile nav 
    ==========================*/
    
    const navToggle =  $("#navToggle")
    const nav =  $("#nav")
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
    });
    
});

jQuery(document).ready(function() {
    $("nav a").mPageScroll2id({
        offset:134
    });
});