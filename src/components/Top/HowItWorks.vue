<template>
  <div class="contents-orange" :class="{'contents-scroll': isScroll}">
    <div id="how-it-works" class="how-it-works" :style="{top: this.top + 'px'}">
      <div class="vertical-line"></div>
      <div class="title__wrapper">
        <p class="w6 fs48">How It Works</p>
        <p class="mt8 fs24">rinneアプリの特徴</p>
      </div>
        <div class="card__wrapper" :style="{left: this.left + 'px'}">
          <template v-for="item in features" :key="item.index">
            <FeatureCard :num="item.num" :appeal="item.appeal" :description="item.description" :src="item.src" />
          </template>
        </div>
    </div>
  </div>
</template>

<script>
import FeatureCard from '@/components/Card/FeatureCard.vue'
export default {
  data() {
    return {
      width: 0,
      height: 0,
      rem: 10,
      isScroll: false,
      top: 0,
      left: 0,
      features: [
        {
          num: 1,
          appeal: '<p class="w6 fs24 lh150">タスクの<br /><span style="color: var(--orange1)">進行状況</span>がわかる</p>',
          description: '<p class="mt8 fs14 lh150">煩雑な事務手続きを、<br />進捗を把握しながら進められる。</p>',
        },
        {
          num: 2,
          appeal: '<p class="w6 fs24 lh150">やるべきことが<br /><span style="color: var(--orange1)">ひと目</span>でわかる</p>',
          description: '<p class="mt8 fs14 lh150">すぐにやるべきことが優先的に<br />表示され、視覚的にわかりやすい。</p>',
        },
        {
          num: 3,
          appeal: '<p class="w6 fs24 lh150"><span style="color: var(--orange1)">分かりやすい</span>から<br />迷わない</p>',
          description: '<p class="mt8 fs14 lh150">タスクがわかりやすくまとめられて<br />いるから、煩雑な手続きも迷わない。</p>',
        },
        {
          num: 4,
          appeal: '<p class="w6 fs24 lh150"><span style="color: var(--orange1)">専門家</span><br />に相談できる</p>',
          description: '<p class="mt8 fs14 lh150">もし困ったことがあれば、<br />専門家にすぐ相談できる。</p>',
        },
        {
          num: 5,
          appeal: '<p class="w6 fs24 lh150">簡単な質問で<br /><span style="color: var(--orange1)">最適な</span>タスクを作成</p>',
          description: '<p class="mt8 fs14 lh150">簡単な質問に答えるだけで、<br />パーソナライズされたタスクが生成。</p>',
        },
      ]
    }
  },
  methods: {
    getScroll() {      
    if (this.width <= 1024) {
        this.rem = 8;
      } else if (this.width <= 1152) {
        this.rem = 9;
      } else { 
        this.rem = 10;
      }
      const leftMax = this.width - 170.4 * this.rem;
      if (leftMax < 0) {
        this.isScroll = true;
        if (window.scrollY >= this.height && window.scrollY < this.height * 5) {
          this.top = (window.scrollY - this.height);
          this.left = (((window.scrollY - this.height) / (this.height * 4)) * leftMax);
        }
      }
    },
  },
  mounted() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    window.addEventListener('scroll', this.getScroll);
  },
  components: {
    FeatureCard,
  },
}
</script>

<style scoped>
.how-it-works {
  position: relative;
  background: var(--orange1);
  height: 100vh;
  overflow: hidden;
}
.contents-scroll {
  height: 500vh;
}
.title__wrapper {
  margin: 2.4rem auto 7.2rem;
  width: fit-content;
  color: var(--white);
  text-align: center;
}
.title__wrapper p {
  color: var(--white);
}
.vertical-line {
  border-left: 1px solid var(--white);
  width: 0;
  height: 14.4rem;
  margin: 0 auto;
}
.card__wrapper {
  display: flex;
  left: 0;
  margin: 7.2rem 1.6rem auto 4.8rem;
}

@media screen and (max-width: 768px) {
  .card__wrapper {
    margin: 8.8rem 1.6rem auto 3.2rem;
  }
}
</style>