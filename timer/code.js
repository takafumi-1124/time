//秒、分、時間を0と定義する
var s = 0;
var m = 0;
var h = 0;
var enable = 0;

//タイマーの処理
var timer = setInterval(function () {
    if (enable === 2) {
        s--;
        if (s <= -1) {
            s = 59;
            m--;
            if (m <= -1) {
                m = 59;
                h--;
                if (h <= -1) {
                    h = 0;
                }
            }
            //00:00:00になったら終了
        } else if (s === 0 && m === 0 && h === 0) {
            enable = 0;
            var finish_elemnt = document.querySelector("dd");
            finish_elemnt.style.color = "red";

            //30秒前になったらタイマーが赤くなる
        } else if (h === 0 & m === 0 & s === 30) {
            var start_elemnt = document.querySelector("dd");
            start_elemnt.style.color = "red";
        }
    }

    //ストップウォッチ
    if (enable === 4) {
        s++;
        if (s >= 60) {
            s = 0;
            m++;
            if (m >= 60) {
                m = 0;
                h++;
            }
        }
    }



    //「00」と表示されるように設定する
    var seconds = ("00" + s).slice(-2);
    var minute = ("00" + m).slice(-2);
    var hour = ("00" + h).slice(-2);
    var elemnt = document.querySelector("dd");
    elemnt.innerHTML = hour + ":" + minute + ":" + seconds;
}, 1000)


var change = 0;
//切り替えボタンを押すとストップウォッチとタイマーが切り替わる
var start = document.getElementById("change").addEventListener("click", function () {
    var change_elemnt = document.querySelector("dt");
    change_elemnt.style.color = "red";

    //ストップウォッチの機能に切り替え
    if (change === 0) {
        enable = 3;
        var elemnt = document.querySelector("dt");
        elemnt.innerHTML = "ストップウォッチ";
        change = 1;

        //タイマーの機能に切り替え
    } else if (change === 1) {
        var elemnt = document.querySelector("dt");
        elemnt.innerHTML = "プレゼンタイマー";

        change = 0;

        //タイマーをセットする
        //時ボタンをクリック
        var hour_count = document.getElementById("hour").addEventListener("click", function () {
            //クリックした回数が24回未満の時＋1時間される
            if (h < 23) {
                h++;
                enable = 1;
            }
        })

        //分ボタンをクリック
        var minute_count = document.getElementById("minute").addEventListener("click", function () {
            //クリックした回数が60回未満の時＋1分される
            if (m < 59) {
                m++;
            }
            enable = 1;
        })

        //秒ボタンをクリック
        var seconds_count = document.getElementById("seconds").addEventListener("click", function () {
            //クリックした回数が60回未満の時＋1秒される
            if (s < 59) {
                s++;
            }
            enable = 1;
        })
    }

})


//スタートボタンを押すとタイマーが動き出す
var start = document.getElementById("Start").addEventListener("click", function () {
    //タイマーのスタート
    if (enable === 1) {
        enable = 2;
        var start_elemnt = document.querySelector("dd");
        start_elemnt.style.color = "blue";

        //ストップウォッチのスタート
    } else if (enable === 3) {
        enable = 4;
        var start_elemnt = document.querySelector("dd");
        start_elemnt.style.color = "blue";
    }
})


//ストップボタンを押すとタイマーが止まる
var stop = document.getElementById("Stop").addEventListener("click", function () {
    enable = 0;
})




//リセットボタンを押すタイマーがリセットされる
var reset = document.getElementById("Reset").addEventListener("click", function () {
    enable = 0;

    s = 0;
    m = 0;
    h = 0;

    var elemnt = document.querySelector("dd");
    elemnt.style.color = "black";
})