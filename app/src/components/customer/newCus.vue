<style scoped src='../../../static/js/select2/css/select2.min.css'></style>
<style scoped src='../../../static/js/select2/css/select2-bootstrap.min.css'></style>
<template>
  <div class="row">
    <div class="col-sm-12">
      <section class="panel">
        <header class="panel-heading">
          <i class="fa fa-th-list"></i>
          填写个人客户信息
        </header>
        <div class="panel-body">
          <div class="table-responsive">
            <form id="form_customer_new" @submit.prevent="handleSubmit">
              <!--<template v-for="dropDown in dropDownList">-->
              <div class="col-md-2"></div>
              <div class="form-group col-md-3 col-sm-6 col-xs-12">
                <label for="cname">客户名称</label>
                <div class="input-icon right">
                  <input id="cname" type="text" class="form-control" name="cname" v-model="tCustomerBasic.cname"
                         placeholder="请输入至少2-10位汉字">
                  <div class="message">${errors.cnameError}</div>
                </div>
              </div>
              <div class="form-group col-md-3 col-md-offset-2 col-sm-6 col-xs-12">
                <label for="sex">性别</label>
                <div class="input-icon right">
                  <select id="sex" type="text" name="sex" class="form-control" v-model="tCustomerBasic.sex">
                    <option value="0" v-if="tCustomerBasic.sex==0" selected>男</option>
                    <option value="0" v-else>男</option>
                    <option value="1" v-if="tCustomerBasic.sex==1" selected>女</option>
                    <option value="1" v-else>女</option>
                  </select>
                  <div class="message">${errors.sexError}</div>
                </div>
              </div>

              <div class="form-group col-md-3 col-md-offset-2 col-sm-6 col-xs-12">
                <label for="certificateType">证件类型</label>
                <div class="input-icon right">
                  <select id="certificateType" type="text" name="certificateType" class="form-control" v-model="tCustomerBasic.certificateType">
                    <template v-for="cert in certificate">
                      <option  value="${cert.id}" checked>${cert.value}</option>
                    </template>
                  </select>
                  <div class="message">${errors.certificateTypeError}</div>
                </div>
              </div>

              <div class="col-md-2"></div>
              <div  id="idNumberDiv" class="form-group col-md-3  col-sm-6 col-xs-12">
                <label for="certificateNumber">证件号码</label>
                <div class="input-icon right">
                  <input data-error="${idNumberError}" id="certificateNumber" type="text" class="form-control idNumber"
                         name="certificateNumber" v-model="tCustomerBasic.certificateNumber" placeholder="请输入有效证件号码" v-on:change="idNumberCheck()">
                  <div class="message">${errors.certificateNumberError}</div>
                </div>
              </div>


              <div class="form-group col-md-3  col-md-offset-2 col-sm-6 col-xs-12">
                <label for="tel">联系方式</label>
                <div class="input-icon right">
                  <input data-error="${telError}" id="tel" type="text" class="form-control" name="tel" v-model="tCustomerBasic.tel" placeholder="请输入正确的手机号码">
                  <div class="message">${errors.telError}</div>
                </div>
              </div>

              <div class="form-group col-md-8 col-md-offset-2 col-sm-6 col-xs-12">
                <label for="homeAddress">家庭住址</label>
                <div class="input-icon right">
                  <input id="homeAddress" type="text" class="form-control" name="homeAddress" v-model="tCustomerBasic.homeAddress" placeholder="请输入有效地址">
                  <div class="message">${errors.homeAddressError}</div>
                </div>
              </div>

              <div class="form-group col-md-8 col-md-offset-2 col-sm-6 col-xs-12">
                <label for="industry">所属行业</label>
                <div class="input-icon right">
                  <select id="industry" name="industry" v-model="industry" class="form-control select2-multiple" multiple>
                    <template v-for="industries in customerIndustry">
                      <option  value="${industries.id}">${industries.industryName}</option>
                    </template>
                  </select>
                  <div class="message">${errors.industryError}</div>
                </div>
              </div>

              <div class="form-group col-md-3  col-md-offset-2 col-sm-6 col-xs-12">
                <label for="marriageStatus">婚姻状况</label>
                <div class="input-icon right">
                  <select id="marriageStatus" type="text" name="marriageStatus" v-model="tCustomerBasic.marriageStatus" class="form-control">
                    <template v-for="marriageStatus in marriage">
                      <option  value="${marriageStatus.id}" checked>${marriageStatus.value}</option>
                    </template>
                  </select>
                  <div class="message">${errors.marriageError}</div>
                </div>
              </div>
              <div class="form-group col-md-3 col-md-offset-2 col-sm-6 col-xs-12">
                <label for="educationDegree">文化程度</label>
                <div class="input-icon right">
                  <select id="educationDegree" type="text" class="form-control" name="educationDegree" v-model="tCustomerBasic.educationDegree">
                    <template v-for="educationDegree in education">
                      <option value="${educationDegree.id}" checked>${educationDegree.value}</option>
                    </template>
                  </select>
                  <div class="message">${errors.eductionError}</div>
                </div>
              </div>
              <div class="col-xs-12 col-md-offset-5 contain" style="margin-top: 50px;">
                <button id="btn_submit" class="btn btn-success">确定</button>
                <a @click="cancelMethod()" class="btn btn-default">取消</a>
              </div>
              <!--</template>-->
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
  .message{
      color:#a94442;
      height:20px;
  }
   .select2.select2-container.select2-container--bootstrap {
        width: 85%
    }
