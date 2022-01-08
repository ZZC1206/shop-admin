export interface ILoginInfo {
  logo_square: string
  logo_rectangle: string
  login_logo: string
  slide: string[]
}

export interface IUserInfo {
  id: number
  account: string
  hand_pic: string
}

export interface IMenu {
  path: string
  title: string
  icon: string
  header: string
  is_header: string
  children:IMenu
}

export interface ILoginResponse {
  token: string
  expires_time: number
  menus: IMenu[]
  unique_auth: IUserInfo
  logo: string
  logo_square: string
  version: string
  newOrderAuioLink: string
}
