<template>
  <div class="row">
    <div class="col-sm-12">
      <section class="panel">
        <header class="panel-heading">
          填写申请表
        </header>
        <form class="form-horizontal" role="form" id="cusBasic">
          <input type="hidden" id="applicationId" name="applicationId"/>
          <div class="form-group col-md-offset-4" style="margin-top:30px;margin-left:50px;">
            <label for="applyReason" class="col-sm-2 control-label">申请原因</label>
            <div class="col-sm-10" style="width:45%">
              <div class="input-icon right">
                <input name="applyReason" id="applyReason" v-model="applyReason" class="form-control"/>
                <div class="message">${errors.applyReasonError}</div>
              </div>
            </div>
          </div>
          <div class="form-group col-md-offset-4" style="margin-left:50px;height:80px;">
            <label for="applyAmount" class="col-sm-2 control-label">申请金额</label>
            <div class="col-sm-10" style="width:45%">
              <div class="input-icon right">
                <input name="applyAmount" id="applyAmount" v-model="applyAmount" class="form-control"/>
                <div class="message">${errors.applyAmountError}</div>
              </div>
            </div>
          </div>
        </form>
        <div class="col-xs-12 col-md-offset-5 contain">
          <button id="btn_submit" class="btn btn-success" v-on:click="nextStep">下一步</button>
          <button class="btn btn-info" v-on:click="cancel">返回上一步</button>
        </div>
      </section>
    </div>
  </div>
</template>
<style scope>
</style>
<script>
    import QK from '../../QK'
    export default{
      data: function(){
        return {
          errors: {
            applyReasonError: '',
            applyAmountError: ''
          },
          applyReason: '',
          applyAmount: ''
        }
      },
      ready: function () {

      },
      methods: {
         nextStep: function () {
          var that = this
          var id = that.$route.params.appliId
          that.$http.get(QK.SERVER_URL + '/api/application/' + id, true).then(function (data) {
            var data = $.parseJSON(data.body)
            var result = QK.getStateCode(that, data.code)
            if (result.state) {
              var templateId = data.data.product.productApplyTemplateId
              console.log(templateId)
              that.$router.go({path: "/system/application/ipc/" + id + '/' + templateId})
            }
          })
        },
        cancel: function () {
          window.history.back()
        }
      }
    }
</script>
