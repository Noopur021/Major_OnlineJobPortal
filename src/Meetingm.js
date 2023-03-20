import React,{useEffect,Fragement} from "react";

const Meeting=({payload})=>{

    useEffect(async()=>{
        const {ZoomMtg}=await import("@zoomus/websdk");

        ZoomMtg.setZoomJSLib('https://source.zoom.us/lib','/av');

        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();
   
        ZoomMtg.generateSDKSignature({
            meetingNumber:payload.meetingNumber,
            role:payload.role,
            sdkKey:payload.sdkKey,
            sdkSecret:payload.sdkSecret,
            success:function(signature)
            {
                ZoomMtg.init({
                    leaveUrl:payload.leaveUrl,
                    success:function(data)
                    {
                        ZoomMtg.join({
                            meetingNumber:payload.meetingNumber,
                            signature:signature.result,
                            sdkKey:payload.sdkKey,
                            userName:payload.userName,
                            userEmail:payload.userEmail,
                            passWord:payload.passWord,
                            tk:'',
                            success:function(){
                                console.log("--JOINED");
                            },
                            error:function(error)
                            {
                                console.log(error);
                            }
                        })
                    },
                    error:function(error)
                    {
                        console.log(error);
                    }
                })
            },
            error:function(error)
            {
                console.log(error);
            }
        })

    },[])

   
    return (<h1>Meeting will be here</h1>);

}

export default Meeting;