

//Login Mutation
const LoginMutation='mutation($username: String,$password:String,$email:String){LoginAPI(username: $username, password: $password, email:$email){AuthorizationToken}}'


module.exports={
LoginMutation
}