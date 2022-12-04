document.getElementById("btn").onclick = function() {
    // zam = za()
    bma = ma(document.getElementById("in").value);
    bmo = mo(document.getElementById("in").value);
    document.getElementById("ma").innerHTML = "بن ماضی: " + `<b class="blue">${bma}</b>`;
    document.getElementById("mo").innerHTML = "بن مضارع: " + `<b class="blue">${bmo}</b>`;
    shs = ["؟؟؟", "م", "ی", "", "یم", "ید", "ند"]
    shm = ["؟؟؟", "م", "ی", "د", "یم", "ید", "ند"]
    shn = ["؟؟؟", "ام", "ای", "است", "ایم", "اید", "اند"]
    
    document.getElementById("n11").innerHTML = (fe(1, 10))
    document.getElementById("n12").innerHTML = (fe(1, 1))
    document.getElementById("n13").innerHTML = (fe(1, 2))
    document.getElementById("n14").innerHTML = (fe(1, 3))
    document.getElementById("n15").innerHTML = (fe(1, 4))
    document.getElementById("n16").innerHTML = (fe(1, 5))
    document.getElementById("n110").innerHTML = (fe(1, 6))
    document.getElementById("n17").innerHTML = (fe(1, 7))
    document.getElementById("n18").innerHTML = (fe(1, 8))
    document.getElementById("n19").innerHTML = (fe(1, 9))
    document.getElementById("n10").innerHTML = (fe(1, 0))

    document.getElementById("n21").innerHTML = (fe(2, 10))
    document.getElementById("n22").innerHTML = (fe(2, 1))
    document.getElementById("n23").innerHTML = (fe(2, 2))
    document.getElementById("n24").innerHTML = (fe(2, 3))
    document.getElementById("n25").innerHTML = (fe(2, 4))
    document.getElementById("n26").innerHTML = (fe(2, 5))
    document.getElementById("n210").innerHTML = (fe(2, 6))
    document.getElementById("n27").innerHTML = (fe(2, 7))
    document.getElementById("n28").innerHTML = (fe(2, 8))
    document.getElementById("n29").innerHTML = (fe(2, 9))
    document.getElementById("n20").innerHTML = (fe(2, 0))

    document.getElementById("n31").innerHTML = (fe(3, 10))
    document.getElementById("n32").innerHTML = (fe(3, 1))
    document.getElementById("n33").innerHTML = (fe(3, 2))
    document.getElementById("n34").innerHTML = (fe(3, 3))
    document.getElementById("n35").innerHTML = (fe(3, 4))
    document.getElementById("n36").innerHTML = (fe(3, 5))
    document.getElementById("n310").innerHTML = (fe(3, 6))
    document.getElementById("n37").innerHTML = (fe(3, 7))
    document.getElementById("n38").innerHTML = (fe(3, 8))
    document.getElementById("n39").innerHTML = (fe(3, 9))
    document.getElementById("n30").innerHTML = (fe(3, 0))

    document.getElementById("n41").innerHTML = (fe(4, 10))
    document.getElementById("n42").innerHTML = (fe(4, 1))
    document.getElementById("n43").innerHTML = (fe(4, 2))
    document.getElementById("n44").innerHTML = (fe(4, 3))
    document.getElementById("n45").innerHTML = (fe(4, 4))
    document.getElementById("n46").innerHTML = (fe(4, 5))
    document.getElementById("n410").innerHTML = (fe(4, 6))
    document.getElementById("n47").innerHTML = (fe(4, 7))
    document.getElementById("n48").innerHTML = (fe(4, 8))
    document.getElementById("n49").innerHTML = (fe(4, 9))
    document.getElementById("n40").innerHTML = (fe(4, 0))

    document.getElementById("n51").innerHTML = (fe(5, 10))
    document.getElementById("n52").innerHTML = (fe(5, 1))
    document.getElementById("n53").innerHTML = (fe(5, 2))
    document.getElementById("n54").innerHTML = (fe(5, 3))
    document.getElementById("n55").innerHTML = (fe(5, 4))
    document.getElementById("n56").innerHTML = (fe(5, 5))
    document.getElementById("n510").innerHTML = (fe(5, 6))
    document.getElementById("n57").innerHTML = (fe(5, 7))
    document.getElementById("n58").innerHTML = (fe(5, 8))
    document.getElementById("n59").innerHTML = (fe(5, 9))
    document.getElementById("n50").innerHTML = (fe(5, 0))

    document.getElementById("n61").innerHTML = (fe(6, 10))
    document.getElementById("n62").innerHTML = (fe(6, 1))
    document.getElementById("n63").innerHTML = (fe(6, 2))
    document.getElementById("n64").innerHTML = (fe(6, 3))
    document.getElementById("n65").innerHTML = (fe(6, 4))
    document.getElementById("n66").innerHTML = (fe(6, 5))
    document.getElementById("n610").innerHTML = (fe(6, 6))
    document.getElementById("n67").innerHTML = (fe(6, 7))
    document.getElementById("n68").innerHTML = (fe(6, 8))
    document.getElementById("n69").innerHTML = (fe(6, 9))
    document.getElementById("n60").innerHTML = (fe(6, 0))
}

