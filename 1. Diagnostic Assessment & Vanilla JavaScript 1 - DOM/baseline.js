// `$('#todos')`
function $(elementId) {
  document.getElementById(elementId)
}

// `.text()`
function text(element, content) {
  content = content || false
  if content {
    element.innerHTML = element.innerHTML + content
  } else {
    return element.textContent
  }
}

// `.text("hello!")`
// Above ^^^

// `.val()`
function val(element) {
  return element.value
}

// `.prepend()`
function prepend(item, element) {
  element.insertBefore(item, element.childNodes[0])
}

// `.addClass('bold')`
function addClass(className, element) {
  var newClassName = ' ' + className
  element.className += element.className ? newClassName : className
}

// $(document).ready()
function documentReady() {
  if (document.readyState() === "complete") {
    return true
  } else {
    return false
  }
}
