setInterval(zoom_loop, 1)
function zoom_loop () {
    zoom = document.getElementById("zoom").value;
    document.getElementById("n1").style.backgroundSize = `${95 * (10 ** (zoom / 10000))}vmin`
    document.getElementById("n2").style.backgroundSize = `${95 * (10 ** ((zoom - 50000) / 10000 ))}vmin`
    document.getElementById("n3").style.backgroundSize = `${95 * (10 ** ((zoom - 100000) / 10000 ))}vmin`
    document.getElementById("n4").style.backgroundSize = `${95 * (10 ** ((zoom - 150000) / 10000 ))}vmin`
    document.getElementById("n5").style.backgroundSize = `${95 * (10 ** ((zoom - 200000) / 10000 ))}vmin`
    document.getElementById("n6").style.backgroundSize = `${95 * (10 ** ((zoom - 250000) / 10000 ))}vmin`
    document.getElementById("n7").style.backgroundSize = `${95 * (10 ** ((zoom - 300000) / 10000 ))}vmin`
    document.getElementById("n8").style.backgroundSize = `${95 * (10 ** ((zoom - 350000) / 10000 ))}vmin`
    document.getElementById("n9").style.backgroundSize = `${95 * (10 ** ((zoom - 400000) / 10000 ))}vmin`
    document.getElementById("AA").style.backgroundSize = `${95 * (10 ** ((zoom - 450000) / 10000 ))}vmin`
}