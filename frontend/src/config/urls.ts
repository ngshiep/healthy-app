export const urls = {
  web: {
    authentication: {
      login: '/login',
      logout: '/logout'
    },
    myPage: 'my-page',
    myRecord: 'my-record',
    column: '/column'
  },
  api: {
    authentication: {
      logout: 'auth/logout',
      login: 'auth/login',
      user_info: `auth/info`,
      refresh_token: 'auth/refresh'
    },
    columns: 'blogs',
    records: 'records',
    diets: 'diets'
  }
}
