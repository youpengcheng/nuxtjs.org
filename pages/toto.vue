<template>
  <div>
    <p style="height:600px;">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugiat adipisci cum, perferendis impedit unde, sequi porro labore blanditiis ullam repellat perspiciatis reiciendis. Voluptas atque molestiae accusamus quod consequuntur. Ratione.
    </p>
    <!-- <div class="blobs">
      <div class="blob">4</div>
      <div class="blob">3</div>
      <div class="blob">2</div>
      <div class="blob">1</div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg> -->
    <!-- <n-goo/> -->
  </div>
</template>

<script>
export default {
  layout: 'toto'
}
</script>

<style lang="scss">
.blobs{
  filter:url('#goo');
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
}
$dist-x:65px;
$dist-y:65px;
@keyframes blob-left-top-anim{
  0%{
    transform:scale(1.1) translate(0,0);
  }
  33%{
    transform:scale(0.9) translate(-$dist-x,0);
  }
  62%{
    transform:scale(0.7) translate(-$dist-x,-$dist-y);

  }
  94%{
    transform:scale(1.1) translate(0,0);
  }
}

@keyframes blob-right-top-anim{
  0%{
    transform:scale(1.1) translate(0,0);
  }
  33%{
    transform:scale(0.9) translate($dist-x,0);
  }
  64%{
    transform:scale(0.7) translate($dist-x,-$dist-y);
  }
  96%{
    transform:scale(1.1) translate(0,0);
  }
}
@keyframes blob-left-bottom-anim{
  0%{
    transform:scale(1.1) translate(0,0);
  }
  33%{
    transform:scale(0.9) translate(-$dist-x,0);
  }
  66%{
    transform:scale(0.7) translate(-$dist-x,$dist-y);
  }
  98%{
    transform:scale(1.1) translate(0,0);
  }
}

@keyframes blob-right-bottom-anim{
  0%{
    transform:scale(1.1) translate(0,0);
  }
  33%{
    transform:scale(0.9) translate($dist-x,0);
  }
  68%{
    transform:scale(0.7) translate($dist-x,$dist-y);
  }
  100%{
    transform:scale(1.1) translate(0,0);
  }
}
.blob{
  position:absolute;
  background:#35495e;
  left:50%;
  top:50%;
  width:100px;
  height:100px;
  line-height:100px;
  text-align:center;
  color:white;
  font-size:40px;
  border-radius:100%;
  margin-top:-50px;
  margin-left:-50px;
  animation:blob-left-top-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 4s infinite;

  &:nth-child(2){
    animation-name:blob-right-top-anim;
  }
  &:nth-child(3){
    animation-name:blob-left-bottom-anim;
  }
  &:nth-child(4){
    animation-name:blob-right-bottom-anim;
  }
}
</style>
