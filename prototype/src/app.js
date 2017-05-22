Vue.component('modal-join-login', {
  template: `
  <div id="modal-join-login" class="modal">
    <div class="modal-dialog">
      <div class="accordion" id="modal-join-login-accordion">
        <div class="card">
          <a class="card-head" data-toggle="collapse" href="#form-join" data-parent="#modal-join-login-accordion">
            <h4>成為草民</h4>
          </a>
          <div class="card-body collapse show" id="form-join">
            <div class="padding">
              <div class="field d-flex justify-content-between align-items-end"><input type="text" name="id" placeholder="草民代號" /><button class="small">隨機</button></div>
              <div class="field"><input type="email" name="email" placeholder="Email" class="full-width" /></div>
              <div class="field"><input type="password" name="password" placeholder="密碼" class="full-width" /></div>
              <div class="field d-flex justify-content-between align-items-center"><button>註冊</button><label class="form-check-label"><input type="checkbox"><span>我同意使用條款</span></label></div>
            </div>
          </div>
        </div>
        <div class="card dark">
          <a class="card-head" data-toggle="collapse" href="#form-login" data-parent="#modal-join-login-accordion">
            <label class="text-color-park">已經有帳號了？</label>
            <h4>草民登入</h4>
          </a>
          <div class="card-body collapse" id="form-login">
            <div class="padding">
              <div class="field"><input type="text" name="id-or-email" placeholder="草民代號或Email" class="full-width" /></div>
              <div class="field"><input type="password" name="password" placeholder="密碼" class="full-width" /></div>
              <div class="field"><button>登入</button></div>
            </div>
          </div>
        </div>
        <div class="card dark">
          <div class="card-body">
            <div class="padding">
              <label class="text-color-park">你在找Facebook登入嗎？</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
});
var app = new Vue({
  el: '#app',
  methods: {
  },
  data: {
    common: CommonData,
  },
});

$(function() {
  $('#modal-join-login').modal('show');
})
