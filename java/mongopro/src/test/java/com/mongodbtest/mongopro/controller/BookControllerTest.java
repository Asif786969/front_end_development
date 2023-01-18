package com.mongodbtest.mongopro.controller;
import org.springframework.http.MediaType;
//import org.apache.tomcat.util.http.parser.MediaType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.test.web.servlet.MockMvc;

import static org.apache.tomcat.util.http.parser.MediaType.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.swing.text.AbstractDocument.Content;
import javax.websocket.Decoder.Text;

import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultMatcher;

@SpringBootTest
@AutoConfigureMockMvc

class BookControllerTest {
    @Autowired
    private MockMvc mvc;


   @Test
   public void greeting() throws Exception{
       mvc.perform(get("/books/")).andExpect(status().isOk());
       
   }
    
    @Test
    public void ge3() throws Exception{
        MvcResult result = this.mvc.perform(get("/books/").accept(MediaType.ALL_VALUE))
                .andExpect(status().isOk())
                //.andExpect((ResultMatcher) content().string("application running"))
                .andReturn();

        String content = result.getResponse().getContentAsString();
        assertEquals("application running",content);
    }
    

    
}