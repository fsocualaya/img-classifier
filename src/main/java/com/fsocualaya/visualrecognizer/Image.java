package com.fsocualaya.visualrecognizer;

import com.ibm.cloud.sdk.core.security.IamAuthenticator;
import com.ibm.watson.visual_recognition.v3.VisualRecognition;
import com.ibm.watson.visual_recognition.v3.model.ClassifiedImages;
import com.ibm.watson.visual_recognition.v3.model.ClassifyOptions;

public class Image {
    private final String url;

    public Image( String _url) {
        url = _url;
    }

    public ClassifiedImages recognizeImage(String apikey){
        IamAuthenticator authenticator = new IamAuthenticator(apikey);
        VisualRecognition visualRecognition = new VisualRecognition("2018-03-19", authenticator);
        visualRecognition.setServiceUrl("https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/4b1e0b87-33ff-4159-b7ea-ec64335544f1");

        ClassifyOptions classifyOptions = new ClassifyOptions.Builder()
                .url(url)
                .build();
        return visualRecognition.classify(classifyOptions).execute().getResult();
    }

    public String getUrl(){
        return url;
    }
}
