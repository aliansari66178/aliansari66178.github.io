var input = document.getElementById("in");

window.onload = function(){
    //preloaderContainerDOM.style.display = "none";
}


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});

document.getElementById("btn").onclick = function() {
    // zam = za()
    bma = ma(document.getElementById("in").value);
    bmo = mo(document.getElementById("in").value);
    let cuted    
    cuted = cut(bma)[1] + " "
    bma = cut(bma)[0]
    bmo = cut(bmo)[0]
    es_ma_var_2 = es_ma_func ()
    se_ma_var_2 = se_ma_func ()
    se_fa_var_2 = se_fa_func ()
    se_fe_var_2 = se_fe_func ()
    am_fe_var_2 = am_fe_func (bmo, cuted)
    do_fe_var_2 = do_fe_func (bmo, cuted)
    document.getElementById("ma").innerHTML = "بن ماضی: " + `<b class="blue">${bma}</b>`;
    document.getElementById("mo").innerHTML = "بن مضارع: " + `<b class="blue">${bmo}</b>`;
    document.getElementById("es_ma").innerHTML = "اسم مصدر: " + `<b class="blue">${es_ma_var_2}</b>`;
    document.getElementById("se_ma").innerHTML = "صفت مفعولی: " + `<b class="blue">${se_ma_var_2}</b>`;
    document.getElementById("se_fa").innerHTML = "صفت فاعلی: " + `<b class="blue">${se_fa_var_2}</b>`;
    document.getElementById("se_fe").innerHTML = "صفت لیاقت: " + `<b class="blue">${se_fe_var_2}</b>`;
    document.getElementById("am_fe").innerHTML = "فعل امر:" + `<b class="blue">${am_fe_var_2}</b>`;
    document.getElementById("do_fe").innerHTML = "فعل دعایی: " + `<b class="blue">${do_fe_var_2}</b>`;

    shs = ["؟؟؟", "م", "ی", "", "یم", "ید", "ند"]
    shm = ["؟؟؟", "م", "ی", "د", "یم", "ید", "ند"]
    shn = ["؟؟؟", "ام", "ای", "است", "ایم", "اید", "اند"]
    //console.log(cuted)
    document.getElementById("n11").innerHTML = (fe(1, 10, cuted))
    document.getElementById("n12").innerHTML = (fe(1, 1, cuted))
    document.getElementById("n13").innerHTML = (fe(1, 2, cuted))
    document.getElementById("n14").innerHTML = (fe(1, 3, cuted))
    document.getElementById("n15").innerHTML = (fe(1, 4, cuted))
    document.getElementById("n16").innerHTML = (fe(1, 5, cuted))
    document.getElementById("n110").innerHTML = (fe(1, 6, cuted))
    document.getElementById("n17").innerHTML = (fe(1, 7, cuted))
    document.getElementById("n18").innerHTML = (fe(1, 8, cuted))
    document.getElementById("n19").innerHTML = (fe(1, 9, cuted))
    document.getElementById("n10").innerHTML = (fe(1, 0, cuted))

    document.getElementById("n21").innerHTML = (fe(2, 10, cuted))
    document.getElementById("n22").innerHTML = (fe(2, 1, cuted))
    document.getElementById("n23").innerHTML = (fe(2, 2, cuted))
    document.getElementById("n24").innerHTML = (fe(2, 3, cuted))
    document.getElementById("n25").innerHTML = (fe(2, 4, cuted))
    document.getElementById("n26").innerHTML = (fe(2, 5, cuted))
    document.getElementById("n210").innerHTML = (fe(2, 6, cuted))
    document.getElementById("n27").innerHTML = (fe(2, 7, cuted))
    document.getElementById("n28").innerHTML = (fe(2, 8, cuted))
    document.getElementById("n29").innerHTML = (fe(2, 9, cuted))
    document.getElementById("n20").innerHTML = (fe(2, 0, cuted))

    document.getElementById("n31").innerHTML = (fe(3, 10, cuted))
    document.getElementById("n32").innerHTML = (fe(3, 1, cuted))
    document.getElementById("n33").innerHTML = (fe(3, 2, cuted))
    document.getElementById("n34").innerHTML = (fe(3, 3, cuted))
    document.getElementById("n35").innerHTML = (fe(3, 4, cuted))
    document.getElementById("n36").innerHTML = (fe(3, 5, cuted))
    document.getElementById("n310").innerHTML = (fe(3, 6, cuted))
    document.getElementById("n37").innerHTML = (fe(3, 7, cuted))
    document.getElementById("n38").innerHTML = (fe(3, 8, cuted))
    document.getElementById("n39").innerHTML = (fe(3, 9, cuted))
    document.getElementById("n30").innerHTML = (fe(3, 0, cuted))

    document.getElementById("n41").innerHTML = (fe(4, 10, cuted))
    document.getElementById("n42").innerHTML = (fe(4, 1, cuted))
    document.getElementById("n43").innerHTML = (fe(4, 2, cuted))
    document.getElementById("n44").innerHTML = (fe(4, 3, cuted))
    document.getElementById("n45").innerHTML = (fe(4, 4, cuted))
    document.getElementById("n46").innerHTML = (fe(4, 5, cuted))
    document.getElementById("n410").innerHTML = (fe(4, 6, cuted))
    document.getElementById("n47").innerHTML = (fe(4, 7, cuted))
    document.getElementById("n48").innerHTML = (fe(4, 8, cuted))
    document.getElementById("n49").innerHTML = (fe(4, 9, cuted))
    document.getElementById("n40").innerHTML = (fe(4, 0, cuted))

    document.getElementById("n51").innerHTML = (fe(5, 10, cuted))
    document.getElementById("n52").innerHTML = (fe(5, 1, cuted))
    document.getElementById("n53").innerHTML = (fe(5, 2, cuted))
    document.getElementById("n54").innerHTML = (fe(5, 3, cuted))
    document.getElementById("n55").innerHTML = (fe(5, 4, cuted))
    document.getElementById("n56").innerHTML = (fe(5, 5, cuted))
    document.getElementById("n510").innerHTML = (fe(5, 6, cuted))
    document.getElementById("n57").innerHTML = (fe(5, 7, cuted))
    document.getElementById("n58").innerHTML = (fe(5, 8, cuted))
    document.getElementById("n59").innerHTML = (fe(5, 9, cuted))
    document.getElementById("n50").innerHTML = (fe(5, 0, cuted))

    document.getElementById("n61").innerHTML = (fe(6, 10, cuted))
    document.getElementById("n62").innerHTML = (fe(6, 1, cuted))
    document.getElementById("n63").innerHTML = (fe(6, 2, cuted))
    document.getElementById("n64").innerHTML = (fe(6, 3, cuted))
    document.getElementById("n65").innerHTML = (fe(6, 4, cuted))
    document.getElementById("n66").innerHTML = (fe(6, 5, cuted))
    document.getElementById("n610").innerHTML = (fe(6, 6, cuted))
    document.getElementById("n67").innerHTML = (fe(6, 7, cuted))
    document.getElementById("n68").innerHTML = (fe(6, 8, cuted))
    document.getElementById("n69").innerHTML = (fe(6, 9, cuted))
    document.getElementById("n60").innerHTML = (fe(6, 0, cuted))
}

