
// 슬라이드 설정 파트
const point = document.querySelectorAll('.bar')//터치부위
const spend = document.querySelectorAll('.spending');//슬라이드 부분

// 슬라이드 이동범위
let moveDistance = 253;

let startPos = 0;
let offset = 0;
// let curPos = 0;

// touch를 통한 슬라이드 
point.forEach((point) => {
  spend.forEach((inner)  => {
    //처음 스타트 포지션
    point.addEventListener('touchstart', (e) => {
      startPos = e.touches[0].pageY;
      inner.style.height = `${756}px`
    });

  //터치를 움직일때 translate를 통해 위치 변경
    point.addEventListener('touchmove', (e) => {
      e.preventDefault 
      offset = e.targetTouches[0].pageY - startPos;
      inner.style.transform = `translate3d(0px, ${offset}px, 0px)`;
      inner.style.transitionDuration = '0ms';
    });
    
    //터치가 끝났을때 처리
    point.addEventListener('touchend', (e) => {
      const sum = e.changedTouches[0].pageY - startPos;
      inner.style.transform = `translate3d(0px, ${offset}px, 0px)`;
      let destination = Math.round(sum / moveDistance) * moveDistance;
      if (destination == 0) {
        if(sum > 0) {
          destination = 0 //50%이상을 움직이않으면 원상태로 
        inner.style.transform = `translate3d(0px, ${destination}px, 0px)`;
        } else {
          destination = 0 
          inner.style.height = `${383}px`
          inner.style.transform = `translate3d(0px, ${destination}px, 0px)`;
        }
      } else {
        if(destination < 0) { //위로 올렸을때
          inner.style.top = `${44}px`
          // inner.style.position='absolute'
        } else {//아래로내렸을때 
          inner.style.top = `${272}px`
          spend[0].style.top = `${309}px`
          inner.style.height = `${459}px`
          // inner.style.removeProperty('position')
        }
        inner.style.removeProperty('transform')
      }
      inner.style.transitionDuration = '300ms';
      setTimeout(() => {
        inner.style.transitionDuration = '0ms'; 
      }, 300);
    });
  })
})
