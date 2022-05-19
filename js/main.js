let inputfile= document.getElementById('fileinput');

inputfile.addEventListener('change', function(){
[...this.files].forEach(file=>{
    if(file.type.startsWith('image/')){
        let reader= new FileReader();

        reader.onload= function(){
            let img=document.createElement('img');
            img.setAttribute('src',reader.result);

            document.body.appendChild(img);
        }

        reader.readAsDataURL(file);
    }else{
        alert("Format duzgen deyil!!!");
        this.value=''
    }
})
})

let img= document.querySelector('.upload');

img.addEventListener('click',function(){
    inputfile.click();
})