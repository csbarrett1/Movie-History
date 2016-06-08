"use strict";
app.factory("movieQueryStore", function($q, $http){
    var movieSearchCall = function(){
        let queryStorage = [];
        let searchTerms = document.getElementById("omdbSearch").value;      
        return $q(function(resolve, reject){
            $http.get("http://www.omdbapi.com/?s="+searchTerms+"&y=&r=json")
                .success(function(queryData){
                    var preKeyData = queryData;
                    Object.keys(preKeyData).forEach(function(key){
                        queryStorage.push(preKeyData[key]);
                    });
                    resolve(queryStorage);
                    if (queryStorage[0] === "False") {
                        Materialize.toast(queryStorage[1], 3000, "rounded")
                    }
                })
            .error(function(error){
                reject(error);
            });

        });
    }

    var plotSearchCall = function(){
        let plotStorage
    }

    return {movieSearchCall:movieSearchCall};
}); 