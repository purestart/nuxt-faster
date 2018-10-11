import cookie from 'js-cookie';
export default function(context) {

  let {store, route, redirect, req} = context

  //let {store, route, redirect, req} = context;
  // console.log('auth', context)

  const getCookie = function(cookie, name) {
    var value = '; ' + cookie
    var parts = value.split('; ' + name + '=')
    if (parts.length == 2)
      return parts
        .pop()
        .split(';')
        .shift()
  }

  //console.log("中间件");
  //cookie.set('name', 'value');

  if (process.server && route.name && route.path !== '/login') {
    let userId = getCookie(req.headers.cookie, 'userId')

    // 未登录
    if (!userId){
      //store.state.user.id=888;
      //cookie.set('userId', "888");
      return redirect('/login');
    }else{


    }


  }



/*  if (!store.state.user.id) {
    return redirect('/login')
  }*/

}
