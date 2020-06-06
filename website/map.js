$('.initialDisplay').show()
$('.predictedChart').hide()
$('.pieChart').hide()
$('.lineGraph').hide()

$('.pieChartBtn').click(function(){
    $('.initialDisplay').hide()
    $('.lineGraph').hide()
    $('.pieChart').show()
    $('.predictedChart').hide()
})            
$('.lineGraphBtn').click(function(){
    $('.initialDisplay').hide()
    $('.lineGraph').show()
    $('.pieChart').hide()
    $('.predictedChart').hide()
})   
$('.predictedChartBtn').click(function(){
    $('.predictedChart').show()
    $('.initialDisplay').hide()
    $('.lineGraph').hide()
    $('.pieChart').hide()
})

/*Fetching the data*/
getData()
async function getData (){
    const response = await fetch('../dataset/covid.csv');
    const data = await response.text()
    console.log()
}