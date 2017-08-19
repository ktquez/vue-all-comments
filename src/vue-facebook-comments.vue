<template>
  <div>
    <div class="fb-comments" :data-href="currentUrl" :data-width="width" :data-numposts="numPosts"></div>
    <div id="fb-root"></div>
  </div>
</template>

<script>
  export default {
    name: 'VueFacebookComments',

    props: {
      appId: {
        type: [Number, String],
        required: true
      },

      lang: {
        type: String,
        default: 'en_US'
      },

      url: {
        type: String,
        default: window.location.href
      },

      width: {
        type: String,
        default: '100%'
      },

      numPosts: {
        type: Number,
        default: 5
      }
    },

    mounted () {
      if (window.FB) {
        this.reset()
        return
      }
      this.init()
    },

    computed: {
      currentUrl () {
        return (this.url || window.location.href)
      }
    },

    methods: {
      reset () {
        window.FB.XFBML.parse()
      },

      init () {
        let src = `//connect.facebook.net/${this.lang}/sdk.js`
        let appId = this.appId

        setTimeout(function() {
          window.fbAsyncInit = function() {
            FB.init({
              appId     : appId,
              xfbml     : true,
              version   : 'v2.2'
            });
          };

          ;(function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = src;
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        }, 100);
      }
    }
  }
</script>
