<template>
  <section class="top">
    <h2 class="top-title">
      ТОП
      <span>10</span>
    </h2>
    <Swiper
      :navigation="true"
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      :spaceBetween="25"
      class="top-slider"
      v-if="topRated.top"
      
    >
      <SwiperSlide
        class="top-slider-item"
        v-for="(item, idx) in topRated.top10"
        :key="item.id"
      >
        <RouterLink :to="`movie/${item.id}`" class="top-slider-item-content">
          <span>{{ idx + 1 }}</span>
          <img :src="imgUrl + item.poster_path" alt="" />
        </RouterLink>
      </SwiperSlide>
    </Swiper>
    <Swiper
      :navigation="true"
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      :spaceBetween="25"
      class="top-slider"
      v-else
      
    >
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
      <SwiperSlide
        class="top-slider-item"
      >
        <RouterLink to="/" class="top-slider-item-content">
          <span>0</span>
          <img src="@/assets/images/block.png" alt="" />
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { imgUrl } from "@/url";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper/modules";
import { ref, onMounted, computed } from "vue";
const modules = ref([Navigation]);
const swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1450: {
      slidesPerView: 3.5,
    },
  },
});
import { useTop10 } from "@/store/top10";
const topRated = useTop10();
topRated.getTop10();
</script>
