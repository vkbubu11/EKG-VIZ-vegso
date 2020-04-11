function parsejson(){
    var newData=[];
    readTextFile("/measurement.json", function(text){
        data = JSON.parse(text);
        
        var newData=[];
        for(var i  in data){
            if(i==0){
                var responsedata={};
                responsedata="["+"["+data[i].timestamp+','+data[i].ch0+"]";
                newData.push(responsedata);
            }
            else if(i==1026171){
                var responsedata={};
                responsedata="["+data[i].timestamp+','+data[i].ch0+"]"+"]";
                newData.push(responsedata);
            }
            else {
                var responsedata={};
                responsedata="["+data[i].timestamp+','+data[i].ch0+"]";
                newData.push(responsedata);
            }
        }
        for(var j=0 in data){
            data[j]=newData[j];
        }
        var d=0;
        if(d==0){
            saveData(data,"adat.json");
            d=1;
        } 
  });
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function saveData(data, fileName) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    var json = JSON.stringify(data),
        blob = new Blob([data], {type: "text/plain;charset=utf-8"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
}

