$(function(){
	//省市区三联
	!function () {
        var $target = $('#city');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    !function () {
        var $target = $('#get');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    
    //失去焦点
    $('#city').on('click',function(){
    	$(this).blur();
    });
    $('#get').on('click',function(){
    	$(this).blur();
    });
    //选择
    $('.slt').change(function(){
		$(this).prev('input').val($(this).children('option:selected').val());
	});
});
