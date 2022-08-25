'use strict';
function getValue() {
    var e = document.getElementById('input');
    if (!e) return NaN;
    var f = true;
    if (e.validity) { if (e.validity.valid !== true) f = false } else {
        var pt = e.getAttribute('pattern');
        if (pt) {
            if (pt != '') {
                var rx = new RegExp(pt);
                if (!rx.test(e.value)) f = false
            }
        }
    } e.value = e.value.replace(' ', '');
    if (e.value == '') f = false; if (!f) {
        var l = document.getElementById('label');
        if (l) {
            alert(l.innerHTML.replace(':', '.'));
            if (e.focus) e.focus(); if (e.select) e.select()
        } return NaN
    } return parseFloat(e.value.replace(',', ''))
} function getFactor(fs) {
    var u = document.getElementById('unit');
    if (!u) return NaN; if ((u.selectedIndex < 0) || (u.selectedIndex >= fs.length)) return NaN;
    var ft = fs[u.selectedIndex];
    if (ft == 0) return NaN; return ft
} function formatFloat(v, d, p) {
    if (isNaN(v)) return ''; var f = v.toFixed(d).replace(/\.?0*$/, ''); if (((f == '0') && (v != 0)) || (v > 10000000)) f = v.toExponential(p).toUpperCase(); if (isNaN(f)) return '';
    return f
} function convertData() {
    var fs = new Array();
    var e = document.getElementById('factors'); if (e) { fs = e.value.split(',') } convertValue(8, 4, fs)
} function convertValue(d, p, fs) {
    var v = getValue();
    var ft = getFactor(fs);
    for (var i = 0; i < fs.length; i++) {
        var e = document.getElementById('output-' + (i + 1));
        if (e) { var r = NaN; if (!isNaN(ft) && !isNaN(ft)) { r = ((v * fs[i]) / ft) } e.value = formatFloat(r, d, p) }
    }
}