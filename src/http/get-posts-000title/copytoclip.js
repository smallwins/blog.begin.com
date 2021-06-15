(function() {

    const shareBtn = document.getElementById('pkg-share')
    shareBtn.onclick = copyShare
  
    let query = new URLSearchParams(window.location.search)
    let arc = query.get('arc')
    if (!arc) {
      arc = `@app\nmyapp\n\n@http\nget /`
    }
  
    input.value = arc
    getPreview()
  }())
  
  
  function copyShare(e) {
    e.preventDefault()
    let shareBtn = e.target
    let input = document.getElementById('pkg-input')
    let arc = input.value
    let shareUrl = `${window.location}?arc=${encodeURIComponent(arc)}`
    navigator.clipboard.writeText(shareUrl)
    shareBtn.innerHTML = 'Copied to clipboard'
    setTimeout(function resetButton() {
      shareBtn.innerHTML = 'Share'
    }, 2000)
  }