
//지출 총 합계를 구해서 예산에서 얼마 사용했는지 range 표시
const outSum = (data) => {
  //날짜 계산
  const date = new Date();
  const year = date.getFullYear();
  const month = date. getMonth();
  const day = date.getDate();
  const lastDate = new Date(year, month, "0")
  const lastDay = lastDate.getDate();

  const today = getToday()
  const restDate = lastDay - day
  document.querySelector('.rest_date').innerHTML = `${restDate}일`
  

  //지출 합계
  let count = Object.keys(data.bankList).length;
  let sum = 0
  for(let i=0; i< count; i++){
    if(data.bankList[i].date == today){
      break
    } else{
      if(data.income = "out"){
        let price = data.bankList[i].price
         sum += price
      }
    } 
   }
  //지출내역 페이지내에 기준금액설정
  const range = document.getElementById("slide_range")
  const moneyLeft = document.querySelector(".money_left")

  //지출내역 페이지에 range를 움직여서 각 금액 반영 
  range.addEventListener('input', function() {
    let num = this.value
    let left = num - sum
    let floorValue = String(left); 
    let commavalue = floorValue.replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    moneyLeft.innerHTML = `${commavalue}원`

    //메인에 남은 한도 게이지 
    const rangeSlide = document.querySelector('.range_slide') 
    rangeSlide.max = num

    let inputMax = rangeSlide.max
    let rangeRatio = (sum/inputMax)*100
    rangeSlide.style.backgroundSize = `${rangeRatio}%`
    const rangeThumb = document.querySelector('.range_thumb')
    if(rangeRatio > 100){
      rangeThumb.style.left= `${100}%`
      alert('한도를 초과하셨습니다')
    } else {
      rangeThumb.style.left= `${rangeRatio}%`
    }
   
  })
}     