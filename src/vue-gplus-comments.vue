<template>
  <div>
    <div id="comments"></div>
  </div>
</template>

<script>
  export default {
    name: 'VueGooglePlus',

    props: {
      url: String,

      width: {
        type: Number,
        default: 600
      },

      firstParty: {
        type: String,
        default: 'BLOGGER'
      },

      viewType: {
        type: String,
        default: 'FILTERED_POSTMOD'
      }
    },

    mounted () {
      this.init()
    },

    methods: {
      init () {
        let d = document
        let s = document.createElement('script')
        s.type = 'text/javascript'
        s.src = 'https://apis.google.com/js/plusone.js'
        d.head.appendChild(s)

        setTimeout(() => {
          gapi.comments.render('comments', {
            href: window.location,
            width: this.width,
            first_party_property: this.firstParty,
            view_type: this.viewType
          })
        }, 500)
      }
    }
  }
</script>