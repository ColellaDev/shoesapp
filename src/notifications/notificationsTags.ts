import { OneSignal } from "react-native-onesignal"

export function tagUserInfoCreate() {
    OneSignal.User.addTags({
        user_name: "Marcos",
        user_email: "marcos.colella@gmail.com"
    })
}