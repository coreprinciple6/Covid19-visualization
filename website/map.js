
$('.pieChart').hide()
$('.lineGraph').hide()

$('.pieChartBtn').click(function(){
    $('pieChartBtn')
    $('.pieChart').show()
    $('.lineGraph').hide()
})            
$('.lineGraphBtn').click(function(){
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