

let trickyBtn = document.getElementById("move-btn"); 
let yesBtn = document.getElementById("yes-btn"); 
trickyBtn.addEventListener('mouseover', (e)=> {
    trickyBtn.style.left = (Math.random() * 90) + "%"; 
    trickyBtn.style.top = (Math.random() * 90) + "%"; 
})

trickyBtn.addEventListener('touchstart', (e) => {
    trickyBtn.style.left = (Math.random() * 90) + "%"; 
    trickyBtn.style.top = (Math.random() * 90) + "%"; 
})


yesBtn.addEventListener('click', function(){
    Swal.fire({
        title: 'Hehe I already Knew :3',
        width: 600,
        padding: '3em',
        color: '#716add',
        confirmButtonText: 'hehe :)',
        background: '#fff url(trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("nyan-cat.gif")
          left top
          no-repeat
        `
      })
})
