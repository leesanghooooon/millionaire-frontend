
export default {
	
  install(Vue) {
     
    // 페이지 이동
    Vue.prototype.$move = function (path_, params_) {
      
      // router path를 입력한 경우 처리 
      if (path_ != null && path_.indexOf("/") > -1) {
          this.$router.push(path_);
      } else {
          let data_ = {name: path_, query:{}};
          if (params_) {
              if (typeof(params_) == "object") {
                  data_.query = params_; 
              } else {
                  // 값만 올 경우 param으로 변수명 지정
                  data_.query.param = params_; 
              }
          }
          this.$router.push(data_);
      }
    }

    // Query Parameter 값 
    Vue.prototype.$get = function (name_) {
      return this.$route.query[name_]
    }

    // 영어, 숫자만 입력
    Vue.prototype.$alphaNum = function (val_) {
      return this.$options.filters.alphaNum(val_)
    }

    // 영어만 입력
    Vue.prototype.$alpha = function (val_) {
      return this.$options.filters.alpha(val_)
    }

    // 숫자만 입력
    Vue.prototype.$num = function (val_) {
      return this.$options.filters.num(val_)
    }

    // 한글만 입력
    Vue.prototype.$han = function (val_) {
      return this.$options.filters.han(val_)
    }

    // ","만 처리
    Vue.prototype.$currency = function (val_) {
      return this.$options.filters.currency(val_)
    }

    // String -> 시:분:초 처리
    Vue.prototype.$minFormat = function (val_) {
      return this.$options.filters.minFormat(val_)
    }

    // Null -> 입력값 치환처리
    Vue.prototype.$isNvl = function (val_, defalut_) {
      return this.$options.filters.isNvl(val_, defalut_)
    }

    // Byte 길이
    Vue.prototype.$lengthB = function (val_) {
      return this.$options.filters.lengthB(val_)
    }

    // Byte 길이만큼 내용 자르기
    Vue.prototype.$cut = function (val_, limit_) {
      return this.$options.filters.cut(val_, limit_)
    }

    // Local Storage 저장 
    Vue.prototype.$setL = function (key_, val_) {
      localStorage.setItem(key_, val_)
    }

    // Local Storage 조회
    Vue.prototype.$getL = function (key_) {
      localStorage.getItem(key_)
    }

    // Local Storage 저장 
    Vue.prototype.$setS = function (key_, val_) {
      sessionStorage.setItem(key_, val_)
    }

    // Local Storage 조회
    Vue.prototype.$getS = function (key_) {
      sessionStorage.getItem(key_)
    }
  }
}
