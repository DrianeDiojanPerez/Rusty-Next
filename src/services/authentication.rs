// // services/authentication.rs

// use tonic::{Request, Response, Status};
// use authentication::{AuthenticationRequest, LoginResponse};
// use authentication::authentication_server::{AuthenticationServer, Authentication};

// mod authentication {
//     include!("../grpc/authentication.rs");
// }

// #[derive(Default)]
// pub struct AuthenticationService;

// #[tonic::async_trait]
// impl Authentication for AuthenticationService {
//     async fn login(&self, request: Request<AuthenticationRequest>) -> Result<Response<LoginResponse>, Status> {
//         let authentication_request = request.into_inner();
//         // Your login logic here...
//         println!("Server listening on {}", authentication_request.email);
//         // For this example, let's just return a dummy JWT
//         let jwt = "dummy_jwt".to_string();

//         let response = LoginResponse { jwt };
//         Ok(Response::new(response))
//     }
// }
