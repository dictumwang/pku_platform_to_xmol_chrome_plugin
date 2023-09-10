function getQueryString(name) {
    name = encodeURIComponent(name);
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}
$(window).bind("load", function () {
    // console.log(xmol);
    if (getQueryString('产品id')) {
        $('#ivSearchForm > div > div.col-md-5 > a:nth-child(1)')[0].click();
        var runcheck = setInterval(function () {
            if ($('input[name=cas]').length != 0) {
                clearInterval(runcheck);
                $('input[name=cas]').val(getQueryString('casno'));
                $('input[name=brand]').val(getQueryString('品牌'));
                $('input[name=supplier]').val(getQueryString('供货商名称'));
                $('input[name=purity]').val(getQueryString('纯度'));
                $('input[name=specificationUnit]').val(getQueryString('包装规格'));
                $('input[name=category]').val(getQueryString('产品分类'));
                $('input[name=code]').val(getQueryString('货号'));
                $('input[name=price]').val(getQueryString('单价'));
                setTimeout(function (){
                    $('input[name=nameZh]').val(getQueryString('中文品名'));
                    $('input[name=nameEn]').val(getQueryString('英文品名'));
                },300);
            }
        }, 200);
    }
})
