import path from 'path';
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from "@/grpc/authentication"

const PORT = process.env.GRPC_CIENT_PORT
const HOST = process.env.GRPC_CIENT_HOST

const PROTO_FILE = "./proto/authentication.proto"

const packageDef = protoLoader.loadSync(path. resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.Authentication.Authentication(
    `${HOST}:${PORT}`, grpc.credentials.createInsecure()
)