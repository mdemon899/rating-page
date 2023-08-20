// Calling Variables From DOM
let stars = document.querySelectorAll('.stars');
let emojis = document.querySelectorAll('.emojis')
let emojiColor = ['red','orange','lightblue','lightgreen','green']

stars.forEach((star,index1)=>{
  // Adding Loops To Individually Select The Stars
  star.addEventListener('click',()=>{
    // Adding Loops To Changing The Emoji Color
    emojis.forEach((emoji,index)=>{
      emoji.style.display = 'block'
      emoji.style.color = emojiColor[index1]
      emoji.style.transform = `translateX(-${index1 * 50}px)`
    })
    // Adding Loops To Adding & Removing The Active Class
    stars.forEach((star,index2)=>{
      star = index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
    })
  })
})