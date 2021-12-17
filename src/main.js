let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/* 你好，我叫 Shane
 * 接下来我要展示一个我的前端功底
 * 首先我要准备一个 div
 **/
#div1 {
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 * 一明一暗
 **/
#div1 {
    background: linear-gradient(90deg,
rgba(255,255,255,1) 0%,
rgba(255,255,255,1) 50%,
rgba(0,0,0,1) 50%,
rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle,
rgba(255,255,255,1) 25%, 
rgba(0,0,0,1) 25%);
    top: 0;
    left: 0;
    transform: translateX(50%);

}
#div1::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, 
rgba(0,0,0,1) 25%, 
rgba(255,255,255,1) 25%);
    transform: translateX(-50%);
    bottom: 0;
    right: 0;

}
`
let string2 = '';
let n = 0;
isTouchDevice = 'ontouchstart' in document.documentElement;

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp';
        }else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        n += 1;
        if (n < string.length) {
            step();
        }
    }, 0);
}

step();

if(isTouchDevice) {
    wrapper.ontouchmove = (e) => {
        e.preventDefault();
    }
}