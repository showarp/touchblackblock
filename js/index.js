window.onload = function() {
	music = document.querySelector('#music')
	sz = 1
	function touchmusic(){
		switch (sz){
			case 1:
			music.src = 'music/'+1+'.mp3'
			break;
			case 2:
			music.src = 'music/'+1+'.mp3'
			break;
			case 3:
			music.src = 'music/'+5+'.mp3'
			break;
			case 4:
			music.src = 'music/'+5+'.mp3'
			break;
			case 5:
			music.src = 'music/'+6+'.mp3'
			break;
			case 6:
			music.src = 'music/'+6+'.mp3'
			break;
			case 7:
			music.src = 'music/'+5+'.mp3'
			break;
			case 8:
			music.src = 'music/'+4+'.mp3'
			break;
			case 9:
			music.src = 'music/'+4+'.mp3'
			break;
			case 10:
			music.src = 'music/'+3+'.mp3'
			break;
			case 11:
			music.src = 'music/'+3+'.mp3'
			break;
			case 12:
			music.src = 'music/'+2+'.mp3'
			break;
			case 13:
			music.src = 'music/'+2+'.mp3'
			break;
			case 14:
			music.src = 'music/'+1+'.mp3'
			sz = 0
			break;
		}
		
		console.log(sz)
		music.play()
		sz+=1
	}
	
	function game() {
		cheight = document.documentElement.clientHeight; 
		jd = 0	
		for (let i = 2; i <= nd; i++) { 
			div = document.createElement('div')
			box.appendChild(div)
			divbox = document.querySelector('#box>div:nth-child(' + i + ')')
			sj = Math.random() * 10
			if (sj > 0 && sj <= 2.5) {
				divbox.className = 'x1'
			}
			if (sj > 2.5 && sj <= 5) {
				divbox.className = 'x2'
			}
			if (sj > 5 && sj <= 7.5) {
				divbox.className = 'x3'
			}
			if (sj > 7.5 && sj <= 10) {
				divbox.className = 'x4'
			}
		}
		time = document.querySelector('#time')
		miao = 0
		haomiao = 0
		box = document.querySelector('#box')
		box2 = document.querySelector('#box2')
		box.style.marginTop = jd + 'px'
		start = document.querySelector('#start')
		x1 = document.querySelectorAll('.x1')
		x2 = document.querySelectorAll('.x2')
		x3 = document.querySelectorAll('.x3')
		x4 = document.querySelectorAll('.x4')
		bigbox = document.querySelector('#bigbox')
		ttxt = document.querySelector('#ttxt')
		bh = -(box.offsetHeight + cheight - start.offsetHeight)

		function chenji() {
			setInterval(() => {
				miao += 1
				if (miao < 10) {
					time.innerHTML = '0' + miao + '.' + haomiao
				} else {
					time.innerHTML = miao + '.' + haomiao
				}
			}, 1000)
			setInterval(() => {
				haomiao += 1
				if (miao < 10) {
					time.innerHTML = '0' + miao + '.' + haomiao
				} else {
					time.innerHTML = miao + '.' + haomiao
				}
				if (haomiao >= 9) {
					haomiao = 0
				}
			}, 1)
		}

		function restart() {
			box2.style.top=0+'%'
			ttxt.innerHTML = time.innerHTML+'s'
			for (let i = 0; i < 1000; i++) {
				clearInterval(i)
			}
			return;
		}
		function win(){
			box2.style.top=0+'%'
			ttxt.innerHTML = 'WINNER!'
			for (let i = 0; i < 1000; i++) {
				clearInterval(i)
			}
			return;
		}

		function st() { 
			start.style.background = 'gray'
			jd -= 300
			box.style.marginTop = jd + 'px'
			jsq = setInterval(() => {
				jd-=10
				jd -= 300
				box.style.marginTop = jd + 'px'
				jsq = setInterval(() => {
					jd -= 1
				}, 100)
				if (jd <= bh) {
					clearInterval(jsq)
					win()
					return;
				}
			}, 500)
			chenji()
			ts() 
			box.addEventListener('touchstart', touchbox)
			event.stopPropagation()
		}

		function touchbox() {
			box.style.background = 'red'
			restart()
			event.stopPropagation();
		}

		function ts() { 
			x1.forEach(function(value, index) { 
				var jsq1 = setInterval(() => {
					if (x1[index].offsetTop < -x1[index].offsetHeight) {
						clearInterval(jsq1)
						restart()
					}
				}, 1)
				x1[index].addEventListener('touchstart', () => {
					touchmusic()
					clearInterval(jsq1)
					x1[index].style.background = 'gray'
					x1[index].style.opacity = 0
					x1[index].style.transform = 'scale(0)'
					event.stopPropagation();
				})
			})

			x2.forEach(function(value, index) { 
				var jsq1 = setInterval(() => {
					if (x2[index].offsetTop < -x2[index].offsetHeight) {
						clearInterval(jsq1)
						restart()
					}
				}, 1)

				x2[index].addEventListener('touchstart', () => {
					touchmusic()
					clearInterval(jsq1)
					x2[index].style.background = 'gray'
					x2[index].style.opacity = 0
					x2[index].style.transform = 'scale(0)'
					event.stopPropagation();
				})
			})
			x3.forEach(function(value, index) { 
				var jsq1 = setInterval(() => {
					if (x3[index].offsetTop < -x3[index].offsetHeight) {
						clearInterval(jsq1)
						restart()
					}
				}, 1)

				x3[index].addEventListener('touchstart', () => {
					touchmusic()
					clearInterval(jsq1)
					x3[index].style.background = 'gray'
					x3[index].style.opacity = 0
					x3[index].style.transform = 'scale(0)'
					event.stopPropagation();
				})
			})
			x4.forEach(function(value, index) { 
				var jsq1 = setInterval(() => {
					if (x4[index].offsetTop < -x4[index].offsetHeight) {
						restart()
						clearInterval(jsq1)
					}
				}, 1)

				x4[index].addEventListener('touchstart', () => {
					touchmusic()
					clearInterval(jsq1)
					x4[index].style.background = 'gray'
					x4[index].style.opacity = 0
					x4[index].style.transform = 'scale(0)'
					event.stopPropagation()
				})
			})
		}
		start.addEventListener('touchstart', st)
	}




	bigtxt = document.querySelector('#bigtxt')
	poin = document.querySelector('#poin')
	bar = document.querySelector('#bar')
	txt = document.querySelector('#txt')
	box1 = document.querySelector('#box1')
	const bw = bar.offsetWidth
	const bl = bar.offsetLeft - bw / 2 
	function poinstfun(e) {
		bar.addEventListener('touchmove', barfun)
		poin.addEventListener('touchend', poinenfun)
	}

	function barfun(e) {
		var bx = e.touches[0].clientX - bl 
		if (bx < bw && bx > -1) {
			bfb = Math.round(bx / bw * 100) 
			txt.innerHTML = '难度:' + bfb + '%'
			poin.style.left = bfb + '%'
		}
		if (bfb < 33 && bfb > -1) {
			box1.style.background = '#0097E6'
			txt.style.color = '#0097E6'
			bigtxt.innerHTML = '简</br>单'
		}
		if (bfb < 66 && bfb >= 33) {
			box1.style.background = '#fbc531'
			txt.style.color = '#fbc531'
			bigtxt.innerHTML = '一</br>般'
		}
		if (bfb <= 100 && bfb >= 66) {
			box1.style.background = '#e84118'
			txt.style.color = '#e84118'
			bigtxt.innerHTML = '地</br>狱'
		}
		bar.style.height = '10px'
	}

	function poinenfun() {
		bar.style.height = 0 + 'px'
		bar.removeEventListener('touchmove', barfun)
		nd = bfb*5
		txt.innerHTML='Sure?'
		txt.addEventListener('touchstart',sure)
		return;
	}
	poin.addEventListener('touchstart', poinstfun)
	remake = document.querySelector('#remake')
	remake.addEventListener('touchstart',()=>{
		location = location
	})
	function sure(){
		box1.style.top='100%'
		game(nd)
	}
}
