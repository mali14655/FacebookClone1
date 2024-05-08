document.getElementById('upload').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.color').style.display = 'block';
})
document.getElementById('srchbar2').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.color').style.display = 'block';
})

document.querySelector('.cancel').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.color').style.display = 'none';

})

document.querySelector('.extrainputimg').addEventListener('click', function () {
    // console.log('hello')
    document.querySelector('#inputimag').click();



    // document.querySelector('.extrainputimg').style.backgroundimage.src=mysrc;
})

document.querySelector('.postbtn').addEventListener('click', function () {
    let myform = document.forms['myform'];
    let formdata = new FormData(myform);

    let myimg = formdata.get('myimage');
    let mysrc = (URL.createObjectURL(myimg));
    console.log(mysrc);

    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.color').style.display = 'none';






    let postbox = document.createElement('div');
    postbox.className = 'postbox'

    // let appending=document.querySelector('.postshare');
    // appending.prepend(postbox);

    let dpbox = document.createElement('div');
    dpbox.className = 'dpbox';

    let div1 = document.createElement('div');
    div1.className = 'div1'

    let dpimg = document.createElement('img');
    dpimg.className = 'dpimg';
    dpimg.src = 'img.jpeg'

    div1.append(dpimg)

    let div2 = document.createElement('div');
    div2.classList = 'div2 div22';
    div2.innerHTML = 'Muhammad Ali';
    dpbox.append(div1);
    dpbox.append(div2);
    postbox.append(dpbox);

    let despbox = document.createElement('div');
    despbox.className = 'despbox';
    despbox.innerText = document.querySelector('.description').value;
    // despbox.innerText='Description Here';
    postbox.append(despbox);

    let picbox = document.createElement('div');
    picbox.className = 'picbox';

    let uploadimg = document.createElement('img');
    uploadimg.className = 'uploadimg';
    uploadimg.src = mysrc;

    picbox.append(uploadimg);
    postbox.append(picbox);

    let likebox = document.createElement('div');
    likebox.className = 'likebox';

    let count = document.createElement('div');
    count.className = 'count';

    let icon = document.createElement('span');
    icon.className = 'icon';
    icon.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
    count.append(icon);

    let counts = document.createElement('span');
    counts.className = 'counts';
    counts.innerHTML = 0;
    count.append(counts);
    likebox.append(count);

    let hr = document.createElement('hr');
    hr.className = "hr";
    likebox.append(hr);

    let downicons = document.createElement('div');
    downicons.className = 'downicons';

    let down1 = document.createElement('div');
    down1.classList = 'down1 likediv';

    let empt1 = document.createElement('span');
    empt1.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>'
    down1.append(empt1);
    let like = document.createElement('span');
    like.className = 'like';
    like.innerHTML = 'Like';
    down1.append(like);
    downicons.append(down1);

    let down2 = document.createElement('div');
    down2.classList = 'down1 down2';

    let empt2 = document.createElement('span');
    empt2.innerHTML = '<i class="fa-regular fa-comment"></i>'
    down2.append(empt2);
    let comment = document.createElement('span');
    comment.className = 'like';
    comment.innerHTML = 'Comment';
    down2.append(comment);
    downicons.append(down2);

    let down3 = document.createElement('div');
    down3.classList = 'down1 down3';

    let empt3 = document.createElement('span');
    empt3.innerHTML = '<i class="fa-solid fa-share"></i>'
    down3.append(empt3);
    let Share = document.createElement('span');
    Share.className = 'like';
    Share.innerHTML = 'Share';
    down3.append(Share);
    downicons.append(down3);

    likebox.append(downicons);
    postbox.append(likebox);

    let z = document.querySelector('.secondbd');
    // z.append(postbox);
    let myz = document.querySelector('.postshare');
    myz.parentNode.insertBefore(postbox, myz.nextSibling);
    // z.append(postbox);
    document.querySelector('.description').value = "";




    let x = 0;
    document.querySelector('.likediv').addEventListener('click', function () {
        x++;
        document.querySelector('.counts').innerHTML = x;
        document.querySelector('.likediv').style.color = ' #1877F2'

    })
})


// postbox.postpend.postbox;



