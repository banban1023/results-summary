import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'
// import { animateNumber } from '@/utils/animateNumber.js'

gsap.registerPlugin(SplitText)
// 首页字体动画
export function runSplitAnimation (selector = '.split') {
  // 字体加载完再执行动画
  document.fonts.ready.then(() => {
    gsap.set(selector, { opacity: 1 })

    SplitText.create(selector, {
      type: 'words,lines',
      linesClass: 'line',
      autoSplit: true,
      mask: 'lines',
      onSplit: (self) => {
        gsap.from(self.lines, {
          duration: 1.5,
          yPercent: 100,
          opacity: 0,
          stagger: 0.2,
          ease: 'expo.out'
          // delay: 0.3
        })
      }
    })
  })
}
// 首页按钮动画
export function runPulseEffect (selector = '.effect-circle', buttonSelector = '.home_btn button') {
  const pulseTween = gsap.to(selector, {
    scale: 1.6,
    duration: 2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    transformOrigin: 'center center'
  })

  const btn = document.querySelector(buttonSelector)
  const circle = document.querySelector(selector)

  if (btn && circle) {
    btn.addEventListener('mouseenter', () => {
      pulseTween.pause() // 暂停原来的脉冲动画
      gsap.to(circle, {
        scale: 1.6,
        duration: 0.4,
        ease: 'power2.out'
      })
    })

    btn.addEventListener('mouseleave', () => {
      gsap.to(circle, {
        scale: 1.6,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          pulseTween.resume() // 动画继续脉冲
        }
      })
    })
  }
}

// crew页面动画
export function playCrewAnimation () {
  const timeline = gsap.timeline()

  timeline.from('.crew_img img', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

  timeline.from(
    ['.crew_role', '.crew_name', '.crew_content'],
    {
      y: 30,
      opacity: 0,
      stagger: 0.3,
      duration: 0.6,
      ease: 'power2.out'
    },
    '-=0.8' // 同时开始
  )
}

// destination页面
export function playDestinationAnimation () {
  const timeline = gsap.timeline()

  timeline.from('.destination_tabs_img img', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

  timeline.from(
    ['h2', '.msg_content', '.distance', '.time', '.distance_num', '.time_num'],
    {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out'
    },
    '-=0.8' // 与图片动画重叠
  )
}

// export function playDestinationAnimation (data = {}) {
//   const timeline = gsap.timeline()

//   timeline.from('.destination_tabs_img img', {
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     ease: 'power2.out'
//   })

//   timeline.from(
//     ['h2', '.msg_content', '.distance', '.time'],
//     {
//       y: 30,
//       opacity: 0,
//       stagger: 0.15,
//       duration: 0.6,
//       ease: 'power2.out'
//     },
//     '-=0.8'
//   )

//   if (data.distance) {
//     animateNumber('.distance_num', data.distance)
//   }
//   if (data.travel) {
//     animateNumber('.time_num', data.travel)
//   }
// }
