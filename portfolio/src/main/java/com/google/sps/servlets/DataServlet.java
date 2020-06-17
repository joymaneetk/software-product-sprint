// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;
import java.util.ArrayList;
import java.util.List;
import com.google.gson.Gson;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

   // private List<String> messages;

    private List<String> comments = new ArrayList<>();


  @Override
  public void init(){
     /* messages = new ArrayList<>();
      messages.add("hardcode list 1");
      messages.add("hardcode list 2");
      messages.add("hardcode list 3");
      */
  }  
  

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //response.setContentType("text/html;");
   //response.getWriter().println("we got the data servlet connected to the index.html and script.js");
    //response.getWriter().println("<h1>Hello Joy K!</h1>");
    //response.getWriter().println(messages);

 response.setContentType("application/json;");

    // Convert the server stats to JSON  
    String json = convertToJsonUsingGson(comments);

 //Send the JSON as the response
    response.getWriter().println(json);
   }

   @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the input from the form.

     /* comments.add(eachcomment);
    response.setContentType("application/json;");
    String json = convertToJsonUsingGson(comments);
    response.getWriter().println(json);
    */
    
    String eachcomment = getParameter(request, "text-input", "");
    String name = getParameter(request, "name", "");
    long timestamp = System.currentTimeMillis();

    Entity commentEntity = new Entity("Comment");
    commentEntity.setProperty("name", name);
    commentEntity.setProperty("text-input", eachcomment); 
    commentEntity.setProperty("time", timestamp);
    
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(commentEntity);

    response.sendRedirect("/index.html");


  }
    private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }

private String convertToJsonUsingGson(List<String> messages) {
    Gson gson = new Gson();
    String json = gson.toJson(messages);
    return json;
  }
}