function es_ma_func () {
    es_ma_var = mo (document.getElementById ("in").value);
    return ( es_ma_var + "ش")
}

function se_fe_func () {
    se_fe_var = ma (document.getElementById ("in").value);
    return ( se_fe_var + "نی")
}

function am_fe_func (bmo, cuted) {
    am_fe_var = cuted + "ب" + bmo
    return ( am_fe_var)
}

function do_fe_func (bmo, cuted) {
    am_ja_var = cuted + bmo + "اد"
    return ( am_ja_var)
}

function se_ma_func () {
    se_ma_var = ma (document.getElementById ("in").value);
    return ( se_ma_var + "ه")
}

function se_fa_func () {
    se_fa_var = mo (document.getElementById ("in").value);
    bon_ma = ma ((document.getElementById ("in").value));
    return (
    se_fa_var + "نده" + " / " +
    se_fa_var + "ان" + " / " +
    se_fa_var + "ا" + " / " +
    se_fa_var + "کار" + " / " +
    se_fa_var + "گار" + " / " +
    se_fa_var + "گر" + " / " +
    se_fa_var + "ش گر" + " / " +
    bon_ma + "ار"  + " / " +
    bon_ma + "گار"  + " / " +
    bon_ma + "گر"  + " / "
    )
   
}

