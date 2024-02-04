use std::fs;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let proto_dir = "./proto";
    let out_dir = "./src/grpc";
    let descriptor_set_path = "./bin/authentication_description.bin";

    // Create the output directory if it doesn't exist
    fs::create_dir_all(out_dir)?;

    // Read all .proto files from the specified directory
    let proto_files: Vec<_> = fs::read_dir(proto_dir)?
        .filter_map(|entry| {
            entry.ok().and_then(|e| {
                let path = e.path();
                if path.is_file() && path.extension().map_or(false, |ext| ext == "proto") {
                    Some(path)
                } else {
                    None
                }
            })
        })
        .collect();

    // Configure and compile using tonic_build::configure and tonic_build::prost
    tonic_build::configure()
        .build_server(true)
        .build_client(false)
        .file_descriptor_set_path(descriptor_set_path)
        .out_dir(out_dir)
        .compile(&proto_files, &[proto_dir])?;

    Ok(())
}
