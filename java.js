let n1 = document.getElementById('fnum')
let n2 = document.getElementById('fnum1')
let res = document.getElementById('res')


function somar(){
    if(n1.value.length == 0 || n2.value.length == 0){
        alert('[Erro] Por favor digite 1 número.')
    }else{
        let n3 = Number(n1.value)
        let n4 = Number(n2.value)
        let s = n3 + n4
        res.innerHTML = `A somar entre ${n3} + ${n4} é igual ${s} `

    }
}