function cut (text) {
    let txt = text
    let befor = ''
    for (i=1; i<=text.length; i++) {
        if (text[text.length-i] == ' ') {
            txt = text.substr((text.length-i)+1, i)
            befor = text.substr(0, (text.length-i))
            break
        }
    }
    return([txt, befor])
}
function change (inp, out, txt) {
    let text
    if (txt.substr(txt.length-inp.length, inp.length) == inp) {
        text = (txt.substr(0, txt.length - inp.length) + out)
    }
    return([(txt.substr(txt.length-inp.length, inp.length) == inp) ,text])
}
function ma (input) {
    return input.substr(0, (input.length - 1))
}
function mo (input) {
    input = input.substr(0, (input.length - 1));
    if (input.substr(-1, 1) == "د") {
        input = input.substr(0, (input.length - 1));
        masdar = ["شنی", "آفری", "کر", "دی", "مر", "آرمی", "آرام", "گروی", "آم", "بو", "ش", "غنو", "سپر", "ایستا", "ست",
        "زا", "دا", "گزی", "فشر", "درو", "افتا", "ستا", "فتا", "شمر", "آجی", "آز", "آگهی", "آما", "آزر",
        "انبو", "گشا", "چی"]
        bon = ["شنو", "آفرین", "کن", "بین", "میر", "آرام", "آرام", "گرای", "آی", "باش", "شو", "غنو", "سپار", "ایست", "ستان",
        "زای", "ده", "(گز/گزین)", "فشار", "درو", "افت", "ایست", "افت", "شمار", "آجین", "آز", "آگاه", "آمای", "آزار",
        "انبوی", "گشای", "چین"]
        for (i=0; i<(masdar.length); i++) {
            ch = change(masdar[i], bon[i], input)
            if (ch[0]) {
                return (ch[1])
            }
        }
        if (input.substr(-1, 1) == "ر") {
            return input
        } else if (input.substr(-1, 1) == "ی" && input.length == 2) {
            return (input + "ن")
        } else if (input.substr(-1, 1) == "ی") {
            return input.substr(0, (input.length - 1))
        } else if (input.substr(-1, 1) == "ا") {
            return input.substr(0, (input.length - 1))
        } else if (input.substr(-1, 1) == "ن") {
            return input
        } else if (input.substr(-1, 1) == "و") {
            return (input.substr(0, (input.length - 1)) + "ای")
        } else {
            return (input + "ن")
        }
    } else if (input.substr(-1, 1) == "ت") {
        input = input.substr(0, (input.length - 1));
        masdar = ["رف", "سف", "نهف", "شگف", "خف", "گف", "شنف", "گرف", "پذیرف",
        "نهش", "انبوش", "سرش", "لش", "لیش", "سریش", "هش", "مش", "گش", "افراش", "کش", "برش", "نوش", "رش", "وش"
        , "شناخ", "فروخ", "آهیخ", "گسیخ", "سخ", "آخ"
        , "یارس", "نگریس", "بس", "پیوس", "شکس", "نشس", "خاس", "گسس", "رس", "شس", "جس", "خس", "لس", "نشاس"]
        bon = ["(رو/روب)", "سنب", "نهنب", "شگف", "خواب", "گوی", "شنو", "گیر", "پذیر",
        "نه", "انبوی", "سریش", "لیس", "لیس", "سریش", "هل", "مال", "گرد", "افراز", "(کش/کار)", "(بریز/بریج)",
        "(نویس/نورد)", "ریس", "وس"
        , "شناس", "فروش", "آهیخ", "گسل", "سنج", "(آهنج/آهاز)"
        , "یار", "نگر", "بند", "پیوند", "شکن", "نشین", "خیز", "گسل", "(روی/ره)", "شوی", "(جوی/جه)", "خه", "لیس", "نشان"]
        for (i=0; i<(masdar.length); i++) {
            ch = change(masdar[i], bon[i], input)
            if (ch[0]) {
                return (ch[1])
            }
        }
        if (input.substr(-1, 1) == "ف") {
            if (input.substr(-2, 1) == "ش") {
                return (input.substr(0, (input.length - 1)) + "وب")
            }
            if (input.substr(-2, 1) == "ر") {
                return (input.substr(0, (input.length - 1)) + "و")
            }
            if (input.substr(-3, 2) == "یر") {
                return input.substr(0, (input.length - 1))
            }
            if (input.substr(-2, 1) == "ی" || input.substr(-2, 1) == "و" || input.substr(-2, 1) == "ت" || input.substr(-3, 1) == "ت" || input.substr(-2, 1) == "ی" || input.substr(-3, 1) == "ی") {
                return (input.substr(0, (input.length - 1)) + "ب")
            }
            if (input.substr(-2, 1) == "ک" || input.substr(-3, 1) == "ک" || input.substr(-2, 1) == "ب" || input.substr(-3, 1) == "ب") {
                return input
            }
            return (input.substr(0, (input.length - 1)) + "")
        } else if (input.substr(-1, 1) == "ش") {  
            return (input.substr(0, (input.length - 1)) + "ر")
        } else if (input.substr(-1, 1) == "خ") {
            return (input.substr(0, (input.length - 1)) + "ز")
        } else if (input.substr(-1, 1) == "س") {
            if (input.substr(-2, 1) == "ن" || input.substr(-2, 1) == "ی") {
                return (input.substr(0, (input.length - 1)))
            }
            if (input.substr(-3, 2) == "را") {
                return (input.substr(0, (input.length - 1)) + "ی")
            }
            if (input.substr(-2, 1) == "ا") {
                return (input.substr(0, (input.length - 1)) + "ه")
            }
            return (input.substr(0, (input.length - 1)) + "وی")
        } else {
            return (input.substr(0, (input.length - 1)) + "وی")
        }
    } else {
        return (input.substr(0, (input.length - 1)))
    }
}

