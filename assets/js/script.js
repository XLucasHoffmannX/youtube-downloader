const convertBtn = document.querySelector('#download');
const urlInput = document.querySelector('#url');
const success = document.querySelector('.success');
let host = "http://localhost:3030";

success.style.display = 'none'

convertBtn.addEventListener('click', ()=>{
    urlInput.value === '' ? success.innerText = 'Informe uma URL ! 😑' : sendURL(urlInput.value);
    urlInput.value = '';
    success.style.color = 'rgb(83, 83, 238)'
    success.style.display = 'initial';
    setTimeout(()=>{
        success.style.display = 'none';
    }, 3000)
})

const sendURL = (URL)=>{window.location.href = `${host}/dowload?URL=${URL}`}
