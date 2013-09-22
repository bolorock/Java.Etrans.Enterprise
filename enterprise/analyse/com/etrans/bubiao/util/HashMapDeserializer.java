package com.etrans.bubiao.util;

import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import com.google.gson.JsonPrimitive;

public class HashMapDeserializer implements
		JsonDeserializer<HashMap<String, Object>> {

	public HashMap<String, Object> deserialize(JsonElement json, Type typeOfT,
			JsonDeserializationContext context) throws JsonParseException {
		if (json.isJsonNull()) {
			return null;
		} else if (json.isJsonPrimitive()) {
			return null;
		} else if (json.isJsonArray()) {
			return null;
		} else {
			return (HashMap<String, Object>) handleObject(json, context);
		}
	}

	private Object deserialize(JsonElement json,
			JsonDeserializationContext context) throws JsonParseException {
		if (json.isJsonNull()) {
			return null;
		} else if (json.isJsonPrimitive()) {
			return handlePrimitive(json);
		} else if (json.isJsonArray()) {
			return handleArray(json, context);
		} else {
			return (HashMap<String, Object>) handleObject(json, context);
		}
	}

	private Object handlePrimitive(JsonElement jsonEle) {
		JsonPrimitive json = jsonEle.getAsJsonPrimitive();
		if (json.isBoolean())
			return json.getAsBoolean();
		else if (json.isString()) {
			return json.getAsString();
		} else {
			BigDecimal bigDec = json.getAsBigDecimal();
			try {
				bigDec.toBigIntegerExact();
				try {
					return bigDec.intValueExact();
				} catch (ArithmeticException e) {
				}
				return bigDec.longValue();
			} catch (ArithmeticException e) {
			}
			return bigDec.doubleValue();
		}
	}

	private Object handleArray(JsonElement jsonEle,
			JsonDeserializationContext context) {
		JsonArray json = jsonEle.getAsJsonArray();
		List<Object> list = new ArrayList<Object>(json.size());
		for (int i = 0; i < json.size(); i++) {
			list.add(deserialize(json.get(i), context));
		}
		return list;
	}

	private Map<String, Object> handleObject(JsonElement json,
			JsonDeserializationContext context) {
		Map<String, Object> map = new HashMap<String, Object>();
		for (Map.Entry<String, JsonElement> entry : json.getAsJsonObject()
				.entrySet()) {
			JsonElement ele = (JsonElement) entry.getValue();
			if (ele.isJsonNull()) {
				map.put(entry.getKey(), null);
			} else if (ele.isJsonPrimitive()) {
				map.put(entry.getKey(), handlePrimitive(ele));
			} else if (ele.isJsonArray()) {
				map.put(entry.getKey(), handleArray(ele, context));
			} else {
				map.put(entry.getKey(), handleObject(ele, context));
			}
		}
		return map;
	}
}