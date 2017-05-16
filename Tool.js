(function( global, factory ) {
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = factory( global );
    } else {
        factory( global );
    }
})( 
    typeof window !== "undefined" ? window : new Object(), 
    function( window, noGlobal ) {
        function newArray (n) {
            var array = [];
            for (var i = 0; i < n; i++) {
                array.push(i+1);
            }
            return array;
        }

        function del (arr, delPosition) {
            var newArr = []

            var lastNums = arr.length % delPosition;
            for (var j = 0; j < arr.length; j++) {
                if ((j+1)%delPosition !== 0) {
                    newArr.push(arr[j])
                }
            }

            var newLength = newArr.length;
            for (var x = 0; x < lastNums; x++) {
                newArr.unshift(newArr[newLength-1])
                newArr.pop()
            }

            return newArr;
        }

        function getLuckyPosition (totalNum, delPosition) {
            var result = newArray(totalNum);
            while (result.length >= delPosition) {
                result = del(result, delPosition)
            }
            return result;
        }

        window.Tool = {};
        window.Tool.getLuckyPosition = getLuckyPosition;
        
        return window.Tool;
    } 
);

