var VueDisqus = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"disqus_thread"}})},staticRenderFns: [],
  name: 'vue-disqus',
  props: {
    shortname: {
      type: String,
      required: true
    },
    identifier: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    },
    title: {
     type: String,
     required: false
    },
    remote_auth_s3: {
     type: String,
     required: false
    },
    api_key: {
     type: String,
     required: false
    },
    sso_config: {
      type: Object,
      required: false
    }
  },
  mounted () {
    if (window.DISQUS) {
      this.reset(window.DISQUS);
      return
    }
    this.init();
  },
  methods: {
    reset (dsq) {
      const self = this;
      dsq.reset({
        reload: true,
        config: function () {
          this.page.identifier = (self.identifier || self.$route.path || window.location.pathname);
          this.page.url = (self.url || self.$el.baseURI);
          if (self.title){
            this.page.title = self.title;
          }
          if (self.remote_auth_s3){
            this.page.remote_auth_s3 = self.remote_auth_s3;
          }
          if (self.key){
            this.page.api_key = self.key;
          }
          if (self.sso_config){
            this.sso = self.sso_config;
          }
        }
      });
    },
    init () {
      const self = this;
      window.disqus_config = function() {
        this.page.identifier = (self.identifier || self.$route.path || window.location.pathname);
        this.page.url = (self.url || self.$el.baseURI);
        if (self.title){
          this.page.title = self.title;
        }
        if (self.remote_auth_s3){
          this.page.remote_auth_s3 = self.remote_auth_s3;
        }
        if (self.api_key){
          this.page.api_key = self.api_key;
        }
        if (self.sso_config){
          this.sso = self.sso_config;
        }
      };
      setTimeout(() => {
        let d = document
          , s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.setAttribute('id', 'embed-disqus');
        s.setAttribute('data-timestamp', +new Date());
        s.src = `//${this.shortname}.disqus.com/embed.js`
        ;(d.head || d.body).appendChild(s);
      }, 0);
    }
  }
};

var VueFacebookComments = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { attrs: { "id": "fb-root" } }), _c('div', { staticClass: "fb-comments", attrs: { "data-href": _vm.url, "data-width": _vm.width, "data-numposts": _vm.numPosts } })]);
  }, staticRenderFns: [],
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

  mounted: function mounted() {
    if (window.FB) {
      this.reset();
      return;
    }
    this.init();
  },


  methods: {
    reset: function reset() {
      window.fbAsyncInit();
    },
    init: function init() {
      var src = '//connect.facebook.net/' + this.lang + '/sdk.js';
      var appId = this.appId;

      setTimeout(function () {
        window.fbAsyncInit = function () {
          FB.init({
            appId: appId,
            xfbml: true,
            version: 'v2.2'
          });
        };

        (function (d, s, id) {
          var js,
              fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement(s);js.id = id;
          js.src = src;
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
      }, 100);
    }
  }
};

var VueGplusComments = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm._m(0);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { attrs: { "id": "comments" } })]);
  }],
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

  mounted: function mounted() {
    this.init();
  },


  methods: {
    init: function init() {
      var _this = this;

      var d = document;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'https://apis.google.com/js/plusone.js';
      d.head.appendChild(s);

      setTimeout(function () {
        gapi.comments.render('comments', {
          href: window.location,
          width: _this.width,
          first_party_property: _this.firstParty,
          view_type: _this.viewType
        });
      }, 500);
    }
  }
};

