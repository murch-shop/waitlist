import { get, post } from "../config/api";

export const Users = {
    getAllUsers: () => get("/api/users").then(resp => resp.data),
    getWaitlistStatus: ({email}) => post(`/api/users/status`, {email: email}).then(resp => resp.data),
    postWaitlistUser: ({ firstName, lastName, email, url, position, referralLink }) => post("/api/users", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        url: url,
        position: position,
        referral_link: referralLink
    }).then(resp => resp.data),
}