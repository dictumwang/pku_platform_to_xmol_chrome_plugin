function load_plugin() {
    console.log(location.hash);
    if (location.hash == '#/personal/list?query=vueshop%E6%88%91%E7%9A%84%E8%AE%A2%E5%8D%95p') {
        var e_tr;
        var p = setInterval(function () {
            e_tr = $('div.vueshop我的订单list table.el-table__body tr');
            if (e_tr.length != 0) {
                clearInterval(p);
                for (var i = 0; i < e_tr.length; i++) {
                    var e_link = $(e_tr[i]).find('a').attr('href');
                    var link_re = /http:\/\/reagent\.pku\.edu\.cn\/#\/product\/detail\?id=(\d*)/.exec(e_link);
                    $(e_tr[i]).find('td.el-table_1_column_10').append($("<div class='cell el-tooltip' style='width: 68px;'><a size='mini' class='el-link el-link--default is-underline' style='color:#94070a' href='javascript:void(0);' onclick=\"window.open('https://reagent.pku.edu.cn/#/product/detail?id=" + link_re[1] + "&in_storage=1')\">入库</a></div>"));
                }
            }
        }, 1000);
    } else if (/#\/product\/detail\?id=(\d*).*/.test(location.hash)) {
        var load_div = setInterval(function (){
            var div_info = $('div.info');
            if (div_info.length != 0){
                clearInterval(load_div);
                var button_jq = $("<button type='button' class='el-button el-button--primary'>一键入库</button>");
                button_jq.click(submit_info);
                $('div.info').append(button_jq);
                if (location.hash.indexOf('in_storage=1') != -1) {
                    submit_info();
                }
            }
        },1000);
        function submit_info() {
            var e_link_re = /#\/product\/detail\?id=(\d*).*/.exec(location.hash);
            $.post('https://reagent.pku.edu.cn/Jpost', 'query=jk%E4%BA%A7%E5%93%81%E8%AF%A6%E6%83%85&%E4%BA%A7%E5%93%81id=' + e_link_re[1], function (e_item_data) {
                var item_data = JSON.parse(e_item_data).data[0];
                var tempForm = document.createElement("form");
                tempForm.method = "get";
                tempForm.action = 'https://www.x-mol.com/group/leixggroup/iv';
                tempForm.target = "_blank"
                for (var key in item_data) {
                    var hideInput = document.createElement("input");
                    hideInput.type = "hidden";
                    hideInput.name = key;
                    hideInput.value = item_data[key];
                    tempForm.appendChild(hideInput);
                }
                document.body.appendChild(tempForm);
                tempForm.submit();
                document.body.removeChild(tempForm);
                //转到 xmol
                if (location.hash.indexOf('in_storage=1') != -1) {
                    window.close();
                }
            });
        }
    }
}

$(window).bind("load", load_plugin);
$(window).bind("hashchange", load_plugin);

// $(function () {
//     var p = setInterval(function () {
//         if (location.hash == '#/personal/list?query=vueshop%E6%88%91%E7%9A%84%E8%AE%A2%E5%8D%95p') {
//             var e_tr = $('div.vueshop我的订单list table.el-table__body tr');
//             if (e_tr.length != 0) {
//                 clearInterval(p);
//                 clearInterval(q);
//                 for (var i = 0; i < e_tr.length; i++) {
//                     var e_link = $(e_tr[i]).find('a').attr('href');
//                     var link_re = /http:\/\/reagent\.pku\.edu\.cn\/#\/product\/detail\?id=(\d*)/.exec(e_link);
//                     $(e_tr[i]).find('td.el-table_1_column_10').append($("<div class='cell el-tooltip' style='width: 68px;'><a size='mini' class='el-link el-link--default is-underline' style='color:#94070a' href='javascript:void(0);' onclick=\"window.open('https://reagent.pku.edu.cn/#/product/detail?id=" + link_re[1] + "&in_storage=1')\">入库</a></div>"));
//                 }
//             }
//         }
//     }, 1000);
//     var q = setInterval(function () {
//         if (/#\/product\/detail\?id=(\d*).*/.test(location.hash)) {
//             clearInterval(p);
//             clearInterval(q);
//             var button_jq = $("<button type='button' class='el-button el-button--primary'>一键入库</button>");
//             button_jq.click(submit_info);
//             $('div.info').append(button_jq);
//             var e_link_re = /#\/product\/detail\?id=(\d*).*/.exec(location.hash);
//             var item_data;
//             $.post('https://reagent.pku.edu.cn/Jpost', 'query=jk%E4%BA%A7%E5%93%81%E8%AF%A6%E6%83%85&%E4%BA%A7%E5%93%81id=' + e_link_re[1], function (e_item_data) {
//                 item_data = JSON.parse(e_item_data).data[0];
//                 if (location.hash.indexOf('in_storage=1') != -1) {
//                     submit_info();
//                     window.close();
//                 }
//             });
//
//             function submit_info() {
//                 var tempForm = document.createElement("form");
//                 tempForm.method = "get";
//                 tempForm.action = 'https://www.x-mol.com/group/leixggroup/iv';
//                 tempForm.target = "_blank"
//                 for (var key in item_data) {
//                     var hideInput = document.createElement("input");
//                     hideInput.type = "hidden";
//                     hideInput.name = key;
//                     hideInput.value = item_data[key];
//                     tempForm.appendChild(hideInput);
//                 }
//                 document.body.appendChild(tempForm);
//                 tempForm.submit();
//                 document.body.removeChild(tempForm);
//                 //转到 xmol
//             }
//         }
//     }, 1000);
// });
