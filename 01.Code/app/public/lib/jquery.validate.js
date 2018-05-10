;(function($){
			
	//设置全局变量,所有的input验证成功才提交form表单
	var formresut=true;
		
	$.fn.validate=function(){
		
		//在每次点击"注册"按钮的时候,因为又是一次的验证,所有全局状态手动设置为 true
		formresut=true;
		
		//开发插件
		
		//第一步:定义一些默认的提醒信息
		
		var defaults={
			require_error:"不能为空",
			password_error:"密码6-20位数字字母组合",
			email_error:"邮箱格式错误"
		}

		
		//第二步:定义我们的正则表达式
		
		var regular={	
			password_regular:/^[A-Za-z0-9]{6,20}$/,
			email_regular:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
		}
		
		//合并属性
		var options=$.extend({}, defaults, regular);
		
		//开始验证->form表单里面所有的input
		
//		console.log(this);
		
		//获取所有的form表单下的input标签

		var $form=this;
		
		var $inputs=$form.find("input");
		
		
		//给所有的input注册获取焦点事件,一旦获取焦点,删除提醒信息
		
		$inputs.on("focus",function(){
			
			var $input=$(this);
			
			//找到提醒信息
			
			var leninput=$input.next().length;
			
			//如果等于1,那说明有提醒信息
			if(leninput==1)
			{
				//移除掉提醒信息
				$input.next().remove();
			}
		})
		
		
		console.log($inputs);
		
		//循环每个input
		$inputs.each(function(){
			
			var $input=$(this);
//			console.log(this);

			var inputresut=validateinput($input,options);
			
			//一旦有一个input的inputresut(验证结果)为false(false表示不通过),那是不是告诉我们form不提交
			if(inputresut==false)
			{
			  formresut=false;
			}
			
		})
	   
	   //返回验证结果
	   return formresut;
	};
	/*
	 * 验证input
	 * 
	 * 返回:input验证结果(true(验证成功),false(验证失败))
	 */
	//真正验证input
	function validateinput($input,options)
	{
		
		//声明一个变量来保存验证结果
		var validateresult=true;
		
		//获取input里面的值
		var _inputvalue=$input.val();
		
		//获取验证类型 验证是否为空, 验证邮箱,验证密码  _validatetype: require password email
		var _validatetype=$input.attr("validatetype");
	    
	    //如果没有验证类型那么直接返回
	    if(_validatetype==undefined)
	    {
	    	return false;
	    }
	    
	    //获取input元素的(span)兄弟节点,
	    
	    //next()方法用来元素后面的兄弟节点(只获取一个兄弟)
	    //nextAll()方法用来元素后面的所有兄弟节点
	    //len表示input元素后面的所有兄弟节点
	    var len=$input.nextAll().length;
	    
		//开始验证
		
		//验证不能为空
		if(_validatetype=="require")
		{
			if(_inputvalue==""||_inputvalue==" ")
			{
				//为空
				validateresult=false;
				
				//如果len等于0.说明input没有相应的错误信息提示
				if(len==0)
				{
				 $input.after("<span style='color:red'>"+options.require_error+"</span>");
				}
			}
		}
		
		//验证密码
		if(_validatetype=="password")
		{
			var resut=options.password_regular.test(_inputvalue);
			//如果密码验证失败
			if(resut==false)
			{
				//给验证结果赋值
				validateresult=false;
				if(len==0){
				  $input.after("<span style='color:red'>"+options.password_error+"</span>");
				}
			}
		}
		
		if(_validatetype=="email")
		{
			var resut=options.email_regular.test(_inputvalue);
			//如果邮箱验证失败
			if(resut==false)
			{
				//给验证结果赋值
				validateresult=false;
				if(len==0)
			 	{
				 $input.after("<span style='color:red'>"+options.email_error+"</span>");
				}
			}
		}
		
		if(validateresult==true){
			if(len==0){
		    	$input.after("<span style='color:green'>验证成功</span>");
			}
		}
		return validateresult;
	}
	
})(jQuery)
