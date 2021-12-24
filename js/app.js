//slider
const swiper = new Swiper('.swiper-container', {
  direction:'horizontal',
  noSwipe: true,
  noSwipingClass: 'coinbank',
  noSwipingSelector: 'input',
});

//이체 슬라이드
const transPage = document.querySelector('.transfer')
const insertPage = transPage.querySelector('.transfer_amount')
const numberInput = transPage.querySelector('.number_input')
const nextBtn = transPage.querySelector('.next')
const donePage = transPage.querySelector('.transfer_done')

//계좌리스트 페이지on
function transfer() {
  transPage.classList.add("on")
  //reset 
  insertPage.style.display = 'none'
  numberInput.value = '';
  nextBtn.style.display = 'none';
  donePage.style.display = 'none'
  changeHome( )
}

// 계좌/이체 페이지 취소
function cancel() {
  transPage.classList.remove("on")
  changeHome( )
}
// 이체 숫자페이지 block
function inPage () {
  insertPage.style.display = 'block'
}
//이체금액 콤마
const commaNumber = document.querySelector(".number_input")
commaNumber.oninput = function() {
  let num = this.value
  let commavalue = num.replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  commaNumber.value = commavalue
}

// 숫자입력 다음 버튼 block
numberInput.addEventListener('click', next)
function next (){
    nextBtn.style.display = 'block'
}

// 다음 버튼 눌렀을때 금액이없으면 alert
// 있으면 완료
nextBtn.addEventListener('click', done)
function done(){
   if(numberInput.value <= 0){
    alert('금액을 입력해주세요')
   } else{
    const inputValue = document.querySelector('.input_value')
    inputValue.textContent =`${numberInput.value}원`;
    donePage.style.display = 'grid';
  }
}

// 이체페이지완료 홈으로 
const doneBtn = transPage.querySelector('.finish_btn')
function finish (){
  transPage.classList.remove("on")
  donePage.style.display = 'none'
  changeHome( )
}

//지출관리 페이지 on
const managePage = document.querySelector('.spending_manage')
const closeBtn = document.querySelector('.close')
function moveManagePage () {
  managePage.classList.add('on')
  changeHome( )
}
function closePage () {
  managePage.classList.remove('on')
  changeHome( )
}
//home icon change
function changeHome( ){
  let homeBtn = document.querySelector('.home');
  if(homeBtn.src.match("mdi_home")){
    homeBtn.src="./img/home.svg"
  } else{
    homeBtn.src="./img/mdi_home.svg"
  }
}


//지출관리 페이지 금액설정
const range = document.getElementById("slide_range")
const rangeValue = document.getElementById("range_val")

range.oninput = function() {
  let num = this.value
  let floorValue = String(num); 
  let commavalue = floorValue.replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  rangeValue.innerHTML = commavalue +`원`;

  //range color
  let inputMax = range.max
  let rangeRatio = (num/inputMax)*100
  range.style.backgroundSize = `${rangeRatio}%`
} 

//즐겨찾기 toggle
const starIconEl = document.querySelectorAll(".star_icon")

for(let starIcon of starIconEl){
  starIcon.addEventListener('click', () => {
    if(starIcon.src.match("./img/star_fill.svg")){
      starIcon.src="./img/star_empty.svg"
    } else{
      starIcon.src = "./img/star_fill.svg"
    }
  })
}