var VueAllComments$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "vac" }, [_c('div', { staticClass: "vac-tab-social fullX", style: _vm.styleTab }, [_c('nav', [_c('ul', { staticClass: "list fullX" }, [_vm.disqus ? _c('li', { staticClass: "item-icon", class: { '-active': this.active['disqus'] }, style: _vm.styleArrowTab, on: { "click": function click($event) {
          _vm.setComment('disqus');
        } } }, [_c('svg', { staticClass: "vac-icon disqus", attrs: { "version": "1.1", "x": "0px", "y": "0px", "viewBox": "0 0 512 512", "xml:space": "preserve" } }, [_c('path', { staticClass: "fill-disqus", attrs: { "d": "M263.046,7.046C125.77,7.046,14.091,118.725,14.091,256c0,38.596,8.569,75.532,25.477,109.835\n              l-38.844,93.23c-1.312,3.147-0.817,6.752,1.289,9.431c2.106,2.661,5.44,4,8.867,3.459l103.152-16.505\n              c43.262,32.404,94.698,49.505,149.014,49.505C400.321,504.955,512,393.276,512,256S400.321,7.046,263.046,7.046z" } }), _c('path', { staticClass: "fill-disqus", attrs: { "d": "M263.046,486.166c-51.486,0-100.165-16.615-140.771-48.055c-1.66-1.284-3.684-1.963-5.752-1.963\n              c-0.495,0-0.991,0.037-1.486,0.119l-90.491,14.477l34.028-81.661c1.064-2.56,0.945-5.449-0.321-7.908\n              C41.417,328.441,32.88,293.055,32.88,256c0-126.918,103.252-230.166,230.166-230.166S493.211,129.082,493.211,256\n              S389.959,486.166,263.046,486.166z" } }), _c('path', { staticClass: "fill-disqus", attrs: { "d": "M281.835,129.174H164.403c-5.188,0-9.395,4.202-9.395,9.395v244.257c0,5.193,4.206,9.395,9.395,9.395\n              h117.431c69.931,0,126.826-56.918,126.826-126.872v-9.303C408.66,186.092,351.766,129.174,281.835,129.174z" } }), _c('path', { staticStyle: { "fill": "#FFFFFF" }, attrs: { "d": "M389.871,265.349c0,59.596-48.463,108.083-108.037,108.083H173.798V147.963h108.037\n              c59.573,0,108.037,48.486,108.037,108.083V265.349z" } }), _c('path', { staticClass: "fill-disqus", attrs: { "d": "M267.757,194.936h-28.197c-5.188,0-9.395,4.202-9.395,9.395v112.734c0,5.193,4.206,9.395,9.395,9.395\n              h28.197c36.252,0,65.748-29.505,65.748-65.762S304.009,194.936,267.757,194.936z" } }), _c('path', { staticClass: "fill-disqus", attrs: { "d": "M267.757,307.67h-18.803v-93.945h18.803c25.895,0,46.959,21.074,46.959,46.973\n              S293.651,307.67,267.757,307.67z" } })]), _vm._v(" "), _vm.showName ? _c('span', { staticClass: "txt-icon", style: { 'color': _vm.txtColor } }, [_vm._v("DISQUS")]) : _vm._e()]) : _vm._e(), _vm.fb ? _c('li', { staticClass: "item-icon", class: { '-active': this.active['fb'] }, style: _vm.styleArrowTab, on: { "click": function click($event) {
          _vm.setComment('fb');
        } } }, [_c('svg', { staticClass: "vac-icon facebook", attrs: { "version": "1.1", "x": "0px", "y": "0px", "viewBox": "0 0 512 512", "xml:space": "preserve" } }, [_c('path', { staticStyle: { "fill": "#3b5998" }, attrs: { "d": "M359.137,91.523h50.103V0.056h-91.045c-7.592-0.319-100.175-2.088-124.174,89.42 c-0.35,0.962-8.014,22.719-8.014,73.557l-83.248,\n              0.247v95.937l83.356-0.247V512h127.323V259.186h84.271v-96.183h-84.271v-30.264 C313.437,113.934,321.364,91.523,359.137,91.523z" } })]), _vm._v(" "), _vm.showName ? _c('span', { staticClass: "txt-icon", style: { 'color': _vm.txtColor } }, [_vm._v("FACEBOOK")]) : _vm._e()]) : _vm._e(), _vm.gplus ? _c('li', { staticClass: "item-icon", class: { '-active': this.active['gplus'] }, style: _vm.styleArrowTab, on: { "click": function click($event) {
          _vm.setComment('gplus');
        } } }, [_c('svg', { staticClass: "vac-icon gplus", attrs: { "version": "1.1", "x": "0px", "y": "0px", "viewBox": "0 0 512 512", "xml:space": "preserve" } }, [_c('path', { staticStyle: { "fill": "#E65F58" }, attrs: { "d": "M325.68,105.918l28.369-37.123c2.307-3.026,2.708-7.102,1.017-10.518\n                c-1.691-3.412-5.161-5.572-8.974-5.572H230.72c-15.866,0-33.1,1.867-51.488,5.616c-19.131,4.463-37.704,14.038-55.818,28.994 c-25.788,24.937-38.858,53.296-38.858,84.285c0,26.018,9.443,49.078,27.665,68.111c17.958,21.145,44.107,32.079,77.843,32.504 c1.339,0,2.718-0.02,4.115-0.059c-0.86,3.441-1.281,7.263-1.281,11.555c0,10.382,2.434,19.512,6.833,26.418\n                c0.694,1.334,1.408,2.659,2.151,3.964c-10.225,0.88-21.77,2.263-34.605,4.159c-21.604,3.725-42.514,11.301-62.309,22.616 c-18.29,10.914-31.204,23.965-38.301,38.662c-7.215,14.448-10.871,27.958-10.871,40.158c0,25.045,11.447,46.688,33.716,64.089\n                c21.663,18.324,54.264,27.821,97.13,28.222c50.471-0.792,89.906-13.265,117.229-37.079c26.834-23.456,40.442-50.989,40.442-82.012\n                c-0.391-21.682-5.543-39.664-15.524-53.727c-9.58-12.567-20.891-24.224-33.618-34.645l-19.18-15.704 c-2.532-2.556-5.113-5.484-8.006-9.101c-1.183-1.315-2.747-3.607-2.747-8.241c0-4.042,1.056-7.444,3.539-10.861 c2.61-4.003,5.416-7.576,7.723-10.025c6.129-5.347,11.907-10.602,17.713-16.125c5.132-5.411,10.02-11.354,14.575-17.709 c9.922-14.023,15.142-32.577,15.504-55.305l0.01-3.749c0.039-8.602,0.059-13.344-2.776-22.738 c-3.91-10.704-7.605-18.974-13.295-24.874l-0.264-0.259h9.756C320.841,109.848,323.784,108.396,325.68,105.918z M201.12,210.898                c-5.337-4.169-9.766-9.36-13.099-15.279c-7.566-13.979-11.398-27.455-11.398-40.285c-0.205-8.593,1.945-16.178,6.579-23.163 c5.24-5.997,11.31-8.881,18.525-9.072c6.129,0.195,11.369,1.926,15.729,5.059c4.917,3.842,8.945,8.935,12.034,15.235 c7.263,14.409,10.939,28.814,10.939,42.812c0,3.275-0.274,7.415-0.704,11.599c-0.655,3.636-2.151,7.312-4.448,10.949\n                c-4.966,4.785-11.017,7.273-18.466,7.591C210.876,216.304,205.744,214.53,201.12,210.898z M250.624,437.882 c-8.563,6.946-21.692,10.587-38.75,10.827c-19.708-0.235-35.212-4.507-46.287-12.835c-10.626-7.6-15.797-16.829-15.797-28.212\n                c0-5.675,1.095-10.45,3.441-14.517c2.082-3.925,4.634-7.244,7.253-9.585c3.343-2.723,6.598-4.814,9.385-6.095 c3.715-1.569,6.598-2.767,7.957-3.314c8.612-2.571,17.068-4.458,24.664-5.543c8.124-0.753,11.789-0.875,13.295-0.875\n                c0.616,0,0.87,0.02,0.938,0.025c2.561,0.332,4.986,0.098,7.097,0.235c13.881,9.795,24.204,18.124,30.412,24.449 c5.318,6.036,7.899,12.957,7.899,21.154C262.129,423.575,258.366,431.518,250.624,437.882z" } }), _c('polygon', { staticStyle: { "fill": "#E65F58" }, attrs: { "points": "456.204,30.031 426.173,30.031 426.173,0 406.153,0 406.153,30.031 376.122,30.031 376.122,50.051 406.153,50.051 406.153,80.081 426.173,80.081 426.173,50.051 456.204,50.051 " } })]), _vm._v(" "), _vm.showName ? _c('span', { staticClass: "txt-icon", style: { 'color': _vm.txtColor } }, [_vm._v("GOOGLE PLUS")]) : _vm._e()]) : _vm._e()])])]), _c('div', { staticClass: "vac-frame-comment", style: _vm.styleFrameComment }, [this.active['disqus'] ? _c('vue-disqus', { attrs: { "shortname": _vm.disqus.shortname, "title": _vm.disqus.title, "url": _vm.disqus.url, "identifier": _vm.disqus.identifier } }) : _vm._e(), _c('keep-alive', [this.active['fb'] ? _c('vue-facebook-comments', { attrs: { "appId": _vm.fb.appId, "lang": _vm.fb.lang, "url": _vm.fb.url, "width": _vm.fb.width, "numPosts": _vm.fb.numPosts } }) : _vm._e()], 1), this.active['gplus'] ? _c('vue-gplus-comments', { attrs: { "url": _vm.gplus.url, "width": _vm.gplus.width, "firstParty": _vm.gplus.firstParty, "viewType": _vm.gplus.viewType } }) : _vm._e()], 1)]);
  }, staticRenderFns: [], _scopeId: 'data-v-07e0b4e6',
  name: 'VueAllComments',

  props: {
    disqus: Object,
    gplus: Object,
    fb: Object,
    showFirst: String,

    showName: {
      type: Boolean,
      default: false
    },

    tabColor: {
      type: String,
      default: '#f5f5f5'
    },

    tabColorBorder: {
      type: String,
      default: '#ddd'
    },

    boxColor: {
      type: String,
      default: ''
    },

    txtColor: {
      type: String,
      default: '#888'
    }
  },

  data: function data() {
    return {
      active: {
        disqus: false,
        fb: false,
        gplus: false
      }
    };
  },


  computed: {
    styleTab: function styleTab() {
      return {
        'background-color': this.tabColor,
        'border-bottom-color': this.tabColorBorder
      };
    },
    styleArrowTab: function styleArrowTab() {
      return { 'border-top-color': this.tabColorBorder };
    },
    styleFrameComment: function styleFrameComment() {
      return {
        'background-color': this.boxColor,
        'padding': this.boxColor ? '20px' : 'none',
        'width': this.boxColor ? 'calc(100% - 40px)' : '100%'
      };
    }
  },

  mounted: function mounted() {
    this.setShowFirst();
  },


  methods: {
    setShowFirst: function setShowFirst() {
      if (this.showFirst && this.$props[this.showFirst]) {
        this.active[this.showFirst] = true;
        return;
      }
    },
    setComment: function setComment(component) {
      var _this = this;

      Object.keys(this.active).forEach(function (key) {
        return _this.active[key] = false;
      });
      this.active[component] = true;
    }
  },

  components: {
    VueDisqus: VueDisqus,
    VueFacebookComments: VueFacebookComments,
    VueGplusComments: VueGplusComments
  }
};

export default VueAllComments$1;
