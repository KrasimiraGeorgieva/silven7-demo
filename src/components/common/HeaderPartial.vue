<template>
<div>
  <header>
    <div class="container">
      <div class="row">
        <div class="grid_12 rel">
          <h1>
            <router-link
                  :to="'/'"
                  tag="a"
          >
              <img src="../../assets/images/menu_logo.png" alt="Logo Silven">
          </router-link>

          </h1>
        </div>
      </div>
    </div>
    <section id="stuck_container">
    <!--==============================
                Stuck menu
    =================================-->
      <div class="container">
        <div class="row">
          <div class="grid_12 ">
            <div class="navigation ">
              <nav>
                <ul class="sf-menu">
                 <li>
                   <router-link
                           :to="'/'"
                           tag="a"
                   >
                     Начало
                   </router-link>
                 </li>
                 <li>
                   <router-link
                           :to="'/services'"
                           tag="a"
                   >
                     Услуги
                   </router-link>
                 </li>
                 <li>
                   <router-link
                           :to="'/prices'"
                           tag="a"
                   >
                     Цени
                   </router-link>
                 </li>
                 <li>
                   <router-link
                           :to="'/about'"
                           tag="a"
                   >
                     За нас
                   </router-link>
                 </li>
                 <li>
                   <router-link
                           :to="'/contacts'"
                           tag="a"
                   >
                     Контакти
                   </router-link>
                 </li>
                 <li>
                   <router-link
                           :to="'/news'"
                           tag="a"
                   >
                     Новини
                   </router-link>
                   </li>
               </ul>
              </nav>
              <div class="clear"></div>
            </div>
           <div class="clear"></div>
          </div>
       </div>
      </div>
    </section>
    <section class="page1_header">
      <div class="container">
        <div class="row">
          <div class="grid_4">
            <a href="#" class="banner "><div class="maxheight">
              <div class="fa fa-globe"></div>Озеленяване</div>
            </a>
            <a href="#" class="banner "><div class="maxheight">
              <div class="fa fa-home"></div>За офиса и дома</div>
            </a>
            <a href="#" class="banner "><div class="maxheight1">
              <div class="fa fa-cog"></div>Еко/Био почистване</div>
            </a>
            <a href="#" class="banner "><div class="maxheight1">
              <div class="fa fa-briefcase"></div>Управление</div>
            </a>
          </div>
          <div class="grid_5">
            <h2>ПРОФЕСИОНАЛИЗЪМ <br> КОРЕКТНОСТ  <br> КАЧЕСТВО </h2>
            Ние ви помагаме с професионално почистване и фасилити услуги
          </div>
        </div>
      </div>
    </section>
  </header>


</div>



  <!-- <header id="header">
	<div id="stuck_container">
		<div class="container">
			<div class="row">
				<div class="grid_12">
					<h1><a href="index.html"><img src="images/logo-silven.png" alt="Silven 7"></a><span>за да е чисто</span></h1>
					<nav>
						<ul class="sf-menu">
							<li class="current"><a href="index.html">Начало</a></li>
							<li><a href="index-1.html">Услуги</a>
								<ul>
										<li><a href="#">За офиса</a>
											<ul>
												<li><a href="#">Lorem ipsum</a></li>
												<li><a href="#">Lorem ipsum</a></li>
												<li><a href="#">Lorem ipsum</a></li>
											</ul>
										</li>
										<li><a href="#">За дома</a>
											<ul>
												<li><a href="#">Lorem ipsum</a></li>
												<li><a href="#">Lorem ipsum</a></li>
												<li><a href="#">Lorem ipsum</a></li>
											</ul>
										</li>
										<li><a href="#">Lorem ipsum</a></li>
									</ul>
								</li>
							<li><a href="index-2.html">Цени</a></li>
							<li><a href="index-3.html">За нас</a></li>
							<li><a href="index-4.html">Контакти</a></li>
							<li><a href="index-4.html">Новини</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>-->

</template> 

<script>
export default {
  name: "HeaderPartial"
}
</script>

<style>
  body {
    background : #515964 !important;
  }
  header {
    background: none !important;
  }
  .page1_header .banner:first-child + .banner + .banner,
  .page1_header .banner:first-child + .banner {
    background-color: #3090c3 !important;
  }
  .block-1,
  .page1_header .banner{
    background-color: #216895 !important;
  }
  .sf-menu > li.sfHover > a,
  .sf-menu > li.current > a,
  .sf-menu > li > a:hover {
    color: #3090c3 !important;
  }
  h2 {
    color: #3090c3 !important;
  }
  .color1 {
    color: #3090c3 !important;
  }
  .btn,
  .block-3 .count {
    background-color: #3090c3 !important;
  }
  nav .a.active {
    color: #3090c3 !important;
  }
</style>