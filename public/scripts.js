$(() => {

  console.log('scripts.js connected')
  $('li').click((e) => {
    console.log(e.target.innerText)
    $('input:text').val(e.target.innerText)
  })

})
