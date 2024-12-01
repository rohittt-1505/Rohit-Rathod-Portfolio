window.onload = function () {
  const favicon = document.getElementById('RR')
  const pageTitle = document.title
  const attentionMessage = 'Rohit Rathod'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/dp_male.svg'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/folded.png'
    }
  }
}
