<template>
  <nui-container class="pt-16">
    <div ref="shop" class="flex flex-wrap justify-between">
      <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6 lg:pt-4">
          NUXT<span class="text-nuxt-lightgreen">JS</span> Blog<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Discover articles from the core team and contributors about NuxtJS, tips and tricks included!
        </h3>
      </div>
      <img src="/img/illustrations/blog.png" alt="Shop" class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8">
    </div>
    <section class="post-feed">
      <article v-for="post in posts" :key="post.id" class="post-card post">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }" class="post-card-image-link">
          <img class="post-card-image" :src="post.feature_image" :alt="post.title">
        </nuxt-link>
        <div class="post-card-content">
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }" class="post-card-content-link">
            <header class="post-card-header">
              <span v-if="post.tags[0]" class="post-card-tags">{{ post.tags[0].name }}</span>
              <h2 class="post-card-title">{{ post.title }}</h2>
            </header>
            <section class="post-card-excerpt">
              <p>{{ post.excerpt }}</p>
            </section>
          </nuxt-link>
          <footer class="post-card-meta">
            <ul class="author-list">
              <li v-for="author of post.authors" :key="author.slug" class="author-list-item">
                <div class="author-name-tooltip">{{ author.name }}</div>
                <nuxt-link :to="`/blog/authors/${author.slug}`" class="static-avatar">
                  <img class="author-profile-image" :src="author.profile_image" :alt="author.name">
                </nuxt-link>
              </li>
            </ul>
            <span class="reading-time">{{ post | readingTime }}</span>
          </footer>
        </div>
      </article>
    </section>
  </nui-container>
</template>

<script>
import { readingTime } from '@tryghost/helpers'

export default {
  filters: {
    readingTime (post) {
      return readingTime(post)
    }
  },
  async asyncData ({ $ghost }) {
    const posts = await $ghost.posts.browse({
      limit: 'all',
      include: 'tags,authors'
    })

    return { posts }
  }
}
</script>

<style scoped>
.post-feed {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0 0;
}
.post-card {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;
}
.post-card:hover {
  box-shadow: rgba(39,44,49,0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
  transition: all 0.4s ease;
  @apply bg-gray-200;
}
.post-card-image-link {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}
.post-card-image {
  width: 100%;
  height: 200px;
  background: var(--lightgrey) no-repeat center center;
  object-fit: cover;
}
.post-card-content-link {
  position: relative;
  flex-grow: 1;
  display: block;
  padding: 25px 25px 0;
  color: var(--darkgrey);
}
.post-card-content-link:hover {
  text-decoration: none;
}
.post-card-tags {
  display: block;
  margin-bottom: 4px;
  line-height: 1.15em;
  font-weight: 500;
  letter-spacing: 0.5px;
  @apply text-gray-500 uppercase text-sm;
}
.post-card-title {
  @apply m-0 font-bold;
  &::before {
    content: " ";
    width: 0%;
  }
}
.post-card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.post-card-excerpt {
  font-family: Georgia, serif;
}
.post-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 25px 25px;
}
.author-profile-image,
.avatar-wrapper {
  display: block;
  width: 100%;
  height: 100%;
  background: color(var(--lightgrey) l(+10%));
  border-radius: 100%;
  object-fit: cover;
}
.post-card-meta .profile-image-wrapper,
.post-card-meta .avatar-wrapper {
  position: relative;
}
.author-list {
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 0;
  padding: 0;
  list-style: none;
}
.author-list-item {
  position: relative;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
}
.author-list-item:nth-child(1) {
  z-index: 10;
}
.author-list-item:nth-child(2) {
  z-index: 9;
}
.author-list-item:nth-child(3) {
  z-index: 8;
}
.author-list-item:nth-child(4) {
  z-index: 7;
}
.author-list-item:nth-child(5) {
  z-index: 6;
}
.author-list-item:nth-child(6) {
  z-index: 5;
}
.author-list-item:nth-child(7) {
  z-index: 4;
}
.author-list-item:nth-child(8) {
  z-index: 3;
}
.author-list-item:nth-child(9) {
  z-index: 2;
}
.author-list-item:nth-child(10) {
  z-index: 1;
}
.static-avatar {
  display: block;
  overflow: hidden;
  margin: 0 -5px;
  width: 34px;
  height: 34px;
  border: #fff 2px solid;
  border-radius: 100%;
}
.moving-avatar {
  display: block;
  overflow: hidden;
  margin: 0 -6px;
  width: 56px;
  height: 56px;
  border: #fff 2px solid;
  border-radius: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99) 0.7s;
}
@media (min-width: 800px) {
  .author-list:hover .moving-avatar {
    margin: 0;
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  }
}
.author-name-tooltip {
  bottom: 105%;
  z-index: 999;
  padding: 2px 8px;
  letter-spacing: 0.2px;
  white-space: nowrap;
  box-shadow: rgba(39,44,49,0.08) 0 12px 26px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transform: translateY(6px);
  pointer-events: none;
  @apply absolute block bg-nuxt-gray text-white rounded;
}
.author-list-item:hover .author-name-tooltip {
  opacity: 1.0;
  transform: translateY(0px);
}
@media (max-width: 650px) {
  .author-name-tooltip {
    display: none;
  }
}
.reading-time {
  line-height: 33px;
  @apply text-gray-600 text-sm uppercase tracking-wide font-medium ml-6 flex-shrink-0;
}
@media (min-width: 795px) {
  .post-card-large {
    flex: 1 1 100%;
    flex-direction: row;
  }
  .post-card-large .post-card-image-link {
    position: relative;
    flex: 1 1 auto;
    border-radius: 5px 0 0 5px;
  }
  .post-card-large .post-card-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .post-card-large .post-card-content {
    flex: 0 1 357px;
  }
  .post-card-large h2 {
    font-size: 2.6rem;
  }
  .post-card-large p {
    font-size: 1.8rem;
    line-height: 1.55em;
  }
  .post-card-large .post-card-content-link {
    padding: 30px 40px 0;
  }
  .post-card-large .post-card-meta {
    padding: 0 40px 30px;
  }
}

.home-template .site-header:after {
  display: none;
}

/* Adjust some margins for smaller screens */
@media (max-width: 650px) {
  .post-feed {
    padding-top: 5vw;
  }
  .post-card {
    margin: 0 20px 5vw;
  }
}

</style>
