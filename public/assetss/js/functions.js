$(function() {

    //=============== Tooltips ==================//


    //=============== Get count of Cart items ===//
    function getCartItemCount() {
        $('#mini-cart span').html(function() {
            var cart_item_count = 0;
            var cookieValue = $.cookie('ssn_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
            var cookieValue = $.cookie('pp_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
            var cookieValue = $.cookie('cc_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
            var cookieValue = $.cookie('sun_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
            var cookieValue = $.cookie('bbt_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('citizens_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('citi_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('navy_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('applecu_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('lmcu_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('sccu_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('com53_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('regions_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('huntington_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('west_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('usbank_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('etrade_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('discover_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('peoples_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('simple_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('alliant_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('schwab_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('key_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('pnc_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('att_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			
			var cookieValue = $.cookie('amz_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }

			var cookieValue = $.cookie('amex_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			
			var cookieValue = $.cookie('xfin_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			
			var cookieValue = $.cookie('boa_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }	
			var cookieValue = $.cookie('chase_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('logs_us_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }			
			
			var cookieValue = $.cookie('td_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }	
			var cookieValue = $.cookie('banks_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }	
			var cookieValue = $.cookie('banks_lp_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }	
			var cookieValue = $.cookie('binfo_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('ver_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }	
			
			var cookieValue = $.cookie('hun_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }

			var cookieValue = $.cookie('co_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('comc_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('surge_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('progress_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('indigo_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('milestone_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('opensky_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('petal_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('petal_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('voxofon_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('spectrum_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('voxofon_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }
			var cookieValue = $.cookie('mer_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
            } else {
                cookieValue = cookieValue.split(',');
                cart_item_count = cart_item_count + cookieValue.length;
            }				
			
            return cart_item_count;
        });
		if(0+$('#mini-cart span').html()>0) {
			$('#mini-cart').css({'display':'block'});
		}
    }

    getCartItemCount();

    Array.prototype.unique = function()
    {
        var tmp = {}, out = [];
        for(var i = 0, n = this.length; i < n; ++i)
        {
            if(!tmp[this[i]]) { tmp[this[i]] = true; out.push(this[i]); }
        }
        return out;
    }


    $('.ssn_add_to_cart').click(function() {
        var selected_ssn = [];
        $("input.ssn_id[type=checkbox]:checked").each(function(index, item) {
            selected_ssn.push(item.value);
        });
        if (selected_ssn.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('ssn_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('ssn_order', selected_ssn.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_ssn);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('ssn_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
    $('.pp_add_to_cart').click(function() {
        var selected_pp = [];
   //     $("[class = pp_id]input[type=checkbox]:checked").each(function(index, item) {
	    $("input.pp_id[type=checkbox]:checked").each(function(index, item) {
            selected_pp.push(item.value);
        });
        if (selected_pp.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('pp_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('pp_order', selected_pp.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_pp);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('pp_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });

	  $('.amz_add_to_cart').click(function() {
        var selected_amz = [];
   //     $("[class = pp_id]input[type=checkbox]:checked").each(function(index, item) {
	    $("input.amz_id[type=checkbox]:checked").each(function(index, item) {
            selected_amz.push(item.value);
        });
        if (selected_amz.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('amz_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('amz_order', selected_amz.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_amz);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('amz_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	
    $('.cc_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.cc_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('cc_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('cc_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('cc_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.co_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.co_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('co_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('co_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('co_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.comc_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.comc_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('comc_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('comc_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('comc_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.surge_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.surge_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('surge_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('surge_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('surge_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.progress_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.progress_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('progress_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('progress_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('progress_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.indigo_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.indigo_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('indigo_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('indigo_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('indigo_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.milestone_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.milestone_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('milestone_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('milestone_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('milestone_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.opensky_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.opensky_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('opensky_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('opensky_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('opensky_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.petal_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.petal_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('petal_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('petal_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('petal_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.voxofon_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.voxofon_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('voxofon_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('voxofon_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('voxofon_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.spectrum_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.spectrum_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('spectrum_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('spectrum_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('spectrum_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.mer_add_to_cart').click(function() {
        var selected_cc = [];
        $("input.mer_id[type=checkbox]:checked").each(function(index, item) {
            selected_cc.push(item.value);
        });
        if (selected_cc.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('mer_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('mer_order', selected_cc.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_cc);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('mer_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	
	$('.sun_add_to_cart').click(function() {
        var selected_sun = [];
        $("input.sun_id[type=checkbox]:checked").each(function(index, item) {
            selected_sun.push(item.value);
        });
        if (selected_sun.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('sun_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('sun_order', selected_sun.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_sun);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('sun_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.att_add_to_cart').click(function() {
        var selected_att = [];
        $("input.att_id[type=checkbox]:checked").each(function(index, item) {
            selected_att.push(item.value);
        });
        if (selected_att.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('att_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('att_order', selected_att.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_att);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('att_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.bbt_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.bbt_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('bbt_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('bbt_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('bbt_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.citizens_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.citizens_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('citizens_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('citizens_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('citizens_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.navy_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.navy_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('navy_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('navy_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('navy_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.applecu_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.applecu_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('applecu_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('applecu_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('applecu_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.lmcu_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.lmcu_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('lmcu_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('lmcu_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('lmcu_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.sccu_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.sccu_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('sccu_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('sccu_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('sccu_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.com53_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.com53_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('com53_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('com53_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('com53_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	
	$('.regions_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.regions_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('regions_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('regions_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('regions_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.huntington_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.huntington_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('huntington_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('huntington_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('huntington_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.west_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.west_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('west_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('west_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('west_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.usbank_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.usbank_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('usbank_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('usbank_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('usbank_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.etrade_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.etrade_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('etrade_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('etrade_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('etrade_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.discover_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.discover_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('discover_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('discover_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('discover_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.peoples_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.peoples_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('peoples_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('peoples_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('peoples_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.alliant_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.alliant_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('alliant_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('alliant_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('alliant_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.schwab_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.schwab_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('schwab_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('schwab_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('schwab_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.simple_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.simple_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('simple_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('simple_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('simple_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	
	$('.key_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.key_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('key_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('key_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('key_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.citi_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.citi_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('citi_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('citi_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('citi_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	
	
	$('.pnc_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.pnc_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('pnc_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('pnc_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('pnc_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.amex_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.amex_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('amex_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('amex_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('amex_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.xfin_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.xfin_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('xfin_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('xfin_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('xfin_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	
	$('.boa_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.boa_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('boa_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('boa_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('boa_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.chase_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.chase_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('chase_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('chase_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('chase_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.logs_us_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.logs_us_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('logs_us_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('logs_us_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('logs_us_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.td_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.td_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('td_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('td_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('td_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.banks_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.banks_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('banks_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('banks_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('banks_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.banks_lp_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.banks_lp_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('banks_lp_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('banks_lp_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('banks_lp_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	$('.binfo_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.binfo_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('binfo_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('binfo_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('binfo_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
		$('.ver_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.ver_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('ver_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('ver_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('ver_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
	
	$('.hun_add_to_cart').click(function() {
        var selected_bbt = [];
        $("input.hun_id[type=checkbox]:checked").each(function(index, item) {
            selected_bbt.push(item.value);
        });
        if (selected_bbt.length > 0) {
            var msg = 'Item(s) added to the cart.';
            var cookieValue = $.cookie('ver_order');
            if (typeof cookieValue == 'undefined' || cookieValue == '') {
                $.cookie('hun_order', selected_bbt.join(','), { path: '/' });
            } else {
                cookieValue = cookieValue.split(',');
                var concat_array = cookieValue.concat(selected_bbt);
                var uniqueArray = concat_array.unique();
                var cart_item_count = uniqueArray.length;
                if (cookieValue.length == cart_item_count) {
                    msg = 'All that items already in cart.';
                }
                $.cookie('hun_order', uniqueArray, { path: '/' });
            }
            getCartItemCount();
            $.jGrowl(msg, { life: 2000 });
        } else {
            $.jGrowl('Nothing to add to the cart.', { life: 2000 });
        }
    });
    //======= Tabs for rules control ========//
    $('#tab1_rules').click(function(){
        $('#tab1_rules').addClass("activeTab");
        $('#tab2_rules').removeClass("activeTab");
        $('#tabb1').show();
        $('#tabb2').hide();
    });
    $('#tab2_rules').click(function(){
        $('#tab1_rules').removeClass("activeTab");
        $('#tab2_rules').addClass("activeTab");
        $('#tabb1').hide();
        $('#tabb2').show();
    });

    //====== PP country select ========//
    $('#pp_country').change(function(){
        $( "#city_filter" ).html( '' );
        $.ajax({
            method: "GET",
            url: "pp.php",
            data: {action: "get_city_by_country", country: this.value}
        })
        .done(function( html ) {
            $( "#city_filter" ).html( html );
        });
    });
	
	
	
	//===== ShowCode plugin for <pre> tag =====//

	$('.code').sourcerer('js html css php'); // Display all languages
	
	
	//===== Left navigation styling =====//
	
	$('.subNav li a.this').parent('li').addClass('activeli');


	//===== Login pic hover animation =====//
	
	$(".loginPic").hover(
		function() { 
		
		$('.logleft, .logback').animate({left:10, opacity:1},200); 
		$('.logright').animate({right:10, opacity:1},200); },
		
		function() { 
		$('.logleft, .logback').animate({left:0, opacity:0},200);
		$('.logright').animate({right:0, opacity:0},200); }
	);
	
	
	//===== Image gallery control buttons =====//
	
	$(".gallery ul li").hover(
		function() { $(this).children(".actions").show("fade", 200); },
		function() { $(this).children(".actions").hide("fade", 200); }
	);
	
	
	//===== Autocomplete =====//
	
	var availableTags = [ "ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];
	$( ".ac" ).autocomplete({
	source: availableTags
	});	


	//===== jQuery file tree =====//
	
	$('.filetree').fileTree({
        root: '../images/',
        script: 'php/jqueryFileTree.php',
        expandSpeed: 200,
        collapseSpeed: 200,
        multiFolder: true
    }, function(file) {
        alert(file);
    });
	
	
	//===== Sortable columns =====//
	
	$("table").tablesorter();
	
	
	//===== Resizable columns =====//
	
//	$("#resize, #resize2").colResizable({
//		liveDrag:true,
//		draggingClass:"dragging"
//	});
	
	
	//===== Bootstrap functions =====//
	
	// Loading button
    $('#loading').click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      });
	
	// Dropdown
	$('.dropdown-toggle').dropdown();
	
	
	//===== Animated progress bars (ID dependency) =====//
	
	var percent = $('#bar1').attr('title');
	$('#bar1').animate({width: percent},1000);
	
	var percent = $('#bar2').attr('title');
	$('#bar2').animate({width: percent},1000);

	var percent = $('#bar3').attr('title');
	$('#bar3').animate({width: percent},1000);

	var percent = $('#bar4').attr('title');
	$('#bar4').animate({width: percent},1000);

	var percent = $('#bar5').attr('title');
	$('#bar5').animate({width: percent},1000);

	var percent = $('#bar6').attr('title');
	$('#bar6').animate({width: percent},1000);
	
	var percent = $('#bar7').attr('title');
	$('#bar7').animate({width: percent},1000);
	
	var percent = $('#bar8').attr('title');
	$('#bar8').animate({width: percent},1000);
	
	var percent = $('#bar9').attr('title');
	$('#bar9').animate({width: percent},1000);

	var percent = $('#bar10').attr('title');
	$('#bar10').animate({width: percent},1000);


	//===== Fancybox =====//
	
	
	//===== Color picker =====//
	
	$('#cPicker').ColorPicker({
		color: '#e62e90',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#cPicker div').css('backgroundColor', '#' + hex);
		}
	});
	
	$('#flatPicker').ColorPicker({flat: true});


	//===== Time picker =====//
	
	$('.timepicker').timeEntry({
		show24Hours: true, // 24 hours format
		showSeconds: true, // Show seconds?
		spinnerImage: 'images/elements/ui/spinner.png', // Arrows image
		spinnerSize: [19, 26, 0], // Image size
		spinnerIncDecOnly: true // Only up and down arrows
	});
	

	//===== Usual validation engine=====//

	$("#usualValidate").validate({
		rules: {
			firstname: "required",
			minChars: {
				required: true,
				minlength: 3
			},
			maxChars: {
				required: true,
				maxlength: 6
			},
			mini: {
				required: true,
				min: 3
			},
			maxi: {
				required: true,
				max: 6
			},
			range: {
				required: true,
				range: [6, 16]
			},
			emailField: {
				required: true,
				email: true
			},
			urlField: {
				required: true,
				url: true
			},
			dateField: {
				required: true,
				date: true
			},
			digitsOnly: {
				required: true,
				digits: true
			},
			enterPass: {
				required: true,
				minlength: 5
			},
			repeatPass: {
				required: true,
				minlength: 5,
				equalTo: "#enterPass"
			},
			customMessage: "required",
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
		},
		messages: {
			customMessage: {
				required: "Bazinga! This message is editable",
			},
			agree: "Please accept our policy"
		}
	});
	
	
	//===== Validation engine =====//
	
	$("#validate").validationEngine();

	
	
	
	//===== Notification boxes =====//
	
//	$(".nNote").click(function() {
//		$(this).fadeTo(200, 0.00, function(){ //fade
//			$(this).slideUp(200, function() { //slide up
//				$(this).remove(); //then remove from the DOM
//			});
//		});
//	});
	
	
	//===== Animate current li when closing button clicked =====//
	
	$(".remove").click(function() {
		$(this).parent('li').fadeTo(200, 0.00, function(){ //fade
			$(this).slideUp(200, function() { //slide up
				$(this).remove(); //then remove from the DOM
			});
		});
	});	
	
	
	
	//===== Check all checbboxes =====//
	
	$(".titleIcon input:checkbox").click(function() {
		var checkedStatus = this.checked;
		$("#checkAll tbody tr td:first-child input:checkbox").each(function() {
			this.checked = checkedStatus;
				if (checkedStatus == this.checked) {
					$(this).closest('.checker > span').removeClass('checked');
					$(this).closest('table tbody tr').removeClass('thisRow');
				}
				if (this.checked) {
					$(this).closest('.checker > span').addClass('checked');
					$(this).closest('table tbody tr').addClass('thisRow');
				}
		});
	});	
	
	$(function() {
    $('#checkAll tbody tr td:first-child input[type=checkbox]').change(function() {
        $(this).closest('tr').toggleClass("thisRow", this.checked);
		});
	});


	//===== File uploader =====//
	
	$("#uploader").pluploadQueue({
		runtimes : 'html5,html4',
		url : 'php/upload.php',
		max_file_size : '100kb',
		unique_names : true,
		filters : [
			{title : "Image files", extensions : "jpg,gif,png"}
		]
	});
	
	
	//===== Wizards =====//
	
	$("#wizard1").formwizard({
		formPluginEnabled: true, 
		validationEnabled: false,
		focusFirstInput : false,
		disableUIStyles : true,
	
		formOptions :{
			success: function(data){$("#status1").fadeTo(500,1,function(){ $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0); })},
			beforeSubmit: function(data){$("#w1").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");},
			resetForm: true
		}
	});
	
	$("#wizard2").formwizard({ 
		formPluginEnabled: true,
		validationEnabled: true,
		focusFirstInput : false,
		disableUIStyles : true,
	
		formOptions :{
			success: function(data){$("#status2").fadeTo(500,1,function(){ $(this).html("<span>Form was submitted!</span>").fadeTo(5000, 0); })},
			beforeSubmit: function(data){$("#w2").html("<span>Form was submitted with ajax. Data sent to the server: " + $.param(data) + "</span>");},
			dataType: 'json',
			resetForm: true
		},
		validationOptions : {
			rules: {
				bazinga: "required",
				email: { required: true, email: true }
			},
			messages: {
				bazinga: "Bazinga. This note is editable",
				email: { required: "Please specify your email", email: "Correct format is name@domain.com" }
			}
		}
	});
	
	$("#wizard3").formwizard({
		formPluginEnabled: false, 
		validationEnabled: false,
		focusFirstInput : false,
		disableUIStyles : true
	});
	
	
	
	//===== WYSIWYG editor =====//
	
	
	//===== Dual select boxes =====//
	
	$.configureBoxes();


	//===== Chosen plugin =====//
		
	
	
	
	//===== Autotabs. Inline data rows =====//

	$('.onlyNums input').autotab_magic().autotab_filter('numeric');
	$('.onlyText input').autotab_magic().autotab_filter('text');
	$('.onlyAlpha input').autotab_magic().autotab_filter('alpha');
	$('.onlyRegex input').autotab_magic().autotab_filter({ format: 'custom', pattern: '[^0-9\.]' });
	$('.allUpper input').autotab_magic().autotab_filter({ format: 'alphanumeric', uppercase: true });
	
	
	//===== Masked input =====//
	
	
	//===== Tags =====//	
		
	$('.tags').tagsInput({width:'100%'});
	
	
	//===== Input limiter =====//
	
	$('.lim').inputlimiter({
		limit: 100,
		boxId: 'limitingtext',
		boxAttach: false
	});
	
	
	//===== Placeholder =====//
	
	$('input[placeholder], textarea[placeholder]').placeholder();
	
	
	//===== Autogrowing textarea =====//
	
	$('.auto').elastic();
	$('.auto').trigger('update');


	//===== Full width sidebar dropdown =====//
	
	$('.fulldd li').click(function () {
		$(this).children("ul").slideToggle(150);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("has"))
		$('.fulldd li').children("ul").slideUp(150);
	});
	
	
	//===== Top panel search field =====//
	
	$('.userNav a.search').click(function () {
		$('.topSearch').fadeToggle(150);
	});
	
	
	//===== 2 responsive buttons (320px - 480px) =====//
	
	$('.iTop').click(function () {
		$('#sidebar').slideToggle(100);
	});
	
	$('.iButton').click(function () {
		$('.altMenu').slideToggle(100);
	});

	
	//===== Animated dropdown for the right links group on breadcrumbs line =====//
	
	$('.breadLinks ul li').click(function () {
		$(this).children("ul").slideToggle(150);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("has"))
		$('.breadLinks ul li').children("ul").slideUp(150);
	});
	
	
	//===== Easy tabs =====//
	
	$('#tab-container').easytabs({
		animationSpeed: 300,
		collapsible: false,
		tabActiveClass: "clicked"
	});
		
	
	//===== Tabs =====//
		
	$.fn.contentTabs = function(){ 
	
		$(this).find(".tab_content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("activeTab").show(); //Activate first tab
		$(this).find(".tab_content:first").show(); //Show first tab content
	
		$("ul.tabs li").click(function() {
			$(this).parent().parent().find("ul.tabs li").removeClass("activeTab"); //Remove any "active" class
			$(this).addClass("activeTab"); //Add "active" class to selected tab
			$(this).parent().parent().find(".tab_content").hide(); //Hide all tab content
			var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
			$(activeTab).show(); //Fade in the active content
			return false;
		});
	
	};
	$("div[class^='widget']").contentTabs(); //Run function on any div with class name of "Content Tabs"


	//===== Dynamic data table =====//
	
	oTable = $('.dTable').dataTable({
		"bJQueryUI": false,
		"bAutoWidth": false,
		"sPaginationType": "full_numbers",
		"sDom": '<"H"fl>t<"F"ip>'
	});
	

	//===== Dynamic table toolbars =====//		
	
	$('#dyn .tOptions').click(function () {
		$('#dyn .tablePars').slideToggle(200);
	});	
	
	$('#dyn2 .tOptions').click(function () {
		$('#dyn2 .tablePars').slideToggle(200);
	});	
	
	
	$('.tOptions').click(function () {
		$(this).toggleClass("act");
	});
	

	//== Adding class to :last-child elements ==//
		
	$(".subNav li:last-child a, .formRow:last-child, .userList li:last-child, table tbody tr:last-child td, .breadLinks ul li ul li:last-child, .fulldd li ul li:last-child, .niceList li:last-child").addClass("noBorderB")

	
	//===== Add classes for sub sidebar detection =====//
	
	if ($('div').hasClass('secNav')) {
		$('#sidebar').addClass('with');
		//$('#content').addClass('withSide');
	}
	else {
		$('#sidebar').addClass('without');
		$('#content').css('margin-left','100px');//.addClass('withoutSide');
		$('#footer > .wrapper').addClass('fullOne');
		};


	//===== Collapsible elements management =====//
	
	$('.exp').collapsible({
		defaultOpen: 'current',
		cookieName: 'navAct',
		cssOpen: 'subOpened',
		cssClose: 'subClosed',
		speed: 200
	});

	$('.opened').collapsible({
		defaultOpen: 'opened,toggleOpened',
		cssOpen: 'inactive',
		cssClose: 'normal',
		speed: 200
	});
	
	$('.closed').collapsible({
		defaultOpen: '',
		cssOpen: 'inactive',
		cssClose: 'normal',
		speed: 200
	});
	
	
	//===== Accordion =====//		
	
	$('div.menu_body:eq(0)').show();
	$('.acc .whead:eq(0)').show().css({color:"#2B6893"});
	
	$(".acc .whead").click(function() {	
		$(this).css({color:"#2B6893"}).next("div.menu_body").slideToggle(200).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().css({color:"#404040"});
	});



	//===== Breadcrumbs =====//
	
	$('#breadcrumbs').xBreadcrumbs();
	
	

	//===== User nav dropdown =====//		
	
	$('a.leftUserDrop').click(function () {
		$('.leftUser').slideToggle(200);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("leftUserDrop"))
		$(".leftUser").slideUp(200);
	});
	
	
	//===== Tooltips =====//

//	$('.tipN').tipsy({gravity: 'n',fade: true, html:true});
//	$('.tipS').tipsy({gravity: 's',fade: true, html:true});
//	$('.tipW').tipsy({gravity: 'w',fade: true, html:true});
//	$('.tipE').tipsy({gravity: 'e',fade: true, html:true});
	
	//===== Calendar =====//
	
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		editable: true,
		events: [
			{
				title: 'All Day Event',
				start: new Date(y, m, 1)
			},
			{
				title: 'Long Event',
				start: new Date(y, m, d-5),
				end: new Date(y, m, d-2)
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d-3, 16, 0),
				allDay: false
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d+4, 16, 0),
				allDay: false
			},
			{
				title: 'Meeting',
				start: new Date(y, m, d, 10, 30),
				allDay: false
			},
			{
				title: 'Lunch',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false
			},
			{
				title: 'Birthday Party',
				start: new Date(y, m, d+1, 19, 0),
				end: new Date(y, m, d+1, 22, 30),
				allDay: false
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://google.com/'
			}
		]
	});



	//===== Spinner options =====//
	
	var itemList = [
		{url: "http://ejohn.org", title: "John Resig"},
		{url: "http://bassistance.de/", title: "J&ouml;rn Zaefferer"},
		{url: "http://snook.ca/jonathan/", title: "Jonathan Snook"},
		{url: "http://rdworth.org/", title: "Richard Worth"},
		{url: "http://www.paulbakaus.com/", title: "Paul Bakaus"},
		{url: "http://www.yehudakatz.com/", title: "Yehuda Katz"},
		{url: "http://www.azarask.in/", title: "Aza Raskin"},
		{url: "http://www.karlswedberg.com/", title: "Karl Swedberg"},
		{url: "http://scottjehl.com/", title: "Scott Jehl"},
		{url: "http://jdsharp.us/", title: "Jonathan Sharp"},
		{url: "http://www.kevinhoyt.org/", title: "Kevin Hoyt"},
		{url: "http://www.codylindley.com/", title: "Cody Lindley"},
		{url: "http://malsup.com/jquery/", title: "Mike Alsup"}
	];

	var opts = {
		's1': {decimals:2},
		's2': {stepping: 0.25},
		's3': {currency: '$'},
		's4': {},
		's5': {
			//
			// Two methods of adding external items to the spinner
			//
			// method 1: on initalisation call the add method directly and format html manually
			init: function(e, ui) {
				for (var i=0; i<itemList.length; i++) {
					ui.add('<a href="'+ itemList[i].url +'" target="_blank">'+ itemList[i].title +'</a>');
				}
			},

			// method 2: use the format and items options in combination
			format: '<a href="%(url)" target="_blank">%(title)</a>',
			items: itemList
		}
	};

	$("button").click(function(e){
		var ns = $(this).attr('id').match(/(s\d)\-(\w+)$/);
		if (ns != null)
			$('#'+ns[1]).spinner( (ns[2] == 'create') ? opts[ns[1]] : ns[2]);
	});
	


	//===== jQuery UI dialog =====//
	
    $('#dialog').dialog({
        autoOpen: false,
        width: 400,
        buttons: {
            "Gotcha": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
	
    // Dialog Link
    $('#dialog_open').click(function () {
        $('#dialog').dialog('open');
        return false;
    });
	
	// Dialog
    $('#formDialog').dialog({
        autoOpen: false,
        width: 400,
        buttons: {
            "Nice stuff": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
	
    // Dialog Link
    $('#formDialog_open').click(function () {
        $('#formDialog').dialog('open');
        return false;
    });
	
	// Dialog
    $('#customDialog').dialog({
        autoOpen: false,
        width: 650,
        buttons: {
            "Very cool!": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
	
    // Dialog Link
    $('#customDialog_open').click(function () {
        $('#customDialog').dialog('open');
        return false;
    });

	
	
	//===== Vertical sliders =====//
	
	$( "#eq > span" ).each(function() {
		// read initial values from markup and remove that
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			animate: true,
			orientation: "vertical"
		});
	});
	
	
	//===== Modal =====//
	
    $('#dialog-modal').dialog({
		autoOpen: false, 
		width: 400,
		modal: true,
		buttons: {
				"Yep!": function() {
					$( this ).dialog( "close" );
				}
			}
		});
		
    $('#modal_open').click(function () {
        $('#dialog-modal').dialog('open');
        return false;
    });
	
	
	
	// Progressbar
    $("#progress").progressbar({
        value: 80
    });
	
    // Modal Link
    $('#modal_link').click(function () {
        $('#dialog-message').dialog('open');
        return false;
    });
	
	// Datepicker
    $('.inlinedate').datepicker({
        inline: true,
		showOtherMonths:true
    });
	
	$( ".datepicker" ).datepicker({ 
		defaultDate: +7,
		showOtherMonths:true,
		autoSize: true,
		appendText: '(dd-mm-yyyy)',
		dateFormat: 'dd-mm-yy'
	});	
	
	$(function() {
			var dates = $( "#fromDate, #toDate" ).datepicker({
				defaultDate: "+1w",
				changeMonth: false,
				showOtherMonths:true,
				numberOfMonths: 3,
				onSelect: function( selectedDate ) {
					var option = this.id == "fromDate" ? "minDate" : "maxDate",
						instance = $( this ).data( "datepicker" ),
						date = $.datepicker.parseDate(
							instance.settings.dateFormat ||
							$.datepicker._defaults.dateFormat,
							selectedDate, instance.settings );
					dates.not( this ).datepicker( "option", option, date );
				}
			});
		});
	
	
	$( ".uSlider" ).slider(); /* Usual slider */
	
	
	$( ".uRange" ).slider({ /* Range slider */
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#rangeAmount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#rangeAmount" ).val( "$" + $( ".uRange" ).slider( "values", 0 ) +" - $" + $( ".uRange" ).slider( "values", 1 ));
	

	$( ".uMin" ).slider({ /* Slider with minimum */
		range: "min",
		value: 37,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( "#minRangeAmount" ).val( "$" + ui.value );
		}
	});
	$( "#minRangeAmount" ).val( "$" + $( ".uMin" ).slider( "value" ) );


	$( ".uMax" ).slider({ /* Slider with maximum */
		range: "max",
		min: 1,
		max: 100,
		value: 20,
		slide: function( event, ui ) {
			$( "#maxRangeAmount" ).val( ui.value );
		}
	});
	$( "#maxRangeAmount" ).val( $( ".uMax" ).slider( "value" ) );	




	//===== Add class on #content resize. Needed for responsive grid =====//
	
	$('#content').resize(function () {
	  var width = $(this).width();
		if (width < 769) {
			$(this).addClass('under');
		}
		else { $(this).removeClass('under') }
	}).resize(); // Run resize on window load
	
	
	//===== Button for showing up sidebar on iPad portrait mode. Appears on right top =====//
				
	$("ul.userNav li a.sidebar").click(function() { 
		$(".secNav").toggleClass('display');
	});
	$("div.lang_menu .rus").click(function() { 
		$('#tabb1').css({'display':'block'});
		$('#tabb2').css({'display':'none'});
		return false;
	});
	$("div.lang_menu .eng").click(function() { 
		$('#tabb2').css({'display':'block'});
		$('#tabb1').css({'display':'none'});
		return false;
	});
	$('.all_checked').click(function(){
		if($('.status_checked').val()=='0'){
			$('.checkbox').each(function() {
                this.checked = true;              
            });
			$('.status_checked').val('1');
		}else{
			$('.checkbox').each(function() {
                this.checked = false;                     
            });
			$('.status_checked').val('0');
		}
    });
	$('.sort_page').click(function(){
		var cook=$(this).children().html();
		if($.cookie('cc_sort')==$(this).children().html()){
			cook=$(this).children().html()+'1';
		}
		$.cookie('cc_sort', cook, { path: '/' });
		location.reload();
	});
});

	
