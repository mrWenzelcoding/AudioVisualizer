//Step 1: Load Song Pixabay royalty free music or hugginface or songR

//Step 2: Create a fft object and have it take the song in.

//Step 3: use .analyze and save it in a variable to get the waves. Waves tells you the amplitude i.e volume, at each specific frequency.

//Step 4: console.log the waves. Notice that it splits into 1024 bins but most songs will only go to around 300 in the frequency range. Note waves amplitudes range from 0-255  

//Step 5: Add get energy levels to find the average at some key ranges

//Step 6: Create a visualizion of the audio based on either waves, which is around 300 data points or the get energy levels

//Step 7: Make Window Resizable

let song
let fft
let waves

function preload(){
  song = loadSound("abstract-future-bass-162604.mp3")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  fft = new p5.FFT()
  fft.setInput(song)
}

function draw() {
  background(0,90);
  waves = fft.analyze()
  
  let bass = fft.getEnergy("bass");
  let lowMid = fft.getEnergy("lowMid");
  let mid = fft.getEnergy("mid");
  let highMid = fft.getEnergy("highMid");
  let treble = fft.getEnergy("treble");
  
  for(let i =0; i< 300; i++){
    let r = waves[i]
    let g = 255/(waves[i]+1)
    let b = 100
    fill(r,g,b)
    rect((width/300)*i,height,width/300,waves[i]*-height/300)
  }
}


//Resizing Window Code
function mousePressed() {
   song.play()
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
