let currentMusic = 0;

const music = document.querySelector('#audio');
const rangeBar = document.querySelector('.range-bar');
const songName = document.querySelector('.music-name');
const artistName =  document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn')

playBtn.addEventListener('click', ()=>{
    if(playBtn.className.includes('pause')){
        music.play()
    }else{
        music.pause()
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})

//setup music

const setupMusic = (i) =>{
    rangeBar.value = 0;  //slider range val 0
    let song = songs[i]; //access song from song array
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(()=>{
        rangeBar.max = music.duration;
        songDuration.innerHTML = formatTime(music.duration);
    },300)
}
setupMusic(0);

//formatting song min into seconds format
const formatTime = (time) =>{
    let min = Math.floor(time/60);
    if(min <10){
        min = `0${min}`;
    }
    let sec = Math.floor(time%60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

//range bar running
setInterval(()=>{
    rangeBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(rangeBar.max)){
        forwardBtn.click();
    }
},500)

//change in timing of range bar
rangeBar.addEventListener('change', ()=>{
    music.currentTime = rangeBar.value;
})

const playMusic = () =>{
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play')
}

//forward and backward button
forwardBtn.addEventListener('click', ()=>{
    if(currentMusic >= songs.length -1){
        currentMusic = 0;
    }else{
        currentMusic++;
    }
    setupMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click', ()=>{
    if(currentMusic <= 0){
        currentMusic = songs.length -1;
    }else{
        currentMusic--;
    }
    setupMusic(currentMusic);
    playMusic();
})