function ma (input) {
    return input.substr(0, (input.length - 1))
}
function mo (input) {
    input = input.substr(0, (input.length - 1));
    if (input.substr(-1, 1) == "د") {
        input = input.substr(0, (input.length - 1));
        if (input == "آفری") {
            return "آفرین"
        } else if (input == "شنی") {
            return "شنو"
        } else if (input == "ز") {
            return "زن"
        } else if (input == "کر") {
            return "کن"
        } else if (input == "دی") {
            return "بین"
        } else if (input == "مر") {
            return "میر"
        } else if (input == "آرمی") {
            return "آرام"
        } else if (input == "گروی") {
            return "گرای"
        } else if (input == "چی") {
            return "چین"
        } else if (input == "آم") {
            return "آی"
        } else if (input == "بو") {
            return "باش"
        } else if (input == "ش") {
            return "شو"
        } else if (input.substr(-1, 1) == "ر") {
            return input
        } else if (input.substr(-1, 1) == "ی") {
            return input.substr(0, (input.length - 1))
        } else if (input.substr(-1, 1) == "ن") {
            return input
        } else if (input.substr(-1, 1) == "و") {
            return (input.substr(0, (input.length - 1)) + "ای")
        } else {
            return "جواب نامعلوم است."
        }
    } else if (input.substr(-1, 1) == "ت") {
        input = input.substr(0, (input.length - 1));
        if (input == "کش") {
            return "کش"
        } else if (input == "شناخ") {
            return "شناس"
        } else if (input == "کوف") {
            return "کوب"
        } else if (input == "روف") {
            return "روب"
        } else if (input == "افراش") {
            return "افراز"
        } else if (input == "گرف") {
            return "گیر"
        } else if (input == "سرش") {
            return "سرای"
        } else if (input == "خف") {
            return "خواب"
        } else if (input == "نوش") {
            return "نویس"
        } else if (input == "گف") {
            return "گوی"
        } else if (input == "تاف") {
            return "تاب"
        } else if (input == "فروخ") {
            return "فروش"
        } else if (input == "بس") {
            return "بند"
        } else if (input == "هش") {
            return "هل"
        } else if (input == "شکف") {
            return "شکف"
        } else if (input == "شکاف") {
            return "شکاف"
        } else if (input == "شکس") {
            return "شکن"
        } else if (input == "نشس") {
            return "نشین"
        } else if (input.substr(-1, 1) == "ف") {
            return (input.substr(0, (input.length - 1)) + "و")
        } else if (input.substr(-1, 1) == "ش") {
            return (input.substr(0, (input.length - 1)) + "ر")
        } else if (input.substr(-1, 1) == "خ") {
            return (input.substr(0, (input.length - 1)) + "ز")
        } else if (input.substr(-1, 1) == "س") {
            return (input.substr(0, (input.length - 1)) + "وی")
        } else {
            return "جواب نامعلوم است."
        }
    } else {
        return "جواب نامعلوم است."
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

function fe (shakhs, zaman) {
    if (zaman == 1) {
        return (bma + "ه بود" + shs[shakhs])
    }
    if (zaman == 2) {
        return (bma + "ه باش" + shm[shakhs])
    }
    if (zaman == 3) {
        return ("داشت" + shs[shakhs] + "‌" + fe(shakhs, 4))
    }
    if (zaman == 4) {
        return ("می‌" + bma + shs[shakhs])
    }
    if (zaman == 5) {
        return (bma + shs[shakhs])
    }
    if (zaman == 6) {
        return (bma + "ه‌" + shn[shakhs])
    }
    if (zaman == 7) {
        return ("می‌" + bmo + shm[shakhs])
    }
    if (zaman == 8) {
        return ("دار" + shm[shakhs] + " می‌" + bmo + shm[shakhs])
    }
    if (zaman == 9) {
        return ("ب" + bmo + shm[shakhs])
    }
    if (zaman == 10) {
        return (bma + "ه بوده‌" + shn[shakhs])
    }
    if (zaman == 0) {
        return ("خواه" + shm[shakhs] + " "+ bma)
    }
    return "زمان؟؟؟"
    
}