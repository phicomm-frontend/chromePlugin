var app = new Vue({
    el: '#app',
    data: function() {
        return {
            selectType: [
                {
                    value: '1',
                    label: '前端',
                    status: "javascript",
                    class: "fa fa-chrome"
                },
                {
                    value: '2',
                    label: '后台',
                    status: "java",
                    class: "fa fa-database"
                },
                {
                    value: '3',
                    label: 'Android',
                    status: "java",
                    class: "fa fa-android"
                },
                {
                    value: '4',
                    label: 'IOS',
                    status: "swift",
                    class: 'fa fa-apple'
                },
            ],
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
              {value: 'abap', label: 'ABAP'},{value: 'actionscript', label: 'ActionScript'},{value: 'ada', label: 'Ada'},{value: 'agda', label: 'Agda'},{value: 'ags script', label: 'AGS Script'},{value: 'alloy', label: 'Alloy'},{value: 'ampl', label: 'AMPL'},{value: 'antlr', label: 'ANTLR'},{value: 'apacheconf', label: 'ApacheConf'},{value: 'apex', label: 'Apex'},{value: 'api blueprint', label: 'API Blueprint'},{value: 'apl', label: 'APL'},{value: 'applescript', label: 'AppleScript'},{value: 'arc', label: 'Arc'},{value: 'arduino', label: 'Arduino'},{value: 'asp', label: 'ASP'},{value: 'aspectj', label: 'AspectJ'},{value: 'assembly', label: 'Assembly'},{value: 'ats', label: 'ATS'},{value: 'augeas', label: 'Augeas'},{value: 'autohotkey', label: 'AutoHotkey'},{value: 'autoit', label: 'AutoIt'},{value: 'awk', label: 'Awk'},{value: 'batchfile', label: 'Batchfile'},{value: 'befunge', label: 'Befunge'},{value: 'bison', label: 'Bison'},{value: 'bitbake', label: 'BitBake'},{value: 'blitzbasic', label: 'BlitzBasic'},{value: 'blitzmax', label: 'BlitzMax'},{value: 'bluespec', label: 'Bluespec'},{value: 'boo', label: 'Boo'},{value: 'brainfuck', label: 'Brainfuck'},{value: 'brightscript', label: 'Brightscript'},{value: 'bro', label: 'Bro'},{value: 'c', label: 'C'},{value: 'c#', label: 'C#'},{value: 'c++', label: 'C++'},{value: 'capn proto', label: 'Capn Proto'},{value: 'cartocss', label: 'CartoCSS'},{value: 'ceylon', label: 'Ceylon'},{value: 'chapel', label: 'Chapel'},{value: 'charity', label: 'Charity'},{value: 'chuck', label: 'ChucK'},{value: 'cirru', label: 'Cirru'},{value: 'clarion', label: 'Clarion'},{value: 'clean', label: 'Clean'},{value: 'click', label: 'Click'},{value: 'clips', label: 'CLIPS'},{value: 'clojure', label: 'Clojure'},{value: 'cmake', label: 'CMake'},{value: 'cobol', label: 'COBOL'},{value: 'coffeescript', label: 'CoffeeScript'},{value: 'coldfusion', label: 'ColdFusion'},{value: 'common lisp', label: 'Common Lisp'},{value: 'component pascal', label: 'Component Pascal'},{value: 'cool', label: 'Cool'},{value: 'coq', label: 'Coq'},{value: 'crystal', label: 'Crystal'},{value: 'css', label: 'CSS'},{value: 'cucumber', label: 'Cucumber'},{value: 'cuda', label: 'Cuda'},{value: 'cycript', label: 'Cycript'},{value: 'd', label: 'D'},{value: 'darcs patch', label: 'Darcs Patch'},{value: 'dart', label: 'Dart'},{value: 'diff', label: 'Diff'},{value: 'digital command language', label: 'DIGITAL Command Language'},{value: 'dm', label: 'DM'},{value: 'dogescript', label: 'Dogescript'},{value: 'dtrace', label: 'DTrace'},{value: 'dylan', label: 'Dylan'},{value: 'e', label: 'E'},{value: 'eagle', label: 'Eagle'},{value: 'ec', label: 'eC'},{value: 'ecl', label: 'ECL'},{value: 'eiffel', label: 'Eiffel'},{value: 'elixir', label: 'Elixir'},{value: 'elm', label: 'Elm'},{value: 'emacs lisp', label: 'Emacs Lisp'},{value: 'emberscript', label: 'EmberScript'},{value: 'erlang', label: 'Erlang'},{value: 'f#', label: 'F#'},{value: 'factor', label: 'Factor'},{value: 'fancy', label: 'Fancy'},{value: 'fantom', label: 'Fantom'},{value: 'flux', label: 'FLUX'},{value: 'forth', label: 'Forth'},{value: 'fortran', label: 'FORTRAN'},{value: 'freemarker', label: 'FreeMarker'},{value: 'frege', label: 'Frege'},{value: 'game maker language', label: 'Game Maker Language'},{value: 'gams', label: 'GAMS'},{value: 'gap', label: 'GAP'},{value: 'gdscript', label: 'GDScript'},{value: 'genshi', label: 'Genshi'},{value: 'gettext catalog', label: 'Gettext Catalog'},{value: 'glsl', label: 'GLSL'},{value: 'glyph', label: 'Glyph'},{value: 'gnuplot', label: 'Gnuplot'},{value: 'go', label: 'Go'},{value: 'golo', label: 'Golo'},{value: 'gosu', label: 'Gosu'},{value: 'grace', label: 'Grace'},{value: 'grammatical framework', label: 'Grammatical Framework'},{value: 'groff', label: 'Groff'},{value: 'groovy', label: 'Groovy'},{value: 'hack', label: 'Hack'},{value: 'handlebars', label: 'Handlebars'},{value: 'harbour', label: 'Harbour'},{value: 'haskell', label: 'Haskell'},{value: 'haxe', label: 'Haxe'},{value: 'hcl', label: 'HCL'},{value: 'hlsl', label: 'HLSL'},{value: 'html', label: 'HTML'},{value: 'hy', label: 'Hy'},{value: 'hyphy', label: 'HyPhy'},{value: 'idl', label: 'IDL'},{value: 'idris', label: 'Idris'},{value: 'igor pro', label: 'IGOR Pro'},{value: 'inform 7', label: 'Inform 7'},{value: 'inno setup', label: 'Inno Setup'},{value: 'io', label: 'Io'},{value: 'ioke', label: 'Ioke'},{value: 'isabelle', label: 'Isabelle'},{value: 'j', label: 'J'},{value: 'jasmin', label: 'Jasmin'},{value: 'java', label: 'Java'},{value: 'javascript', label: 'JavaScript'},{value: 'jflex', label: 'JFlex'},{value: 'jsoniq', label: 'JSONiq'},{value: 'julia', label: 'Julia'},{value: 'jupyter notebook', label: 'Jupyter Notebook'},{value: 'kicad', label: 'KiCad'},{value: 'kit', label: 'Kit'},{value: 'kotlin', label: 'Kotlin'},{value: 'krl', label: 'KRL'},{value: 'labview', label: 'LabVIEW'},{value: 'lasso', label: 'Lasso'},{value: 'lean', label: 'Lean'},{value: 'lex', label: 'Lex'},{value: 'lilypond', label: 'LilyPond'},{value: 'limbo', label: 'Limbo'},{value: 'liquid', label: 'Liquid'},{value: 'livescript', label: 'LiveScript'},{value: 'llvm', label: 'LLVM'},{value: 'logos', label: 'Logos'},{value: 'logtalk', label: 'Logtalk'},{value: 'lolcode', label: 'LOLCODE'},{value: 'lookml', label: 'LookML'},{value: 'loomscript', label: 'LoomScript'},{value: 'lsl', label: 'LSL'},{value: 'lua', label: 'Lua'},{value: 'm', label: 'M'},{value: 'm4', label: 'M4'},{value: 'makefile', label: 'Makefile'},{value: 'mako', label: 'Mako'},{value: 'markdown', label: 'Markdown'},{value: 'mask', label: 'Mask'},{value: 'mathematica', label: 'Mathematica'},{value: 'matlab', label: 'Matlab'},{value: 'max', label: 'Max'},{value: 'maxscript', label: 'MAXScript'},{value: 'mercury', label: 'Mercury'},{value: 'metal', label: 'Metal'},{value: 'minid', label: 'MiniD'},{value: 'mirah', label: 'Mirah'},{value: 'modelica', label: 'Modelica'},{value: 'modula-2', label: 'Modula-2'},{value: 'module management system', label: 'Module Management System'},{value: 'monkey', label: 'Monkey'},{value: 'moocode', label: 'Moocode'},{value: 'moonscript', label: 'MoonScript'},{value: 'mtml', label: 'MTML'},{value: 'mupad', label: 'mupad'},{value: 'myghty', label: 'Myghty'},{value: 'ncl', label: 'NCL'},{value: 'nemerle', label: 'Nemerle'},{value: 'nesc', label: 'nesC'},{value: 'netlinx', label: 'NetLinx'},{value: 'netlinx+erb', label: 'NetLinx+ERB'},{value: 'netlogo', label: 'NetLogo'},{value: 'newlisp', label: 'NewLisp'},{value: 'nginx', label: 'Nginx'},{value: 'nimrod', label: 'Nimrod'},{value: 'nit', label: 'Nit'},{value: 'nix', label: 'Nix'},{value: 'nsis', label: 'NSIS'},{value: 'nu', label: 'Nu'},{value: 'objective-c', label: 'Objective-C'},{value: 'objective-c++', label: 'Objective-C++'},{value: 'objective-j', label: 'Objective-J'},{value: 'ocaml', label: 'OCaml'},{value: 'omgrofl', label: 'Omgrofl'},{value: 'ooc', label: 'ooc'},{value: 'opa', label: 'Opa'},{value: 'opal', label: 'Opal'},{value: 'openedge abl', label: 'OpenEdge ABL'},{value: 'openscad', label: 'OpenSCAD'},{value: 'ox', label: 'Ox'},{value: 'oxygene', label: 'Oxygene'},{value: 'oz', label: 'Oz'},{value: 'pan', label: 'Pan'},{value: 'papyrus', label: 'Papyrus'},{value: 'parrot', label: 'Parrot'},{value: 'pascal', label: 'Pascal'},{value: 'pawn', label: 'PAWN'},{value: 'perl', label: 'Perl'},{value: 'perl6', label: 'Perl6'},{value: 'php', label: 'PHP'},{value: 'picolisp', label: 'PicoLisp'},{value: 'piglatin', label: 'PigLatin'},{value: 'pike', label: 'Pike'},{value: 'plpgsql', label: 'PLpgSQL'},{value: 'plsql', label: 'PLSQL'},{value: 'pogoscript', label: 'PogoScript'},{value: 'pony', label: 'Pony'},{value: 'postscript', label: 'PostScript'},{value: 'pov-ray sdl', label: 'POV-Ray SDL'},{value: 'powershell', label: 'PowerShell'},{value: 'processing', label: 'Processing'},{value: 'prolog', label: 'Prolog'},{value: 'propeller spin', label: 'Propeller Spin'},{value: 'protocol buffer', label: 'Protocol Buffer'},{value: 'puppet', label: 'Puppet'},{value: 'pure data', label: 'Pure Data'},{value: 'purebasic', label: 'PureBasic'},{value: 'purescript', label: 'PureScript'},{value: 'python', label: 'Python'},{value: 'qmake', label: 'QMake'},{value: 'qml', label: 'QML'},{value: 'r', label: 'R'},{value: 'racket', label: 'Racket'},{value: 'ragel in ruby host', label: 'Ragel in Ruby Host'},{value: 'raml', label: 'RAML'},{value: 'rdoc', label: 'RDoc'},{value: 'realbasic', label: 'REALbasic'},{value: 'rebol', label: 'Rebol'},{value: 'red', label: 'Red'},{value: 'redcode', label: 'Redcode'},{value: 'ren py', label: 'Ren Py'},{value: 'renderscript', label: 'RenderScript'},{value: 'robotframework', label: 'RobotFramework'},{value: 'rouge', label: 'Rouge'},{value: 'ruby', label: 'Ruby'},{value: 'rust', label: 'Rust'},{value: 'saltstack', label: 'SaltStack'},{value: 'sas', label: 'SAS'},{value: 'scala', label: 'Scala'},{value: 'scheme', label: 'Scheme'},{value: 'scilab', label: 'Scilab'},{value: 'self', label: 'Self'},{value: 'shell', label: 'Shell'},{value: 'shellsession', label: 'ShellSession'},{value: 'shen', label: 'Shen'},{value: 'slash', label: 'Slash'},{value: 'smali', label: 'Smali'},{value: 'smalltalk', label: 'Smalltalk'},{value: 'smarty', label: 'Smarty'},{value: 'smt', label: 'SMT'},{value: 'sourcepawn', label: 'SourcePawn'},{value: 'sqf', label: 'SQF'},{value: 'sql', label: 'SQL'},{value: 'sqlpl', label: 'SQLPL'},{value: 'squirrel', label: 'Squirrel'},{value: 'stan', label: 'Stan'},{value: 'standard ml', label: 'Standard ML'},{value: 'stata', label: 'Stata'},{value: 'supercollider', label: 'SuperCollider'},{value: 'systemverilog', label: 'SystemVerilog'},{value: 'swift', label: 'Swift'},{value: 'tcl', label: 'Tcl'},{value: 'tea', label: 'Tea'},{value: 'tex', label: 'TeX'},{value: 'thrift', label: 'Thrift'},{value: 'turing', label: 'Turing'},{value: 'txl', label: 'TXL'},{value: 'typescript', label: 'TypeScript'},{value: 'uno', label: 'Uno'},{value: 'unrealscript', label: 'UnrealScript'},{value: 'urweb', label: 'UrWeb'},{value: 'vala', label: 'Vala'},{value: 'vcl', label: 'VCL'},{value: 'verilog', label: 'Verilog'},{value: 'vhdl', label: 'VHDL'},{value: 'viml', label: 'VimL'},{value: 'visual basic', label: 'Visual Basic'},{value: 'volt', label: 'Volt'},{value: 'vue', label: 'Vue'},{value: 'web ontology language', label: 'Web Ontology Language'},{value: 'webidl', label: 'WebIDL'},{value: 'wisp', label: 'wisp'},{value: 'x10', label: 'X10'},{value: 'xbase', label: 'xBase'},{value: 'xc', label: 'XC'},{value: 'xml', label: 'XML'},{value: 'xojo', label: 'Xojo'},{value: 'xpages', label: 'XPages'},{value: 'xproc', label: 'XProc'},{value: 'xquery', label: 'XQuery'},{value: 'xs', label: 'XS'},{value: 'xslt', label: 'XSLT'},{value: 'xtend', label: 'Xtend'},{value: 'yacc', label: 'Yacc'},{value: 'zephir', label: 'Zephir'},{value: 'zimp', label: 'Zimp'}],
            loading: true,
            tips: "",
            local: "",
            shadow: false,
            dialogVisible: false,
            projectClass: "fa fa-chrome",
            project: localStorage.getItem("projectName") || "1",
            option: '1',
            type: "trending",
            week: "day",
            value: localStorage.getItem("projectPlugin") || "javascript",
            tables: []
        }
    },
    created:function () {
        if (!localStorage.getItem("projectPlugin")) {
            this.dialogVisible = true;
        }
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
        },
        projectChange: function (val) {
            localStorage.setItem("projectName", val);
            if (val == 1) {
                this.projectClass = "fa fa-chrome";
                this.value = "javascript";
            } else if (val == 2) {
                this.projectClass = "fa fa-database";
                this.value = "java";
            } else if (val == 3) {
                this.projectClass = "fa fa-android";
                this.value = "java";
            } else if (val == 4) {
                this.projectClass = "fa fa-apple";
                this.value = "swift";
            }
            localStorage.setItem("projectPlugin", this.value);
            ajax(this,this.param);
        },
        majorChange: function (val) {
            this.project = val.value;
            this.value = val.status;
            localStorage.setItem("projectPlugin", val.status);
            localStorage.setItem("projectName", val.value);
            console.log(this.value)
            ajax(this,this.param);
            this.dialogVisible = false;
        },
        cancel: function () {
            localStorage.setItem("projectPlugin", "javascript");
            localStorage.setItem("projectName", "1");
            this.dialogVisible = false;
        },
        confirm: function () {

        }
    }
});
//点击小三角切换显示隐藏
$("#triangle").unbind("click").click(function(){
  $("#tabs").toggle();
  if($(this).hasClass("selectUp")){
    $(this).removeClass("selectUp").addClass("selectDown");
  }else{
    $(this).removeClass("selectDown").addClass("selectUp");
  }
});

