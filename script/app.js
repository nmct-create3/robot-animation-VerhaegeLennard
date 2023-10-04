// gsap.fromTo('#Robot', {ease: 'elastic.out(2.5,0.1)', y: -10}, { duration: 10, y: 10 })
document.querySelector('.js-pause').onclick = () => tween.pause();

let tl = gsap.timeline({
    defaults: {
      duration: .75,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
  })
  
tl.set('#Shadow', {
    transformOrigin: '50% 100%',
  })

tl.fromTo('#Robot',{
    y: 2.5,
  },{
    y: -2.5,
  })

  .to('#Shadow', {
    scale: 0.75,
  },
    '-=.75',
  )
  .fromTo('#Head', {
    y: 1.5,
  },{
    y: -1.5,
  },
    '-= 1',
  )