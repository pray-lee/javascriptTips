/**
 * 一般写法
 * */
const handler = function() {console.log('Tata')}
element.addEventListener('click', handler)

/**
 * 更好的写法
 * */
function handleEvent(eventName, {onElement, withCallBack, useCapture = false} = {}, thisArg) {
    const element = onElement || document.documentElement
    function handler (event) {
        if(typeof withCallBack === 'function') {
            withCallBack.call(thisArg, event)
        }
    }
    handler.destroy = function() {
       return element.removeEventListener(eventName, handler, useCapture)
    }
    element.addEventListener(eventName, handler, useCapture)
    return handler
}

const handleClick = handleEvent('click', {
    onElement: 'element',
    withCallBack: event => {
        console.log('Tata')
    }
})
// 解绑
handleClick.destroy()
