// const form = document.querySelector('#frm');
const button = document.querySelector('#btn');
const clearBtn=document.querySelector('#Strge_btn')

// deleting bookMrk
function del(link, elem) {
    elem.parentElement.parentElement.parentElement.remove()

    // reseting localStorage
    let bkmarks = JSON.parse(localStorage.getItem('bkmarks'));

    for (let i = 0; i < bkmarks.length; i++) {
        if (bkmarks[i].url == link) {
            bkmarks.splice(i, 1)
        }

        // list heading styling
        if (bkmarks.length <= 0) {
            let listHead = document.querySelector('#list-head')
            listHead.getAttribute('style')
            listHead.setAttribute('style', 'display:none;')

        }
    }
    localStorage.setItem('bkmarks', JSON.stringify(bkmarks))

}

// Adding bookMrk
button.addEventListener('click', e => {
    e.preventDefault();
    let site = document.getElementById('siteName').value;
    let link = document.getElementById('siteLink').value;

    // styling
    if (site == '' & link == '') {
        site = document.getElementById('siteName').style.borderBottomColor = 'red';
        link = document.getElementById('siteLink').style.borderBottomColor = 'red';

    }
    else if (link == '') {
        link = document.getElementById('siteLink').style.borderBottomColor = 'red';
    }
    else if (site == '') {
        site = document.getElementById('siteName').style.borderBottomColor = 'red';
    }

    // Adding book to localStorage
    else {

        let bookmark = {
            name: site,
            url: link,
        }
        if (localStorage.getItem('bkmarks') === null) {

            let bkmarks = [];
            bkmarks.push(bookmark);
            localStorage.setItem('bkmarks', JSON.stringify(bkmarks))
        }
        else {
            let bkmarks = JSON.parse(localStorage.getItem('bkmarks'));
            bkmarks.push(bookmark);
            localStorage.setItem('bkmarks', JSON.stringify(bkmarks))
        }



        let bkmarks = JSON.parse(localStorage.getItem('bkmarks'));

        let result = document.getElementById('list');

        result.innerHTML = '';
        for (let i = 0; i < bkmarks.length; i++) {
            let site = bkmarks[i].name;
            let link = bkmarks[i].url;


            result.innerHTML += '<div class="container" id="lists" style="border: none;border-top:1px solid darkmagenta ; margin-bottom: 10px;      background-color:rgba(255, 255, 255, 0.8);">'
                + '<div class="row mt-3">'
                + '<div class="col col-md-8">' + '<h3 style="display:inline-block;" id="nme">' + site + '</h3>' + '</div>'
                + '<div class="col col-md-2">' + '<button class="btn btn-warning mx-5">' + '<a style="text-decoration:none;" target="_blank" href="' + link + '">Visit</a>' + '</button>' + '</div>'
                + '<div class="col col-md-2">' + '<a onclick="del(\'' + link + '\',this)">' + '<i class="fa fa-close fa-2x" style="color:rgb(155, 3, 3);">' + '</i>' + '</a>' + '</div>'
                + '</div>'
                + '</div>';



        }

        // styling border
        site = document.getElementById('siteName').style.borderBottomColor = 'indigo';
        link = document.getElementById('siteLink').style.borderBottomColor = 'indigo';


        // clearing input
        site = document.getElementById('siteName').value = ''
        link = document.getElementById('siteLink').value = ''

        // list heading styling
        let listHead = document.querySelector('#list-head')
        listHead.getAttribute('style')
        listHead.setAttribute('style', 'display:block;', 'font-family: cursive;')
        listHead.innerText = 'SiteList:'

        e.preventDefault();
    }

    // Clear button
    clearBtn.addEventListener('click',e=>{
        e.preventDefault();
        localStorage.clear();
    })
})
