 window.onload = function () {
            var second = "00";
            var milli = "00";
            var appendSecond = document.getElementById('second');
            var appendMilli = document.getElementById('milli');
            var buttonstart = document.getElementById('start');
            var buttonpause = document.getElementById('pause');
            var buttonreset = document.getElementById('reset');
            var i;


            buttonstart.onclick = function () {
                clearInterval(i);
                i = setInterval(starttimer, 10);
            }
            buttonpause.onclick = function () {
                clearInterval(i)
            }
            buttonreset.onclick = function () {
                clearInterval(i)
                second = "00"
                milli = "00"
                appendSecond.innerHTML = second;
                appendMilli.innerHTML = milli;
            }

            function starttimer() {
                milli++;

                if (milli <= 9) {
                    appendMilli.innerHTML = "0" + milli;

                }
                if (milli > 9) {
                    appendMilli.innerHTML = milli;

                }
                if (milli > 99) {
                    second++;
                    appendSecond.innerHTML = "0" + second;
                    milli = 0;
                    appendMilli.innerHTML = "0" + 0;
                }


            }
            
            if (second <= 9) {
                appendSecond.innerHTML =  second;


            }

        }
