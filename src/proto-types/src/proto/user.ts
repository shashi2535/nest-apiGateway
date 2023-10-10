/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "user";

export interface signupRequest {
  name: string;
  email: string;
  password: string;
}

export interface data {
  userUuid?: string;
  name?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface signupResponse {
  statusCode: number;
  message: string;
  result?: data | undefined;
}

function createBasesignupRequest(): signupRequest {
  return { name: "", email: "", password: "" };
}

export const signupRequest = {
  encode(message: signupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): signupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesignupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): signupRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: signupRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<signupRequest>, I>>(base?: I): signupRequest {
    return signupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<signupRequest>, I>>(object: I): signupRequest {
    const message = createBasesignupRequest();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBasedata(): data {
  return { userUuid: "", name: "", email: "", password: "", createdAt: "", updatedAt: "" };
}

export const data = {
  encode(message: data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userUuid !== "") {
      writer.uint32(10).string(message.userUuid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    if (message.createdAt !== "") {
      writer.uint32(42).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(50).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): data {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasedata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userUuid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): data {
    return {
      userUuid: isSet(object.userUuid) ? globalThis.String(object.userUuid) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
    };
  },

  toJSON(message: data): unknown {
    const obj: any = {};
    if (message.userUuid !== "") {
      obj.userUuid = message.userUuid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<data>, I>>(base?: I): data {
    return data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<data>, I>>(object: I): data {
    const message = createBasedata();
    message.userUuid = object.userUuid ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? "";
    return message;
  },
};

function createBasesignupResponse(): signupResponse {
  return { statusCode: 0, message: "", result: undefined };
}

export const signupResponse = {
  encode(message: signupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.result !== undefined) {
      data.encode(message.result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): signupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesignupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statusCode = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.result = data.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): signupResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      result: isSet(object.result) ? data.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: signupResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.result !== undefined) {
      obj.result = data.toJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<signupResponse>, I>>(base?: I): signupResponse {
    return signupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<signupResponse>, I>>(object: I): signupResponse {
    const message = createBasesignupResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.result = (object.result !== undefined && object.result !== null)
      ? data.fromPartial(object.result)
      : undefined;
    return message;
  },
};

export interface IUserService {
  Signup(request: signupRequest): Promise<signupResponse>;
}

export const UserServiceServiceName = "user.UserService";
export class UserServiceClientImpl implements IUserService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UserServiceServiceName;
    this.rpc = rpc;
    this.Signup = this.Signup.bind(this);
  }
  Signup(request: signupRequest): Promise<signupResponse> {
    const data = signupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Signup", data);
    return promise.then((data) => signupResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
