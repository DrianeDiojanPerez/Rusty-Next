// Original file: proto/authentication.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthenticationRequest as _Authentication_AuthenticationRequest, AuthenticationRequest__Output as _Authentication_AuthenticationRequest__Output } from '../Authentication/AuthenticationRequest';
import type { LoginResponse as _Authentication_LoginResponse, LoginResponse__Output as _Authentication_LoginResponse__Output } from '../Authentication/LoginResponse';

export interface AuthenticationClient extends grpc.Client {
  Login(argument: _Authentication_AuthenticationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Authentication_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _Authentication_AuthenticationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Authentication_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _Authentication_AuthenticationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Authentication_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _Authentication_AuthenticationRequest, callback: grpc.requestCallback<_Authentication_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _Authentication_AuthenticationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Authentication_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _Authentication_AuthenticationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Authentication_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _Authentication_AuthenticationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Authentication_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _Authentication_AuthenticationRequest, callback: grpc.requestCallback<_Authentication_LoginResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthenticationHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_Authentication_AuthenticationRequest__Output, _Authentication_LoginResponse>;
  
}

export interface AuthenticationDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_Authentication_AuthenticationRequest, _Authentication_LoginResponse, _Authentication_AuthenticationRequest__Output, _Authentication_LoginResponse__Output>
}
