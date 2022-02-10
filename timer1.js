
const timer1 = function() {

  const timer = process.argv;

  const xtimer = timer.splice(2)
  const sortedTimer = xtimer.sort()  
  
  sortedTimer.forEach(time => {
    if (time < 0 || isNaN(time)) {
      return
    }
    setTimeout(() => { 
      console.log('timer', time)
      process.stdout.write('\x07');
      console.log('sound')
    }, time * 1000 )
  })      
  
  
}

const trest = timer1()