//点击空白处隐藏tabs
// if($("ul").style.display="block"){
//     $(document).click(function(){
//       $("#tabs").hide();
//     })
// }

// 选择谷歌和百度时做的操作
$("li").click(function(){
  if($(this).index()===1) {
    $("#image").attr("src", "images/googlelogo.png");
    $("#baidu-logo").attr("href","http://www.google.com");
    $("#search").hide();
    $("#triangle").removeClass("selectDown").addClass("selectUp");
    $("#tabs").hide();
    $("#google-search").show();
  }else{
    $("#image").attr("src", "https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-26/352f1d243122cf52462a2e6cdcb5ed6d.png");
    $("#search").show();
    $("#triangle").removeClass("selectDown").addClass("selectUp");
    $("#tabs").hide();
    $("#google-search").hide();
  }
});
 function ajax(_this, param) {
     _this.loading = true;
     $.ajax({
         url: "http://api.xitu.io/resources/github",
         type: "post",
         dataType: "json",
         contentType:"application/json",
         data: JSON.stringify(param),
         success: function (data) {
             _this.loading = false;
             _this.tables = data.data;
             if (_this.tables.length > 0) {
                 _this.tips = "已显示全部内容"
             } else {
                 _this.tips = "无数据..."
             }
         },
         error:function (data) {
         },
         complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
         }
     });
 }

