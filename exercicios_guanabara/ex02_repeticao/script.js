function analisar(){
    let val = document.getElementById("val")
    let tab = document.getElementById("tab")
    
    if (val.value.length == 0){
        window.alert("a")
    }else {
        let n = Number(val.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${num * c}`
            item.value = `tab${c}`
            c++
        }
    }
}

