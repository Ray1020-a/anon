function sendMessage() {
    if(document.getElementById("Textmessage").value==""){
		window.confirm('輸入框是空的ㄟ');
	}
    else{
        var request = new XMLHttpRequest();
        var message = document.getElementById("Textmessage").value;
        request.open("POST", "https://discord.com/api/webhooks/1089490137337057351/lZRB-Jih56EdBvv2FWGQfMkzIoBKI2qEv9q6VFtyfINTj_VD46PZ3N4UJbNkhYOuKZ-c");
    
        request.setRequestHeader('Content-type', 'application/json');
    
        var params = {
          username: "匿名者",
          avatar_url: "https://img.itw01.com/images/2018/02/14/17/4528_zRf3fl_IBJGE6Q.jpg",
          content: message
        }
    
        request.send(JSON.stringify(params));
        window.confirm('發送成功');
	}
  }
