function scrollE(){
    var coverWrapper = document.querySelector('.coverWrapper');
    var contWrapper = document.querySelector('.contWrapper');
    var startY;

    window.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
        // console.log(startY);
    });

    window.addEventListener('touchmove', function(e) {
        var deltaY = e.touches[0].clientY - startY;

        if (deltaY > 0 && contWrapper.scrollTop < 30) {
            requestAnimationFrame(function() {
                // coverWrapper.style.top = '0';
                coverWrapper.style.transform = 'translateY(' + 0 + 'vh)';
            });
        } else if (deltaY < 0) {
            requestAnimationFrame(function() {
                // coverWrapper.style.top = '-78vh';
                coverWrapper.style.transform = 'translateY(' + -78 + 'vh)';                    
            });
        }
    });
}
scrollE();

function layerPop(){
    let openBtn = document.querySelectorAll(".layerOpen");
    let layerID;
    if(openBtn !== null){
        for(let i=0; i<openBtn.length; i++){
            openBtn[i].addEventListener("click", function(){
                layerID = this.getAttribute("aria-controls");
                console.log(layerID);
                document.getElementById(layerID).classList.add('is-active');
            });
        }
        // for(let j=0; j<closeBtn.length; j++){
        //     closeBtn[j].addEventListener('click', function(){
        //         this.closest('.modalLayer').classList.remove('is-active');
        //     });
        // }

        //외부영역 클릭시 닫힘
        let Dim = document.querySelectorAll('.layerDim');

        for(let k=0; k<Dim.length; k++){
            Dim[k].addEventListener('click', function(){
                this.closest('.modalLayer').classList.remove('is-active');
            })
        }
    }else{
        return;
    }
}
layerPop();