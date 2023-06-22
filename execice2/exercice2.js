/* Write a function that displays every second that has passed on the page since it was opened. 
The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", 
then "2 minutes have passed" (for 120 seconds and more), etc. */
let s = 0 ;
let m = 0 ;
let h = 0 ;
let view = document.createElement('h1');
document.body.appendChild(view)
let interval = setInterval(() => {
    view.textContent = h.toString()+":"+m.toString()+":"+s.toString();
    s++
    if(s>60){
        s = 0;
        m += 1;
    }else if(m>60){
        m = 0;
        h += 1;
    }
}, 1000);

