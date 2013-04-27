/* global define */

define(['jquery', 'datatables'], function ($) {
	'use strict';

	var naturalSort;

	$.fn.dataTableExt.oSort['formatted-num-asc'] = function (x,y) {
		x = x.replace(/[^\d\-\.\/]/g,'');
		y = y.replace(/[^\d\-\.\/]/g,'');
		x.split('/').reduce(function (lhs, rhs) { return lhs/rhs; });
		y.split('/').reduce(function (lhs, rhs) { return lhs/rhs; });
		return x/1 - y/1;
	};

	$.fn.dataTableExt.oSort['formatted-num-desc'] = function (x,y) {
		x = x.replace(/[^\d\-\.\/]/g,'');
		y = y.replace(/[^\d\-\.\/]/g,'');
		x.split('/').reduce(function (lhs, rhs) { return lhs/rhs; });
		y.split('/').reduce(function (lhs, rhs) { return lhs/rhs; });
		return y/1 - x/1;
	};

	$.fn.dataTableExt.oSort['natural-asc']  = function (a,b) {
		return naturalSort(a,b);
	};

	$.fn.dataTableExt.oSort['natural-desc'] = function (a,b) {
		return naturalSort(a,b) * -1;
	};

});
