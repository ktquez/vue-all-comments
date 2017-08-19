<template>
  <article class="content">
    <h1>My Awesome Post</h1>
    <p>
      The HP Pavilion g6-1d46dx was a decent mainstream laptop in its day, and you could replace it with something very similar. There have been lots of changes at the low end of the windows market, with touch-screen tablets and 2-in-1s, and at the high-end, with super-thin laptops with high-resolution screens, like the latest Dell XPS 13 and Microsoft’s new Surface laptop. But 15.6in laptops have not changed much, and they still sell by the truckload. Today’s mainstream laptops are thinner than they used to be – your HP g6 is 1.4in thick – and cheaper. However, the standard specification remains much the same. Your current laptop, for example, has 4GB of memory, a 500GB hard drive, a 1366 x 768-pixel screen and Microsoft Windows. That’s still the most common specification. Some 15.6in laptops now have touch screens, but those are optional. You’re probably not going to use a 15.6in laptop as a tablet, so you’d be better off spending the extra cash on an external Bluetooth or USB mouse. One thing that has changed is that three brands now dominate Windows PC sales in the USA, where you live. In the fourth quarter of last year, according to Gartner’s market research, HP had 30% of the whole PC market (including Apple), with Dell on 25% and Lenovo on 14%. Acer and Asus had about 4% each. There’s been a lot of consolidation in a declining market, which means non-specialist (and non-Apple) buyers rarely look beyond the top five suppliers. Both HP and Dell sell PCs from their online stores, so you can look at those for special offers. If you buy online, both companies offer reasonably-priced support contracts that you won’t get from a retailer. I am based in the UK, so I’m not very familiar with the American retail market, and I don’t know if you live within range of any particular stores. I’m therefore going to restrict my links to Amazon.com. However, you can search for alternative sources. The processor is usually the most expensive part of a mainstream 15.6in laptop and has the greatest impact on both price and performance. Your HP g6 has a 1.6GHz AMD A6-3420M quad-core processor, which is slow by today’s standards.
    </p>
    <hr>
    <h2 class="txt_comments">{{ msg }}</h2>
    <vue-all-comments 
      :disqus="disqus" 
      :gplus="gplus" 
      :fb="fb" 
      showFirst="fb" 
      :showName="true" />
  </article>
</template>

<script>
  import VueAllComments from '../src/index'

  export default {
    name: 'App',

    data () {
      return {
        urlFacebook: '',
        disqus: {
          shortname: 'ktquez',
          identifier: 'title-blog',
          url: window.location.href
        },

        gplus: {
          url: 'http://ktquez.com',
          width: 800
        },

        fb: {
          appId: '229629860755498',
          url: 'http://ktquez.com',
          width: '100%'
        }
      }
    },

    components: {
      VueAllComments
    }
  }
</script>

<style>
* { 
  margin: 0; 
  padding: 0; 
}
body {
  font-family: Tahoma, Geneva, sans-serif
}
p {
  margin: 30px 0;
  color: #666;
  font-size: 14px;
  letter-spacing: 1.2px;
  line-height: 18px;
}
.content {
  max-width: 960px;
  padding: 10px;
  margin: 0 auto;
}
.txt_comments {
  margin-top: 30px;
}
</style>