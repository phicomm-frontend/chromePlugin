var app = new Vue({
    el: '#app',
    data: function() {
        return {
            options: [
                {
                    value: '1',
                    label: 'GitHub'
                }],
            types: [
                {
                    value: 'trending',
                    label: '热门'
                },{
                    value: 'upcome',
                    label: '新生'
                }],
            weeks: [
                {
                    value: 'day',
                    label: '今日'
                },{
                    value: 'week',
                    label: '本周'
                },{
                    value: 'month',
                    label: '本月'
                }],
            datas: [
                {
                    value: 'javascript',
                    label: 'JavaScript'
                },{
                    value: 'css',
                    label: 'CSS'
                },{
                    value: 'html',
                    label: 'HTML'
                },{
                    value: 'typescript',
                    label: 'TypeScript'
                },{
                    value: 'vue',
                    label: 'Vue'
                },{
                    value: 'abap',
                    label: 'ABAP'
                },{
                    value: 'actionscript',
                    label: 'ActionScript'
                },{
                    value: 'c',
                    label: 'C'
                },{
                    value: 'c++',
                    label: 'C++'
                },{
                    value: 'java',
                    label: 'JAVA'
                },{
                    value: 'julia',
                    label: 'Julia'
                },{
                    value: 'kicad',
                    label: 'KiCad'
                }],
            option: '1',
            type: "trending",
            week: "day",
            value: "javascript",
            tables: []
        }
    },
    created:function () {
        ajax(this,this.param);
    },
    computed: {
        param: function () {
            return {
                category: this.type,
                lang: this.value,
                limit: 30,
                offset: 0,
                period: this.week
            };
        }
    },
    methods: {
        jump : function (val) {
            window.open(val, "_blank");
        },
        optionChange: function (val) {
            ajax(this,this.param);
        },
        typeChange: function (val) {
            ajax(this,this.param);
        },
        weekChange: function (val) {
            ajax(this,this.param);
        },
        valueChange: function (val) {
            ajax(this,this.param);
        }
    }
});
 function ajax(_this, param) {
     $.ajax({
         url: "http://api.xitu.io/resources/github",
         type: "post",
         dataType: "json",
         contentType:"application/json",
         data: JSON.stringify(param),
         success: function (data) {
             console.log(data);
             _this.tables = data.data;
         },
         error:function (data) {
         },
         complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
         }
     });
 }

