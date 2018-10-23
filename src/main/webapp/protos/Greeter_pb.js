/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.com.minhdtb.demo.protos.HelloReply', null, global);
goog.exportSymbol('proto.com.minhdtb.demo.protos.HelloRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.minhdtb.demo.protos.HelloRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.minhdtb.demo.protos.HelloRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.minhdtb.demo.protos.HelloRequest.displayName = 'proto.com.minhdtb.demo.protos.HelloRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.minhdtb.demo.protos.HelloRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.minhdtb.demo.protos.HelloRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.minhdtb.demo.protos.HelloRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.com.minhdtb.demo.protos.HelloRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    test1: msg.getTest1(),
    test2: msg.getTest2()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.minhdtb.demo.protos.HelloRequest}
 */
proto.com.minhdtb.demo.protos.HelloRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.minhdtb.demo.protos.HelloRequest;
  return proto.com.minhdtb.demo.protos.HelloRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.minhdtb.demo.protos.HelloRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.minhdtb.demo.protos.HelloRequest}
 */
proto.com.minhdtb.demo.protos.HelloRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTest1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTest2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.com.minhdtb.demo.protos.HelloRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.com.minhdtb.demo.protos.HelloRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.minhdtb.demo.protos.HelloRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.com.minhdtb.demo.protos.HelloRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTest1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getTest2();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.com.minhdtb.demo.protos.HelloRequest} The clone.
 */
proto.com.minhdtb.demo.protos.HelloRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.com.minhdtb.demo.protos.HelloRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string test1 = 1;
 * @return {string}
 */
proto.com.minhdtb.demo.protos.HelloRequest.prototype.getTest1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.com.minhdtb.demo.protos.HelloRequest.prototype.setTest1 = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string test2 = 2;
 * @return {string}
 */
proto.com.minhdtb.demo.protos.HelloRequest.prototype.getTest2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.com.minhdtb.demo.protos.HelloRequest.prototype.setTest2 = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.minhdtb.demo.protos.HelloReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.minhdtb.demo.protos.HelloReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.minhdtb.demo.protos.HelloReply.displayName = 'proto.com.minhdtb.demo.protos.HelloReply';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.minhdtb.demo.protos.HelloReply.prototype.toObject = function(opt_includeInstance) {
  return proto.com.minhdtb.demo.protos.HelloReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.minhdtb.demo.protos.HelloReply} msg The msg instance to transform.
 * @return {!Object}
 */
proto.com.minhdtb.demo.protos.HelloReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.minhdtb.demo.protos.HelloReply}
 */
proto.com.minhdtb.demo.protos.HelloReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.minhdtb.demo.protos.HelloReply;
  return proto.com.minhdtb.demo.protos.HelloReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.minhdtb.demo.protos.HelloReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.minhdtb.demo.protos.HelloReply}
 */
proto.com.minhdtb.demo.protos.HelloReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.com.minhdtb.demo.protos.HelloReply} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.com.minhdtb.demo.protos.HelloReply.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.minhdtb.demo.protos.HelloReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.com.minhdtb.demo.protos.HelloReply.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.com.minhdtb.demo.protos.HelloReply} The clone.
 */
proto.com.minhdtb.demo.protos.HelloReply.prototype.cloneMessage = function() {
  return /** @type {!proto.com.minhdtb.demo.protos.HelloReply} */ (jspb.Message.cloneMessage(this));
};


goog.object.extend(exports, proto.com.minhdtb.demo.protos);