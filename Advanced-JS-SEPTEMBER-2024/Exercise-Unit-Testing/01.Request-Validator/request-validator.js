function requestValidator(request){

const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
const uriPattern = /^[a-zA-Z.0-9]+$/;
const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
const msgPattern = /[<>&'"\\]/g;

if(!request.hasOwnProperty('method') || !methods.includes(request.method)){
    throw new Error('Invalid request header: Invalid Method');
}else if(!request.hasOwnProperty('uri') || !uriPattern.test(request.uri) || request.uri === ''){
    throw new Error('Invalid request header: Invalid URI');
}else if(!request.hasOwnProperty('version') || !versions.includes(request.version)){
    throw new Error('Invalid request header: Invalid Version');
}else if(!request.hasOwnProperty('message')|| msgPattern.test(request.message)){
    throw new Error('Invalid request header: Invalid Message');
}

return request;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asdsd'
  }
  ))