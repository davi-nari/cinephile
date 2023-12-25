<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer-social">
        <li><a href="#">TG</a></li>
        <li><a href="#">VK</a></li>
        <li><a href="#">FB</a></li>
        <li><a href="#">IG</a></li>
        <li><a href="#">TK</a></li>
        <li><a href="#">YT</a></li>
        <li><a href="#">TW</a></li>
        <li><a href="#">LI</a></li>
      </ul>
      <p>
        Далеко-далеко за словесными горами в стране гласных, и согласных живут
        рыбные тексты. Инициал предупредила наш гор возвращайся
        безорфографичный, буквоград реторический назад послушавшись.
      </p>
      <img src="" alt="" />
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
    padding: 50px 0;
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
    &-social{
        display: flex;
        gap: 30px;
        a{
            color: white;
            font-size: 30px;
        }
    }
    
    p{
        color: white;
        font-size: 30px;
        text-align: center;
    }
}
</style>