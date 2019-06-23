define(function(){
    var util = {
        getFormatDate: function(date, type){
            console.log(date)
            console.log(type)
            if(type === 1){
                console.log('111')
                return '2019-06-22'
            }
            if(type === 2){
                console.log('222')
                return '2019年6月22日'
            }
        }
    };
    return util;
})