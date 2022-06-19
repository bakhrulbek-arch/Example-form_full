let load_blc = document.querySelector('.load_blc')
load_blc.classList.add('load_act')

setTimeout(() => {
    load_blc.classList.remove('load_act')
}, 580);

let form = document.forms.archive

function validate(init, regex) {
    if (regex.test(init.value)) {
        init.classList.add('valid')
        init.nextSibling.nextSibling.classList.remove('display_blc')
        init.classList.remove('invalid')

        init.previousSibling.previousSibling.style.color = "green"
        init.parentNode.nextSibling.nextSibling.style.color = "green"
        init.parentNode.nextSibling.nextSibling.innerHTML = `<b>${init.previousSibling.previousSibling.innerHTML} correct<b>`
    } else {
        init.nextSibling.nextSibling.classList.add('display_blc')
        init.classList.add('invalid')
        init.classList.remove('valid')

        init.previousSibling.previousSibling.style.color = "red"
        init.parentNode.nextSibling.nextSibling.style.color = "red"
        init.parentNode.nextSibling.nextSibling.innerHTML = `Please enter ${init.previousSibling.previousSibling.innerHTML}`
    }
}
let suc = document.querySelector('.suc')
let er_r = document.querySelector('.er_r')
let inputs = form.querySelectorAll('input')
inputs.forEach(input => {
    input.onkeyup = () => {
        validate(input, regex[input.name])
    }

});

let check_inf = document.querySelectorAll('.check')
let all_inf = document.querySelectorAll('.err_inf_all')
all_inf.forEach(num => {
    num.innerHTML = inputs.length
});

let need = document.querySelector('#need')
need.innerHTML = check_inf.length

let check = document.querySelectorAll('.check')
let btn_save = document.querySelector(".btn_form_save")
let load = document.querySelector('#load')

let img_load = document.createElement('img')
img_load.src = './icon/load_edit.svg'
load.append(img_load)

let blc_fix_top = document.querySelector('.blc_fix_top')
let btn_base_inf = document.createElement('button')
form.onsubmit = (event) => {
    event.preventDefault();
    let arr = []
    check.forEach(item => {
        if (item.classList.contains('invalid') || item.value.length === 0) {
            arr.push('invalid')
            btn_save.classList.add('deactive_clr')
        }
    })

    if (arr.length === 0) {
        submit()
        btn_save.classList.remove('deactive_clr')
        btn_save.classList.add('active_clr')
        load_blc.classList.add('load_act')
        setTimeout(() => {
            load_blc.classList.remove('load_act')


            btn_base_inf.classList.add('base')
            btn_base_inf.innerHTML = "Данные"
            blc_fix_top.append(btn_base_inf)
        }, 2000);
    } else {
        check.forEach(item => {
            if (item.value.length === 0) {
                item.classList.add('invalid')
                item.nextSibling.nextSibling.classList.add('display_blc')

                item.parentNode.nextSibling.nextSibling.style.color = "red"
                item.parentNode.nextSibling.nextSibling.innerHTML = `Please enter ${item.previousSibling.previousSibling.innerHTML}`
            }
        })
    }
    er_r.innerHTML = arr.length
    suc.innerHTML = inputs.length - arr.length
};

let inf_update = document.querySelector('.user')
function submit() {
    let user = {};

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;

    });

    console.log(user);
    for (let item in user) {
        let p = document.createElement('p')
        p.innerHTML = `${item}: ${user[item]}`
        inf_update.append(p)
    }

    // inf_update.innerHTML = `Name: ${user.name} <br><br>Surname: ${user.surname}<br><br> Age: ${user.age} <br><br> Email: ${user.email} <br><br> Phone number: ${user.phone} <br><br> Your Mom’s name: ${user.mom_name} <br><br> Your Pap’s name: ${user.pop_name} <br><br> About You: ${user.about} <br><br> What is JavaScript?: ${user.js_info} <br><br> What is HTML?: ${user.html_info} <br><br> What is CSS?: ${user.css_info} <br><br> Your favourite car: ${user.fav_car}`
}

let information_screen = document.querySelector('.information_screen')
let blc_cls = document.querySelector('.blc_cls')

btn_base_inf.onclick = () => {
    load_blc.classList.add('load_act')
    setTimeout(() => {
        load_blc.classList.remove('load_act')
        setTimeout(() => {
            information_screen.classList.add('load_act')
        }, 160);
    }, 150);
}

let cls_b = document.querySelector('#cls')
cls_b.onclick = () => {
    information_screen.classList.remove('load_act')
    load_blc.classList.add('load_act')
    setTimeout(() => {
        load_blc.classList.remove('load_act')
    }, 250);

}
