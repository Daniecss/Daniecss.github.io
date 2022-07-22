(function(){
     const sliders = [...document.querySelectorAll('.creator__boddy')];
     const bnext = document.querySelector('#next');
     const bbefore = document.querySelector('#before');
     
     let value;

     bnext.addEventListener('click', ()=>{
         changePosition(1);
     });

     bbefore.addEventListener('click', ()=>{
        changePosition(-1);
     });

     const changePosition=(add)=>{
        const currentTestimony = document.querySelector('.creator__boddy--show').dataset.id;
        value = Number(currentTestimony);
        value += add;
        
sliders[Number(currentTestimony-1)].classList.remove('creator__boddy--show');
      if(value===sliders.length+1  || value===0 ){
           value=value===0 ? sliders.length : 1;
      }
      sliders[value-1].classList.add('creator__boddy--show');
   }

})();