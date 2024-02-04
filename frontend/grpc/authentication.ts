import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthenticationClient as _Authentication_AuthenticationClient, AuthenticationDefinition as _Authentication_AuthenticationDefinition } from './Authentication/Authentication';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Authentication: {
    Authentication: SubtypeConstructor<typeof grpc.Client, _Authentication_AuthenticationClient> & { service: _Authentication_AuthenticationDefinition }
    AuthenticationRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
  }
}

