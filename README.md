# Rusty-Next
Web application that uses Rust for the backend and Next.js for the frontend. The backend is built using gRPC. and the frontend is built using Next.js.

Dependencies
In order to build tonic >= 0.8.0, you need the protoc Protocol Buffers compiler, along with Protocol Buffers resource files.

Ubuntu
sudo apt update && sudo apt upgrade -y
sudo apt install -y protobuf-compiler libprotobuf-dev

symbolic link
ln -s ~/production/water_system/proto/ ~/production/water_system/frontend/