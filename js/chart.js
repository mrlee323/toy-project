//차트 리스트 데이터 
const graphData = (data) => {
  let oiling = 0;
  let health = 0;
  let eatout = 0;
  let mart = 0;
  let shopping = 0;
  let count = Object.keys(data.bankList).length;
  let today = getToday()

  for(let i=0; i<count; i++){
    const dataTotal = data.bankList[i].classify
    const dataPrice = data.bankList[i].price
    if(data.bankList[i].date == today){
      break
    } else {
      switch (dataTotal){
        case "oiling":
          oiling += dataPrice;
          break;
        case "health":
          health += dataPrice;
          break;
        case "eatout":
          eatout += dataPrice;
          break;
        case "mart":
          mart += dataPrice;
          break
        case "shopping":
          shopping += dataPrice;
          break
        default:
      }
    }
  }

let total = (oiling + mart + health + eatout + shopping)
let oilingPer = (oiling/total) * 100
let martPer = (mart/total) * 100
let healthPer = (health/total) * 100
let eatoutPer = (eatout/total) * 100
let shoppingPer = (shopping/total) * 100

const totalArray = [oiling, mart, health, eatout, shopping]
const monthTotal = document.querySelectorAll(".month_total")
totalArray.forEach( item => {
  for(let i = 0; i<totalArray.length; i++){
    const monthValue = String(totalArray[i]).replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    monthTotal[i].innerHTML = `${monthValue}원`
  }
})

//doughnut 차트 가운데 글씨
// let commaTotal = String(total).replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// const mychartTitle = document.querySelector(".mychart_title")
// mychartTitle.innerHTML = `${commaTotal}원`

//차트
const ctx = document.getElementById('myChart').getContext('2d');
    
 const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [oilingPer, martPer, healthPer, eatoutPer, shoppingPer],
        backgroundColor: ['#DB3069', '#F58F29', '#FF4B3E','#235789','#9BC53D']
      }],
    },
    options: {
      reponsive: false,
      legend: {
        position: 'center',
      },
      cutout: 110,
    }
  });  
}

