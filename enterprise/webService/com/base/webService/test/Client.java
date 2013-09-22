package com.base.webService.test;
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.base.webService.Interface.GpsInfo;


public final class Client {

    public static void main(String args[]) throws Exception {
        ClassPathXmlApplicationContext context 
            = new ClassPathXmlApplicationContext(new String[] {"com/base/webService/test/client-beans.xml"});

        GpsInfo client = (GpsInfo)context.getBean("client");
		// String  result =client.ETGetGpsInfoList("<?xml version=\"1.0\" encoding=\"UTF-8\"?><ETGetGpsInfoList><head><name>admin</name><password>654321</password></head><body></body></ETGetGpsInfoList>");
       String result=client.ETGetGpsInfo("<?xml version=\"1.0\" encoding=\"UTF-8\"?><ETGetGpsInfo><head><name>admin</name><password>654321</password></head><body><vehicle>测A12345</vehicle></body></ETGetGpsInfo>");
        System.out.println(result);
		 System.exit(0);
		 
    }
}
