<template>
  <div class="vac">
    <div class="vac-tab-social fullX">
      <nav>
        <ul class="list fullX">
          <li 
            v-if="disqus"
            class="item-icon">
            <svg 
              @click="setComment('disqus')"
              version="1.1" 
              class="icon disqus" 
              :class="{'-active': this.active['disqus']}"
              x="0px" y="0px" 
              viewBox="0 0 466 466" 
              xml:space="preserve">
              <g>
                <rect x="0" y="0" style="fill:#229CFF;" width="465" height="465"/>
                <g>
                  <path style="fill:#FFFFFF;" d="M234.131,184.302h-20.32v86.304h20.32c23.836,0,43.152-19.316,43.152-43.152
                    C277.283,203.627,257.967,184.302,234.131,184.302z"/>
                  <path style="fill:#FFFFFF;" d="M234.532,59.376c-93.053,0-168.49,75.437-168.49,168.49c0,24.841,5.379,48.413,15.023,69.647
                    l-28.357,67.619l73.546-8.174c29.289,24.585,67.053,39.399,108.278,39.399c93.054,0,168.49-75.437,168.49-168.49
                    C403.022,134.812,327.586,59.376,234.532,59.376z M239.693,313.074h-73.29v-171.23h73.29c23.635,0,45.043,9.58,60.532,25.078
                    c15.498,15.489,25.079,36.887,25.079,60.532C325.303,274.744,286.973,313.074,239.693,313.074z"/>
                </g>
              </g>
            </svg>           
          </li>
          <li 
            v-if="fb"
            class="item-icon">
            <svg 
              @click="setComment('fb')"
              version="1.1" 
              class="icon facebook"
              :class="{'-active': this.active['fb']}"
              x="0px" y="0px" 
              viewBox="0 0 466 466"
              xml:space="preserve">
              <g>
                <path style="fill:#3A559F;" d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475
                h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z"/>
              </g>
            </svg>
          </li>
          <li 
            v-if="gplus"
            class="item-icon">
            <svg 
              @click="setComment('gplus')"
              version="1.1" 
              class="icon gplus"
              :class="{'-active': this.active['gplus']}" 
              x="0px" y="0px" 
              viewBox="0 0 456 456" 
              xml:space="preserve">
              <g>
                <path style="fill:#DD4B39;" d="M0,0v455.73h455.73V0H0z M265.67,247.037c-7.793,51.194-45.961,80.543-95.376,80.543 c-55.531,0-100.552-45.021-100.552-100.552c0-55.517,45.021-100.538,100.552-100.538c26.862,0,50.399,9.586,67.531,26.226 l-28.857,28.857c-9.773-9.846-23.147-15.094-38.674-15.094c-32.688,0-59.189,27.874-59.189,60.548
                c0,32.703,26.501,59.768,59.189,59.768c27.397,0,48.144-13.243,54.129-39.758h-54.129v-40.38h95.131 c1.142,6.506,1.72,13.315,1.72,20.37C267.144,234.025,266.638,240.69,265.67,247.037z M386.419,234.517h-35.233v35.218H326.16 v-35.218h-35.233v-25.041h35.233v-35.233h25.026v35.233h35.233V234.517z"/>
              </g>
            </svg>
          </li>
        </ul>
      </nav>
    </div>
    <div class="vac-frame-comment">
      <div>
        <vue-disqus 
          v-if="this.active['disqus']" 
          :shortname="disqus.shortname"
          :title="disqus.title"
          :url="disqus.url"
          :identifier="disqus.identifier">
        </vue-disqus>
      </div>

      <div>
        <vue-facebook-comments
          v-if="this.active['fb']"
          :appId="fb.appId"
          :lang="fb.lang"
          :url="fb.url"
          :width="fb.width"
          :numPosts="fb.numPosts">
        </vue-facebook-comments>
      </div>

      <div>
        <vue-gplus-comments
          v-if="this.active['gplus']"
          :url="gplus.url"
          :width="gplus.width"
          :firstParty="gplus.firstParty"
          :viewType="gplus.viewType">
        </vue-gplus-comments>      
      </div>
    </div>
  </div>
</template>

<script>
  import VueDisqus from 'vue-disqus/VueDisqus.vue'
  import VueFacebookComments from './vue-facebook-comments.vue'
  import VueGplusComments from './vue-gplus-comments.vue'

  export default {
    name: 'VueAllComments',

    props: {
      disqus: Object,
      gplus: Object,
      fb: Object,
      showFirst: String
    },

    data () {
      return {
        active: {
          disqus: false,
          fb: false,
          gplus: false
        }
      }
    },

    mounted () {
      this.setShowFirst()
    },

    methods: {
      setShowFirst () {
        if (this.showFirst && this.$props[this.showFirst]) {
          this.active[this.showFirst] = true
          return
        }
      },

      setComment (component) {
        Object.keys(this.active).forEach(key => this.active[key] = false)
        this.active[component] = true
      }
    },

    components: {
      VueDisqus,
      VueFacebookComments,
      VueGplusComments
    }
  }
</script>

<style scoped>
/* General */
ul {
  list-style-type: none;
}

.fullX {
  width: 100%;
  float: left;
}

.fl {
  float: left;
}

/* style */
.vac {
  margin-top: 20px;
}

.vac-tab-social .icon {
  width: 22px;
  float: left;
  cursor: pointer;
  opacity: 0.4;
  border-radius: 50%;
  transition: opacity .5s
}

.vac-tab-social .icon:hover, .vac-tab-social .icon.-active {
  opacity: 1;
}

.item-icon:not(:last-child) {
  float: left;
  margin-right: 10px;
}
</style>