function za () {
    switch (true) {
        case document.getElementById("za1").checked:
            return 1 
            break;
        case document.getElementById("za2").checked:
            return 2 
            break;
        case document.getElementById("za3").checked:
            return 3 
            break;
        case document.getElementById("za4").checked:
            return 4 
            break;
        case document.getElementById("za5").checked:
            return 5 
            break;
        case document.getElementById("za6").checked:
            return 6 
            break;
        case document.getElementById("za7").checked:
            return 7 
            break;
        case document.getElementById("za8").checked:
            return 8 
            break;
        case document.getElementById("za9").checked:
            return 9 
            break;
        case document.getElementById("za0").checked:
            return 0 
            break;
        
        
        default:
            return 10
            break;
    }
}

function sh () {
    switch (true) {
        case document.getElementById("sh1").checked:
            return 1 
            break;
        case document.getElementById("sh2").checked:
            return 2 
            break;
        case document.getElementById("sh3").checked:
            return 3 
            break;
        case document.getElementById("sh4").checked:
            return 4 
            break;
        case document.getElementById("sh5").checked:
            return 5 
            break;
        case document.getElementById("sh6").checked:
            return 6 
            break;
        default:
            return 0
            break;
    }
}


function fe (shakhs, zaman, cuted) {
    //console.log(cuted)
    if (zaman == 1) {
        //console.log(cuted)
        return (cuted + bma + "ه بود" + shs[shakhs])
    }
    if (zaman == 2) {
        return (cuted + bma + "ه باش" + shm[shakhs])
    }
    if (zaman == 3) {
        return ("داشت" + shs[shakhs] + " " + fe(shakhs, 4, cuted))
    }
    if (zaman == 4) {
        return (cuted + "می‌" + bma + shs[shakhs])
    }
    if (zaman == 5) {
        return (cuted + bma + shs[shakhs])
    }
    if (zaman == 6) {
        return (cuted + bma + "ه‌" + shn[shakhs])
    }
    if (zaman == 7) {
        return (cuted + "می‌" + bmo + shm[shakhs])
    }
    if (zaman == 8) {
        return ("دار" + shm[shakhs] + " " + cuted + " می‌" + bmo + shm[shakhs])
    }
    if (zaman == 9) {
        return (cuted + "ب" + bmo + shm[shakhs])
    }
    if (zaman == 10) {
        return (cuted + bma + "ه بوده‌" + shn[shakhs])
    }
    if (zaman == 0) {
        return (cuted + "خواه" + shm[shakhs] + " "+ bma)
    }
    return "زمان؟؟؟"
    
}