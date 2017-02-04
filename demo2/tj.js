/**
 * Created by Administrator on 2017/2/2.
 */
function showCheck1(){
    var chooses = "";
    var contents = document.getElementsByName("contents");
    for(var i = 0;i<contents.length;i++){
        if(contents[i].checked){
            chooses += contents[i].value + "\n";
        }
    }
    if(confirm("您选择了：" + chooses + "\n确认提交吗？")){
        alert("提交成功！");
    }else{
        alert("请重新选择!");
    }
}


function showCheck(){
    var chooses = "";
    var contents = document.getElementsByName("contents");
    for(var i = 0;i<contents.length;i++){
        if(contents[i].checked){
            chooses += contents[i].value + "\n";
        }
    }
    if(confirm("您选择了：\n " + chooses + "\n确定提交吗？")){
        alert("提交成功！");
    }else{
        alert("请重新提交！");
    }
}


