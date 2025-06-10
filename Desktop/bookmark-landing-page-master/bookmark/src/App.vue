<template>
  <div class="bookmark">
    <header>
      <div class="logo_nav">
        <h1 class="bookmark_logo">bookmark</h1>
        <nav class="bookmark_nav">
          <button class="bookmark_nav_btn" @click="showPopup">open nav</button>
          <van-popup
            v-model="show"
            closeable
          >
          <div class="nav_logo_white">
            <img src="./assets/images/logo-white.svg" alt="">
            <ul>
              <li class="van-hairline--bottom van-hairline--top"><a href="#">FEATURES</a></li>
              <li class="van-hairline--bottom"><a href="#">PRICING</a></li>
              <li class="van-hairline--bottom"><a href="#">CONTACT</a></li>
            </ul>
            <button class="bookmark_login">
              LOGIN
            </button>
            <div class="bookmark_share_btn">
              <button class="facebook">share facebook</button>
              <button class="twitter">share twitter</button>
            </div>
          </div>
          </van-popup>
        </nav>
      </div>
      <div class="bookmark_bluebox">
      </div>
      <img src="./assets/images/illustration-hero.svg" alt="" class="bookmark_header_img">
      <article class="bookmark_intro">
        <h2>A Simple Bookmark Manager</h2>
        <p>
          A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.
        </p>
        <div class="btn--flex">
          <button class="bookmark_chrome_get">Get it on Chrome</button>
          <button class="bookmark_firefox_get">Get it on Firefox</button>
        </div>
      </article>
    </header>
    <main>
      <section class="bookmark_features">
        <article>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your favourite websites.
            Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </article>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="Simple Bookmarking" />
          <van-sidebar-item title="Speedy Searching" />
          <van-sidebar-item title="Easy Sharing" />
          <ul class="bookmark_tabs_img">
            <li>
              <img :src="tabsimg[activeKey]" alt="">
            </li>
          </ul>
          <ul class="bookmark_sidebar">
            <li>
              <h3>{{featuresList[activeKey].title}}</h3>
              <p>{{featuresList[activeKey].msg}}</p>
            </li>
          </ul>
        </van-sidebar>
        <div class="bookmark_bluebox"></div>
      </section>
      <section class="bookmark_extension">
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if you’ve
          got a favourite you’d like us to prioritize.
        </p>
        <ul class="bookmark_card">
          <li
            v-for="(item, index) in extensionList"
            :key="index"
          >
            <img :src="item.img" alt="" class="bookmark_card_img">
            <h3>{{ item.browser }}</h3>
            <p>{{ item.version }}</p>
            <div class="dots">Divider</div>
            <!-- <van-divider dashed></van-divider> -->
            <div class="btn"><button>{{ item.btn }}</button></div>
          </li>
        </ul>
      </section>
      <section class="bookmark_faq">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item
            v-for="(item, index) in faqList"
            :key="index"
            :title="item.question"
            :name="item.name">
            {{item.answer}}
          </van-collapse-item>
        </van-collapse>
        <button class="bookmark_faq_btn">More Info</button>
      </section>
    </main>
    <footer>
      <section class="bookmark_contact">
        <p>35,000+ ALREADY JOINED</p>
        <h4>Stay up-to-date with what we’re doing</h4>
        <div class="bookmark_error">
          <input type="email" placeholder="Enter your email address">
          <span class="error_msg"></span>
        </div>
        <button class="bookmark_btn_contact">Contact Us</button>
      </section>
      <section class="bookmark_share">
        <img src="./assets/images/logo-white.svg" alt="" class="bookmark_logo">
        <ul>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">PRICING</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <div class="share_btn">
          <button class="facebook">share facebook</button>
          <button class="twitter">share twitter</button>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      activeKey: 0,
      activeName: '1',
      show: false, // 弹出层
      // tabs
      featuresList: [
        {
          title: 'Bookmark in one click',
          msg: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
        },
        {
          title: 'Intelligent search',
          msg: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
        },
        {
          title: 'Share your bookmarks',
          msg: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
        }
      ],
      // 卡片
      extensionList: [
        {
          img: require('@/assets/images/logo-chrome.svg'),
          browser: 'Add to Chrome',
          version: 'Minimum version 62',
          btn: 'Add & Install Extension'
        },
        {
          img: require('@/assets/images/logo-firefox.svg'),
          browser: 'Add to Firefox',
          version: 'Minimum version 55',
          btn: 'Add & Install Extension'
        },
        {
          img: require('@/assets/images/logo-opera.svg'),
          browser: 'Add to Opera',
          version: 'Minimum version 46',
          btn: 'Add & Install Extension'
        }
      ],
      // 手风琴
      faqList: [
        {
          name: '1',
          question: 'What is Bookmark?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
        },
        {
          name: '2',
          question: 'How can I request a new browser',
          answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
        },
        {
          name: '3',
          question: 'Is there a mobile app?',
          answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
        },
        {
          name: '4',
          question: 'What about other Chromium browsers?',
          answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
        }
      ],
      // tabs图片
      tabsimg: [
        require('@/assets/images/illustration-features-tab-1.svg'),
        require('@/assets/images/illustration-features-tab-2.svg'),
        require('@/assets/images/illustration-features-tab-3.svg')
      ]
    }
  },
  methods: {
    // 弹出层
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
@import './assets/styles/index.less';
</style>
