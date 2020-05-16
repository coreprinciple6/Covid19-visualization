$('.initialDisplay').show()
$('.pieChart').hide()
$('.lineGraph').hide()

$('.pieChartBtn').click(function(){
    $('.initialDisplay').hide()
    $('.lineGraph').hide()
    $('.pieChart').show()
})            
$('.lineGraphBtn').click(function(){
    $('.initialDisplay').hide()
    $('.lineGraph').show()
    $('.pieChart').hide()
})   

/*Fetching the data*/
getData()
async function getData (){
    const response = await fetch('../dataset/covid.csv');
    const data = await response.text()
    console.log()
}