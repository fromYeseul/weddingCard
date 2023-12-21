//첫장열기
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
        //console.log(contWrapper.getBoundingClientRect().top);
        if (deltaY > 0 && contWrapper.getBoundingClientRect().top >= 0) {
            //requestAnimationFrame(function() {
                coverWrapper.style.transform = 'translateY(' + 0 + 'vh)';
            //});
        } else if (deltaY < 0 ) {
            //requestAnimationFrame(function() {
                coverWrapper.style.transform = 'translateY(' + -82 + 'vh)';                    
            //});
            if(coverWrapper.getBoundingClientRect().top > -100){
                contWrapper.style.overflow = "hidden";
            }else{
                contWrapper.style.overflow = "initial";
            }
        }
    });
}
scrollE();

//눈내리기
const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
}

const letItSnow = () => {
    const snowflakes = document.querySelectorAll('circle');
    snowflakes.forEach((snowflake) => {
        snowflake.setAttribute('cx', getRandom(1,100) + '%');
        snowflake.setAttribute('cy', '-' + getRandom(1,100));
        snowflake.setAttribute('r', getRandom(1,6));
        snowflake.setAttribute('opacity', getRandom(0,1));
    })
};
letItSnow();

//레이어팝업
function layerPop(){
    let openBtn = document.querySelectorAll(".layerOpen");
    let layerID;
    if(openBtn !== null){
        openBtn.forEach(function(open){
            open.addEventListener('click', function(){
                layerID = this.getAttribute("aria-controls");
                //console.log(layerID);
                document.getElementById(layerID).classList.add('is-active');
            })
        })      
        //외부영역 클릭시 닫힘
        let Dim = document.querySelectorAll('.layerDim');

        Dim.forEach(function(layerDim){
            layerDim.addEventListener('click', function(){
                this.closest('.modalLayer').classList.remove('is-active');
            })
        })
    }else{
        return;
    }

    //눌러보세요 제거하기
    let rootAfterStyle = document.createElement("style");
    let gallery01 = document.querySelector('.gallery01');
    gallery01.addEventListener('click', function(){
        rootAfterStyle.innerHTML = `.gallery01::before{
            display: none;
        }`;
    })
    document.head.appendChild(rootAfterStyle);
}
layerPop();




//아코디언 on/off
function accordion(){    
    let accHead = document.querySelectorAll(".accHead");

    accHead.forEach(function(acc){
        acc.addEventListener('click', function(){
            this.closest('.accBox').classList.toggle('is-active');
        })
    })
}
accordion();


//계좌번호 복사
function copyTxt(){
    var copyAcc = document.querySelectorAll('.copyAcc');
    var copyAdd = document.querySelector('.copyAdd');

    copyAcc.forEach(function(button) {
        button.addEventListener('click', function() {
            var accountNum = this.previousElementSibling.querySelector('.accountNum').innerText;
            copyTextToClipboard(accountNum);
        });
    });

    copyAdd.addEventListener('click', function() {
        var addressTxt = this.previousElementSibling.querySelector('.address').innerText;
        copyTextToClipboard(addressTxt);
    });

    function copyTextToClipboard(text) {
        // navigator.clipboard.writeText(text)
        //     .then(function() {
        //         console.log('텍스트가 클립보드에 복사되었습니다.');
        //     })
        //     .catch(function(err) {
        //         console.log('복사를 실패하였습니다.');
        //     });

        var isiPhone = /iPhone/i.test(navigator.platform);

        if (isiPhone) {
            document.execCommand('copy');    
            var msg = '텍스트가 클립보드에 복사되었습니다.';
            alert(msg);
        } else {
            navigator.clipboard.writeText(text)
                .then(function() {
                    console.log('텍스트가 클립보드에 복사되었습니다.');
                })
                .catch(function(err) {
                    console.log('복사를 실패하였습니다.');
                });
        }
    }
}
copyTxt();