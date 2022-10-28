var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

var slideIndex = 1;
      showSlides(slideIndex);
      function plusSlides(n) {
         showSlides(slideIndex += n);
      }
      function currentSlide(n) {
         showSlides(slideIndex = n);
      }
      function showSlides(n) {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         var dots = document.getElementsByClassName("dot");
         if (n > slides.length) {slideIndex = 1}
         if (n < 1) {slideIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active";
      }



      const options = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json', Authorization: '8a341535-9704-4b9d-a42a-1246440eeda6' }
       };
       
       fetch(`https://api.nftport.xyz/v0/nfts?chain=ethereum`, options)
             .then(response => response.json())
             .then(response => {
               console.log(response)
             })
             .catch(err => console.log(err))
             //false()
             
       const nftSection = document.querySelector('.nfts')
       nftSection.innerHTML = '';

       const addr = ["0xdd44443d8a3563e947ead8a2254b36f8d8b28581/15286", '0xb4fedc003053c22ac8b808bb424f3e1787f30cf2/50811', "0x7ddec1411369a196b84a634ef82971b57bd3fe78/3515", "0x51061aa713bf11889ea01183633abb3c2f62cadf1733"]
       for (var i = 0; i < addr.length; i++) {
         console.log(addr[i])
         //const contract = nfts.nfts[i].contract_address
         let img = desc = name = ''
           fetch(`https://api.nftport.xyz/v0/nfts/${addr[i]}?chain=ethereum`, options)
             .then(response => response.json())
             .then(response => {
               console.log(response)
               img = response.nft?.cached_file_url
               desc = response.nft.metadata?.description
               name = response.contract?.name
               nftSection.innerHTML += `
               <div class="card-body">
                <img src="${img}" alt="">
                <div class="card-content">
                    <h1>${name}</h1>
                    <p class="first-p">Our Equilibrium collection promotes balance and calm</p>
                    <div class="icon">
                        <div class="first-icon">
                            <img src="" alt=""
                                class="icon-ethereum">
                            <p>0.041ETH</p>
                        </div>
                        <div class="second-icon">
                            <img src="" alt=""
                                class="icon-clock">
                            <p>3 days left</p>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="avatar">
                        <img src="img/WhatsApp Image 2022-08-08 at 10.49.53 PM.jpeg" alt="" class="avatar-img">
                        <p>Creation of </p>
                        <span> Dreadhead</span>
                    </div>

                </div>
            </div>
               `;
             })
             .catch(err => console.error(err));
       
       }