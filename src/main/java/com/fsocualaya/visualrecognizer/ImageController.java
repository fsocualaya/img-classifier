package com.fsocualaya.visualrecognizer;

import com.ibm.watson.visual_recognition.v3.model.ClassifiedImages;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class ImageController {

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/recognize")
    public ClassifiedImages recognize(@RequestParam(value = "url") String url) {

        String apikey = "AeVHHpCNg1Cd9Hw82tuU5b-GHgEUb9gsBHKK-gHgiXXY";
        return new Image(url).recognizeImage(apikey);
    }

    /*
    @RequestMapping(path = "/recognize/{url}/**", method = GET)
    public ClassifiedImages recognize(@PathVariable(value = "url") String url) {

        String apikey = "AeVHHpCNg1Cd9Hw82tuU5b-GHgEUb9gsBHKK-gHgiXXY";
        System.out.println(url);
        return new Image(url).recognizeImage(apikey);
    }*/
}