</style>
<script>
    import QK from '../../QK'
    import selsect2 from 'select2'
    import jQueryValidation from 'jquery-validation'
    export default{
        data:function(){
            return {
                industry:['',''],
                tCustomerBasic: {
                  cname: '',
                  sex: '',
                  certificateType: '0',
                  certificateNumber: '',
                  tel: '',
                  homeAddress: '',
                  marriageStatus: '0',
                  educationDegree: '0',
                  customerType: 0,
                },
                certificate:[],
                marriage:[],
                education:[],
                customerIndustry:[],
                errors:{
                    cnameError: '',
                    sexError: '',
                    certificateTypeError: '',
                    telError: '',
                    homeAddressError: '',
                    marriageError: '',
                    eductionError: '',
                    industryError: '',
                    certificateNumberError: ''
                }
            }
        },
        ready:function(){
            QK.addMethod()
            this.ComponentsSelect2()
            this.searchId()
            this.industries()
        },
        methods:{
            handleSubmit () {
                var that = this
                var bool = QK.formValidation({
                    id: "#form_customer_new",
                    rulesMap: {
                        cname: {required: !0, isChinese: !0},
                        sex: {required: !0},
                        certificateType: {required: !0,downList: !0},
                        certificateNumber: {required: !0, isIdCardNo: !0},
                        homeAddress: {required: !0, isHomeAddress: !0},
                        tel: {required: !0, tel: !0},
                        marriageStatus: {required: !0, downList: !0},
                        educationDegree: {required: !0,downList: !0},
                        industry: {required: !0}
                    }
                })
                //验证结果  true  false
                if (bool) {
                //发送请求
                    var tCustomerBasic = that.tCustomerBasic
                    var industry = that.industry
                    industry = $("#industry").val().join(",")
                    that.$http.post(QK.SERVER_URL+'/api/customerBasic',{
                        cname: that.tCustomerBasic.cname,
                        sex: that.tCustomerBasic.sex,
                        certificateType: that.tCustomerBasic.certificateType,
                        certificateNumber: that.tCustomerBasic.certificateNumber,
                        tel: that.tCustomerBasic.tel,
                        homeAddress: that.tCustomerBasic.homeAddress,
                        marriageStatus: that.tCustomerBasic.marriageStatus,
                        educationDegree: that.tCustomerBasic.educationDegree,
                        industry:industry,
                        customerType:that.tCustomerBasic.customerType
                    },true).then(function (data) {
                        var data = jQuery.parseJSON(data.body)
                        var result = QK.getStateCode(that, data.code)
                        if (result.state) {
                            swal({
                                title: "创建成功!",
                                text: "",
                                confirmButtonColor: "#66BB6A",
                                type: "success",
                                confirmButtonText : '确定'
                            },
                            function(){
                              that.$router.go({path:"/system/customer/list"})
                            })
                        }else{
                            swal({
                                title: "创建失败！",
                                text: result.msg+"！",
                                confirmButtonColor: "#EF5350",
                                type: "error",
                                confirmButtonText : '确定'
                             })
                        }
                    })
                }
                return false
            },
            ComponentsSelect2: function () {
                function e(e) {
                    if (e.loading)return e.text;
                    var t = "<div class='select2-result-repository clearfix'><div class='select2-result-repository__avatar'><img src='" + e.owner.avatar_url + "' /></div><div class='select2-result-repository__meta'><div class='select2-result-repository__title'>" + e.full_name + "</div>";
                    return e.description && (t += "<div class='select2-result-repository__description'>" + e.description + "</div>"), t += "<div class='select2-result-repository__statistics'><div class='select2-result-repository__forks'><span class='glyphicon glyphicon-flash'></span> " + e.forks_count + " Forks</div><div class='select2-result-repository__stargazers'><span class='glyphicon glyphicon-star'></span> " + e.stargazers_count + " Stars</div><div class='select2-result-repository__watchers'><span class='glyphicon glyphicon-eye-open'></span> " + e.watchers_count + " Watchers</div></div></div></div>"
                }
                function t(e) {
                    return e.full_name || e.text
                }
                $.fn.select2.defaults.set("theme", "bootstrap");
                var s = "请选择";
                $(".select2, .select2-multiple").select2({
                    placeholder: s,
                    width: null
                }), $(".select2-allow-clear").select2({
                    allowClear: !0,
                    placeholder: s,
                    width: null
                }), $(".js-data-example-ajax").select2({
                    width: "off",
                    ajax: {
                        url: "https://api.github.com/search/repositories",
                        dataType: "json",
                        delay: 250,
                        data: function (e) {
                            return {q: e.term, page: e.page}
                        },
                        processResults: function (e, t) {
                            return {results: e.items}
                        },
                        cache: !0
                    },
                    escapeMarkup: function (e) {
                        return e
                    },
                    minimumInputLength: 1,
                    templateResult: e,
                    templateSelection: t
                }), $("button[data-select2-open]").click(function () {
                    $("#" + $(this).data("select2-open")).select2("open")
                }), $(":checkbox").on("click", function () {
                    $(this).parent().nextAll("select").prop("disabled", !this.checked)
                }), $(".select2, .select2-multiple, .select2-allow-clear, .js-data-example-ajax").on("select2:open", function () {
                    if ($(this).parents("[class*='has-']").length)for (var e = $(this).parents("[class*='has-']")[0].className.split(/\s+/), t = 0; t < e.length; ++t)e[t].match("has-") && $("body > .select2-container").addClass(e[t])
                }), $(".js-btn-set-scaling-classes").on("click", function () {
                    $("#select2-multiple-input-sm, #select2-single-input-sm").next(".select2-container--bootstrap").addClass("input-sm"), $("#select2-multiple-input-lg, #select2-single-input-lg").next(".select2-container--bootstrap").addClass("input-lg"), $(this).removeClass("btn-primary btn-outline").prop("disabled", !0)
                })
            },
            searchId: function() {
                var that = this;
                that.$http.get(QK.SERVER_URL+'/api/customerBasic/allStatus', true).then(function (data) {
                    var data = $.parseJSON(data.body)
                    var result = QK.getStateCode(that, data.code)
                    if (result.state) {
                      that.$set("certificate", data.data.cert)
                      that.$set("marriage", data.data.marriageStatus)
                      that.$set("education", data.data.educationDegree)
                    }
                })
            },
            industries:function() {
                var that = this
                that.$http.get(QK.SERVER_URL+'/api/customerIndustry', true).then(function (data) {
                    var data = $.parseJSON(data.body)
                    var result = QK.getStateCode(that, data.code)
                    if (result.state) {
                      that.$set("customerIndustry", data.data)
                    }
                })
            },
            idNumberCheck: function() {
                var that = this
                var idCard = that.tCustomerBasic.certificateNumber+''
                var len = idCard.length
                var msg3 = "该证件号码已存在！"
                var msg4 = "证件可用"
                var msg5 = "身份证长度不够！"
                if (len < 14) {
                    QK.messageFun($("#idNumberDiv"),msg5)
                }else {
                    this.$http.get(QK.SERVER_URL+'/api/customerBasic/idCardExist?identityCard='+idCard,true).then(function (res) {
                        var data = jQuery.parseJSON(res.body)
                        var result = QK.getStateCode(that, data.code)
                        if (result.state) {
                            if(data.data){
                                QK.messageFun($("#idNumberDiv"),msg3)
                            }else{
                                $("#idNumberDiv").find("div.message").css("color", "#3c763d").html(msg4)
                                $("#idNumberDiv").find("input").css("border-color","#3c763d")
                                $("#btn_submit").removeAttr("disabled")
                            }
                        }else{
                            QK.messageFun($("#idNumberDiv"),result.msg)
                        }
                    })
                }
            },
            cancelMethod:function(){
                this.$router.go({path:localStorage.nowurl})
            },
        }
    }
</script>
